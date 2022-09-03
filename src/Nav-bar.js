import React from 'react'
import styled from "styled-components"

function Navbar() {
  return (
    <Container>
      {/* dodac strony routerem */}
        <LeftNav>
            <span>Car-import</span>
        </LeftNav>
        <RightNav>
            <span>Nasze usługi</span>
            <span>Kalkulator</span>
            <span>FAQ</span>
            <span>O Nas</span>
            <span>Kontakt</span>
        </RightNav>
    </Container>
  )
}

export default Navbar

const Container = styled.div `
  min-height: 60px; 
  color: white;
  background-color: #293132;
  display: flex;
  position:fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
const LeftNav = styled.div `
    width: 20%;
    font-size: 2rem;
    text-transform: uppercase;
`

const RightNav = styled.div `
    display: flex;
    justify-content: space-evenly;
    width: 50%;

    span:hover {
      color: red;
      cursor: pointer;
      transition: 0.5s;
    }
  `
