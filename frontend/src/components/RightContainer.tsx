import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import Board from './Board';

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
        <Board />
      </Container>
	);
};
export default RightContainer;
