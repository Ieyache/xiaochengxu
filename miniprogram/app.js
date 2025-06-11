 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/app.json b/miniprogram/app.json
index fbbd13f21ee0dbb5e09085409d3f31bde915d665..94ab24912136b7c932f2759927e1ad31e452f6a1 100644
--- a/miniprogram/app.json
+++ b/miniprogram/app.json
@@ -37,51 +37,52 @@
 		"projects/companyhouse/pages/admin/meet/self/admin_meet_self",
 		"projects/companyhouse/pages/admin/meet/temp/admin_temp_select",
 		"projects/companyhouse/pages/admin/meet/time/admin_meet_time",
 		"projects/companyhouse/pages/admin/mgr/log/admin_log_list",
 		"projects/companyhouse/pages/admin/news/list/admin_news_list",
 		"projects/companyhouse/pages/admin/news/add/admin_news_add",
 		"projects/companyhouse/pages/admin/news/edit/admin_news_edit",
 		"projects/companyhouse/pages/admin/setup/about/admin_setup_about",
 		"projects/companyhouse/pages/admin/setup/about_list/admin_setup_about_list",
 		"projects/companyhouse/pages/admin/setup/qr/admin_setup_qr",
 		"projects/companyhouse/pages/admin/user/list/admin_user_list",
 		"projects/companyhouse/pages/admin/user/detail/admin_user_detail",
 		"projects/companyhouse/pages/admin/user/export/admin_user_export",
 		"projects/companyhouse/pages/admin/mgr/edit/admin_mgr_edit",
 		"projects/companyhouse/pages/admin/mgr/list/admin_mgr_list",
 		"projects/companyhouse/pages/admin/mgr/add/admin_mgr_add",
 		"projects/companyhouse/pages/admin/mgr/pwd/admin_mgr_pwd",
 		"projects/companyhouse/pages/admin/album/list/admin_album_list",
 		"projects/companyhouse/pages/admin/album/add/admin_album_add",
 		"projects/companyhouse/pages/admin/album/edit/admin_album_edit",
 		"projects/companyhouse/pages/admin/product/list/admin_product_list",
 		"projects/companyhouse/pages/admin/product/add/admin_product_add",
 		"projects/companyhouse/pages/admin/product/edit/admin_product_edit",
 		"cmpts/public/form/form_set/field/form_set_field",
 		"cmpts/public/form/form_show/content/form_show_content",
-		"pages/test1/test1"
+                "pages/test1/test1",
+                "pages/webview/webview"
 	],
 	"window": {
 		"backgroundColor": "#f1f1f1",
 		"backgroundTextStyle": "dark",
 		"navigationBarBackgroundColor": "#FFFFFF",
 		"navigationBarTitleText": "装修公司小程序",
 		"navigationBarTextStyle": "black"
 	},
 	"tabBar": {
 		"custom": false,
 		"backgroundColor": "#FFFFFF",
 		"color": "#999999",
 		"selectedColor": "#515151",
 		"list": [
 			{
 				"pagePath": "projects/companyhouse/pages/default/index/default_index",
 				"text": "首页",
 				"iconPath": "/projects/companyhouse/images/tabbar/home.png",
 				"selectedIconPath": "/projects/companyhouse/images/tabbar/home_cur.png"
 			},
 			{
 				"pagePath": "projects/companyhouse/pages/album/index/album_index",
 				"text": "设计师",
 				"iconPath": "/projects/companyhouse/images/tabbar/album.png",
 				"selectedIconPath": "/projects/companyhouse/images/tabbar/album_cur.png"
 
EOF
)
