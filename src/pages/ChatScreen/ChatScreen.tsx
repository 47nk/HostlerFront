import React, { useEffect, useState } from 'react';

import { Group, PushPin, Search } from '@mui/icons-material';
import {
	Box,
	CircularProgress,
	Container,
	IconButton,
	Typography,
} from '@mui/material';
import { MessageInput } from 'components/MessageInput/MessageInput';
import { transformApiResponse } from 'hooks/useFetchMessages';
import { useParams } from 'react-router-dom';

import { MessageCard } from '@components';
import { apiEndpoints } from '@constants';
import { useFetchMessages } from '@hooks';

import { MessageType } from './ChatScreen.types';

export const ChatScreen: React.FC = () => {
	const { id: channel_id } = useParams(); // Get channel_id from URL
	const [trigger] = useState(0);
	const { messages, loading } = useFetchMessages(channel_id, trigger); // Fetch initial messages

	const [liveMessages, setLiveMessages] = useState<MessageType[]>([]); // Store SSE messages

	useEffect(() => {
		if (!channel_id) return;

		// Retrieve token from cookies

		// Initialize EventSource with token in query params
		const eventSource = new EventSource(
			`${apiEndpoints.localAPI}/announcements/stream/${channel_id}`,
		);

		eventSource.onmessage = (event) => {
			try {
				const rawMessage = JSON.parse(event.data); // Parse incoming message
				const formattedMessage = transformApiResponse(rawMessage); // Transform message

				setLiveMessages((prev) => [formattedMessage, ...prev]); // Add to live messages
			} catch (error) {
				console.error('Error parsing SSE message:', error);
			}
		};

		eventSource.onerror = (error) => {
			console.error('SSE Error:', error);
			eventSource.close();
		};

		return () => eventSource.close();
	}, [channel_id]);

	return (
		<Container
			sx={{
				bgcolor: '#f0f0f0',
				p: 2,
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}>
			{/* Chat Header */}
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
				pb={2}>
				<Typography variant="h5" fontWeight="bold">
					Chat Room
				</Typography>
				<Box>
					<IconButton>
						<Search />
					</IconButton>
					<IconButton>
						<Group />
					</IconButton>
					<IconButton>
						<PushPin />
					</IconButton>
				</Box>
			</Box>

			{/* 🔹 Loading Spinner */}
			{loading && (
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="50vh">
					<CircularProgress />
				</Box>
			)}

			{/* Messages List */}
			<Box
				sx={{
					flexGrow: 1,
					overflowY: 'auto',
					p: 1,
					display: 'flex',
					flexDirection: 'column-reverse',
				}}>
				{[...liveMessages, ...messages].map(
					(message) =>
						message.message_id !== undefined && (
							<MessageCard key={message.message_id} message={message} />
						),
				)}
			</Box>

			<MessageInput channel_id={channel_id ?? ''} />
		</Container>
	);
};
