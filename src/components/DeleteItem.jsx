import React from 'react';

const DeleteItem = ({ onDelete }) => {
  return (
    <button onClick={onDelete} className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 fill-gray-400 hover:fill-black rounded-full  p-0.5 border-gray-400 border-2 
			hover:scale-110 hover:border-black hover:fill-black  focus:outline-none transition duration-200"
        viewBox="0 0 10 10"
      >
        <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
      </svg>
    </button>
  );
};

export default DeleteItem;
