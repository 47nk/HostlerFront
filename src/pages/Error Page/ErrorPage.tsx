import React from 'react';

import error404 from '@assets/images/common/404-error.webp';
import error500 from '@assets/images/common/error-page.webp';
import { Button } from '@components';
import errorData from '@mockupData/errorPageData.json';
import { Typography } from '@mui/material';

import { ErrorPageProps } from './ErroPage.types';
import { ErrorIcon, Wrapper } from './ErrorPage.styles';

export const ErrorPage: React.FC<ErrorPageProps> = ({ errorCode = '404' }) => {
	let errorDataForCode = errorData.find(
		(error: { errorCode: string }) => error.errorCode === errorCode,
	);

	if (!errorDataForCode) {
		errorDataForCode = {
			errorCode: '500',
			image: 'error-page.webp',
			title: 'Something has gone seriously wrong',
			message:
				'It’s always time for a coffee break We should be back by the time you finish your coffee.',
			buttonLabel: 'Go Back Home',
		};
	}

	const { image, title, message, buttonLabel } = errorDataForCode;
	const imageMapping: { [key: string]: string } = {
		'404-error.webp': error404,
		'error-page.webp': error500,
	};

	const imagePath = imageMapping[image] || error500;

	return (
		<Wrapper>
			<ErrorIcon src={imagePath} alt={`Error ${errorCode} icon`} />
			<Typography variant="h2">{title}</Typography>
			<Typography variant="body1" color="textSecondary">
				{message}
			</Typography>
			<Button onClick={() => (window.location.href = '/')}>
				{buttonLabel}
			</Button>
		</Wrapper>
	);
};
