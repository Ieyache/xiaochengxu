 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/projects/companyhouse/pages/meet/index/meet_index.js b/miniprogram/projects/companyhouse/pages/meet/index/meet_index.js
index 6ca987515074e5dc6ff45091c9cac6598f7ec630..9f4214660bd5a30054d7535fef4c43eeb4d6f755 100644
--- a/miniprogram/projects/companyhouse/pages/meet/index/meet_index.js
+++ b/miniprogram/projects/companyhouse/pages/meet/index/meet_index.js
@@ -1,61 +1,46 @@
 const pageHelper = require('../../../../../helper/page_helper.js');
 const ProjectBiz = require('../../../biz/project_biz.js');
 const MeetBiz = require('../../../biz/meet_biz.js');
 
 Page({
 	/**
 	 * 页面的初始数据
 	 */
 	data: {
 
 	},
 
 	/**
 	 * 生命周期函数--监听页面加载
 	 */
-	onLoad: async function (options) {
-		ProjectBiz.initPage(this);
-
-		if (options && options.id) {
-			this.setData({
-				_params: {
-					typeId: options.id,
-				}
-			});
-			MeetBiz.setTypeTitle(this, options.id);
-		} else {
-			// 默认1
-			this.setData({
-				_params: {
-					typeId: 1,
-				}
-			});
-			MeetBiz.setTypeTitle(this, 1);
-		}
+        onLoad: async function (options) {
+                wx.redirectTo({
+                        url: "/pages/webview/webview?url=" + encodeURIComponent("https://tally.so/r/3xB8pG")
+                });
+        },
  
-	},
 
 	/**
 	 * 生命周期函数--监听页面初次渲染完成
 	 */
 	onReady: function () { },
 
 	/**
 	 * 生命周期函数--监听页面显示
 	 */
 	onShow: async function () {
 
 	},
 
 	/**
 	 * 生命周期函数--监听页面隐藏
 	 */
 	onHide: function () {
 
 	},
 
 	/**
 	 * 生命周期函数--监听页面卸载
 	 */
 	onUnload: function () {
 
 
EOF
)
