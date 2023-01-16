import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Maping = (props) => {
  const { id, title, image } = props;
  return (
    <>
      <Link to={`/subitem/${id}`}>
        <Box
          title="Click and see Details"
          display={"flex"}
          alignItems="center"
          gap="3"
          pl="4"
          pr="4"
        >
          <Image w="40px" src={image} alt="image" />
          <Text cursor={"pointer"} textAlign="left" fontWeight={"bold"}>
            {title}
          </Text>
        </Box>
      </Link>
      <hr />
    </>
  );
};

export default Maping;
