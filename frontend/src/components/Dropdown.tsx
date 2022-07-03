import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
import { Fragment, useRef, useState } from 'react';

interface DropdownProps {
	options: Array<string>;
}
export default function SplitButton({ options }: DropdownProps) {
	const [open, setOpen] = useState(false);
	const anchorRef = useRef<HTMLDivElement>(null);
	const [selectedIndex, setSelectedIndex] = useState(1);

	const handleClick = () => {
		console.info(`You clicked ${options[selectedIndex]}`);
	};

	const handleMenuItemClick = (
		event: React.MouseEvent<HTMLLIElement, MouseEvent>,
		index: number
	) => {
		setSelectedIndex(index);
		setOpen(false);
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
		<Fragment>
			<ButtonGroup
				variant='contained'
				ref={anchorRef}
				aria-label='split button'>
				<Button onClick={handleClick}>{options[selectedIndex]}</Button>
				<Button
					size='small'
					aria-controls={open ? 'split-button-menu' : undefined}
					aria-expanded={open ? 'true' : undefined}
					aria-label='select merge strategy'
					aria-haspopup='menu'
					onClick={handleToggle}>
					<ArrowDropDownIcon />
				</Button>
			</ButtonGroup>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom' ? 'center top' : 'center bottom',
						}}>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id='split-button-menu' autoFocusItem>
									{options.map((option, index) => (
										<MenuItem
											key={option}
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
		</Fragment>
	);
}
