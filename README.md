diff --git a/README.md b/README.md
index 3febfa7d69b8a80f295c6feed1c67bc34bfc173c..7534e5e456da50bb2145df1fe001a4b07a932d78 100644
--- a/README.md
+++ b/README.md
@@ -1,46 +1,59 @@
 ## 装修小程序功能介绍 
 -  进入装修小程序平台，消费者可以自己找到符合需求的装修材料和装修方案，装修公司也可以根据客户的实际需求，在小程序上添加更多的案例让用户可以通过小程序进行参考。用户再也不用到店面进行选择装修预约了，可以直接在线上进行装修预约，平台会根据用户预约时间进行相应的服务。
 
 ![image](https://user-images.githubusercontent.com/125971514/220474819-468f3f1d-deaa-41c6-adfd-54d42f57df4f.png)
 
 - 前后端完整代码包括：家装公司动态，设计师介绍，典型案例，设计方案，预约量房，个人中心，后台资讯管理，后台设计师管理，后台管理员管理，后台预约管理等模块，采用腾讯提供的小程序云开发解决方案，无须服务器和域名。
 
 - 设计师模块：设计师形象展示区展示设计师电话、过往作品及从业经验能够让顾客充分了解设计师及设计师的作品风格，如果有喜欢的风格以便快速联系到设计师。
 - 案例模块：不同空间、风格、面积的装修效果图展示，能让客户快速准确的找到自己喜欢并合适的装修效果图，并有收藏功能，方便快捷，优秀的用户体验。
 - 个人中心模块：个人中心可以查看我的收藏和我的预约，更方便快捷的找到喜欢的效果图和查询预约
 - 量房预约模块：开始/截止时间/人数均可灵活设置，可以自定义客户预约填写的数据项，支持预约名单数据导出Excel，打印
 
 ![image](https://user-images.githubusercontent.com/125971514/220474845-8ff39b45-7b99-4d4a-8ac8-c3fe0d6c47d0.png)
 
 ## 技术运用
 - 本项目使用微信小程序平台进行开发。
 - 使用腾讯专门的小程序云开发技术，云资源包含云函数，数据库，带宽，存储空间，定时器等，资源配额价格低廉，无需域名和服务器即可搭建。
 - 小程序本身的即用即走，适合小工具的使用场景，也适合快速开发迭代。
 - 云开发技术采用腾讯内部链路，没有被黑客攻击的风险，不会 DDOS攻击，节省防火墙费用，安全性高且免维护。
-- 资源承载力可根据业务发展需要随时弹性扩展。  
-
+- 资源承载力可根据业务发展需要随时弹性扩展。
+
+## 快速配置为作品展示
+若您需要将本项目用于室内设计作品展示，可按以下步骤修改配置：
+1. 打开 `miniprogram/projects/companyhouse/public/project_setting.js`。
+2. 将 `NEWS_NAME` 改为 `作品`，并在 `NEWS_CATE` 中设置如下分类：
+   - `常规宠物`
+   - `异宠空间`
+   - `水族宠物`
+   - `空中宠物`
+3. 重新编译小程序后，即可在后台“作品”模块上传文章，客户端无需登录即可浏览。
+4. 若使用个人公众号，请保持 `miniprogram/setting/setting.js` 中 `MOBILE_CHECK` 为 `false`，系统将不再请求用户手机号。
+
+5. 如需引导用户访问官网，可在“关于我们”页面底部添加跳转按钮，示例已配置跳转到 `https://eqisheji.cn/`。
+6. 点击底部菜单“预约量房”将自动跳转至外部表单 `https://tally.so/r/3xB8pG`。
 
 
 ## 作者
 - 如有疑问，欢迎骚扰联系我：开发交流，技术分享，问题答疑，功能建议收集，版本更新通知，安装部署协助，小程序开发定制等。
 - 俺的微信: 
 ![image](https://user-images.githubusercontent.com/125971514/220474864-cb188eeb-cdd8-4b3f-9960-ba3a6669e2dc.png)
 
 
 
 ## 演示 
 ![image](https://user-images.githubusercontent.com/125971514/220474832-39cd8a15-9f9c-4389-8b8d-c3b1a6d7b78e.png)
 
 ## 安装
 
 - 安装手册见源码包里的word文档
 
 
 
 
 ## 截图
 ![image](https://user-images.githubusercontent.com/125971514/220474903-2f7ca326-2897-49a9-be0c-8634513b0111.png)
 ![image](https://user-images.githubusercontent.com/125971514/220474930-7fc716bf-8bf0-4863-9126-a49c4faca238.png)
 ![image](https://user-images.githubusercontent.com/125971514/220474959-5640dab5-208a-4423-8b46-40674f453486.png)
 ![image](https://user-images.githubusercontent.com/125971514/220474990-9a1f2a3d-c08e-4ee6-9d1e-bec871fa7d81.png)
 ![image](https://user-images.githubusercontent.com/125971514/220475010-e505c38f-a4e3-43a2-8917-587edc24d470.png)
