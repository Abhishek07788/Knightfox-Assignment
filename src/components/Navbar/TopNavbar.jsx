import React from "react";
import style from "../../css/navbar.module.css";
import BellIcon from "../../svg/Bell.svg";
import down from "../../svg/down.svg";
import QuestionIcon from "../../svg/question.svg";
import { Box, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const TopNavbar = () => {
  const  token = sessionStorage.getItem("token")

  const handleClick = () =>{
    sessionStorage.clear("token")
  }

  return (
    <Box className={style.mainDiv} bg="rgba(0, 0, 0, 0.56)">
      <Box></Box>
      <Box display="flex" mt="2" gap={4} pr="10">
        <Image src={down} alt="down" />
        <Image src={QuestionIcon} alt="QuestionIcon" />
        <Link to="/login">
          <Button onClick={handleClick}>{token ? "LogOut" : "Login"}</Button>
        </Link>
        <Image src={BellIcon} alt="BellIcon" />
      </Box>
    </Box>
  );
};

export default TopNavbar;
