import { Select, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import {CustomContext} from '../../context/context.js'

export default function SelectPrice() {

	const {price, setPrice, dispatch} = useContext(CustomContext)

	const handleChange = (event) =>{
    dispatch({type: 'change-price', payload: event.target.value})
		setPrice(event.target.value)
	}
	
  return<>
  <Box display={"flex"}>
  <Select value = {price} placeholder='Цена' onChange={handleChange}>
  <option value='desc'>По убыванию</option>
  <option value='asc'>По возрастанию</option>
</Select>
</Box>
</>
}