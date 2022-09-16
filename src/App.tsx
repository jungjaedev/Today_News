import { useEffect } from 'react';
import { checkLogin } from './lib/validate';
import Main from './Pages/Main';
import Container from './Structure/Container';


const App = () => {
  useEffect(() => {
    checkLogin();
  }, [])
  
  return (
    <Container>
      <Main />
    </Container>
  )
}

export default App;