import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  ButtonGroup,
  Dialog,
  DialogContent,
  DialogTitle
} from '@mui/material';

interface DialogProps {
	open: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	changeFloor: (floor: string) => void;
}
const useStyles = makeStyles((theme) => ({
	dialog: {
		'& .MuiDialog-container': {
			'& .MuiDialog-paper': {
				minWidth: '800px',
				minHeight: '940px',
			},
		},
	},
	dialogTitle: {
		fontSize: '14px',
	},
	floorBtn: {
		'& .MuiButton-text': {
			borderRight: 'none !important',
		},
	},
}));
const ModalLayout = ({
	title,
	open,
	onClose,
	children,
	changeFloor,
}: DialogProps) => {
	const classes = useStyles();

	return (
		<Dialog onBackdropClick={onClose} open={open} className={classes.dialog}>
			<DialogTitle
				className={classes.dialogTitle}
				sx={{ display: 'flex', justifyContent: 'space-between' }}>
				{title}
				<ButtonGroup
					variant='text'
					disableRipple
					disableFocusRipple
					className={classes.floorBtn}>
					<Button variant='text' onClick={() => changeFloor('3F')}>
						3F
					</Button>
					<Button variant='text' onClick={() => changeFloor('5F')}>
						5F
					</Button>
					<Button variant='text' onClick={() => changeFloor('11F')}>
						11F
					</Button>
				</ButtonGroup>
				{/* <IconButton aria-label='close' onClick={onClose}>
					<CloseIcon  />
				</IconButton> */}
			</DialogTitle>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default ModalLayout;
