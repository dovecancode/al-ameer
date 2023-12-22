import Grid from '@mui/material/Grid';

export default function BasicGrid() {
  return (
    <Grid container sx={{ position: 'relative' }}>
      <Grid
        item
        xs={3}
        sx={{ backgroundColor: '#bfd2f8', height: '.8rem' }}
      ></Grid>
      <Grid item xs={6} sx={{ backgroundColor: '#1f2b6c' }}></Grid>
      <Grid item xs={3} sx={{ backgroundColor: '#159eec' }}></Grid>
    </Grid>
  );
}
