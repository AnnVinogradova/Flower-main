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
	
	const [basket, setBasket] = useState([])
	

	const addBasket =  (product) => {
        setBasket(prev => [...prev, {
            ...product,
            count: 1
        }])


    }

	const plusBasket = (id) => {
		setBasket(prev => prev.map(item =>{
			if (item.id === id){
				return{...item, count: item.count+1}
			}
			return item
		}))
		
	}

	const delBasket = (id) => {
		setBasket(prev =>prev.filter(item => item.id !== id))
	}

	const minusBasket = (id) => {
		let count = basket.find(item => item.id === id).count
		if(count ===1) {
			setBasket(prev =>prev.filter(item => item.id !== id))
		} else {
		setBasket(prev => prev.map(item =>{
			if (item.id === id){
				return{...item, count: item.count-1}
			}
			return item
		})
		)
	}}

    useEffect(() => {
		
	
        if (localStorage.getItem('basket') !== null) {
            setBasket(JSON.parse(localStorage.getItem('basket')))
        }

    }, [])

	useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])


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
		basket,
		addBasket,
		plusBasket,
		minusBasket,
		delBasket,
		
	}

	return <CustomContext.Provider value={value}>
		{props.children}
	</CustomContext.Provider>
}

export default Context