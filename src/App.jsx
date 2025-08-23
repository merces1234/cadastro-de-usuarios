import { Container, TopBackground, Form, Input, InputLabel, ContainerInput, Button, Title } from './styles';

function Home() {

  return (
    <Container>
      <TopBackground>
        <img src="" alt="" />
      </TopBackground>

      <Form >
        <Title>Cadastrar Usuário</Title>

        <ContainerInput>
          <div >
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
          </div>

          <div>
            <InputLabel>
              idade<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do Usuário' />
          </div>

        </ContainerInput>

        <Button type='submit'>Cadantra Usuário</Button>

      </Form>
    </Container>
  )
}

export default Home
