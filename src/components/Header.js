import React  from "react";
import styled from "styled-components";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [MenuStatus,SetMenuStatus]=useState(false);

  return (
    <NavigationHeader>
      <Logo>
        <img src="/images/logo.svg" alt="logo" />
      </Logo>
      <Models>
          <li>Model-S</li>
          <li>Model-3</li>
          <li>Model-X</li>
          <li>Model-Y</li>
      </Models>
      <Icon>
          <div className="shopper">Shop</div>
          <div className="account">Account</div>
          <div className="menu" onClick={()=>SetMenuStatus(true)}>Menu</div>
      </Icon>
      <Menu onClick={()=>SetMenuStatus(true)}>Menu</Menu>
      <MenuItems Visible={MenuStatus}>
      <IconWrapper> <CloseIcon onClick={()=>SetMenuStatus(false)}/></IconWrapper>
     
      <ul>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Existing Inventory</li>
        <li>Solar Panels</li>
        <li>Solar Roof</li>
        <li>Used Inventory</li>
        <li>Trade In</li>
        <li>Test Drive</li>
        <li>Trade Insurance</li>
        <li>Powerwall</li>
        <li>Commercial Energy</li>
        <li>Utilities</li>
        <li>Charging</li>
      </ul>
      </MenuItems>
    </NavigationHeader>
  );
}
const IconWrapper=styled.div`
display:flex;
justify-content:flex-end;
`
const MenuItems =styled.div`
position :fixed;
top:0;
bottom:0;
right:0;
background:white;
width:30vh;
padding:10px;
z-index:100;
ul li{
  list-style:none;
  padding:8px 2px;
  padding-left:5px;
}
ul li:hover{
  background:#D4DCE3;
  border-radius:5px;
}
flex-direction:column;
display:${props=>`${props.Visible?`flex`:'none'}`}
`
const Menu=styled.div`
  Display:none;
  padding:10px;
  border-radius:10px;
  width:100px;
  text-align:center;
  color:#696D73;
  background:#D4DCE3;
  :hover{
    cursor:pointer;
    background:#D4DCI7;
  }
  @media screen and (max-width:1100px){
    display:block;
  }
`
const NavigationHeader = styled.div`
  position:fixed;
  padding:10px;
  top:0;
  left:0;
  right:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  height:12vh;
  z-index:1;
`;
const Logo = styled.div`
width:15vw;
display: flex;
justify-content: center;
img{
  width:100px;
}`;
const Models = styled.div`
display:flex;
align-items:center;
li{
  list-style:none;
  margin:10px;
  text-transform:upperCase;
  width:8vw;
  text-align:center;
}
li:hover{
  cursor:pointer;
  width:8vw;
  background:#D4DCE3;
  color:#696D73;
  padding:10px;
  border-radius:10px;
}
@media screen and (max-width:1100px){
  display:none;
}
`;
const Icon=styled.div`
width:15vw;
display:flex;
justify-content:space-between;
flex-direction:row;

div{
  padding:10px;
}
div:hover{
  cursor:pointer;
  background:#D4DCE3;
  color:#696D73;
  border-radius:10px;
  padding:10px;  
    
}
@media screen and (max-width:1100px){
  display:none;
}
`

export default Header;
