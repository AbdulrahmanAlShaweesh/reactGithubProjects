import React from "react";
import { Header, Container, Footer, Hero } from "./Components/index";
import './App.css'; 

const App = () => {
  return (
    <>
      <Header />
      <Container>
        {/* Inside this component we can write as much as we could of component "containerss" */}
          <Hero/>
      </Container>
      {/* <Footer /> */}
    </>
  );
};

export default App;
