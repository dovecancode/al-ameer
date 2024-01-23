import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material'
import PropTypes from 'prop-types'
import { useThemeContext } from '../../../contexts/ThemeContext'

function PatientModalForm() {
  const { isDialog, handleClickDialog } = useThemeContext()
  return (
    <Dialog
      open={isDialog}
      onClose={handleClickDialog}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        '& .MuiDialog-container': {
          backdropFilter: 'blur(8px)',
        },
      }}
    >
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          name="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        />
      </DialogContent>
    </Dialog>
  )
}

PatientModalForm.propTypes = {
  handleClose: PropTypes.func,
  open: PropTypes.bool,
}

export default PatientModalForm
