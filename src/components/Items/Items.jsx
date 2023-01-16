import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../Api/Api";
import Maping from "./Maping";

const Items = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        zIndex={101}
        w="100%"
      >
        <Link to="/">
          <Text cursor="pointer">Parent</Text>
        </Link>
        {">"}
        <Link to="/navitem">
          <Text cursor="pointer">Items</Text>
        </Link>
      </Box>
      <SimpleGrid
        border="1px solid #f2f2f2"
        w="100%"
        h={"740px"}
        borderRadius={4}
        m="auto"
        mt={16}
        position="relative"
        zIndex={101}
        spacing="2"
        overflow="auto"
      >
        {loading ? (
          <Heading>Loading...</Heading>
        ) : (
          <>
            {data &&
              data.map((el) => (
                
                  <Maping key={el.id} {...el} />
                
              ))}
          </>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Items;
