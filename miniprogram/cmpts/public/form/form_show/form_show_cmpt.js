 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/cmpts/public/form/form_show/form_show_cmpt.js b/miniprogram/cmpts/public/form/form_show/form_show_cmpt.js
index 7ecac83bbe2b29be480b9f0c1bbf90a39e614d67..c57219b37417d1a1198d7f0fe20e844714b0c23a 100644
--- a/miniprogram/cmpts/public/form/form_show/form_show_cmpt.js
+++ b/miniprogram/cmpts/public/form/form_show/form_show_cmpt.js
@@ -351,79 +351,50 @@ Component({
 
 		bindSelectCmpt: function (e) {
 			let idx = pageHelper.dataset(e, 'idx');
 			let val = e.detail.trim();
 			this._setForm(idx, val);
 		},
 
 		bindCheckBoxCmpt: function (e) {
 			let idx = pageHelper.dataset(e, 'idx');
 			let val = e.detail;
 			this._setForm(idx, val);
 		},
 
 		bindRadioCmpt: function (e) {
 			let idx = pageHelper.dataset(e, 'idx');
 			let val = e.detail;
 			this._setForm(idx, val);
 		},
 
 		switchModel: function (e) {
 			let idx = pageHelper.dataset(e, 'idx');
 			let val = e.detail.value;
 			this._setForm(idx, val);
 		},
 
-		bindGetPhoneNumber: async function (e) {
-			if (e.detail.errMsg == "getPhoneNumber:ok") {
-
-				let cloudID = e.detail.cloudID;
-				let params = {
-					cloudID
-				};
-				let opt = {
-					title: '手机验证中'
-				};
-				await cloudHelper.callCloudSumbit('passport/phone', params, opt).then(res => {
-					let phone = res.data;
-					if (!phone || phone.length < 11)
-						wx.showToast({
-							title: '手机号码获取失败，请重新绑定手机号码',
-							icon: 'none',
-							duration: 2000
-						});
-					else {
-						let idx = pageHelper.dataset(e, 'idx');
-						this._setForm(idx, phone);
-					}
-				});
-			} else
-				wx.showToast({
-					title: '手机号码获取失败，请重新绑定手机号码',
-					icon: 'none'
-				});
-		},
 
 		checkForms: function () {
 			// 写缓存
 			if (this.data.isCacheMatch) {
 				cacheHelper.set(this.data.cacheName, this.data.forms, CACHE_FORM_SHOW_TIME);
 			}
 
 			let ret = formSetHelper.checkForm(this.data.fields, this.data.forms, this);
 
 			this.setData({
 				fields: this.data.fields
 			});
 
 			if (!ret) return;
 
 			if (this.data.isConfirm) { //是否显示确认信息
 				this.setData({
 					showCheckModal: true
 				});
 			} else {
 				cacheHelper.remove(this.data.cacheName);
 				this.triggerEvent('submit', this.data.forms);
 			}
 
 		},
 
EOF
)
