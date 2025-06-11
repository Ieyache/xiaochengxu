 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/cloudfunctions/mcloud/project/companyhouse/public/route.js b/cloudfunctions/mcloud/project/companyhouse/public/route.js
index 02642e45a864fc19fb0987f6a83b5cdc0794adc2..962876b1e4545422322654d3dad25d75eb9cb7f9 100644
--- a/cloudfunctions/mcloud/project/companyhouse/public/route.js
+++ b/cloudfunctions/mcloud/project/companyhouse/public/route.js
@@ -1,39 +1,38 @@
 /**
  * Notes: 路由配置文件
   * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
  * User: CC
  * Date: 2020-10-14 07:00:00
  */
 
 module.exports = {
 	'test/test': 'test/test_controller@test', 
 
 	'home/setup_get': 'home_controller@getSetup',
 
 	'passport/login': 'passport_controller@login',
-	'passport/phone': 'passport_controller@getPhone',
 	'passport/my_detail': 'passport_controller@getMyDetail',
 	'passport/register': 'passport_controller@register',
 	'passport/edit_base': 'passport_controller@editBase',
 
 	// 收藏
 	'fav/update': 'fav_controller@updateFav',
 	'fav/del': 'fav_controller@delFav',
 	'fav/is_fav': 'fav_controller@isFav',
 	'fav/my_list': 'fav_controller@getMyFavList', 
 	
 	'admin/home': 'admin/admin_home_controller@adminHome',
 	'admin/clear_vouch': 'admin/admin_home_controller@clearVouchData',
 
 	'admin/login': 'admin/admin_mgr_controller@adminLogin',
 	'admin/mgr_list': 'admin/admin_mgr_controller@getMgrList',
 	'admin/mgr_insert': 'admin/admin_mgr_controller@insertMgr#demo',
 	'admin/mgr_del': 'admin/admin_mgr_controller@delMgr#demo',
 	'admin/mgr_detail': 'admin/admin_mgr_controller@getMgrDetail', 
 	'admin/mgr_edit': 'admin/admin_mgr_controller@editMgr#demo',
 	'admin/mgr_status': 'admin/admin_mgr_controller@statusMgr#demo',
 	'admin/mgr_pwd': 'admin/admin_mgr_controller@pwdMgr#demo',
 	'admin/log_list': 'admin/admin_mgr_controller@getLogList',
 	'admin/log_clear': 'admin/admin_mgr_controller@clearLog#demo',
 
 	'admin/setup_set': 'admin/admin_setup_controller@setSetup#demo',
 
EOF
)
