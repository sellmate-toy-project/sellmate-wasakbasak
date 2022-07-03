import { makeStyles } from '@material-ui/core/styles';
import Close from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

interface DialogProps {
	open: boolean;
	onClose: () => void;
	title: string;
  children?: React.ReactNode;
}
const useStyles = makeStyles((theme) => ({
	dialogTitle: {
		fontSize: '14px',
	},
}));
const ModalLayout = ({ title, open, onClose, children }: DialogProps) => {
	const classes = useStyles();

	return (
		<Dialog  onClose={onClose} open={open}>
			<DialogTitle className={classes.dialogTitle}>
				{title}
				<IconButton aria-label='close' onClick={onClose}>
					<Close />
				</IconButton>
			</DialogTitle>
      {children}
		</Dialog>
	);
};

export default ModalLayout;