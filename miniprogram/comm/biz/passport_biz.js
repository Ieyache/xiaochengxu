 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/comm/biz/passport_biz.js b/miniprogram/comm/biz/passport_biz.js
index adaaed010bca544a80a3e542325a723f19df9548..b7ccf9185fc5a7346ff5cb6699e26d31435b2b8e 100644
--- a/miniprogram/comm/biz/passport_biz.js
+++ b/miniprogram/comm/biz/passport_biz.js
@@ -188,69 +188,38 @@ class PassportBiz extends BaseBiz {
 							let url = pageHelper.fmtURLByPID('/pages/my/reg/my_reg');
 							wx.reLaunch({ url });
 						} else if (result.cancel) {
 							wx.navigateBack();
 						}
 					}
 				});
 
 				return false;
 			}
 
 		}).catch(err => {
 			console.log(err);
 			PassportBiz.clearToken();
 			return false;
 		});
 
 		return res;
 	}
 
 	// 清除登录缓存
 	static clearToken() {
 		cacheHelper.remove(constants.CACHE_TOKEN);
 	}
 
-	// 手机号码
-	static async getPhone(e, that) {
-		if (e.detail.errMsg == "getPhoneNumber:ok") {
-
-			let cloudID = e.detail.cloudID;
-			let params = {
-				cloudID
-			};
-			let opt = {
-				title: '手机验证中'
-			};
-			await cloudHelper.callCloudSumbit('passport/phone', params, opt).then(res => {
-				let phone = res.data;
-				if (!phone || phone.length < 11)
-					wx.showToast({
-						title: '手机号码获取失败，请重新填写手机号码',
-						icon: 'none',
-						duration: 2000
-					});
-				else {
-					that.setData({
-						formMobile: phone
-					});
-				}
-			});
-		} else
-			wx.showToast({
-				title: '手机号码获取失败，请重新填写手机号码',
-				icon: 'none'
-			});
-	}
 }
 
 
 
 /** 表单校验    */
 PassportBiz.CHECK_FORM = {
 	name: 'formName|must|string|min:1|max:30|name=昵称',
 	mobile: 'formMobile|must|len:11|name=手机',
 	forms: 'formForms|array'
 };
 
 
 module.exports = PassportBiz;
 
EOF
)
