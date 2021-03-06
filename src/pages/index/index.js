require('./../../public/css/normalize.css');
require('./../../public/css/common.css');
require('./index.css');

require('./../../public/js/jquery.cookie.js');
require('./../../public/js/jquery.md5.js');
require('./../../public/js/common.js');

// 登录
var $loginSubmitBtn = $('#login_submit');
var $loginSubmitInput = $('#login_password');
var $psErrorTip = $('#ps_error_tip');

function loginHandel() {
  var value = $loginSubmitInput.val();

  if (value) {
    var str_md5 = $.md5('root' + value);
    var parmas = { operation: 'login', function: 'set', usrid: str_md5 };
    // console.log(parmas, $.cookie('LoginStatus'), 'parmas');
    window.location.href = "/main.html";
    return;
    _request(parmas)
      .then(function (res) {
        if (res.error == 0) {
          $.cookie('LoginStatus', true);
          window.location.href = "/main.html";
        } else if (res.error == 10001) {
          _toast('密码错误');
        } else {
          _toast('登录失败');
        }
      })
      .catch(function (err) {
        _toast(err.status);
      });
  } else {
    // $psErrorTip.show().html('请输入密码');
    _toast('请输入密码');
  }
}

$(function () {
  // 登录模块
  $loginSubmitBtn.on('click', function () {
    loginHandel();
  });

  $loginSubmitInput.on('keyup', function (event) {
    console.log(11111)
    var e = event || window.event || {};
    if (e.keyCode == 13) {
      loginHandel();
    }
  });

  // 忘记密码弹窗显隐 - 按钮控制
  var $forgotBtn = $('#forgot_password_btn');
  var $forgotTip = $('#forgot_tips');
  $forgotBtn.on('click', function () {
    $forgotTip.toggle();
  });

});

