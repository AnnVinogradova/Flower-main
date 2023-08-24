import { Select, Box } from '@chakra-ui/react'

export default function FilterSelect() {
  return<>
  <Box display={"flex"}>
  <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>
</>
}
