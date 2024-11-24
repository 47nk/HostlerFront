import { ReactNode } from 'react';

import { ButtonProps as MuiButtonProps } from '@mui/material';

export type ButtonProps = MuiButtonProps & {
	children: ReactNode;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
