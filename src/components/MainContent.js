import React from "react";
import Section from "./Section";
import styled from "styled-components";

function MainContent() {
  return (
    <Sections>
      <SectionContainer>
        <Section
          title="Model-S"
          Desc={"Order Online for Touchless Delivery"}
          image={"model-s.jpg"}
          btn1={"custom car"}
          btn2={"existing inverntory"}
        />
      </SectionContainer>
      <SectionContainer>
        <Section
          title="Model 3"
          Desc={"Order Online for Touchless Delivery"}
          image={"model-3.jpg"}
          btn1={"custom car"}
          btn2={"existing inverntory"}
        />
      </SectionContainer>
      <SectionContainer>
        <Section
          title="Model-X"
          Desc={"Order Online for Touchless Delivery"}
          image={"model-x.jpg"}
          btn1={"custom car"}
          btn2={"existing inverntory"}
        />
      </SectionContainer>
      <SectionContainer>
        <Section
          title="Model-Y"
          Desc={"Order Online for Touchless Delivery"}
          image={"model-y.jpg"}
          btn1={"custom car"}
          btn2={"existing inverntory"}
        />
      </SectionContainer>
      <SectionContainer>
        <Section
          title="Solar Panels"
          Desc={"Lowest Cost Solar Panels in America"}
          image={"solar-panel.jpg"}
          btn1={"custom car"}
          btn2={"existing inverntory"}
        />
      </SectionContainer>
      <SectionContainer>
        <Section
          title="Solar for New Roofs"
          Desc={"Solar Roof Costs Less Than a New Roof"}
          image={"solar-roof.jpg"}
          btn1={"Order now"}
          btn2={"Learn more"}
        />
      </SectionContainer>
      <SectionContainer>
        <Section
          title="Accessories"
          Desc={""}
          image={"accessories.jpg"}
          btn1={""}
          btn2={""}
        />
      </SectionContainer>
    </Sections>
  );
}

const Sections = styled.div`
  display: flex;
  flex-direction:column;
  overflow-x:hidden;
`;
const SectionContainer = styled.div`
  

`;
export default MainContent;
