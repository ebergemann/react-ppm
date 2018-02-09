import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux';
import { editProduct } from './state/actions';

class ProductItem {
  constructor(productName, price, imageUrl, id) {
    this.productName = productName;
    this.price = price;
    this.imageUrl = imageUrl;
    this.id = id;
  }
}

class EditProduct extends Component {
  constructor(props) {

    super(props)

    this.state = {
      productName: '',
      price: '',
      imageUrl: '',
      id: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)

  }

  componentWillMount() {
    const product = this.props.products.find(({ id }) => id === this.props.match.params.id)
    this.setState({ productName: product.productName, price: product.price, imageUrl: product.imageUrl, id:product.id})
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log("in handleSubmit")
    const editObj = new ProductItem(this.state.productName, this.state.price, this.state.imageUrl, this.state.id)
    this.props.editProduct(editObj)
    console.log(editObj)
    this.setState({
      productName: '',
      price: '',
      imageUrl: '',
      id: ''
    })

  }

  render() {
    //const product = this.props.product.find(this.props.match.params.id)
    // const product = this.props.products.find(({ id }) => id === this.props.match.params.id)
    // console.log(product)
    return (
      <div>
        <h1>Edit Product</h1>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <label for="productName">Title </label>
          <input name="productName" value={this.state.productName} onChange={this.handleInputChange} id="productName" type='text' />
          <label for="productPrice">Price </label>
          <input name="price" value={this.state.price} onChange={this.handleInputChange} id="productPrice" type='text' />
          <label for="imgURL">Image URL </label>
          <input name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} id="imgURL" type='text' />
          <button type="submit" onClick={this.handleSubmit.bind(this)}> Save </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
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