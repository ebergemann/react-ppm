import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux';
import {editProduct} from './state/actions';

class EditProduct extends Component {
    constructor(props){

        super(props)

        this.state = {
            title : '',
            price : '',
            imageURL : '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        
    }

    handleInputChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit(e){
        e.preventDefault() 
    
    }

    render() {
        //const product = this.props.product.find(this.props.match.params.id)
        const product = this.props.products.find(({ id }) => id === this.props.match.params.id)
            console.log(product)
            return (
                <div>
                    <h1>Edit Product</h1>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label for="productName">Title </label>
                                <input name="title" value={product.productName} onChange={this.handleInputChange} id="productName" type='text'  />
                            <label for="productPrice">Price </label>
                                <input name="price" value={product.price} onChange={this.handleInputChange} id="productPrice" type='text'  />
                            <label for="imgURL">Image URL </label>
                                <input name="imageURL" value={product.imageUrl} onChange={this.handleInputChange} id="imgURL" type='text' />
                            <button type="submit"> Save </button>
                        </form>
                </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        //productFind: (productId) => {
            products: state.products,
            //return products.find((product) => productId === product.id)
            
        }
    }

const mapDispatchToProps = dispatch => { 
    return {
        editProduct: (productObj) => dispatch(editProduct(productObj)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)