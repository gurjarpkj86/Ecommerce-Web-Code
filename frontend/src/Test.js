import React from "react";

class User extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        message: 'Welcome to React world'
      }
    }
  
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      )
    }
  }

  export default User;