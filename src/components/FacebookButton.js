import React from 'react';

export default class FacebookButton extends React.Component {
      constructor(props) {
            super(props);

            this.FB = props.fb;

            this.state = {
                  status: null,
                  authResponse: null,
            };

            this.buttonClick = this.buttonClick.bind(this);

      }

      buttonClick() {
            if (this.state.status === 'connected') {
                  this.FB.login();
            } else {
                  this.FB.logout();
            }
      }

      componentDidMount() {
            window.fbAsyncInit = function () {
                  FB.init({
                        appId: '1268723333216786',
                        cookie: true,
                        version: 'v2.4'
                  });

                  FB.Event.subscribe('auth.statusChange', this.onStatusChange.bind(this));

                  /*FB.Event.subscribe('auth.statusChange', function (response) {

                        this.setState({ data: response });
                        console.log('status change', response);
                        // example implementation
                        // if (response.authResponse) {
                        //       console.log('Welcome!  Fetching your information.... ');
                        //       FB.api('/me', function (response) {
                        //             console.log('Good to see you, ' + response.name + '.');
                        //       });
                        // } else {
                        //       console.log('User cancelled login or did not fully authorize.');
                        // }
                  });*/

                  this.FB.getLoginStatus(this.onStatusChange.bind(this), true);
            }.bind(this);

            // Load the SDK asynchronously
            (function (d, s, id) {
                  var js, fjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s);
                  js.id = id;
                  js.src = "//connect.facebook.net/en_US/sdk.js";
                  fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
      }

      onStatusChange(response) {
            this.setState(response);
      }

      componentWillUnmount() {
            // ubsubscribe
      }

      onLogout(response) {
            this.setState({
                  data: response
            });
      }

      render() {
            const message = this.state.status === "connected" ? "Facebook Log out" : "Facebook Log in" ;
            return ( 
                  <div> 
                        <button onClick = {this.buttonClick} > { message } </button> 
                  </div>
            );
      }
}
