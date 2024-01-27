import React, { useEffect, useState } from "react";
import Query from "../functions/query";

const Chat = ({ product }) => {
	useEffect(() => {
		setQuery("");
		setResponse(null);
	}, [product]);
	const res = Query(product);

	const [query, setQuery] = useState("");
	const [response, setResponse] = useState(null);

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	return (
		<div style={{ margin: "0px 23%" }}>
			<h1>chat</h1>
			<div>
				<div
					className="card"
					style={{
						width: "50rem",
						height: "35rem",
						textAlign: "center",
						borderRadius: "2rem",
					}}
				>
					<div className="card-body">
						<h5 className="card-title">{product.title}</h5>
						<p className="card-text">Price: INR {product.price}</p>
						<div className="query">{query}</div>
						<div className="response">{response}</div>
					</div>
					<footer style={{ width: "90%", margin: "10px auto" }}>
						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
								onChange={handleChange}
								value={query}
							/>
							<button
								className="btn btn-outline-success"
								type="submit"
								onClick={(e) => {
									setResponse(res(query));
									e.preventDefault();
								}}
							>
								Search
							</button>
						</form>
					</footer>
				</div>
			</div>
		</div>
	);
};

export default Chat;
