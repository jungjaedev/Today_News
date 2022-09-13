import React from 'react';
import { Routes, Route } from "react-router-dom"
import Main from './Pages/Main';
import Container from './Structure/Container';


const App = () => {
  return (
    <Container>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </Container>
  )
}

export default App;