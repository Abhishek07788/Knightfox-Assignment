import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import HamblerIcon from "../../svg/hambler.svg";

const LeftNavbar = () => {
  const [hide, setHide] = useState(false);

  return (
    <Box h="740px">
      <Box bg="#8F8F8F" h="55px" w="100%">
        <Image
          onClick={() => setHide(!hide)}
          cursor="pointer"
          src={HamblerIcon}
          alt="HamblerIcon"
          pt={4}
          ml="4"
          pr="4"
        />
      </Box>
      <Box
        textAlign="left"
        mt={2}
        gap="2"
        ml="4"
        display={hide ? "none" : "grid"}
      >
        <Link to="/navitem">
          <Text>Active nav item</Text>
        </Link>
        <hr />
        <Link to={`/subitem/${+1}`}>
        <Text w="200px" bg="#EBEBEB">
          Active sub-item
        </Text>
        </Link>
        <hr />
        <Text w="200px">Active nav item</Text>
        <hr />
        <Text w="200px" bg="#EBEBEB">
          Active nav item
        </Text>
      </Box>
    </Box>
  );
};

export default LeftNavbar;
