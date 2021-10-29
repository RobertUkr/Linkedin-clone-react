import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1148px;
  margin: auto;
`;
export const Nav = styled.nav`
  height: 68px;
  padding: 12px 10px 16px 10px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
`;
export const NavLogo = styled(Link)`
  img {
    width: 100%;
    max-width: 135px;
    height: 34px;
  }
  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;
export const Join = styled(Link)`
  font-size: 18px;
  padding: 10px 12px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  transition-duration: 167ms;
  font-weight: 600;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
export const SignIn = styled(Link)`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 18px;
  font-weight: 600;
  outline-width: 2px;
  padding: 0 16px;
  height: 40px;
  line-height: 40px;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    box-shadow: inset 0 0 0 2px #0a66c2;
  }
`;
export const Section = styled.div``;
export const Hero = styled.div`
  width: 100%;

  h1 {
    width: 55%;
    font-size: 56px;
    padding: 40px 42px 0 0;
    color: #8f5849;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: center;
      font-size: 20px;
      width: 100%;
      line-height: 2;
      padding: 0 40px;
    }
  }
  img {
    /* z-index: -1; */
    width: 700px;
    height: 670px;
    position: absolute;
    bottom: -2px;
    right: -150px;

    @media (max-width: 768px) {
      top: 230px;
      width: initial;
      height: initial;
      position: initial;
    }
  }
`;
export const Form = styled.div`
  margin-top: 100px;
  width: 408px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
export const Google = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 55px;
  width: 100%;
  cursor: pointer;
  border-radius: 28px;
  box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 8%);
  vertical-align: middle;
  z-index: 0;
`;
