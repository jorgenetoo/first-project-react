import React, { useState, useRef } from "react";

import axios from 'axios'

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,

} from "./styles"

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  //UM ESTADDO NO REACT É IMUTÁVEL
  async function addNewUser() {

    const data =  await axios.post('http://localhost:3001/users',
    {name:inputName.current.valeu, age:inputName.current.valeu})

   // setUsers([...users, { id: Math.random(), 
   //name: inputName.current.value, age: inputAge.current.value }])

    }
  //spread operato que é os ...

  function deleteUser(userId){
  const newUsers = users.filter(user => user.id !== userId);
  setUsers(newUsers)
;  }

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
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name}</p> - <p>{user.age}</p>
              <button onClick={()=>deleteUser(user.id)}> <img src={Trash} alt="lixeira" /> </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App


