import {
    ADD_ITEM,
    EDIT_ITEM,
    DELETE_ITEM,
    IMPORT_ITEMS
} from './types'

const initialState = {
    products: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;