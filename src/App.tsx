import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"
import { checkLogin } from './lib/validate';
import Main from './Pages/Main';
import Container from './Structure/Container';


const App = () => {
  useEffect(() => {
    checkLogin();
  }, [])
  
  return (
    <Container>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </Container>
  )
}

export default App;