import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../Context/My-context';
import { services } from '../../services/Services';

const Random_Meals = () => {
  const { meals, getMeals } = useContext(MyContext);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.allRandomMeals();
      const fetchedMeals = res.data.meals;
      getMeals(fetchedMeals);
      const mealImages = fetchedMeals.map((meal) => ({
        src: meal.strMealThumb,
        name: meal.strMeal,
      }));
      setImages(mealImages);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await services.allMeals();
      const fetchedMeals = res.data.meals;
      getMeals(fetchedMeals);
      const mealImages = fetchedMeals.map((meal) => ({
        src: meal.strMealThumb,
        name: meal.strMeal,
      }));
      setImages(mealImages);
    };
    fetchData();
  }, []);

  const shuffleImages = () => {
    const shuffledImages = [...images];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [
        shuffledImages[j],
        shuffledImages[i],
      ];
    }
    setImages(shuffledImages);
  };

  useEffect(() => {
    shuffleImages();
  }, [meals]);

  return (
    <div className="container">
      <div className="line"></div>
      <p className="text_center">Random Meals</p>
      <div className="images">
        {images.slice(0, 8).map((item, index) => (
          <div className="img" key={index}>
            <img src={item.src} alt="" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Random_Meals;