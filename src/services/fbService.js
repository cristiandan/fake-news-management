export const initFacebook = () => new Promise((resolve, reject) => {
    window.fbAsyncInit = function() {
        window.FB.init({
        appId      : '1268723333216786',
        version    : 'v2.4'
        });
        window.FB.AppEvents.logPageView();
        resolve();
    };


    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
});

export const getStatus = () => new Promise((resolve, reject) => {
    window.FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            window.FB.api('/me', function(user) {
                resolve({ ...response, user });
            });
        } else {
            resolve(response);
        }
    });
});

export const login = () => new Promise((resolve, reject) => {
    console.log('data services login');
    window.FB.login(function(response) {
        if (response.status === 'connected') {
            window.FB.api('/me', function(user) {
                resolve({ ...response, user });
            });
        }
        else {
            resolve(response);
        }
    })
});