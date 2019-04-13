import React from 'react';
import { Box, Text } from "gestalt";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => (
    <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        height={50} 
        color="midnight"
        padding={1} 
    >

      {/* Title and Logo */}
      <NavLink to="/">
       
    </NavLink>

    {/* Signin Link*/}
    <NavLink to="/signin">
        <Text size="xl" color="white">
         Sign In |
        </Text>
    </NavLink>

    {/* Signout Link*/}
    <NavLink to="/signup">
        <Text size="xl" color="white">
         Create Account | 
        </Text>
    </NavLink>

     {/* Signout Link*/}
     <NavLink to="/cart">
        <Text size="xl" color="white">
          Cart
        </Text>
    </NavLink>

    


    </Box>
    
)

export default Navbar;