import React from 'react';

import { Avatar, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CustomTooltip } from 'components/CustomTooltip';
import { MediaContainer } from 'components/MediaContainer';
import { MessageType } from 'pages/ChatScreen/ChatScreen.types';

import { AnnouncementChat } from './Components';

const StyledCard = styled(Box)(({ theme }) => ({
	margin: theme.spacing(1),
	padding: theme.spacing(6),
	':hover': {
		backgroundColor: '#c0c0c0',
	},
	borderRadius: 2,
}));

export const MessageCard: React.FC<{ message: MessageType }> = ({
	message,
}) => {
	if (message.type === 'message' || message.type === 'text')
		console.log(message);

	return (
		<StyledCard>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					gap: '16px',
					padding: '0',
					backgroundColor: 'transparent',
				}}>
				<CustomTooltip title={message.created_by.name}>
					<Avatar
						src={message.created_by.avatar}
						alt={message.created_by.name}
					/>
				</CustomTooltip>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
					}}>
					<Box display="flex" alignItems="center" gap={4}>
						<Box display="flex" flexDirection="column" gap={1}>
							<Typography
								variant="subtitle1"
								fontWeight="bold"
								color={'black'}
								lineHeight={1}>
								{message.created_by.name}
							</Typography>
							<Typography variant="caption" color="textSecondary" fontSize={10}>
								{new Date(message.creation_time).toLocaleString('en-GB', {
									day: '2-digit',
									month: '2-digit',
									year: 'numeric',
									hour: '2-digit',
									minute: '2-digit',
									hour12: true,
								})}
							</Typography>
						</Box>
					</Box>

					{message.type !== 'message' ? (
						<AnnouncementChat
							primaryAnnouncementImage={
								'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
							}
							title={message.title}
							description={message.description}
							priority={message.priority}
							media={message.media}
						/>
					) : (
						<Box
							sx={{ display: 'flex', flexDirection: 'column', gap: '1.6rem' }}>
							<Typography variant="body1" color={'black'}>
								{message.description}
							</Typography>
							{message.media?.length ? (
								<MediaContainer mediaFiles={message.media} />
							) : null}
						</Box>
					)}
				</Box>
			</Box>
		</StyledCard>
	);
};
