import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRef, useState } from 'react';
interface DropdownProps {
	options: Array<string>;
}
const theme = createTheme({
	palette: {
		primary: {
			main: '#8C8C8C',
		},
		secondary: {
			main: 'rgba(0, 0, 0, 0)',
		},
	},
});
export default function SplitButton({ options }: DropdownProps) {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
		setOpen(false);
		console.info(`You clicked ${options[index]}`);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	return (
		<ThemeProvider theme={theme}>
			<ButtonGroup
				variant='outlined'
				ref={anchorRef}
				aria-label='split button'
				sx={{
					ml: '0 !important',
					backgroundColor: 'white',
				}}>
				<Button
					size='small'
					variant='text'
					disableFocusRipple
					disableElevation
					disableRipple
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-label='select merge strategy'
					aria-haspopup='menu'
					onClick={handleToggle}
					sx={{
						p: '8px 16px',
						border: '1px solid #E0E0E0',
						borderRadius: '8px',
						width: '142px',
						height: '42px',
						justifyContent: 'space-between',
					}}>
					<span
						style={{
							color: '#484848',
							width: '84px',
							height: '26px',
							lineHeight: '26px',
							fontSize: '16px',
							fontWeight: 400,
						}}>
						{options[selectedIndex]}
					</span>
					<KeyboardArrowDownRoundedIcon
						sx={{ color: 'primary', ml: '10px', fontSize: '16px' }}
					/>
				</Button>
			</ButtonGroup>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
				sx={{ width: '142px' }}>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom' ? 'center top' : 'center bottom',
							boxShadow: 'none',
						}}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									id='split-button-menu'
									autoFocusItem
									sx={{
										p: '0 !important',
										border: '1px solid #E0E0E0',
										borderRadius: '8px',
									}}>
									{options.map((option, index) => (
										<MenuItem
											key={index}
											disabled={index === 2}
											selected={index === selectedIndex}
											onClick={(event) => handleMenuItemClick(event, index)}>
											{option}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</ThemeProvider>
	);
}
