import { useRef } from 'react';
import api from '../../services/api'

import React from 'react';
import {
  Title,
  Container,
  TopBackground,
  Form,
  ContainerInputs,
  Input,
  Button,
  InputLabel
} from "./styles";
import UsersImage from '../../assets/users.png';

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: inputAge.current.value,
      name: inputName.current.value
    })

    console.log(data)
  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="Users" />
      </TopBackground>
      <Form>
        <Title>Cadastro De Usuários</Title>
        <ContainerInputs>
          
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do Usuário" ref={inputName}/>
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do Usuário" ref={inputAge}/>
            </div>
            
          </ContainerInputs>

          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" ref={inputEmail}/>
          </div>

      
        <Button type="button" onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  );
}

export default Home;
