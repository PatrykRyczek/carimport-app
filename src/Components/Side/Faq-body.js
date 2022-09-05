import React from "react";
import styled from "styled-components";

function Faqbody() {
  return (
    <Container>
      <h1>Najczęściej zadawane pytania-FAQ</h1>
      <Questions>
        <strong>Lorem ipsum dolor sit amet consectetur ?</strong>
        <p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          labore possimus magnam. Molestias facere harum ipsam odit consequatur
          aliquid esse eius alias adipisci praesentium reiciendis, nesciunt
          inventore architecto. Debitis, autem!
        </p>
        <hr />
        <strong>Lorem ipsum dolor sit amet consectetur ?</strong>
        <p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          labore possimus magnam. Molestias facere harum ipsam odit consequatur
          aliquid esse eius alias adipisci praesentium reiciendis, nesciunt
          inventore architecto. Debitis, autem!
        </p>
        <hr />
        <strong>Lorem ipsum dolor sit amet consectetur ?</strong>
        <p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          labore possimus magnam. Molestias facere harum ipsam odit consequatur
          aliquid esse eius alias adipisci praesentium reiciendis, nesciunt
          inventore architecto. Debitis, autem!
        </p>
        <hr />
        <strong>Lorem ipsum dolor sit amet consectetur ?</strong>
        <p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          labore possimus magnam. Molestias facere harum ipsam odit consequatur
          aliquid esse eius alias adipisci praesentium reiciendis, nesciunt
          inventore architecto. Debitis, autem!
        </p>
        <hr />
        <strong>Lorem ipsum dolor sit amet consectetur ?</strong>
        <p>
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          labore possimus magnam. Molestias facere harum ipsam odit consequatur
          aliquid esse eius alias adipisci praesentium reiciendis, nesciunt
          inventore architecto. Debitis, autem!
        </p>
        <hr />
      </Questions>
    </Container>
  );
}

export default Faqbody;

const Container = styled.div`
  text-align: justify;
  height: 100vh;
  background-color: antiquewhite;

  h1 {
    text-align: center;
    padding: 50px 0;
  }
`;

const Questions = styled.div`
  margin: auto;
  width: 75%;

  strong {
    font-size: 20px;
  }

  p {
    font-size: 17px;
  }

  hr {
    opacity: 0.5;
    margin: 25px 0;
  }
`;
