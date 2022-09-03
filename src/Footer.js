import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <Container>
      <Contact>
        <ul>
          <li><strong>Zapraszamy do kontaktu:</strong></li>
          <li><b>Tel.</b> 123 456 789 Kuba</li>
          <li><b>Tel.</b> 123 456 789 Arek</li>
          <li><b>Tel.</b> 123 456 789 Jacek</li>
          <li><b>Tel.</b> 123 456 789 Monika</li>
          <li><b>Tel.</b> 123 456 789 Rafał</li>
        </ul>
        
        
      </Contact>
      <Contact>
        <ul>
          <li><strong>Adres:</strong></li>
          <li>CAR-IMPORT</li>
          <li>ul. Frontowa 3/74</li>
          <li>12-345 Poznań</li>
        </ul>
        
        
        
      </Contact>
      <Contact>
      <ul>
          <li><strong>Godziny otwarcia:</strong></li>
          <li>Poniedziałek - Piątek 8:00 - 16:00</li>
          <li>Sobota - 10:00 - 15:00</li>
          <li>Przed wizytą prosimy o telefon.</li>
        </ul> 
        
      </Contact>
      <Bottom>
        <h2>
         <span> &copy; Copyright Patryk Ryczek</span>
        </h2>
      </Bottom>
    </Container>
    
  )
}

export default Footer

const Container = styled.div`
  display: flex;
  height: 30vh;
  background-color: #FFBE7BFF;
  padding-top: 40px;
  align-items: flex-start;
  flex-wrap: wrap;

  h2 {
    font-size: 14px;
    width: 100%; 
    text-align: center; 
    border-bottom: 1px solid #000; 
    line-height: 0.1em;
 } 
 
 h2 span { 
     background: #FFBE7BFF; 
     padding:0 5px; 
 }

 ul {
  list-style-type: none;
 }

 li {
  text-align: justify;
  padding: 3px;
 }

`

const Contact = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 33%;
`

const Bottom = styled.div`
  flex: 100%;
`