import HeaderMain from '../components/Header/HeaderMain.js'
import Advantages from '../components/Advantages/Advantages.js';
import HowWork from '../components/HowWork/HowWork.js';
import Instagram from '../components/Instagram/Instagram.js'
import { Box } from '@chakra-ui/react';
import Best from '../components/Best/Best.js';

export default function Main() {
return <>
<Box>
	<HeaderMain/>
	<Best/>
	<Advantages/>
	<HowWork/>
	<Instagram/>
</Box>
</>;
}