import {ADD_CATEGORY, ADD_ITEM, REMOVE_ITEM, WELCOME_MSG} from '../actions/types';

const initialState = {
    message: "",
    // categories: ["Food"]
    categories: []
};

export default function(state = initialState, action) {
    switch (action.type) {
        case WELCOME_MSG:
            return {
                ...state,
                message: action.payload
            };
        case ADD_CATEGORY:
            return {
                ...state,
                categories: [...state.categories, {categoryName: action.payload, items: []}]
            }
        case ADD_ITEM:
            let updatedListAdd = state.categories.map((el,i) => {
                if (el.categoryName === action.payload.catName) {
                    return {
                        categoryName: action.payload.catName, 
                        items: [...state.categories[i].items, action.payload.itemName]
                    }
                } else {
                    return {
                        categoryName: el.categoryName,
                        items: [...state.categories[i].items]
                    }
                }
            });
            // console.log(updatedListAdd);
            return{
                ...state,
                categories: updatedListAdd
            }
        case REMOVE_ITEM:
            let updatedListRemove = state.categories.map((el,i) => {
                if (el.categoryName === action.payload.catName) {
                    let updatedItems = el.items.filter((item,index) => {
                        return item !== action.payload.itemName;
                    });
                    return {
                        categoryName: action.payload.catName, 
                        items: [...updatedItems]
                    }
                } else {
                    return {
                        categoryName: el.categoryName,
                        items: [...state.categories[i].items]
                    }
                }
            });
            return {
                ...state,
                categories: updatedListRemove
            }
        default:
            return state;
    }
}