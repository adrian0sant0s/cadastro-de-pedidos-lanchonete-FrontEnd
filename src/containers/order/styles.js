import styled from "styled-components";

export const Container = styled.div`
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  padding: 5px;

  min-height: 100vh;
`;
export const ContainerItens = styled.div`
  background: #0a0a10;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 36px;
  height: auto;
`;
export const Image = styled.img`
  margin-top: 10px;
`;
export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;

  text-align: center;

  color: #ffffff;

  margin: 25px 0 76px 0;
`;

export const Li = styled.li`
  width: 342px;
  height: 101px;

  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;

  border: none;

  margin-bottom: 50px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  p {
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 1;
    }
  }
`;
export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: rgba(255, 255, 255, 0.14);
  border: none;

  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;

  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;
