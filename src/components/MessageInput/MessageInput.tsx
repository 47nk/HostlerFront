import { useState } from 'react';

import { AttachFile, Campaign, Send } from '@mui/icons-material';
import {
	Box,
	Button,
	Chip,
	IconButton,
	InputAdornment,
	Modal,
	Paper,
	TextField,
	Typography,
} from '@mui/material';
import axios from 'axios';

import { apiEndpoints } from '@constants';

export const MessageInput: React.FC<{ channel_id: string }> = ({
	channel_id,
}) => {
	const [newMessage, setNewMessage] = useState('');
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedFiles, setSelectedFiles] = useState([]);

	const sendMessage = async () => {
		console.log('Message sent:', newMessage);

		if (newMessage.trim() || selectedFiles.length > 0) {
			const formData = new FormData();
			formData.append('title', newMessage);
			formData.append('type', 'text');
			formData.append('description', newMessage);
			formData.append('channel_id', channel_id);

			selectedFiles?.forEach((file) => formData.append('attachments', file));

			try {
				await axios.post(
					`${apiEndpoints.localAPI}/announcements/add-announcement`,
					formData,
					{
						withCredentials: true,
						headers: { 'Content-Type': 'multipart/form-data' },
					},
				);
			} catch (error) {
				console.error('Error sending message:', error);
			}
		}
		setNewMessage('');
		setSelectedFiles([]);
	};

	const onFileChange = (event) => {
		const files = Array.from(event.target.files);
		setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
	};

	const removeFile = (index) => {
		setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
	};

	return (
		<>
			{selectedFiles.length > 0 && (
				<Paper elevation={2} sx={{ p: 4, mb: 2, borderRadius: 2 }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							mb: 1,
						}}>
						<Typography variant="subtitle1" fontWeight="bold">
							Attachments
						</Typography>
						<Button
							variant="text"
							sx={{ color: '#FF5733' }}
							onClick={() => setSelectedFiles([])}>
							Clear All
						</Button>
					</Box>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
						{selectedFiles.map((file, index) => (
							<Chip
								key={index}
								label={file.name}
								onClick={() =>
									window.open(
										URL.createObjectURL(file),
										'_blank',
										'noopener,noreferrer',
									)
								}
								onDelete={() => removeFile(index)}
								variant="outlined"
								color="primary"
							/>
						))}
					</Box>
				</Paper>
			)}
			<TextField
				fullWidth
				variant="outlined"
				placeholder="Type a message..."
				sx={{
					'.MuiOutlinedInput-root': {
						borderRadius: 2,
						backgroundColor: '#fafafa',
					},
					'& .MuiOutlinedInput-input': {
						padding: '14px',
					},
				}}
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
				onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton component="label">
								<AttachFile />
								<input
									type="file"
									hidden
									multiple
									accept="image/*,audio/*,video/*,.pdf"
									onChange={onFileChange}
								/>
							</IconButton>
							<Button
								variant="contained"
								startIcon={<Campaign />}
								onClick={() => setModalOpen(true)}>
								Create Announcement
							</Button>
							<IconButton onClick={sendMessage} color="primary">
								<Send />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>

			<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'background.paper',
						boxShadow: 24,
						p: 4,
						borderRadius: 2,
					}}>
					<Typography variant="h6">Create an Announcement</Typography>
					<Typography variant="body2" sx={{ mt: 2 }}>
						Here you can write and send an important announcement.
					</Typography>
				</Box>
			</Modal>
		</>
	);
};
