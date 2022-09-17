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
  width: 40%;
  font-size: 2rem;
  text-transform: uppercase;

  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }

  @media (max-width: 820px) {
    font-size: 1.25rem;
  }
  @media (max-width: 400px) {
    font-size: 1rem;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;
