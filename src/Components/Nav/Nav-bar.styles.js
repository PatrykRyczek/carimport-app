import styled from "styled-components";

export const Container = styled.div`
  min-height: 60px;
  color: white;
  background-color: #293132;
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  a {
    text-decoration: none;
    color: white;
  }
`;
export const LeftNav = styled.div`
  width: 20%;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;

  span:hover {
    color: red;
    cursor: pointer;
    transition: 0.5s;
  }
`;
