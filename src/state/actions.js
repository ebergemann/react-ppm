import {
    ADD_ITEM,
    EDIT_ITEM,
    DELETE_ITEM,
    IMPORT_ITEMS
} from './types';
import axios from 'axios';


export const fetchProducts = () => {
    console.log("Inside fetch Products of Actions.js");
    
    return (dispatch, getState, url) => {
        // loading dispatch action?
        axios.get(`${url}products`)
        .then(({data}) => {
            console.log(data);
            dispatch(loadProducts(data));
        })
    }
}
export const editProduct = (editObj) => {
    console.log("Inside editProdut from Actions")
    return (dispatch, getState, url) => {
        axios.put(`${url}products/${editObj.id}`, editObj)
        .then(({data}) => {
            dispatch(fetchProducts());
        }   
    )}
}
export const deleteProduct = (id) => {
    console.log(id +"delete Product from Actions")
    return (dispatch, getState, url) => {
        axios.delete(`${url}products/${id}`)
        .then(({data}) => {
            console.log("hello from delete")
            dispatch(fetchProducts());
        }   
    )}
}

const loadProducts = payload => {
    return {
        type: IMPORT_ITEMS,
        payload
    }
}
export const createProduct = (productObj) => {
    console.log("Inside fetch Products of Actions.js");
    
    return (dispatch, getState, url) => {
        // loading dispatch action?
        axios.post(`${url}products`, productObj)
        .then(({data}) => {
            console.log(data);
            dispatch(fetchProducts());
        })
    }
}