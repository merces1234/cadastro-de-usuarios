import { Container, 
  TopBackground, 
  Form, 
  Input, 
  InputLabel, 
  ContainerInput, 
  Button, 
  Title 
} from './styles';

import UsersImage from './assets/users.png'

function Home() {

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
              <Input type='text' placeholder='Nome do Usuário' />
            </div>

            <div>
              <InputLabel>
                idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do Usuário' />
            </div>
          </ContainerInput>

          <div style={{ width: '100%' }}>
            <InputLabel>
              idade<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do Usuário' />
          </div>

        <Button type='submit'>Cadantra Usuário</Button>

      </Form>
    </Container>
  )
}

export default Home
