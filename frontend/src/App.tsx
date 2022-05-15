import Button from "@mui/material/Button";
import styled from "styled-components"
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <Div className="App">
      <Header />
      <Main />
      <Button
        variant="contained"
        onClick={() => {
          alert('here');
        }}
      >
        GO WASAK
      </Button>
    </Div>
  );
};

export default App;

const Div = styled.div`
  text-align: center;
`;
