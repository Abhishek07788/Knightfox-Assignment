import { Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getDataById } from "../../Api/Api";

const SubItem = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getDataById(id)
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
        w="100%"
        zIndex={101}
      >
        <Link to="/">
          <Text cursor="pointer">Parent</Text>
        </Link>
        {">"}
        <Link to={`/subitem/${data.id}`}>
          <Text cursor="pointer">SinglePage</Text>
        </Link>
      </Box>
      <SimpleGrid
        border="1px solid #f2f2f2"
        w="100%"
        h={"600px"}
        borderRadius={19}
        m="auto"
        mt={16}
        position="relative"
        zIndex={101}
        spacing="2"
        overflow="auto"
        bg={"#d7efe8"}
        p="10"
        boxShadow ="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        {loading ? (
          <Heading>Loading...</Heading>
        ) : (
          <Box display={"flex"} gap="10" alignItems={"center"} bg="#f2f2f2" borderRadius={10}>
            <Image borderRadius={10} w="80%" h="400px" src={data.image} alt="img"/>
            <Box textAlign={"left"} fontSize="20">
            <Text mt="4"><b>{data.title}</b></Text>
            <Text mt="4"><b>Price:</b> {data.price}</Text>
            <Text mt="4"><b>Category:</b> {data.category}</Text>
            <Box display={"flex"} gap="10">
            <Text mt="4"><b>Rate:</b> {data.rating?.rate}</Text>
            <Text mt="4"><b>Count:</b> {data.rating?.count}</Text>
            </Box>
            <Text mt="4" fontSize={18}><b>Description:</b> {data.description}</Text>
            </Box>
          </Box>
        )}
        <Link to={"/navitem"}><Button bg={"#444444"} color="#ffff" _hover={{bg:"grey"}}>{"<<"}Go Back</Button></Link>
      </SimpleGrid>
    </Box>
  );
};

export default SubItem;
