import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import ProductItem from './ProductItem';
import { createProduct } from './state/actions';
import {connect} from 'react-redux';
import {Navigation} from 'react-router';



class AddProduct extends Component {
    constructor(props){

        super(props)

        this.state = {
            title : '',
            price : '',
            imageURL : '',
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        
    }

handleSubmit(e){
    e.preventDefault()
    const productObj = new ProductItem(this.state.title, this.state.price, this.state.imageURL)
    this.props.createProduct(productObj)
    this.setState({
        title: '',
        price: '',
        imageURL: '',
    })


}

handleInputChange(e){
    this.setState({[e.target.name] : e.target.value})
}

    render() {
        return (
            <div>
                <h1>Create a new Product</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label for="productName">Title </label>
                        <input name="title" value={this.state.title} onChange={this.handleInputChange} id="productName" type='text'  />
                    <label for="productPrice">Price </label>
                        <input name="price" value={this.state.price} onChange={this.handleInputChange} id="productPrice" type='text'  />
                    <label for="imgURL">Image URL </label>
                        <input name="imageURL" value={this.state.imageURL} onChange={this.handleInputChange} id="imgURL" type='text' />
                    <button type="submit"> Create </button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => { 
    return {
        createProduct: (productObj) => dispatch(createProduct(productObj)) 
    }
}

export default connect(null,mapDispatchToProps)(AddProduct)