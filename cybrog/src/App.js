import React from "react";
import { Header, Container, Footer } from "./Components/index";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        {/* Inside this component we can write as much as we could of component "containerss" */}
        Components
      </Container>
      <Footer />
    </>
  );
};

export default App;
