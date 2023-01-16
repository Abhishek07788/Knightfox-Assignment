import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const DashBorad = () => {
  return (
    <Box pt={140} position="relative" zIndex={101}>
    <Heading color="grey">Welcome to DashBorad</Heading>
    <Link to="/navitem"><Button bg={"black"} color="#ffff" mt="10">Show Items</Button></Link>
    </Box>
  )
}

export default DashBorad