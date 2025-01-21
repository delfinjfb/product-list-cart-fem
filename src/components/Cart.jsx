import React from 'react';
import emptyCartImage from './images/illustration-empty-cart.svg';
import DeleteItem from './DeleteItem';

const Cart = ({ cartItems, onRemoveFromCart, onConfirmOrder }) => {
  const getTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow  top-0 right-0 m-4 w-80 md:w-96 lg:static lg:w-full lg:mt-8">
      <h2 className="text-2xl font-bold mb-4 text-orange-500">
        Your Cart ({cartItems.length})
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={emptyCartImage} alt="Empty Cart" className="w-48 mb-4" />
          <p className="text-gray-500">Your added items will appear here</p>
        </div>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <h3 className="text-lg text-sm font-bold">{item.name}</h3>
                  <p className="text-gray-600">
                    <span className="text-orange-500 font-bold">
                      {item.quantity}x
                    </span>
                    @ ${item.price.toFixed(2)}{' '}
                    <span className="">
                      {(item.price * item.quantity).toFixed(2)}{' '}
                    </span>
                  </p>
                </div>
                <DeleteItem onDelete={() => onRemoveFromCart(item)} />
              </li>
            ))}
          </ul>
          <div className="border-t pt-4 mt-4">
            <p className="">
              Order Total:{' '}
              <span className="text-2xl font-bold float-right">
                ${getTotalPrice()}
              </span>
            </p>

            <div className="mt-4 text-center text-sm text-gray-500 bg-[#fcf8f5] pt-3 pb-3">
              <span className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  fill="none"
                  viewBox="0 0 21 20"
                >
                  <path
                    fill="#1EA575"
                    d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
                  />
                  <path
                    fill="#1EA575"
                    d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
                  />
                </svg>
                This is a carbon-neutral delivery
              </span>
            </div>

            <button
              onClick={onConfirmOrder}
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 mt-4 w-full"
            >
              Confirm Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
