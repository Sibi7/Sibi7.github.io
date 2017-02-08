$(document).ready(function(){
  	$('.head-menu-con').on("click", "a", function(event){
  		event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
  		$('body,html').animate({scrollTop: top}, 1500);
  	});

    $('.scroll-to').click(function(){
      $('body,html').animate({scrollTop: 790}, 500);
    });

    $('.scroll-package').click(function(){
      console.log('work');
      var id = $(this).children().attr('href'),
          top = $(id).offset().top;
      $('body, html').animate({scrollTop: top}, 1500);
    });

    var mapCoords = {
      lat : 50.450820,   
      lng : 30.441897
    };
    var MAP = new google.maps.Map(document.getElementById("map"), {
      zoom : 17,
      center : mapCoords
    });

    new google.maps.Marker({
      map : MAP,
      position : mapCoords
    });

    if(window.screen.width > 767) {
      MAP.panBy(40, -160);  
    }

    if($(window).width() < 1199) {
      $('.s-8 #im2')[0].src = 'img/s8im21.jpg';
      $('.s-8 #im2')[0].width = 490;
      $('.s-8 #im2')[0].height = 490;
    }

    if($(window).width() < 992) {
      $('.s-8 #im1')[0].src = 'img/s8im11.png';
      $('.s-8 #im2')[0].src = 'img/s8im21.jpg';
      $('.s-8 #im3')[0].src = 'img/s8im3.jpg';
      $('.s-8 #im4')[0].src = 'img/s8im41.png';
      $('.s-8 #im5')[0].src = 'img/s8im51.png';
      $('.s-8 #im6')[0].src = 'img/smir1.png';
      $('.s-8 #im7')[0].src = 'img/kir.jpg';
    }

});

function parseGET(url){ 
  if(!url || url == '') url = decodeURI(document.location.search); 
  if(url.indexOf('?') < 0) return Array(); 

  url = url.split('?'); 
  url = url[1]; 

  var GET = [], 
      params = [], 
      key = []; 

  if(url.indexOf('#')!=-1){ url = url.substr(0,url.indexOf('#')); } 
  if(url.indexOf('&') > -1){ params = url.split('&');} else {params[0] = url; } 

  for (r=0; r<params.length; r++){ 
    for (z=0; z<namekey.length; z++){ 
      if(params[r].indexOf(namekey[z]+'=') > -1){ 
        if(params[r].indexOf('=') > -1) { 
          key = params[r].split('='); 
          GET[key[0]]=key[1]; 
        } 
      } 
    } 
  } 
  return (GET); 
}; 

function input(){ 

  var $_GET = parseGET(); 

  for(z=0; z<namekey.length; z++){ 
    if(!!$_GET[namekey[z]]){ 
      $(div_class).append('<input name="'+namekey[z]+'" type="'+input_hide+'" value="'+$_GET[namekey[z]]+'"><br>'); 
    } 
  } 
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}


function clearF1Cookie() {
    setCookie("name","",-1);
    setCookie("email","",-1);
    setCookie("last1","",-1);
}
$(window).load(function() {
    $("input.name").val(getCookie("name"));
    $("input.email").val(getCookie("email"));
    $("input.phone1").val(getCookie("phone1"));
    $("input.phone2").val(getCookie("phone2"));
    $("input.phone3").val(getCookie("phone3"));
});