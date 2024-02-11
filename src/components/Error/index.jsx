import { Button, Typography } from '@mui/material'
import { useNavigate, useRouteError } from 'react-router-dom'

function Error() {
  const navigate = useNavigate()
  const error = useRouteError()
  return (
    <div>
      <Typography variant="h1">Something wento wrong</Typography>
      <Typography variant="subtitle1">{error.data || error.message}</Typography>
      <Button onClick={() => navigate(-1)}>Go Back</Button>
    </div>
  )
}

export default Error
