import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"
function Section(props) {
  return (
    <Content img={props.image}>
      <Fade bottom>
      <CarNameInfo>
        <CarName>{props.title}</CarName>
        <CarDesc>{props.Desc}</CarDesc>
      </CarNameInfo>
      </Fade>
      <Fade bottom>
      <BtnComponents>
        <CarButtons>
          
          <FirstButton>Custom Car</FirstButton>
          {
            props.btn2 &&
            <SecondButton>Existing Inventory</SecondButton>
          }
        </CarButtons>

        <MoveDownButton>
          <img src="/images/down-arrow.svg" alt="down-arrow" />
        </MoveDownButton>
      </BtnComponents>
      </Fade>
    </Content>
  );
}
const MoveDownButton = styled.div`
  img {
    margin: 0;
    padding: 0;
    width: 55px;
    animation: MoveUpDown 1.5s infinite;
  }
  @keyframes MoveUpDown {
    0%,
    50%100% {
      transform: translateY(0%);
    }
    30%,
    75% {
      transform: translateY(10%);
    }
  }
`;
const CarNameInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  font-size: 1.25rem;
`;
const BtnComponents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FirstButton = styled.div`
  text-align: center;
  background: black;
  padding: 10px;
  width: 200px;
  color: white;
  opacity: 0.75;
  border-radius: 10px;
  margin: 10px;
  text-transform: Uppercase;
  cursor: pointer;
`;
const SecondButton = styled(FirstButton)`
  background:white;
  opaciity:0.85;
  color:black;
`
const CarName = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;
const CarDesc = styled.div``;
const Content = styled.div`
  
  background-image: ${props=>`url("images/${props.img}")`};
  background-size: cover;
  background-position: center;
  padding: 2px;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const CarButtons=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  @media screen and (min-width: 600px) {
    flex-direction:row;
  }
`
export default Section;
