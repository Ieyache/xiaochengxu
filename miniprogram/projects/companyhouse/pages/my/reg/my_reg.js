const pageHelper = require('../../../../../helper/page_helper.js');
const helper = require('../../../../../helper/helper.js');
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
		isEdit: false,

		mobileCheck: setting.MOBILE_CHECK
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		ProjectBiz.initPage(this);

		if (options && options.retUrl)
			this.data.retUrl = decodeURIComponent(options.retUrl);

		await this._loadDetail();
	},

	_loadDetail: async function (e) { 
		let opts = {
			title: 'bar'
		}
		let user = await cloudHelper.callCloudData('passport/my_detail', {}, opts);
		if (user) {
			return wx.redirectTo({ url: '../index/my_index' });
		}

		this.setData({
			isLoad: true,

			fields: projectSetting.USER_FIELDS,

			formName: '',
			formMobile: '',
			formForms: []
		});
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
 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/projects/companyhouse/pages/my/reg/my_reg.js b/miniprogram/projects/companyhouse/pages/my/reg/my_reg.js
index e1175dcebaad1895c657b1b2b960bccb5125a558..e8f072f2a7f07e8a9eb2ddc4623382c08dc6105f 100644
--- a/miniprogram/projects/companyhouse/pages/my/reg/my_reg.js
+++ b/miniprogram/projects/companyhouse/pages/my/reg/my_reg.js
@@ -69,53 +69,50 @@ Page({
 	 */
 	onHide: function () {
 
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
 	},
 
 	/**
 	 * 页面上拉触底事件的处理函数
 	 */
 	onReachBottom: function () {
 
 	},
 
-	bindGetPhoneNumber: async function (e) {
-		PassportBiz.getPhone(e, this);
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
 
 			data.status = projectSetting.USER_REG_CHECK ? 0 : 1;
 
 			let opts = {
 				title: '提交中'
 			}
 			await cloudHelper.callCloudSumbit('passport/register', data, opts).then(result => {
 				if (result && helper.isDefined(result.data.token) && result.data.token) {
 
 					// 用户需要审核，不能登录
 					if (!projectSetting.USER_REG_CHECK) PassportBiz.setToken(result.data.token);
 
 
EOF
)
