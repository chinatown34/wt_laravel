var deleteCookie,delta,getCookie,map_initialize,onPlayerReady,onYouTubePlayerAPIReady,setCookie,slider_height,video_bg,video_h,video_id,video_orig_h,video_orig_w,video_ratio,video_w,view_h,view_w;setCookie=function(e,r,o){var t,i;return o?(t=new Date,t.setTime(t.getTime()+24*o*60*60*1e3),i="; expires="+t.toGMTString()):i="",document.cookie=e+"="+r+i+"; path=/"},getCookie=function(e){var r,o,t,i;for(i=e+"=",o=document.cookie.split(";"),t=0;t<o.length;){for(r=o[t];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(i))return r.substring(i.length,r.length);t++}return null},deleteCookie=function(e){return setCookie(e,"",-1)},validatePhone=function(){var phonePattern = /(^\+[0-9]{12}$)|(^0[0-9]{9}$)/; var res = phonePattern.test($("#order-phone").val()); if (res === false){$("#order-phone").addClass("phoneInval")} else {$("#order-phone").removeClass("phoneInval");} return res;},slider_height=function(){var e;return $("#home_slider").length?(e=$(window).height(),$("#home_slider, #home_slider .slick-slide").height(Math.max(e,568))):void 0},video_bg=function(){var e,r;return $("#video-bg").length?(setTimeout(function(){r=document.createElement("script"),r.src="https://www.youtube.com/player_api",e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(r,e)},1e4)):void 0},video_w=0,video_h=0,$("#video-bg").length&&(view_w=$(".advantages-block").width(),view_h=$(".advantages-block").height(),video_orig_w=640,video_orig_h=360,video_ratio=video_orig_w/video_orig_h,video_w=view_w,video_h=view_w*video_ratio,video_h>view_h&&(delta=view_h-video_h,$("#video-bg").css("top",delta/2))),video_id="zPl-JRdpt70",onYouTubePlayerAPIReady=function(){var e;return e=new YT.Player("video-bg",{playerVars:{playlist:video_id,loop:1,autoplay:1,controls:0,showinfo:0,autohide:1},width:video_w,height:video_h,videoId:video_id,events:{onReady:onPlayerReady}})},onPlayerReady=function(e){return e.target.mute()},map_initialize=function(e){var r,o,t,i,a;$("#map-modal").modal(),e=e.split(","),r=e[0],o=e[1],console.log(r,o),a={zoom:17,center:new google.maps.LatLng(r,o),mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1},t=new google.maps.Map(document.getElementById("map-canvas"),a),i=new google.maps.Marker({position:new google.maps.LatLng(r,o),icon:"/images/marker.png",map:t})},(new WOW).init(),$(function(){return slider_height(),video_bg(),getCookie("city")&&""!==getCookie("city")||$("#city-change")&&$("#city-change").modal(),$("#city-change .city-list span").click(function(){return setCookie("city",$(this).attr("data-value"),365),location.reload(!0)}),$("#contact-form").validate({rules:{"contact[name]":{required:!0,minlength:2},"contact[email]":{required:!0,email:!0},"contact[text]":{required:!0,minlength:5}},submitHandler:function(e){$.ajax({url:"/ajax/contact",type:"POST",dataType:"json",data:$("#contact-form").serialize(),beforeSend:function(){$(".contact-block form").stop(!0,!0).slideUp(),$(".contact-block .loader").stop(!0,!0).slideDown()},success:function(e){$(".contact-block form").stop(!0,!0).slideDown(),$(".contact-block .loader").stop(!0,!0).slideUp(),e.status===!0?$(".contact-block form").html('<div class="success">'+e.msg+"</div>"):alert(e.msg)}})}}),$("#review-form").validate({rules:{"review[name]":{required:!0,minlength:2},"review[email]":{required:!0,email:!0},"review[text]":{required:!0,minlength:5}},submitHandler:function(e){$.ajax({url:"/ajax/review",type:"POST",dataType:"json",data:$("#review-form").serialize(),beforeSend:function(){$(".review-block form").stop(!0,!0).slideUp(),$(".review-block .loader").stop(!0,!0).slideDown()},success:function(e){$(".review-block form").stop(!0,!0).slideDown(),$(".review-block .loader").stop(!0,!0).slideUp(),e.status===!0?$(".review-block form").html('<div class="success">'+e.msg+"</div>"):alert(e.msg)}})}}),$(".order-item").click(function(e){return e.preventDefault(),$("#order-form").modal("handleUpdate"),$("#order-type").val($(this).data("type")).change(),"massage"===$(this).data("type")&&$("#order-type-massage").val($(this).data("item")).change(),"gift"===$(this).data("type")?$("#order-type-gift").val($(this).data("item")).change():void 0}),$("#order-form").on("show.bs.modal",function(e){return $(".gift-modal").hide()}),$("#order-form").on("hide.bs.modal",function(e){return $(".gift-modal").modal("hide")}),$("#order-type").on("change",function(){var e;return e=$(this).val(),$("#order-btn").attr("disabled",""),$("#order-price").text(0),"gift"===e?($(".gift-field").show(),$('.massage-field, .massage-time-field, .massage-salon-field, #order-length option:not([value=""]), .price-title').hide(),$("#order-type-massage, #order-length, #order-time, #order-salon").val("")):"massage"===e?($(".gift-field, .price-title").hide(),$(".massage-field").show(),$("#order-type-gift").val("")):($(".price-title").show(),$('.massage-field, .massage-time-field, .massage-salon-field, .gift-field, #order-length option:not([value=""])').hide(),$("#order-type-massage, #order-length, #order-time, #order-salon, #order-type-gift").val(""))}),$("#order-type-massage").on("change",function(){var e;return e=$(this).val(),""!==e?($("#order-length").val(""),$('#order-length option:not([value=""])').remove(),console.log($("#order-length-proto").find(".massage-"+e)),$("#order-length").append($("#order-length-proto").find(".massage-"+e)),$(".massage-time-field, .massage-salon-field").show(),$("#order-btn").attr("disabled",""),$("#order-price").text(0)):void 0}),$("#order-type-gift").on("change",function(){var e;return e=parseInt($(this).find(":selected").data("price")),isNaN(e)&&(e=0),$("#order-price").text(e),e>0&&""!==$('#order-name').val()&&validatePhone()?$("#order-btn").removeAttr("disabled"):$("#order-btn").attr("disabled","")}),$("#order-time").on("change",function(){var e,r;return""!==$("#order-time").val()&&""!==$("#order-length").val()?(r=$(this).val(),e=parseInt($("#order-length").find(":selected").data(r)),isNaN(e)&&(e=0),$("#order-price").text(e),e>0&&""!==$("#order-name").val()&&validatePhone()&&""!==$("#order-salon").val()?$("#order-btn").removeAttr("disabled"):$("#order-btn").attr("disabled","")):($("#order-btn").attr("disabled",""),$("#order-price").text(0))}),$("#order-length").on("change",function(){var e,r;return""!==$("#order-time").val()?(r=$("#order-time").val(),e=parseInt($(this).find(":selected").data(r)),isNaN(e)&&(e=0),$("#order-price").text(e),e>0&&""!==$("#order-name").val()&&validatePhone()&&""!==$("#order-salon").val()?$("#order-btn").removeAttr("disabled"):$("#order-btn").attr("disabled","")):($("#order-btn").attr("disabled",""),$("#order-price").text(0))}),$("#order-salon").on("change",function(){var e;return""!==$("#order-salon").val()?(e=parseInt($("#order-price").text()),isNaN(e)&&(e=0),e>0&&""!==$("#order-name").val()&&validatePhone()?$("#order-btn").removeAttr("disabled"):$("#order-btn").attr("disabled","")):$("#order-btn").attr("disabled","")}),$("#order-form .person-line :input").on("change keyup input",function(){var e;return e=parseInt($("#order-price").text()),isNaN(e)&&(e=0),e>0&&""!==$("#order-name").val()&&validatePhone()&&validatePhone()&&("massage"===$("#order-type").val()&&""!==$("#order-salon").val()||"massage"!==$("#order-type").val())?$("#order-btn").removeAttr("disabled"):$("#order-btn").attr("disabled","")}),$("#order-form-inner").validate({rules:{name:{required:!0,minlength:2},phone:{required:!0}},submitHandler:function(e){$.ajax({url:"/ajax/order",type:"POST",dataType:"json",data:$("#order-form form").serialize(),beforeSend:function(){$("#order-form form").stop(!0,!0).slideUp(),$("#order-form .loader").stop(!0,!0).slideDown()},success:function(e){gtag('event','send',{'event_category':'order-form','event_action':'button'});console.log('success gtag');e.status===!0?location.replace(e.link):($("#order-form form").stop(!0,!0).slideDown(),$("#order-form .loader").stop(!0,!0).slideUp(),alert(e.msg))}})}}),$.stellar.positionProperty.position={setTop:function(e,r,o){e.css("background-position-x",r)},setLeft:function(e,r,o){e.css("background-position-x",r)}},$.stellar({horizontalScrolling:!1,verticalScrolling:!0,hideDistantElements:!1,parallaxBackgrounds:!0,parallaxElements:!0,positionProperty:"position"})}),$(window).resize(function(){return slider_height()});

