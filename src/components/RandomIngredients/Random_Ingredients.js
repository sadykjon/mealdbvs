import React, { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../Context/My-context';
import { services } from '../../services/Services';

const Random_Ingredients = () => {
  const { ingredients, getIngredients } = useContext(MyContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.allIngredients();
      const fetchedIngredients = res.data.meals;
      getIngredients(fetchedIngredients);
      const ingredientImages = fetchedIngredients.map((ingredient) => ({
        src: `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`,
        name: ingredient.strIngredient,
      }));
      setImages(ingredientImages);
    };
    fetchData();
  }, []);

  useEffect(() => {
    shuffleImages();
  }, [ingredients]);

  const shuffleImages = () => {
    const shuffledImages = [...images];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [shuffledImages[j], shuffledImages[i]];
    }
    setImages(shuffledImages);
  };

  return (
    <div className='container'>
      <div className='line'></div>
      <p className='text_center'>Popular Ingredients</p>
      <div className='images'>
        {images.slice(0, 4).map((item, index) => (
          <div className='img' key={index}>
            <img src={item.src} alt='' />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Random_Ingredients;