import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const DashBorad = () => {
  return (
    <Box
    w={["63%", "63%", "83%", "83%"]}
    ml={["32%", "35%", "15%", "15%"]}
    mt={["10%", "10%", "6%", "6%"]}
    position={"absolute"}
    zIndex={101}
    >
    <Heading color="grey">Welcome to DashBorad</Heading>
    <Link to="/navitem"><Button bg={"black"} color="#ffff" mt="10">Show Items</Button></Link>
    </Box>
  )
}

export default DashBorad