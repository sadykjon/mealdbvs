import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/My-context";
import { services } from "../../services/Services";
import ReactModal from "react-modal";

const OrderForm = () => {
  const { ingredients } = useContext(MyContext);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleOrderSubmit = async (e) => {
    e.preventDefault();

    // Collect order data
    const order = {
      name,
      address,
      phone: phoneNumber,
      title: "Product Title",
    };

    // Send order to Telegram bot
    await services.postOrderProduct(order);

    // Clear form fields after submitting the order
    setName("");
    setAddress("");
    setPhoneNumber("");

    // Show order confirmation modal
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleOrderSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>

      <ReactModal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Order Confirmation"
      >
        <h3>Order Confirmation</h3>
        <p>Thank you for your order! We have received the following details:</p>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Phone Number:</strong> {phoneNumber}
        </p>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
    </div>
  );
};

export default OrderForm;
