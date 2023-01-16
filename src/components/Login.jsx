import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    sessionStorage.setItem("token", 1234);
    navigate("/")
  };

  return (
    <Box
    w={["63%", "63%", "83%", "83%"]}
    ml={["32%", "35%", "15%", "15%"]}
    mt={["10%", "10%", "4%", "4%"]}
    position={"absolute"}
    >
      <Box
        display="flex"
        gap="1"
        bg={"#f2f2f2"}
        position="fixed"
        p={4}
        w="100%"
        zIndex={101}
      >
        <Link to="/">
          <Text cursor="pointer">Parent</Text>
        </Link>
        {">"}
        <Link to="/login">
          <Text cursor="pointer">Login</Text>
        </Link>
      </Box>
      <Box pt={20} position="relative" zIndex={101}>
        <Heading>Please Login</Heading>
        <Button mt={4} bg="black" color="#ffff" onClick={handleClick}>
          LogIn
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
