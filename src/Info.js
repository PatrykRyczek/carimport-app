import React from 'react'
import styled from 'styled-components'
import flag from './images/flag.jpg'

function Info() {
  return (
    <Container>
      <Header><h1>SPROWADZANIE AUT Z USA I KANADY   CAR-IMPORT</h1></Header>
      <Infobox>
        <h3> Nasze  <br/><span>usługi</span></h3>
        <p>Jesteśmy jednym z wiodących na polskim rynku importerów aut, motocykli i quadów z terenu USA oraz Kanady. Za pośrednictwem naszej strony internetowej Usaimport.pl otrzymasz kompleksową pomoc w sprowadzeniu samochodu ze Stanów Zjednoczonych.</p>
        <br/>
        <p><strong>Lorem ipsum dolor sit amet: </strong><br/> 
        <ul>
          <li> Totam natus</li>
          <li>Voluptatem aliquid </li>
          <li>consectetur adipisicing elit</li>
          <li>fugit repellendu</li>
          <li>accusamus alias</li>
          <li>aliquam molestiae </li>
        </ul>
        </p>
      </Infobox>
      <Infobox>
        <h3>Twoje  <br/><span>korzyści</span> </h3>
        <p>Import aut z USA & Kanady jest bardzo opłacalny. Samochody z Ameryki są bogato wyposażone, a ich ceny średnio o 30-50 % niższe niż w Polsce. Dzięki nam sprowadzenie auta z USA jest bezproblemowe i dostępne dla każdego. Samochody ze Stanów to bardzo ciekawa oferta dla osób, które za relatywnie nieduże pieniądze chcą cieszyć się luksusowym lub sportowym autem.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aliquid totam impedit, rerum perferendis voluptas officia vitae necessitatibus maxime commodi eligendi, accusamus alias quos distinctio sed ullam dolores iste quam.  </p>
      </Infobox>
      <Infobox>
        <h3>Pomoc <br/><span>i doradzctwo</span> </h3>
        <p>Oferujemy pomoc na każdym etapie importu samochodu ze Stanów Zjednoczonych. Pomagamy naszym Klientom wybrać odpowiedni egzemplarz oraz oszacować koszt naprawy.</p>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem aliquid totam impedit, rerum perferendis voluptas officia vitae necessitatibus maxime commodi eligendi, accusamus alias quos distinctio sed ullam dolores iste quam.
Eum repudiandae ipsum fugit repellendus aliquam molestiae deserunt tempora nihil, totam suscipit maiores recusandae. Iusto optio obcaecati aspernatur voluptate. Totam natus vero quaerat et aliquid amet repellendus saepe magnam eius.</p>
      </Infobox>
    </Container>
  )
}

export default Info

const Row = styled.div`
  display: block;
`

const Container = styled.div`
  max-width: 80% vw;
  margin: auto;
  height: 65vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url(${flag});
  background-repeat: no-repeat;
  background-size: cover;
 

  h3 {
    text-align: left;
    padding-bottom: 15px;
    font-size: 1.5em;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    text-align: justify;
  }

  span{
    color: white;
  }

  ul {
    margin: 5px;
    padding-left: 35px;
  }

  li::marker {
    color: black;
    font-size: 1.5em;
  }
`
const Header = styled.div`
  h1 {
    color: white;
  }
  margin: 25px;
  flex-basis: 100%;
`
const Infobox = styled.div`
  border-radius: 5%;
  padding: 30px;
  margin: 20px;
  max-width: 22%;
  background-color: #FFA351FF;
`