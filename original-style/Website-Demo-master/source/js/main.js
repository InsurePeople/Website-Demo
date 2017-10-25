 $("document").ready(function(){
     if(window.sessionStorage){
         if(sessionStorage.getItem('username') == null){
              sessionStorage.setItem('username', "aaa");
         }
         if(sessionStorage.getItem('idval') == null){
              sessionStorage.setItem('idval', Math.floor(Math.random() * 3));
              sessionStorage.setItem('socval', Math.floor(Math.random() * 3));
         }
         if(sessionStorage.getItem('phone') == null){
              sessionStorage.setItem('phone', "iPhone");
              sessionStorage.setItem('total', 5);
         }
      }
     setTimeout(function(){ $(".popuppointer").focus(); }, 2000);
     $(".popuppointer").focus(function(){
        $(".popuphelp").fadeIn();
     });
     $(".popuppointer").focusout(function(){
        $(".popuphelp").fadeOut();
     });
 });
