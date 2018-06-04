import React from 'react'

class Greeter extends React.Component {
    greet = () => {
      alert("Hello " + this.props.firstName);
    }
    render() {
      return (
        <span> 
          <button onClick={this.greet}>
            Greet
          </button>
        </span>
      );
    }
  };
  
export default Greeter;  