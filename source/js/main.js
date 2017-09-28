$("document").ready(function(){
    if(window.sessionStorage){
        if(sessionStorage.getItem('username') == null){
            window.location.replace("log-in.html?" + $(location).attr('href'));
        } else if(sessionStorage.getItem('idval') == null){
            if(window.location.pathname != "/InsurePeople/get-started.html"){
                window.location.replace("get-started.html");
        }
        } else if(sessionStorage.getItem('phone') == null){
            if(window.location.pathname != "/InsurePeople/get-started.html" && window.location.pathname != "/InsurePeople/insureme.html"){
                window.location.replace("insureme.html");
            }
        }
    }
});