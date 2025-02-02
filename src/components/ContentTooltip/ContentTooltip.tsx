import React from 'react';

import { Box, Tooltip, TooltipProps } from '@mui/material';

interface TooltipContentProps {
	tooltipContent: React.ReactNode; // Content to be displayed inside the tooltip
}

const TooltipContent: React.FC<TooltipContentProps> = ({ tooltipContent }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				color: 'black',
				backgroundColor: 'white', // Tooltip background color
				padding: '8px',
				borderRadius: '8px',
				boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
			}}>
			{tooltipContent}
		</Box>
	);
};

type ContentTooltipProps = {
	children: React.ReactNode;
} & TooltipProps;

export const ContentTooltip = ({
	children,
	title,
	...props
}: ContentTooltipProps) => {
	return (
		<Tooltip
			{...props}
			title={<TooltipContent tooltipContent={title} />}
			arrow
			PopperProps={{
				modifiers: [
					{
						name: 'preventOverflow',
						options: {
							boundary: 'window',
						},
					},
				],
			}}
			componentsProps={{
				tooltip: {
					sx: {
						backgroundColor: 'white', // Ensures tooltip background is white
						padding: 0, // Optional: Remove extra padding if necessary
						zIndex: 9999, // Ensure tooltip is on top
						display: 'block', // Force display of the tooltip block-level
						visibility: 'visible', // Make sure the tooltip is visible
					},
				},
				arrow: {
					sx: {
						'&::before': {
							backgroundColor: 'white', // Ensures arrow is white
						},
					},
				},
			}}>
			{children}
		</Tooltip>
	);
};
