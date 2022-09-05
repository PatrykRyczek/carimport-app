import React from "react";
import styled from "styled-components";
import img from "../../images/about-car.jpg";

function AboutBody() {
  return (
    <Container>
      <About>
        <h1>car-import sprowadzamy auta z usa i kanady</h1>
        <Description>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et fuga
            labore placeat itaque aliquid doloribus sed earum facere dolorem,
            unde qui similique a expedita corporis soluta molestiae.
            Reprehenderit, architecto repudiandae.
          </span>
          <br />
          <span>
            Laudantium nemo non ipsam aperiam blanditiis porro suscipit impedit
            expedita adipisci sapiente sed voluptates vel, ad id! Voluptate
            magnam ipsum nesciunt adipisci? Laboriosam reiciendis officiis ex
            omnis exercitationem soluta tempore? Quas labore minima deserunt
            molestias impedit. Ullam cupiditate voluptatibus, est reiciendis,
            voluptatem repellendus maiores ducimus iste doloribus delectus rem
            ut, quam aut corporis animi commodi. <br />
            Explicabo earum nam dolorum ullam! Corrupti eos praesentium,
            asperiores natus recusandae quo necessitatibus dicta quidem
            cupiditate. Harum excepturi aliquam voluptatibus, nemo in culpa non
            quas beatae asperiores molestiae id aspernatur sint nulla optio,
            quaerat suscipit? Veniam fugit doloribus, iure perspiciatis vel sit
            illo similique et maiores illum harum! Minus quos tempora
            reprehenderit, tenetur in dolores iste optio, et consequatur
            corporis ab ad temporibus vel hic. Ut, esse! Corporis nulla, fugit
            sequi exercitationem suscipit accusamus commodi reiciendis laborum
            eligendi, iste natus delectus libero saepe temporibus maiores harum
            distinctio omnis sit eius perspiciatis. <br />
            Sunt suscipit recusandae a! Sunt ex saepe alias amet quae minima
            accusantium accusamus debitis perspiciatis, molestias odio
            doloremque quia iste magnam sed ipsum officiis aut, distinctio
            omnis. <br />
            Sequi illo dolorem quae a qui beatae? Iure doloremque veniam minus
            laboriosam quae minima eveniet autem, dolor commodi nam molestiae,
            eaque accusamus provident illo eius ullam! Incidunt fuga corrupti
            tempora saepe quia impedit nostrum, dicta omnis obcaecati! Non
            numquam dolorem fugit magnam sint vero facilis aliquam dolores
            assumenda saepe tempore esse, illum fugiat quos iusto aut sunt
            dicta. <br />
            Ipsum expedita illo molestiae rem quibusdam fugit, libero
            distinctio. Ut iste cupiditate maxime corrupti recusandae itaque
            nobis a officiis, quaerat consequatur ducimus quae labore, est
            aliquid debitis quia eius perspiciatis error esse explicabo sequi
            provident repudiandae cum! Odio, commodi.
          </span>
        </Description>
        <Img></Img>
      </About>
    </Container>
  );
}

export default AboutBody;

const Container = styled.div`
  justify-content: center;
  align-items: flex-start;
  display: flex;
  height: 100vh;
  background-color: antiquewhite;
`;

const About = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: justify;
  justify-content: center;

  h1 {
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    padding: 50px 0;
  }
`;

const Img = styled.div`
  margin-left: 15px;
  height: 700px;
  width: 40%;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Description = styled.div`
  width: 40%;
`;
