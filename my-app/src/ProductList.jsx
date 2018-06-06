import React from 'react'

class ProductList extends React.Component {
    
    constructor(){
        super()
    }
    
    productList = [ {
        id: '0',
        name : 'iPhoneX',
        price : '$1,000'
         },
         {
            id: '1',
            name : 'Google',
            price : '$820'
             }]

    render() {
    return <ul>{this.productList.map(p=><li key={p.id}>{p.id} {p.name} {p.price} </li>)}</ul>
    }
}

export default ProductList