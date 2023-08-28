import React, { useContext, useEffect } from 'react';
import { services } from '../../services/Services';
import { MyContext } from '../../Context/My-context';

const Popular_Ingredients = () => {
  const { ingredients, getIngredients } = useContext(MyContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.allIngredients();
      getIngredients(res.data.meals);
    };
    fetchData();
  }, []);

  return (
    <div className='container'>
      <div className='line'></div>
      <p className='text_center'>Popular Ingredients</p>
      <div className='images'>
        {ingredients.slice(0, 4).map((item, index) => (
          <div className='img' key={index}>
            <img src={`https://www.themealdb.com/images/ingredients/${item.strIngredient}.png`} alt={item.strIngredient} />
            <p>{item.strIngredient}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular_Ingredients;
