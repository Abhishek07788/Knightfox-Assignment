import React from 'react'
import LeftNavbar from './LeftNavbar'
import TopNavbar from './TopNavbar'
import {Box} from '@chakra-ui/react'

const AllNavbar = () => {
  return (
    <div>
      <Box display={"flex"} position={"fixed"} w="100%" zIndex={100}>
        <LeftNavbar/>
        <TopNavbar />
      </Box>
    </div>
  )
}

export default AllNavbar