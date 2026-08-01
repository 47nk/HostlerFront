import { Tooltip } from '@mui/material';

import { CustomToolTipProps } from './CustomTooltip.types';

export const CustomTooltip = ({
	offset = [0, 0],
	title,
	children,
	...props
}: CustomToolTipProps) => {
	const popperModifiers = [
		{
			name: 'offset',
			options: {
				offset,
			},
		},
	];
	return (
		<Tooltip
			title={title}
			{...props}
			slotProps={{
				popper: {
					modifiers: popperModifiers,
				},
			}}>
			{children}
		</Tooltip>
	);
};
