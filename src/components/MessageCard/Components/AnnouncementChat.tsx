import { useState } from 'react';

import {
	Attachment,
	Audiotrack,
	Close,
	Image,
	InsertDriveFile,
	OpenInNew,
	VideoLibrary,
} from '@mui/icons-material';
import {
	Box,
	Button,
	CardContent,
	Chip,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Modal,
	Typography,
} from '@mui/material';
import { AnnouncementMessage } from 'pages/ChatScreen/ChatScreen.types';

export const AnnouncementChat = ({
	title,
	priority,
	description,
	media,
	primaryAnnouncementImage,
}: AnnouncementMessage) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const getFileIcon = (type: string) => {
		switch (type) {
			case 'image':
				return <Image />;
			case 'video':
				return <VideoLibrary />;
			case 'audio':
				return <Audiotrack />;
			default:
				return <InsertDriveFile />;
		}
	};

	return (
		<CardContent
			sx={{
				borderRadius: '1.6rem',
				margin: '.4rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				padding: '1.2rem',
				overflow: 'hidden',
				maxWidth: '30rem',
				minWidth: '30rem',
				position: 'relative',
				background: primaryAnnouncementImage
					? `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${primaryAnnouncementImage})`
					: 'white',
				backgroundSize: '100% 18rem',
				backgroundColor: 'white',
				backgroundPosition: 'top',
				backgroundRepeat: 'no-repeat',
				boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
			}}>
			<Chip
				color="success"
				label={priority}
				sx={{
					alignSelf: 'flex-end',
					textTransform: 'capitalize',
					paddingInline: '.4rem',
				}}
			/>

			<Typography
				variant="h3"
				sx={{ marginTop: primaryAnnouncementImage ? '13.5rem' : '0' }}>
				{title}
			</Typography>
			<Typography variant="body1">{description}</Typography>
			{media?.length ? (
				<Button
					variant="contained"
					sx={{
						alignSelf: 'flex-end',
						textTransform: 'capitalize',
						paddingInline: '1rem',
						display: 'flex',
						gap: '1.6rem',
					}}
					onClick={handleOpen}>
					Attachments <Attachment />
				</Button>
			) : null}

			{/* Modal for attachments */}
			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'background.paper',
						boxShadow: 24,
						p: 10,
						borderRadius: '1rem',
					}}>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						mb={2}>
						<Typography variant="h6" color={'black'}>
							Attachments
						</Typography>
						<IconButton onClick={handleClose}>
							<Close sx={{ color: 'red' }} />
						</IconButton>
					</Box>
					<List>
						{media?.map((file, index) => (
							<ListItem
								button
								key={index}
								onClick={() => window.open(file.url, '_blank')}>
								<ListItemIcon>{getFileIcon(file.type)}</ListItemIcon>
								<ListItemText
									sx={{
										color: 'black',
										'& .MuiTypography-root': {
											color: 'black',
											fontWeight: '600',
										},
									}}
									primary={file.url.split('/').pop()}
								/>
								<IconButton onClick={() => window.open(file.url, '_blank')}>
									<OpenInNew color="success.primary" />
								</IconButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Modal>
		</CardContent>
	);
};
