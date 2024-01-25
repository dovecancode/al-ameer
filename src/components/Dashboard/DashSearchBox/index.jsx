import { FormControl, InputAdornment } from '@mui/material'
import { IoSearchSharp } from 'react-icons/io5'
import { Form, SearchBoxField } from './Searchbox.elements'

import SubmitButton from '../../shared/SubmitButton'
import { HeaderStack } from '../DashHeader/DashHeader.elements'

function DashSearchBox() {
  return (
    <Form className="search-box">
      <FormControl sx={{ width: '100%' }}>
        <HeaderStack direction="row" gap={3}>
          <SearchBoxField
            fullWidth
            placeholder="Search Doctor, patients name"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IoSearchSharp size={20} />
                </InputAdornment>
              ),
            }}
          />
          <SubmitButton width="20rem">Search</SubmitButton>
        </HeaderStack>
      </FormControl>
    </Form>
  )
}

export default DashSearchBox
