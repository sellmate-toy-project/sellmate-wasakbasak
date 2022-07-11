import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  ToggleButton,
  ToggleButtonGroup
} from '@mui/material';
import { MouseEvent, useState } from 'react';
interface DialogProps {
	open: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
	actionChildren: React.ReactNode;
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
	toggleBtn: {
		'& .Mui-selected': {
			backgroundColor: 'transparent !important',
		},
		'& .MuiToggleButton-root:hover': {
			backgroundColor: 'transparent !important',
		},
	},
}));
const ModalLayout = ({
	title,
	open,
	onClose,
	children,
	changeFloor,
	actionChildren,
}: DialogProps) => {
	const classes = useStyles();
	// user 정보에 따라 받기
	const [btnValue, setbtnValue] = useState('3F');
	const handleChange = (event: MouseEvent<HTMLElement>, newValue: string) => {
		if (newValue !== null) {
			setbtnValue(newValue);
			changeFloor(newValue);
		}
	};
	const handleClose = () => {
		onClose();
		// value reset
		setbtnValue('3F');
	};

	return (
		<Dialog
			onBackdropClick={handleClose}
			open={open}
			className={classes.dialog}>
			<DialogTitle
				className={classes.dialogTitle}
				sx={{ display: 'flex', justifyContent: 'space-between' }}>
				{title}
				<ToggleButtonGroup
					value={btnValue}
					onChange={handleChange}
					exclusive={true}
					className={classes.toggleBtn}
					color='primary'
					sx={{ border: 'none' }}>
					<ToggleButton
						sx={{ border: 'none', backgroundColor: 'transparent' }}
						value='3F'
						disableFocusRipple
						disableRipple>
						3F
					</ToggleButton>
					<ToggleButton
						sx={{ border: 'none', backgroundColor: 'transparent' }}
						value='5F'
						disableFocusRipple
						disableRipple>
						5F
					</ToggleButton>
					<ToggleButton
						sx={{ border: 'none', backgroundColor: 'transparent' }}
						value='11F'
						disableFocusRipple
						disableRipple>
						11F
					</ToggleButton>
				</ToggleButtonGroup>
				{/* <IconButton aria-label='close' onClick={onClose}>
					<CloseIcon  />
				</IconButton> */}
			</DialogTitle>
			<DialogActions sx={{justifyContent: 'space-between'}}>{actionChildren}</DialogActions>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	);
};

export default ModalLayout;
