require('./../../public/css/normalize.css');
require('./../../public/css/common.css');
require('./index.css');
require('./../../public/js/common.js');

console.log(jQuery, $);

function initLoadView() {
  var login_status = _storages.get('login_status') || 0;

  if (!Number(login_status)) {
    window.location.href = '/';
  }
}

$(function () {
  initLoadView();

  // 顶部导航栏
  function tabBarToggle(btns, views) {
    btns.on('click', function () {
      var index = $(this).index();
      btns.removeClass('active').eq(index).addClass('active');
      views.hide().eq(index).show();
    });
  }

  // 顶部导航切换
  var $nav_control_btns = $('.control-btns-left .btn');
  var $nav_control_contents = $('.control-main-wrapper .content-wrapper');
  tabBarToggle($nav_control_btns, $nav_control_contents);

  // 云盘操作导航切换
  var $yun_control_btns = $('.yun-content-inner .control-list .control-btn');
  var $yun_control_views = $('.yun-content-inner .control-content .content-item');
  tabBarToggle($yun_control_btns, $yun_control_views);

  // 路由设置导航切换
  var $setting_control_btns = $('.setting-content-inner .control-list .control-btn');
  var $setting_control_views = $('.setting-content-inner .control-content .content-item');
  tabBarToggle($setting_control_btns, $setting_control_views);

  // 退出
  var $exit = $('.exit-route-btn');
  $exit.on('click', function () {
    _storages.set('login_status', 0);
    initLoadView();
  });

  // 路由设置-设置向导
  var $checkTypeBtns = $('.connect-type-wrapper .check-type');
  var $connectTypeMains = $('.connect-type-main-wrapper .connect-type-item');
  $checkTypeBtns.on('change', function () {
    var index = $(this).attr('data-index');
    console.log(index);
    $connectTypeMains.removeClass('active').eq(index).addClass('active');
  });


  // LAN口设置
  var $setting_lan_form = $("#setting_lan_form");
  var $setting_lan_submit = $("#setting_lan_submit");

  $setting_lan_submit.on('click', function () {
    var arr = $setting_lan_form.serializeArray();
    var form = {};
    $(arr).each(function (i, e) {
      form[e.name] = e.value;
    })
    console.log(form);
  })

  // dhcp 切换显示
  var $switch_dhcp_btn = $("#switch_dhcp_btn");
  var $dhcp_wrapper = $(".dhcp-options-wrapper");
  var $dhcp_inputs = $(".dhcp-options-wrapper input");

  $switch_dhcp_btn.on('change', function () {
    var isChecked = $(this).prop('checked');
    isChecked ? $dhcp_wrapper.show() : $dhcp_wrapper.hide();
    $dhcp_inputs.val('');
  });
















});

