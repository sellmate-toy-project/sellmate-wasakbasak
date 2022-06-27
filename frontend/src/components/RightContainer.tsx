import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Alert from './Alert';
import Board from './Board';
import NewArrival from './NewArrival';


const useStyles = makeStyles((theme) => ({
  padding: {
    padding: '0 !important',
  },
  size: {
    width: '405px !important',
  },
}));

const RightContainer = () => {
	const classes = useStyles();

	return (
			<Container disableGutters={false} className={[classes.padding, classes.size].join(' ')}>
        <Alert />
        <NewArrival />
        <Board />
      </Container>
	);
};
export default RightContainer;
