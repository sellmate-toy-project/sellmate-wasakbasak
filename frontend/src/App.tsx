import Button from "@mui/material/Button";
import styled from "styled-components"
import Header from "./components/Header";
import Main from "./components/Main";
import FlipCard from "./components/FlipCard";

const App = () => {
  return (
    <Div className="App">
      <Header />
      <FlipCard
        frontLeftImage="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220613_1095%2Fupload_1655099079990EKeR0.jpg%22&type=nf464_260"
        frontRightImage="https://s.pstatic.net/dthumb.phinf/?src=%22https%3A%2F%2Fs.pstatic.net%2Fstatic%2Fwww%2Fmobile%2Fedit%2F20220616_1095%2Fupload_1655361001541EsLif.jpg%22&type=nf340_228"
      />
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
