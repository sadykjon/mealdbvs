import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../Context/My-context';
import { services } from '../../services/Services';
import { Link } from 'react-router-dom';


const LatestMeals = () => {
  const { meals, getMeals,getInformational } = useContext(MyContext);
  const filteredMeals1 = meals.filter(id => id.idMeal.startsWith(5307));
  const filteredMeals2 = meals.filter(id => id.idMeal.startsWith(5306));


  useEffect(() => {
    const fetchData = async () => {
      const res = await services.allMeals();
      getMeals(res.data.meals);
    }
    fetchData();
  }, []);

  const addClick = async (id) => {
    const data = await services.allInformationalsMeals(id)
    getInformational(data.data.meals)
  }

  return (
    <div className='container'>
      <div className='line'></div>
      <p className='text_center'>Latest Meals</p>
      <div className="images wrap">
        {
          filteredMeals1.map((item, index) => {
            return (
             <Link to='/infor' key={index}>
              <div className='img' onClick={() => addClick(item.idMeal)} key={index}>
                <img src={item.strMealThumb} alt="" />
                <p>{item.strMeal}</p>
              </div>
             </Link>
            )
          })
        }
      </div>
      <div className="images wrap">
        {
          filteredMeals2.map((item, index) => {
            return (
              <div className='img' key={index}>
                <img src={item.strMealThumb} alt="" />
                <p>{item.strMeal}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LatestMeals;