import { useEffect, useState } from 'react';

import axios from 'axios';

import { apiEndpoints } from '@constants';

export const useTransactions = (
	userId: string | number,
	page = 1,
	limit = 10,
) => {
	const [transactions, setTransactions] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchTransactions = async () => {
			setLoading(true);
			try {
				const offset = (page - 1) * limit;
				const response = await axios.get(
					`${apiEndpoints.localAPI}/dashboard/get-bills`,

					{
						params: { user_id: userId, limit, offset },
						withCredentials: true, // This sends cookies with the request
					},
				);
				setTransactions(response.data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		if (userId) fetchTransactions();
	}, [userId, page, limit]);

	return { transactions, loading, error, setTransactions };
};
