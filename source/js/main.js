$("document").ready(function(){
    if(window.sessionStorage){
        if(sessionStorage.getItem('username') == null){
            window.location.replace("log-in.html?" + $(location).attr('href'));
        } else if(sessionStorage.getItem('idval') == null){
            if(window.location.pathname != "/Website-Demo/get-started.html"){
                //window.location.replace("get-started.html");
                console.log(window.location.pathname);
        }
        } else if(sessionStorage.getItem('phone') == null){
            if(window.location.pathname != "/Website-Demo/get-started.html" && window.location.pathname != "/Website-Demo/insureme.html"){
                //window.location.replace("insureme.html");
                console.log(window.location.pathname);
            }
        }
    }
});
