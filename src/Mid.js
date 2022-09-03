import React from 'react'
import styled from 'styled-components'
import img from './images/mid-photo.png';


function Mid() {
  return (
    <Container>
        <Motto>
            {/* zrobic animacje */}
            <h1>Kupimy <br/> i podstawimy</h1>
            <h2>Pod dom Twoje wymarzone auto!</h2>
        </Motto>
    </Container>
  )
}

export default Mid

const Container = styled.div`
    background-color: #50d8d7;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display:flex;
    flex-direction:column;
    background-image: url(${img});
`
const Motto = styled.div`
    text-align: left;
    position: absolute;
    right: 5%;
    top: 15%;

    h1 {
        font-size: 50px;
        text-transform: uppercase;
        color: #AA0018;
    }
`