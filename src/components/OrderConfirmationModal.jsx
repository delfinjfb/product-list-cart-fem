import React from 'react';
import Modal from 'react-modal';

const OrderConfirmationModal = ({ isOpen, onRequestClose, cartItems }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Order Confirmation"
      ariaHideApp={false}
      className="bg-white p-6 rounded-lg shadow-lg mx-auto my-16 max-w-lg w-full"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Order Confirmed</h2>
        <button
          onClick={onRequestClose}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      <p className="mb-6">We hope you enjoy your food!</p>
      <ul className="mb-6">
        {cartItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center justify-between mb-4"
          >
            <img
              src={item.image.thumbnail}
              alt={item.name}
              className="w-12 h-12 rounded mr-4"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">
                {item.quantity} x ${item.price.toFixed(2)}
              </p>
            </div>
            <p className="font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center font-bold text-lg">
        <span>Total</span>
        <span>${calculateTotal()}</span>
      </div>
      <button
        onClick={onRequestClose}
        className="mt-6 w-full bg-orange-500 text-white py-2 rounded"
      >
        Start New Order
      </button>
    </Modal>
  );
};

export default OrderConfirmationModal;
