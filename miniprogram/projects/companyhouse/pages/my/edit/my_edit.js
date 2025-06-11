const pageHelper = require('../../../../../helper/page_helper.js');
const cloudHelper = require('../../../../../helper/cloud_helper.js');
const validate = require('../../../../../helper/validate.js');
const ProjectBiz = require('../../../biz/project_biz.js');
const projectSetting = require('../../../public/project_setting.js');
const setting = require('../../../../../setting/setting.js');
const PassportBiz = require('../../../../../comm/biz/passport_biz.js');

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false,
		isEdit: true,

		userRegCheck: projectSetting.USER_REG_CHECK,
		mobileCheck: setting.MOBILE_CHECK
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		ProjectBiz.initPage(this);
		await this._loadDetail();
	},

	_loadDetail: async function (e) { 

		let opts = {
			title: 'bar'
		}
		let user = await cloudHelper.callCloudData('passport/my_detail', {}, opts);
		if (!user)
			return wx.redirectTo({ url: '../reg/my_reg' });

		this.setData({
			isLoad: true,
			isEdit: true,

			user,

			fields: projectSetting.USER_FIELDS,

			formName: user.USER_NAME,
			formMobile: user.USER_MOBILE,
			formForms: user.USER_FORMS
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/projects/companyhouse/pages/my/edit/my_edit.js b/miniprogram/projects/companyhouse/pages/my/edit/my_edit.js
index 9558cbdf41a3fca13071d9722ad5f93507812758..b22c076a97e89cfb46e93e8767a266763d256299 100644
--- a/miniprogram/projects/companyhouse/pages/my/edit/my_edit.js
+++ b/miniprogram/projects/companyhouse/pages/my/edit/my_edit.js
@@ -70,53 +70,50 @@ Page({
 
 	},
 
 	/**
 	 * 生命周期函数--监听页面卸载
 	 */
 	onUnload: function () {
 
 	},
 
 	/**
 	 * 页面相关事件处理函数--监听用户下拉动作
 	 */
 	onPullDownRefresh: async function () {
 		await this._loadDetail();
 		wx.stopPullDownRefresh();
 	},
 
 	/**
 	 * 页面上拉触底事件的处理函数
 	 */
 	onReachBottom: function () {
 
 	},
 
-	bindGetPhoneNumber: async function (e) {
-		await PassportBiz.getPhone(e, this);
-	},
 
 
 	bindSubmitTap: async function (e) {
 		try {
 			let data = this.data; 
 			// 数据校验 
 			data = validate.check(data, PassportBiz.CHECK_FORM, this);
 			if (!data) return;
 
 			let forms = this.selectComponent("#cmpt-form").getForms(true);
 			if (!forms) return;
 			data.forms = forms;
 
 			let opts = {
 				title: '提交中'
 			}
 			await cloudHelper.callCloudSumbit('passport/edit_base', data, opts).then(res => {
 				let callback = () => {
 					wx.reLaunch({ url: '../index/my_index' });
 				}
 				pageHelper.showSuccToast('修改成功', 1500, callback);
 			});
 		} catch (err) {
 			console.error(err);
 		}
 
EOF
)
