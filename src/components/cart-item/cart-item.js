import React, { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { MyContext } from "../../Context/My-context";
import { services } from "../../services/Services";

const CartItem = () => {

  return (
    <div className="cart">
      <Card style={{ width: "1365px", backgroundColor: "#2d2013", color: "#fff" }}>
        <h1>
          <Card.Title></Card.Title>
        </h1>
        <div className="imgcart">
          {/* <Card.Img variant="top" src={infor.meals} /> */}
        </div>
        <div className="btn">
          <Button variant="primary">
            Add To Cart
          </Button>
        </div>
        <div className="carting">
          <Card.Body>
            <h1>
              <Card.Title>Ingredients</Card.Title>
            </h1>
          </Card.Body>
          <div className="images">
            {/* <Card.Img
              variant="top"
              src={`https://www.themealdb.com/images/ingredients/${infor.meals}.png`}
            /> */}
            <Card.Body>
              <Card.Title>{''}</Card.Title>
            </Card.Body>
          </div>
          <div className="text_discription">
            <Card.Body>
              <Card.Title>Instructions</Card.Title>
              <Card.Text>{''}</Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CartItem;