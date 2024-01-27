const Query = (product) => {
	const voidMessage = `
                choose appropriate query among:-
                    discount, 
                    rating, 
                    brand, 
                    category`;

	const keyword = {
		discount: `Discount for this product is ${product.discountPercentage}%. `,
		rating: `People gave it ${product.rating} out of 5. `,
		brand: `The brand is ${product.brand}. `,
		category: `It is categorised in ${product.category} category. `,
	};
	const response = (query) => {
		const value = keyword[query];
		if (value) {
			return ("Certainly! " + value);
		} else {
			return voidMessage;
		}
	};
	return response;
};

export default Query;
