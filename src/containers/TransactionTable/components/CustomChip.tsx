import { Chip } from '@mui/material';
import { CustomTooltip } from 'components';

import { CustomChipProps } from './Component.types';

export const CustomChip: React.FC<CustomChipProps> = ({ label }) => {
	const getChipColor = (label: string) => {
		switch (label) {
			case 'complete':
				return 'success';
			case 'pending':
				return 'warning';
			case 'Cancelled':
				return 'error';
			default:
				return 'default';
		}
	};

	return (
		<CustomTooltip title={label}>
			<Chip
				color={getChipColor(label)}
				sx={{
					borderRadius: 2,
					paddingInline: 4,
					minWidth: '12rem',
					textTransform: 'capitalize',
					fontWeight: '500',
				}}
				label={label}
			/>
		</CustomTooltip>
	);
};
