import { createContext, useState, useEffect } from "react";

export const CustomContext = createContext()

const Context = (props) => {
	const [gender, setGender] = useState('women')
	const [category, setCategory] = useState('Gift Baskets')
	const [price, setPrice] = useState()
	const [showMore, setShowMore] = useState(false);
	const [displayedProducts, setDisplayedProducts] = useState(6);
	const [products, setProducts] = useState({
		data: [],
		error: ''
	});
	const [favorites, setFavorites] = useState([]);
	const [basket, setBasket] = useState([])

	const addBasket = (product) => {
		setBasket(prev => [...prev, product])
	}

	const setProductForFavorites = (id) => {
		if (favorites.some(item => item.id === id)) {
		  setFavorites(prev => {
			console.log('Удалено из избранного:', id);
			return prev.filter(item => item.id !== id);
		  });
		} else {
		  setFavorites(prev => {
			console.log('Добавлено в избранное:', id);
			return [...prev, {id: id}];
		  });
		}
	  }

	const changeGender = (value) => {
		setGender(value)
	}

	const changeCategory = (value) => {
		setCategory(value)
	}

	const handleShowMore = () => {
		setShowMore(true);
		setDisplayedProducts(products.data.length);
	};


	const getProducts = () => {
		fetch(`http://localhost:3001/catalog?gender=${gender}&category=${category}${price !== '' ? '&_sort=price&_order=' + price : ''}`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json();
			})
			.then(data => setProducts({ ...products, data: data }))
			.catch(error => setProducts({ ...products, error: error }));
	};


	const value = {
		products,
		gender,
		category,
		changeGender,
		changeCategory,
		getProducts,
		price,
		setPrice,
		handleShowMore,
		showMore,
		displayedProducts,
		setProductForFavorites,
		basket,
		addBasket
	
		
	}

	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
}

export default Context