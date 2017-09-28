$("document").ready(function(){
    if(window.sessionStorage){
        if(sessionStorage.getItem('username') == null){
            window.location.replace("log-in.html?" + $(location).attr('href'));
        }
    }
});
