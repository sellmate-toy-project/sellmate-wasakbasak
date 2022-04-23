import Button from '@mui/material/Button';
import styled from 'styled-components';
import Header from './components/Header';

const App = () => {
	return (
		<Div className='App'>
			<Header />
			<Button variant='contained'>Hello World</Button>
		</Div>
	);
}

export default App;

const Div = styled.div`
	text-align: center;
`;
