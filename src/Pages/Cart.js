import React, { useContext, useEffect } from 'react'
import CartItem from '../components/cart-item/cart-item'
import { MyContext } from '../Context/My-context'
import { services } from '../services/Services'

const Cart = () => {
  const { ingredients, getIngredients, addToCard } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await services.allIngredients();
      getIngredients(response.data.meals);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className='d-flex flex-wrap justify-content-between gap-4 mt-4'>
        {ingredients.map((ingredient, index) => (
          <CartItem key={index} {...ingredients} onClick={() => addToCard(ingredient.id)}>
            Add To Cart
          </CartItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
