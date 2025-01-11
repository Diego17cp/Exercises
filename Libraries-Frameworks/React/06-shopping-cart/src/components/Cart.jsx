import { useId } from "react";
import { ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";
import "./Cart.css";
import { useCart } from "../hooks/useCart";

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
	return (
		<li>
			<img src={thumbnail} alt={`${title} picture`} />
			<div>
				<strong>{title}</strong> - ${price}
			</div>
			<footer>
				<small>Qty: {quantity}</small>
				<button onClick={addToCart}>+</button>
			</footer>
		</li>
	);
};

export const Cart = () => {
	const cartCheckboxId = useId();
	const { cart, cleanCart, addToCart } = useCart();

	return (
		<>
			<label className="cart-button" htmlFor={cartCheckboxId}>
				<CartIcon />
			</label>
			<input id={cartCheckboxId} type="checkbox" hidden />

			<aside className="cart">
				<ul>
                    {
                        cart.map(
                            (product) => (
                                <CartItem
                                    key={product.id}
                                    addToCart={() => addToCart(product)}
                                    {...product}
                                ></CartItem>
                            )
                        )
                    }
                </ul>

				<button onClick={cleanCart}>
					<ClearCartIcon></ClearCartIcon>
				</button>
			</aside>
		</>
	);
};
