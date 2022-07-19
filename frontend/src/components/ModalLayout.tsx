import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
interface DialogProps {
	open: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	actionChildren?: React.ReactNode;
	titleChildren?: React.ReactNode;
}
const useStyles = makeStyles((theme) => ({
	dialog: {
		'& .MuiDialog-container': {
			'& .MuiDialog-paper': {
				minWidth: '800px',
				minHeight: '940px',
        borderRadius: '20px',
			},
		},
	},
	dialogTitle: {
    '& > .title': {
      fontSize: '28px',
      fontWeight: 700,
      minWidth: '49px',
    },
	},

}));
const ModalLayout = ({
	title,
	open,
	onClose,
	children,
  titleChildren,
	actionChildren,
}: DialogProps) => {
	const classes = useStyles();
	// user 정보에 따라 받기

	const handleClose = () => {
		onClose();
		// value reset
		// setbtnValue('3F');
	};

	return (
		<Dialog
			onBackdropClick={handleClose}
			open={open}
			className={classes.dialog}>
			<DialogTitle
				className={classes.dialogTitle}
        sx={{display: 'flex'}}
      >
        <div className='title'>{title}</div>
				{titleChildren}
			</DialogTitle>
			<DialogActions sx={{p: '0'}}>{actionChildren}</DialogActions>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default ModalLayout;
