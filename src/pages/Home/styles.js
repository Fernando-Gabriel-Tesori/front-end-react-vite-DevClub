import styled from 'styled-components';

export const Container = styled.div`
  background-color: #181f36;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  height: 100vh;
`;

export const TopBackground = styled.div`
  background: linear-gradient(to right, #fe7e5d, #7f3841);
  height: 30vh;
  width: 90vw;
  max-width: 800px;
  border-radius: 30px;
  
  display: flex;
  align-items: center;
  justify-content: center;


box-shadow: 0px 4px 6px rgba(208, 120, 120, 0.8);

  img{
    max-width: 100%;
    max-width:100%;
  }
`;

export const Form = styled.form`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1.0);
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;


export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 12px 20px;
  outline: none;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #fe7e5d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1.0);

  &:hover {
    background-color: #7f3841;
  }
`;

export const InputLabel = styled.label`
  font-weight: bold;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
 

  span{
    color: #ef4f4f;
    font-weight:bold;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font: 38px;
  margin-bottom: 20px;
  color: #ffffff;
  font-style: normal;
  font-weight: 600;
  border-radius: 40px;
`;
