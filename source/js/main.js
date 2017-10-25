// $("document").ready(function(){
//     // if(window.location.pathname != "/Website-Demo/" && window.location.pathname != "/Website-Demo/index.html" && window.location.pathname != "/Website-Demo/log-in.html")
//     // {
//     //     if(window.sessionStorage){
//     //         if(sessionStorage.getItem('username') == null){
//     //             window.location.replace("log-in.html?" + $(location).attr('href'));
//     //         } else if(sessionStorage.getItem('idval') == null){
//     //             if(window.location.pathname != "/Website-Demo/get-started.html"){
//     //                 window.location.replace("get-started.html");
//     //             }
//     //         } else if(sessionStorage.getItem('phone') == null){
//     //             if(window.location.pathname != "/Website-Demo/get-started.html" && window.location.pathname != "/Website-Demo/insureme.html"){
//     //                 window.location.replace("insureme.html");
//     //             }
//     //         }
//     //     }
//     // }
//     setTimeout(function(){ $(".popuppointer").focus(); }, 2000);
//     $(".popuppointer").focus(function(){
//        $(".popuphelp").fadeIn();
//     });
//     $(".popuppointer").focusout(function(){
//        $(".popuphelp").fadeOut();
//     });
// });
