import { Box, Container } from '@mui/material';

interface Props {
	children: React.ReactNode;
}

const CenteredLayout = (props: Props) => {
	const { children } = props;
	return (
		<Container
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					height: '100%',
					justifyContent: 'center',
				}}>
				{children}
			</Box>
		</Container>
	);
};

export default CenteredLayout;
