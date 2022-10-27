import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

  .active {
    display: none;
  }

  @media (max-width: 768px) {
    .active {
      display: flex;
    }
  }
`;
export const LeftNav = styled.div`
  padding-left: 15px;
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
    width: 70%;
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

export const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BurgerNav = styled.div`
  position: fixed;
  top: 60px;
  right: 0;
  height: 250px;
  background: gray;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: start;
  transform: ${(props) =>
    props.show ? `translateX(200)` : `translateX(100%)`};
  transition: transform 0.2s;
  z-index: 1;

  a {
    display: block;
    text-transform: uppercase;
    width: 100%;
  }

  ul {
    list-style-type: none;
    padding: 0 20px;
  }

  li {
    margin: 25px 0;
  }
`;
