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

const loadProducts = payload => {
    return {
        type: IMPORT_ITEMS,
        payload
    }
}
