import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProducts, deleteProduct } from './state/actions'
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
  } from 'react-router-dom'

class Products extends Component {
    componentDidMount() {
        this.props.fetchProducts();
   
   
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <h1>Products List</h1>
                <div>
                    <ul>
                        {this.props.products.map((product) => (
                            <div key={product.id}>
                                <div class="small-3 columns">
                                    <div class="card">
                                        <div class="card">
                                            <h3>{product.productName}</h3>
                                            <h4>${product.price}</h4>
                                            <img className="productImage" id={product.id} alt="Picture not found" src={product.imageUrl} />
                                            <div>
                                                <button><Link to={`/products/edit/${product.id}`}>Edit</Link></button>
                                                <button id={product.id} name='delete' onClick={this.props.deleteProduct}  >Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="small-9 columns"></div>
                            </div>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}



const mapStateToProps = ({products}) => {
    return{
        products
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchProducts: () => dispatch(fetchProducts()),
        deleteProduct: (e) => dispatch(deleteProduct(e.target.id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);