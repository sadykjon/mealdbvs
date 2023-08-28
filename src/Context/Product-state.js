import { ADD_TOCARD, DELETE_TOCARD, GET_INGREDIENTS, GET_MEALS, GET_ALL_RANDOM_MEALS, GET_INFORMATION, SEARCH_PRODUCT } from './Types'
import { useReducer } from 'react'
import { MyContext } from './My-context'
import { ProductReducer } from './Product-reducer'

export const ProductState = ({ children }) => {
    const initialState = {
        cart: [],
        data: [],
        meals: [],
        infor: [],
        ingredients: [],
        loading: false,
        error: null
    }
    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getIngredients = (data) => dispatch({ type: GET_INGREDIENTS, payload: data })

    const getMeals = (data) => dispatch({ type: GET_MEALS, payload: data })

    const getRandomMeals = (data) => dispatch({ type: GET_ALL_RANDOM_MEALS, payload: data })

    const addToCard = (id) => dispatch({ type: ADD_TOCARD, id })

    const deleteToCard = (id) => dispatch({ type: DELETE_TOCARD, id })

    const getInformational = (data) => dispatch({ type: GET_INFORMATION, payload: data })

    const searchProduct = (searchTerm) => dispatch({ type: SEARCH_PRODUCT, payload: searchTerm })
    

    return (
        <MyContext.Provider value={{
            cart: state.cart,
            data: state.data,
            ingredients: state.ingredients,
            meals: state.meals,
            loading: state.loading,
            error: state.error,
            infor: state.infor,
            addToCard,
            deleteToCard,
            getIngredients,
            getMeals,
            getRandomMeals,
            getInformational,
            searchProduct // Добавлено для поиска
        }}>
            {children}
        </MyContext.Provider>
    )
}
