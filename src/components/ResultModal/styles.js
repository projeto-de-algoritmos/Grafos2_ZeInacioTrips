import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 21, 49, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Courier New', monospace; // Set the font here
`;

export const Container = styled.div`
  width: 30%;
  height: 40%;
  border-radius: 12px;
  background-color: #333333; // Changed color to #333333
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  
  h1 {
    display: inline-block;
    text-align: left;
    margin-top: 10px;
    color: white; // Adjusted text color to white for visibility on dark background
  }
`;

export const TitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
    color: white; // Adjusted text color to white for visibility on dark background
  }
`;

export const Body = styled.div`
  flex: 50%;
  display: flex;
  justify-content: left;
  align-items: left;
  font-size: 1.3rem;
  text-align: left;
  overflow: auto;
  padding: 20px; 

  p {
    color: white; 
    color: white;
    white-space: pre-line;
  }
`;

export const Footer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: left;
  align-items: left;

  button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: crimson;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
  }
`;
