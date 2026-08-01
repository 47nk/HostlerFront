import {
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableRow,
} from '@mui/material';

export const StyledTable = styled(Table)(({ theme }) => {
	const {
		typography: { pxToRem },
	} = theme;
	return {
		borderRadius: pxToRem(12),

		[tableCellClasses.stickyHeader]: {
			backgroundColor: 'red',
		},
	};
});
export const StyledTableCell = styled(TableCell)(({ theme }) => {
	const {
		palette: { grey, divider },
	} = theme;
	return {
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: grey[100],
			borderBottom: `1px solid ${divider}`,

			'&:first-of-type': {
				borderTopLeftRadius: '8px',
			},

			'&:last-of-type': {
				borderTopRightRadius: '8px',
			},
		},
		[`&.${tableCellClasses.body}`]: {
			border: `none`,
			backgroundColor: 'transparent',
		},
	};
});

export const StyledTableBody = styled(TableBody)(({ theme }) => {
	const {
		typography: { pxToRem },
	} = theme;
	return {
		maxHeight: pxToRem(350),
		overflow: 'scroll',
	};
});

export const StyledTableRow = styled(TableRow)(({ theme }) => {
	const {
		palette: { grey },
		typography: { pxToRem },
	} = theme;
	return {
		borderRadius: '10px',
		'&:nth-of-type(even)': {
			'& .MuiTableCell-root': {
				backgroundColor: grey[100],
			},
			'& td:first-child': {
				borderRadius: `${pxToRem(12)} 0 0 ${pxToRem(12)}`,
			},
			'& td:last-child': {
				borderRadius: `0 ${pxToRem(12)} ${pxToRem(12)} 0`,
			},
		},
	};
});
