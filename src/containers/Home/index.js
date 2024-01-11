import React, { useState, useRef} from "react";

import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'


import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  

} from "./styles"

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  //UM ESTADDO NO REACT É IMUTÁVEL
  async function addNewUser() {

   const {data: newUsers} =  await axios.post('http://localhost:3001/users',
   {name:inputName.current.value, age:inputAge.current.value})

    setUsers([...users, newUsers ])


    }



  //REACT HOOK => useEffect (efeito colateral)
  //spread operato que é os ...

 

  return (
    <Container>
      <Image alt='logo-imagem' src={People} />
      <ContainerItens>
        <H1>Hello!</H1>
        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}> Cadastrar < img alt="seta" src={Arrow} /></ Button>
        
      </ContainerItens>
    </Container>
  );
}

export default App


