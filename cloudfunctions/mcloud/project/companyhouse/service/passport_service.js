 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/cloudfunctions/mcloud/project/companyhouse/service/passport_service.js b/cloudfunctions/mcloud/project/companyhouse/service/passport_service.js
index 43cd1d9580f63e3d3e84fe62d411f0fda6361477..b48414fbc066897bda68ebd8038ada611d547b88 100644
--- a/cloudfunctions/mcloud/project/companyhouse/service/passport_service.js
+++ b/cloudfunctions/mcloud/project/companyhouse/service/passport_service.js
@@ -24,65 +24,50 @@ class PassportService extends BaseProjectService {
 		}
 		let cnt = await UserModel.count(where);
 		if (cnt > 0)
 			return await this.login(userId);
 
 		where = {
 			USER_MOBILE: mobile
 		}
 		cnt = await UserModel.count(where);
 		if (cnt > 0) this.AppError('该手机已注册');
 
 		// 入库
 		let data = {
 			USER_MINI_OPENID: userId,
 			USER_MOBILE: mobile,
 			USER_NAME: name,
 			USER_OBJ: dataUtil.dbForms2Obj(forms),
 			USER_FORMS: forms,
 			USER_STATUS: Number(status)
 		}
 		await UserModel.insert(data);
 
 		return await this.login(userId);
 	}
 
-	/** 获取手机号码 */
-	async getPhone(cloudID) {
-		let cloud = cloudBase.getCloud();
-		let res = await cloud.getOpenData({
-			list: [cloudID], // 假设 event.openData.list 是一个 CloudID 字符串列表
-		});
-		if (res && res.list && res.list[0] && res.list[0].data) {
-
-			let phone = res.list[0].data.phoneNumber;
-
-			return phone;
-		} else
-			return '';
-	}
-
 	/** 取得我的用户信息 */
 	async getMyDetail(userId) {
 		let where = {
 			USER_MINI_OPENID: userId
 		}
 		let fields = 'USER_MOBILE,USER_NAME,USER_FORMS,USER_OBJ,USER_STATUS,USER_CHECK_REASON'
 		return await UserModel.getOne(where, fields);
 	}
 
 	/** 修改用户资料 */
 	async editBase(userId, {
 		mobile,
 		name,
 		forms
 	}) {
 		let whereMobile = {
 			USER_MOBILE: mobile,
 			USER_MINI_OPENID: ['<>', userId]
 		}
 		let cnt = await UserModel.count(whereMobile);
 		if (cnt > 0) this.AppError('该手机已注册');
 
 		let where = {
 			USER_MINI_OPENID: userId
 		}
 
EOF
)
