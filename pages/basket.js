import Shop from '../components/Shop/Shop.js'
import Instagram from '../components/Instagram/Instagram.js';
import { chakra, Box, Flex, Input, Link, Text, Heading, Image } from '@chakra-ui/react';
import {List, ListItem, ListIcon, OrderedList, UnorderedList,} from '@chakra-ui/react'
import { useContext } from 'react';
import { CustomContext } from '../context/context.js';

export default function Basket() {
  const { basket } = useContext(CustomContext);

  return <>
<Box>
  <Box>
  <Link href = "/catalog">К выбору букета</Link>
  <Box>
  <Heading mt={30} fontSize={36} color="rgba(3, 69, 59)" mb={30}>Корзина</Heading>
  <Text>В корзине {basket.length} товар(а)</Text>
  </Box>
  <UnorderedList>
    {basket.map((item)=>(
      <ListItem key={item.id}>
        <Image src={`../${item.image}`} width={"440"} height={287} />
        {item.title}
        {item.price}
      </ListItem>
      
    ))}
  
</UnorderedList>
  </Box>
</Box>
  </>;
}