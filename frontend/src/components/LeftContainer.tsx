import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import RecentOrder from './RecentOrder';
import User from './User';
const useStyles = makeStyles((theme) => ({
  padding: {
    padding: '0 !important',
  },
  size: {
    width: '400px !important',
  },
}));

const LeftContainer = () => {
	const classes = useStyles();

	return (
			<Container disableGutters={false} className={[classes.padding, classes.size].join(' ')}>
				<User />
				<RecentOrder />
			</Container>
	);
};
export default LeftContainer;
