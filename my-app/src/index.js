import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Greeter from './Greeter.jsx'
import ProductList from './ProductList.jsx'

//Advantages - simpler
//Encourage to use - may be more efficient in future
function GreetingFunctional(props){
    return ( //Note can use parenthesis for multi lines - not required
    <h2>Hello {props.name} from a function</h2>)
}

//
class GreetingClass extends React.Component {
    render(){
        return <h2> Hello {this.props.name} from a class</h2>
    }
}

class Clock extends React.Component {
    state = {
      time: ""
    };
    componentDidMount() {
      setInterval(() => this.setState({
          time: new Date().toLocaleTimeString()
      }), 1000);
    }
    render() {
      return (
        <span>Time: {this.state.time}</span>
      );
    }
  }
  


class ProductEditor extends Component{

    //Import to set this properly
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this); // VERY IMPORTANT - equivalent of  NG MODEL
    }
    state = {
        product : {
        id: '0',
        name : 'iPhoneX',
        price : '$1,000'
         }
    }

    handleChange(e){
        var target = e.target;
        this.state.product[target.id] = target.value
        this.setState({product: this.state.product}) // TO TRIGGER A RE-RENDER
    }

    //NO difference with single and double quotes
    render(){
        return ( <div><div>
            <span>{this.state.product.id}  </span>
            <span>{this.state.product.name}  </span>
            <span>{this.state.product.price}  </span>
            <br/>
            <br/>
            </div>
            <div>
            <input id="id" type="text" value={this.state.product.id} onChange={this.handleChange} />
            <input id="name" type="text" value={this.state.product.name}  onChange={this.handleChange}/>
            <input id="price" type="text" value={this.state.product.price}  onChange={this.handleChange}/>
            </div>
            </div>
            )
    }
}
//Old Way
//var app = React.createElement("div", null, React.createElement(GreetingClass, {name: "Ross"}));
//ReactDOM.render(app, document.getElementById('root'))

//Normal Way
ReactDOM.render(<div>
                <Clock />
                <br/>
                <br/>
                <GreetingFunctional name="Ross"/>
                <GreetingClass name = "Ross"/>
                <br/>
                <br/>
                <ProductEditor />
                <br/>
                <br/>
                <Greeter firstName="Ross" />
                <ProductList />
                </div>,document.getElementById('root'));