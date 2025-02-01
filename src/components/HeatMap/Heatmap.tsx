import React from 'react';

import { Box, Grid, Tooltip, Typography } from '@mui/material';

// Function to get color based on the transaction amount
const getTransactionColor = (amount) => {
	if (amount === 0) return '#0000000a'; // Neutral grey for no transaction
	if (amount < 400) return '#aff0b4';
	return '#008024'; // Muted dark coral for high transaction
};

// Main Heatmap component
export const Heatmap = ({ transactions }) => {
	return (
		<Box>
			{/* Heatmap Grid */}
			<Grid container gap={5}>
				{transactions.map((data, index) => (
					<Box
						key={index}
						sx={{
							width: 'clamp(.75rem, 1.5vw, 2.5rem)',
							aspectRatio: 1,
							backgroundColor: getTransactionColor(data.amount),
							borderRadius: 1.5,
							transition: 'transform 0.2s ease-in-out',
							'&:hover': {
								transform: 'scale(1.07)',
							},
						}}>
						<Tooltip
							title={
								<Box>
									{/* Display the date and total amount */}
									<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
										Date: {index + 1}, Total Amount: ₹{data.amount.toFixed(2)}
									</Typography>

									{/* Display the transactions for this day */}
									{data.transactions.length > 0 ? (
										<Box sx={{ mt: 1 }}>
											<Typography variant="body2" sx={{ fontWeight: 'bold' }}>
												Transactions:
											</Typography>
											<ul style={{ paddingLeft: '1rem', margin: 0 }}>
												{data.transactions.map((transaction, idx) => (
													<li key={idx}>
														<Typography variant="body2">
															{transaction.Description} - ₹
															{transaction.Price.toFixed(2)}
														</Typography>
													</li>
												))}
											</ul>
										</Box>
									) : (
										<Typography variant="body2" sx={{ mt: 1 }}>
											No transactions
										</Typography>
									)}
								</Box>
							}
							arrow>
							<Box
								sx={{
									width: '100%',
									height: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							/>
						</Tooltip>
					</Box>
				))}
			</Grid>
		</Box>
	);
};

export default Heatmap;
