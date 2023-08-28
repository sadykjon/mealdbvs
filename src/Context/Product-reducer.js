import { ADD_TOCARD, DELETE_TOCARD, GET_MEALS, GET_INGREDIENTS, GET_ALL_RANDOM_MEALS, GET_INFORMATIONALS_MEALS,GET_INFORMATION , SEARCH_PRODUCT } from './Types'

export const ProductReducer = (state, action) => {
    switch (action.type) {
        case ADD_TOCARD: {
            const { id } = action
            const { cart, products } = state;
            const element = products.find((elem) => elem.id === id)
            const newArr = [...cart, element]
            return {
                ...state,
                cart: newArr
            }
        }

        case DELETE_TOCARD: {
            const { index } = action
            const { cart } = state
            const newArr = [...cart.filter((_, i) => i !== index)]
            return {
                ...state,
                cart: newArr
            }
        }

        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.payload
            }
        }

        case GET_MEALS: {
            return {
                ...state,
                meals: action.payload
            }
        }

        case GET_ALL_RANDOM_MEALS:{
            return {
                ...state,
                meals: action.payload
            }
        }

        case GET_INFORMATIONALS_MEALS:{
            return {
                ...state,
                informationals: action.payload
            }
        }
        case GET_INFORMATION:{
            return {
              ...state,
                infor: action.payload
            }
        }
        case SEARCH_PRODUCT:
            // Обработка действия SEARCH_PRODUCT
            const searchTerm = action.payload.toLowerCase();
            const filteredData = state.data.filter(item =>
                item.name.toLowerCase().includes(searchTerm)
            );
            return {
                ...state,
                data: filteredData
            };

        default:
            return state
    }
}