var headerHeight = $('header').outerHeight();
/*
var menu = $('#main-menu');
menu.find('.nav-menu > li:first-child').addClass('changed about').insertBefore(menu.find('.nav-menu > li:last-child'));
var menuUsl = menu.find('.nav-menu > li:first-child').addClass('changed uslugi');
menuUsl.find('span').hide();
menuUsl.find('.menu_level_1').show();*/

$(window).scroll(function() {    
var scroll = $(window).scrollTop();
if (scroll >= headerHeight) {
  if(!$('body').hasClass('fixed'))
  {
    if(location.href != 'https://waithai.ua/') 
    {
      if ($(window).width() >= 767) 
      {
        $('body').addClass('fixed').css('padding-top', (headerHeight-95)+'px');
      }
      else
      {
        $('body').addClass('fixed').css('padding-top', headerHeight+'px');
      }
    }
    else
    {
      $('body').css('padding-top', 0).removeClass('fixed');
    }
  }
  $("header").addClass("fixed");
    
} else {
    $('body').css('padding-top', 0).removeClass('fixed');
    $("header").removeClass("fixed");
}
});

/*function changeMenu()
{
  var menu = $('#main-menu');

  if ($(window).width() >= 767) 
  {
  	//desktop
  	if(menu.find('.nav-menu > li').is('.changed'))
  	{
  		menu.find('.nav-menu > li.changed.about').removeClass('changed about').insertBefore(menu.find('.nav-menu > li:first-child'));
  		var menuUsl = menu.find('.nav-menu > li.changed.uslugi').removeClass('changed uslugi');
	  	menuUsl.find('span').attr('style', '');
	  	menuUsl.find('.menu_level_1').attr('style', '');
  	}
  }
  else
  {
  	//mobile
  	if(!menu.find('.nav-menu > li').is('.changed'))
  	{
  		menu.find('.nav-menu > li:first-child').addClass('changed about').insertBefore(menu.find('.nav-menu > li:last-child'));
	  	var menuUsl = menu.find('.nav-menu > li:first-child').addClass('changed uslugi');
	  	menuUsl.find('span').hide();
	  	menuUsl.find('.menu_level_1').show();
  	}
  }
}

$(function(){
	changeMenu();
});*/
$(window).on('resize', function(){
      headerHeight = $('header').outerHeight();
     // changeMenu();
});