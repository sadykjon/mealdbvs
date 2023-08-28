import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import Popular_Ingredients from '../components/PopularIngredients/Popular_Ingredients'
import Infor from '../components/infor/infor'


function Main() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/ingridients/:ingridients" element={<Popular_Ingredients />} />
                <Route path="/infor" element={<Infor/>} />
            </Routes>
        </div>
    )
}

export default Main