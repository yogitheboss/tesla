import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <Copyright>
        <Text>Copyright 2022 Tesla Motors</Text>
        <Text>Privacy & Legal</Text>
        <Text>Vehicle Recalls</Text>
        <Text>Contact</Text>
        <Text>Careers</Text>
        <Text>News</Text>
        <Text>Engine</Text>
        <Text>Locations</Text>
    </Copyright>
  )
}
const Copyright=styled.div`
display:flex;
align-items:center;
flex-wrap:wrap;
font-size: 0.75rem;
justify-content:center;
margin-bottom:10vh;
`
const Text=styled.div`
margin:10px;
`
export default Footer