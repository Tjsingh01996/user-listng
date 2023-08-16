import { Button } from '@mui/base'
import { Typography, Grid, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (

      <>
          <Header />
          <main>
              <Container sx={{ py: 8 }} maxWidth="md">
                 {children}
              </Container>
          </main>
          <Footer />
      </>

  )
}

export default Layout