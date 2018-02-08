import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchProducts } from './state/actions'

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