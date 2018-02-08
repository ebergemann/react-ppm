import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from './state/actions'
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
        return (
            <div>
                <h1>Products List</h1>
                <div>
                    <ul>

                    {this.props.products.map((product) =>(
                        <li key={product.id}><div>
                            <h3>{product.productName}</h3>
                            <h4>{product.price}</h4>
                            <img className="productImage" id={product.id} alt="Picture not found" src={product.imageUrl} />
                            <div>
                                <button><Link to={`/products/edit/${product.id}`}>Edit</Link></button>
                                <button type="submit" >Delete</button>
                            </div>
                        </div>
                        </li>
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
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);