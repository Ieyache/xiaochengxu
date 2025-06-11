 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/projects/companyhouse/public/project_setting.js b/miniprogram/projects/companyhouse/public/project_setting.js
index 8be1f38f9d17cf6efc43ee0d784189aec6f81160..0e015451a340611a0cf8cd7ecaf586b33723e76f 100644
--- a/miniprogram/projects/companyhouse/public/project_setting.js
+++ b/miniprogram/projects/companyhouse/public/project_setting.js
@@ -1,45 +1,49 @@
 module.exports = {//companyhouse
 	PROJECT_COLOR: '#25AEAE',
 	NAV_COLOR: '#000000',
 	NAV_BG: '#ffffff',
 
 	// setup
 	SETUP_CONTENT_ITEMS: [
 		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
 	],
 
 	// 用户
 	USER_REG_CHECK: false,
 	USER_FIELDS: [ 
 	],
 
 
-	NEWS_NAME: '动态',
-	NEWS_CATE: [
-		{ id: 1, title: '动态', style: 'leftbig2' },
-	],
+       // 用于展示作品的资讯模块
+       NEWS_NAME: '作品',
+       NEWS_CATE: [
+               { id: 1, title: '常规宠物', style: 'leftbig2' },
+               { id: 2, title: '异宠空间', style: 'leftbig2' },
+               { id: 3, title: '水族宠物', style: 'leftbig2' },
+               { id: 4, title: '空中宠物', style: 'leftbig2' },
+       ],
 
 	MEET_NAME: '预约',
 	MEET_TYPE: [
 		{ id: 1, title: '预约量房', style: 'leftbig2' }
 	],
 	MEET_CAN_NULL_TIME: false, // 是否允许有无时段的日期保存和展示   
 
 	MEET_JOIN_FIELDS: [
 		{ type: 'text', title: '姓名', must: true, max: 30 },
 		{ type: 'mobile', title: '手机', must: true },
 		{ type: 'textarea', title: '房屋地址', must: true }
 	],
 
 	ALBUM_NAME: '设计师',
 	ALBUM_CATE: [
 		{ id: 1, title: '设计师' },
 	],
 	ALBUM_FIELDS: [
 		{ mark: 'duty', title: '职位职务', type: 'text', must: true },
 		{ mark: 'skill', title: '工作经验(年)', type: 'int', must: true },
 		{ mark: 'lilian', title: '设计理念', type: 'textarea', max: 200, must: true },
 		{ mark: 'desc', title: '个人简介', type: 'textarea', must: true },
 		{ mark: 'project', title: '项目情况', type: 'textarea', must: false },
 		{ mark: 'level', type: 'select', title: '等级', selectOptions: ['普通', '金牌', '银牌'], def: '普通', must: true },
 		{ mark: 'style', type: 'checkbox', ext: { show: 'row' }, title: '擅长风格', selectOptions: ['现代', '极简', '欧式', '美式', '复古', '原木', '北欧', '东南亚', '侘寂风', '工业风', '地中海', '中式', '新中式'], def: '普通', must: true },
 
EOF
)
