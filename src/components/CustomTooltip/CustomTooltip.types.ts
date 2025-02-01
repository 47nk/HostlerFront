import { TooltipProps } from '@mui/material';

export type CustomToolTipProps = {
	/**
	 * optional value that accepts two numeric values as array that sets the position of tooltip
	 */
	offset?: [number, number];
} & TooltipProps;
