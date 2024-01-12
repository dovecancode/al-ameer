import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'

function DashMenuIcon() {
  return (
    <>
        <SignalCellularAltIcon
          sx={{
            fontSize: '3.5rem',
            color: '#159EEC',
            margin: '2rem',
            transform: 'rotate(90deg) scaleX(-1)',
            zIndex: '-1',
          }}
        />
    </>
  )
}
export default DashMenuIcon
