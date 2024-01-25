import { Box, InputAdornment, TextField, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { IoSearchSharp } from 'react-icons/io5'
import { LuTrash } from 'react-icons/lu'
import { TheToolBar } from './DashToolBar.elements'

function DashToolBar({ selectedItems, query, onQuery }) {
  return (
    <TheToolBar>
      {selectedItems.length > 0 ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography sx={{ marginRight: 'auto' }}>
            {selectedItems.length} Selected items ready for deletion!
          </Typography>
          <Box>
            <LuTrash size={20} cursor="pointer" />
          </Box>
        </Box>
      ) : (
        <TextField
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          fullWidth
          size="small"
          placeholder="Search patients..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IoSearchSharp size={20} />
              </InputAdornment>
            ),
          }}
        />
      )}
    </TheToolBar>
  )
}

DashToolBar.propTypes = {
  query: PropTypes.string,
  onQuery: PropTypes.func,
  selectedItems: PropTypes.array,
}
export default DashToolBar
