import { useEffect, useState } from 'react';

import axios from 'axios';

import { apiEndpoints } from '@constants';

import { MessageType } from './ChatScreen.types';

export const transformApiResponse = (apiResponse: any): MessageType => {
	return {
		message_id: `3`,
		type:
			apiResponse.type === 'message' || apiResponse.type === 'text'
				? 'message'
				: apiResponse.type, // Default to "announcement" if type is not "message"
		...(apiResponse.type === 'message'
			? {
					description: apiResponse.description,
				}
			: {
					title: apiResponse.title,
					description: apiResponse.description,
					priority: 'medium', // Set priority, modify if API provides it
				}),
		media:
			apiResponse.attachments?.map((attachment: any) => ({
				type: attachment.file_type.startsWith('image')
					? 'image'
					: attachment.file_type.startsWith('video')
						? 'video'
						: attachment.file_type.startsWith('audio')
							? 'audio'
							: 'document',
				url: attachment.file_path,
			})) || [],
		created_by: {
			user_id: `${apiResponse.Creator.ID}`,
			name: `${apiResponse.Creator.FirstName} ${apiResponse.Creator.LastName}`,
			avatar: 'https://example.com/default-avatar.jpg', // Replace dynamically if needed
		},
		creation_time: apiResponse.created_at,
	} as MessageType;
};

export const useFetchMessages = (channel_id: string, trigger: number) => {
	const [messages, setMessages] = useState<MessageType[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchMessages = async () => {
		try {
			const response = await axios.get(
				`${apiEndpoints.localAPI}/announcements/get-announcements`,
				{
					params: { channel_id, limit: 10, offset: 0 },
					withCredentials: true,
				},
			);
			const messagesData = response.data.map((message) =>
				transformApiResponse(message),
			);

			setMessages(messagesData);
			setLoading(false);
		} catch (error) {
			console.error('Error fetching messages:', error);
			setLoading(false);
		}
	};

	useEffect(() => {
		if (!channel_id) return; // Avoid API calls if no channel_id

		fetchMessages(); // Fetch on mount
		// Polling every 5 seconds
		// const interval = setInterval(fetchMessages, 5000);

		// return () => clearInterval(interval);
	}, [channel_id]);

	// Fetch messages immediately when trigger updates (after sending message)
	useEffect(() => {
		if (trigger > 0) {
			// fetchMessages();
		}
	}, [trigger]);

	return { messages, loading };
};
