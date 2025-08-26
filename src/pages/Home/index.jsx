import { useRef } from 'react'
import api from '../../services/api'

import { Container, 
  TopBackground, 
  Form, 
  Input, 
  InputLabel, 
  ContainerInput, 
  Button, 
  Title 
} from './styles';

import UsersImage from '../../assets/users.png'

function Home() {
  const inputName = useRef ()
  const inputAge = useRef ()
  const inputEmail = useRef ()

    async function registerNewUser() {
      const data = await api.post('/usuarios', {
        email: inputEmail.current.value,
        age: parseInt (inputAge.current.value),
        name: inputName.current.value
      })

      console.log(data)
    }
    
  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt='Imagem-usuarios' />
      </TopBackground>

      <Form >
        <Title>Cadastrar Usuário</Title>

        <ContainerInput>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do Usuário' ref={inputName}/>
            </div>

            <div>
              <InputLabel>
                idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do Usuário' ref={inputAge}/>
            </div>
          </ContainerInput>

          <div style={{ width: '100%' }}>
            <InputLabel>
              idade<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail}/>
          </div>

        <Button type='button' onClick={registerNewUser}>Cadantra Usuário</Button>

      </Form>
    </Container>
  )
}

export default Home
