import React, { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat";

function App() {
	const [products, setProducts] = useState(null);
	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((json) => {
				setProducts(json.products);
			});
	}, []);

	return (
		<div className="App">
			<h1 className="home">HOME</h1>

			{products && (
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Select Product
					</button>
					<ul className="dropdown-menu select">
						{products &&
							products.map((product) => {
								return (
									<div>
										<li className="dropdown-item">
											<p
												onClick={() => {
													setProduct(product);
												}}
											>
												{product.title}
											</p>
										</li>
									</div>
								);
							})}
					</ul>
				</div>
			)}

			{/* {JSON.stringify(product)} */}
			{product && <Chat product={product} />}
		</div>
	);
}

export default App;
