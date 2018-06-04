import React from 'react'
import ReactDOM from 'react-dom'

//Advantages - simpler
//Encourage to use - may be more efficient in future
function GreetingFunctional(props){
    return <h2>Hello {props.name} from a function</h2>;
}

//
class GreetingClass extends React.Component {
    render(){
        return <h2> Hello {this.props.name} from a class</h2>
    }
}

//Old Way

var app = React.createElement("div", null, React.createElement(GreetingClass, {name: "Ross"}));

ReactDOM.render(app, document.getElementById('root'))
//Normal Way
//ReactDOM.render(<div><GreetingFunctional name="Ross"/>
//                <GreetingClass name = "Ross"/>
//                </div>,document.getElementById('root'));