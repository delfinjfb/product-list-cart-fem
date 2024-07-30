import React from "react";
import {ShoppingCartIcon} from "@heroicons/react/24/outline";

const CartIcon = ({itemCount}) => {
	return (
		<div className="relative">
			<ShoppingCartIcon className="h-8 w-8 text-white" />
			{itemCount > 0 && (
				<span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
					{itemCount}
				</span>
			)}
		</div>
	);
};

export default CartIcon;
