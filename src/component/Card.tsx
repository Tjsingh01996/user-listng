
import { Grid, CardMedia, CardContent, Typography, CardActions, Card } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import { deleteUser } from '../redux/userReducer'
import { any } from 'prop-types';

function CustomCard({ imageUrl, contactNumber, onClick, ...props }: { imageUrl: string, contactNumber: string, onClick: Function } & any) {
  return (
      <Grid item  xs={12} sm={6} md={4}>
          <Card
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
              <CardMedia
                  component="div"
                  sx={{
                      pt: '56.25%',
                  }}
                  image={imageUrl}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                      Ph : {contactNumber}
                  </Typography>
                  <Typography style={{ fontSize: '12px' }}>
                      {props.email}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small" onClick={ () => onClick()}>Delete</Button>
              </CardActions>
          </Card>
      </Grid>
  )
}

export default CustomCard