import React from 'react';

export default class FacebookButton extends React.Component {
   constructor(props) {
      super(props);

      this.FB = props.fb;

      this.state = {
         message: ""
      };

   }
   
   buttonClick() {
      if (this.state.data.status === 'connected') {
            this.FB.login();
      } else {
            this.FB.logout();
      }
   }

   componentDidMount() {
      const self = this;
      this.FB.getLoginStatus(function(response) {
            console.log('resp1', response);
            if (response.status === 'connected') {
                  self.setState({ message: "Facebook Log out", data: response });
            }
            else {
                  self.setState({ message: "Facebook Log in", data: response });
            }
            
      // this will be called when the roundtrip to Facebook has completed
      }, true);
      this.FB.Event.subscribe('auth.logout', 
         this.onLogout.bind(this));
      this.FB.Event.subscribe('auth.statusChange', 
         this.onStatusChange.bind(this));
   }
      
   onStatusChange(response) {
      if( response.status === "connected" ) {
         this.setState({ message: "Facebook Log out", data: response })
      } else {
         this.setState({ message: "Facebook Log in", data: response })
      }
   }

   componentWillUnmount() {
      // ubsubscribe
   }

   onLogout(response) {
      this.setState({
         message: "Facebook Log in",
         data: null
      });
   }

   render() {

      return (
         <div>
            <button onClick={this.buttonClick}>{this.state.message}</button>
         </div>
      );
   }
};