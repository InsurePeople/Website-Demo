 $("document").ready(function(){
     if(window.sessionStorage){
         if(sessionStorage.getItem('username') == null){
              sessionStorage.setItem('username', "aaa");
         }
         if(sessionStorage.getItem('idval') == null){
              sessionStorage.setItem('idval', Math.floor(Math.random() * 3) + 1);
              sessionStorage.setItem('socval', Math.floor(Math.random() * 3) + 1);
         }
         if(sessionStorage.getItem('phone') == null){
              sessionStorage.setItem('phone', "iPhone");
              sessionStorage.setItem('total', 5);
         }
      }
     setTimeout(function(){ $(".popuppointerfirst").focus(); }, 1000);
     $(".popuppointer").focus(function(){
         var popup = "#" + this.id + "popup";
        $(popup).fadeIn();
        setTimeout(function(){ $(popup).fadeOut(); }, 4000);
     });
     $(".popuppointer").focusout(function(){
        $("#" + this.id + "popup").fadeOut();
     });
 });
