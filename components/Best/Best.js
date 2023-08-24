import React, {useState, useEffect} from 'react';
import { Box, Heading, Text} from '@chakra-ui/react'


export default function Best() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch('"http://localhost:3001/catalog')
        .then(response => response.json())
        .then(data => setProducts(data.slice(0, 6)));
    }, []);

	return <>
		<Box width={"100%"} mb={4} display={"flex"}justifyContent={"flex-end"}>
      {products.map(product => (
        <Box key={product.id}>
          <Heading>{product.title}</Heading>
          <Text>{product.price}</Text>
        </Box>
      ))}
		</Box>
	</>
}