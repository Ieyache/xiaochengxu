 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/miniprogram/projects/companyhouse/pages/my/edit/user_form.wxml b/miniprogram/projects/companyhouse/pages/my/edit/user_form.wxml
index c08db9b252f8f8d313b41bfd8a7937ff8c42eba9..53ecbc15265446f47f534d0d33943248accf9507 100644
--- a/miniprogram/projects/companyhouse/pages/my/edit/user_form.wxml
+++ b/miniprogram/projects/companyhouse/pages/my/edit/user_form.wxml
@@ -1,32 +1,27 @@
 <view class="form-box shadow-project card-project">
 	<view class="form-group padding-top-s" wx:if="{{userRegCheck && user.USER_STATUS==8}}">
 		<view wx:if="{{!user.USER_CHECK_REASON}}" class="hint-desc text-red"><text class="icon-notice"></text>审核未通过：请修改资料后重新提交</view>
 		<view wx:else class="hint-desc text-red"><text class="icon-notice"></text>审核未通过：{{user.USER_CHECK_REASON}}。请修改资料后重新提交</view> 
 	</view>
 	<view class="form-group padding-top-s" wx:elif="{{userRegCheck && user.USER_STATUS==0}}">
 		<view class="hint-desc text-orange"><text class="icon-notice"></text>您的注册资料已经提交，请耐心等待审核~</view> 
 	</view>
 	
 	<view class="form-group">
 		<view class="title must">昵称</view>
 		<input type="nickname" placeholder="填写您的昵称" placeholder-class="phc" model:value="{{formName}}" maxlength="30"></input>
 	</view>
 	<view wx:if="{{formNameFocus}}" class="hint-desc error">{{formNameFocus}}</view>
 
 	<view class="form-group">
 		<view class="title must">手机</view>
-		<input wx:if="{{!mobileCheck}}" placeholder="填写您的手机号码" placeholder-class="phc" model:value="{{formMobile}}" maxlength="11"></input>
-
-		<block wx:else>
-			<view class="mobile">{{formMobile||'未填写'}}</view>
-			<button open-type="getPhoneNumber" bindgetphonenumber="bindGetPhoneNumber" class="btn phone-button"><text wx:if="{{!formMobile}}">一键填写手机号</text><text wx:else>一键修改手机号</text></button>
-		</block>
+        <input placeholder="填写您的手机号码" placeholder-class="phc" model:value="{{formMobile}}" maxlength="11"></input>
 	</view>
 	<view wx:if="{{formMobileFocus}}" class="hint-desc error">{{formMobileFocus}}</view>
 
 </view>
 
 <view class="form-box shadow-project card-project margin-top-xs">
 	<cmpt-form-show id="cmpt-form" mark="cmpt-form" isCacheMatch="{{false}}" fields="{{fields}}" forms="{{formForms}}" isDefMatch="{{isEdit?false:true}}">
 	</cmpt-form-show>
 </view>
 
EOF
)
