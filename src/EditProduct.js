import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css'
import './App.css';
import { connect } from 'react-redux';
import { editProduct, deleteProduct } from './state/actions';

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
    this.setState({ productName: product.productName, price: product.price, imageUrl: product.imageUrl, id: product.id })
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
    
    this.props.history.push("/products")
  }

  render() {
    //const product = this.props.product.find(this.props.match.params.id)
    // const product = this.props.products.find(({ id }) => id === this.props.match.params.id)
    // console.log(product)
    return (
      <div>
        <h1>Edit Product</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="card">
            {/* <div className="small-7 columns">&nbsp;</div> */}
            <div className="row">
              <label for="productName">Title </label>
              <input className=" small-4 columns" name="productName" value={this.state.productName} onChange={this.handleInputChange} id="productName" type='text' />
              <div className="small-8 columns">&nbsp;</div>
            </div>
            <div className="row">
              <label for="productPrice">Price </label>
              <input className=" small-4 columns" name="price" value={this.state.price} onChange={this.handleInputChange} id="productPrice" type='text' />
              <div className="small-8 columns">&nbsp;</div>
            </div>
            <div className="row">
              <label for="imgURL">Image URL </label>
              <input className=" small-4 columns" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} id="imgURL" type='text' />
              <div className="small-8 columns">&nbsp;</div>
            </div>
            <button className="productsbtn" id={this.state.id} name='delete' onClick={this.props.deleteProduct}  >Delete</button>
            <button className="productsbtn" type="submit" onClick={this.handleSubmit.bind(this)}> Save </button>
            
          
          </div>
          {/* <div className="small-7 columns">&nbsp;</div> */}
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
    editProduct: (productObj) => dispatch(editProduct(productObj)),
    deleteProduct: (e) => dispatch(deleteProduct(e.target.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProduct)