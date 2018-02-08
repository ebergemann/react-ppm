import {
    ADD_ITEM,
    EDIT_ITEM,
    DELETE_ITEM,
    IMPORT_ITEMS
} from './types'

const initialState = {
    products: [
        {id: 1, productName: 'Lenovo', price: '$12.99', imageUrl: 'https://www3.lenovo.com/medias/lenovo-laptop-ideapad-110s-11-hero.png?context=bWFzdGVyfHJvb3R8NjI4MDl8aW1hZ2UvcG5nfGgxZi9oMzMvOTMxMTUzMzU5NjcwMi5wbmd8MjRjMzE5NGIyMDFhMTQ3ZmU3NWQ3OTc3ODQ2ZGE4OTdlOGE0MzUyNWIxNGYzOTQwNDI4YTMwMmM5YmY0MDU1OQ'},
        {id: 2, productName: 'computer', price: '$129.99', imageUrl: 'https://www3.lenovo.com/medias/lenovo-laptop-ideapad-110s-11-hero.png?context=bWFzdGVyfHJvb3R8NjI4MDl8aW1hZ2UvcG5nfGgxZi9oMzMvOTMxMTUzMzU5NjcwMi5wbmd8MjRjMzE5NGIyMDFhMTQ3ZmU3NWQ3OTc3ODQ2ZGE4OTdlOGE0MzUyNWIxNGYzOTQwNDI4YTMwMmM5YmY0MDU1OQ'},
        {id: 3, productName: 'Tablet', price: '$1299.99', imageUrl: 'https://www3.lenovo.com/medias/lenovo-laptop-ideapad-110s-11-hero.png?context=bWFzdGVyfHJvb3R8NjI4MDl8aW1hZ2UvcG5nfGgxZi9oMzMvOTMxMTUzMzU5NjcwMi5wbmd8MjRjMzE5NGIyMDFhMTQ3ZmU3NWQ3OTc3ODQ2ZGE4OTdlOGE0MzUyNWIxNGYzOTQwNDI4YTMwMmM5YmY0MDU1OQ'}
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case IMPORT_ITEMS:
            return {...state, products: action.payload}
        default:
            return state;
    }
}

export default reducer;