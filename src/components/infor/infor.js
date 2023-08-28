import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/My-context";
import Button from "react-bootstrap/Button";
import "./infor.css";
import Order from "../Order/Order";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Infor = () => {
  const { infor } = useContext(MyContext);
  const [showOrderForm, setShowOrderForm] = useState(false);

  const handleAddToCart = () => {
    setShowOrderForm(true);
    toast.success("Order added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container">
      {infor.map((elem, index) => (
        <div key={index}>
          <div className="info">
            <div className="meal">
              <h4>{elem.strMeal}</h4>
              <div className="infoimg">
                <img src={elem.strMealThumb} alt="" />
              </div>
              <Button onClick={handleAddToCart}>Add To Cart</Button>
              {showOrderForm && <Order />}
            </div>
            <div>
              <h4>Ingredients</h4>
              <div className="ingredients">
                {[
                  elem.strIngredient1,
                  elem.strIngredient2,
                  elem.strIngredient3,
                  elem.strIngredient4,
                  elem.strIngredient5,
                  elem.strIngredient6,
                  elem.strIngredient7,
                  elem.strIngredient8,
                  elem.strIngredient9,
                  elem.strIngredient10,
                  elem.strIngredient11,
                  elem.strIngredient12,
                ].map((ingredient, index) => (
                  <div key={index} className="ingredient">
                    <img
                      src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
                      alt={ingredient}
                    />
                    <p>{ingredient} </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="instuc">
            <h4 className="instruction">Instructions</h4>
            <p>{elem.strInstructions}</p>
          </div>
        </div>
      ))}
      <ToastContainer />
    </div>
  );
};

export default Infor;
