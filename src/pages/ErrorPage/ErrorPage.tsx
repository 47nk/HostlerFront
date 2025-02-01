import { Box, Typography } from '@mui/material';

import { Button } from '@components';

import { errorPageConfig } from './ErrorPage.config';
import { ContentContainer, ErrorImage, Wrapper } from './ErrorPage.styles';
import { ErrorPageProps } from './ErrorPage.types';

export const ErrorPage = ({ errorCode }: ErrorPageProps) => {
	/** STATES */
	const errorDataForCode = errorPageConfig[errorCode];
	const { image, title, message, buttonLabel } = errorDataForCode;

	return (
		<Wrapper>
			<ContentContainer>
				<ErrorImage>
					<Box component="img" src={image} alt={title} />
				</ErrorImage>
				<Typography variant="h2">{title}</Typography>
				<Typography variant="body1" color="textSecondary">
					{message}
				</Typography>
				<Button onClick={() => (window.location.href = '/')}>
					{buttonLabel}
				</Button>
			</ContentContainer>
		</Wrapper>
	);
};
