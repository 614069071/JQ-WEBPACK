require('./../../public/css/normalize.css');
require('./../../public/css/common.css');
require('./index.css');
require('./../../public/js/common.js');

var $loginSubmitBtn = $('#login_submit');
var $loginSubmitInput = $('#login_password');
var $psErrorTip = $('#ps_error_tip');

$(function () {
  $loginSubmitBtn.on('click', function () {
    var value = $loginSubmitInput.val();
    if (value) {
      window.location.href = '/main.html';
      _storages.set('login_status', '1');
    } else {
      $psErrorTip.show().html('请输入管理员密码');
      _toast('请输入管理员密码');
    }
  });

  // 忘记密码弹窗显隐 - 按钮控制
  // const $forgotBtn = $('#forgot_password_btn');
  // const $forgotTip = $('#forgot_tips');
  // $forgotBtn.on('click', function () {
  //   $forgotTip.toggle();
  // });

});

