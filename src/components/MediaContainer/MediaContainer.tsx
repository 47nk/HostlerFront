import { useEffect, useRef, useState } from 'react';

import { Close, OpenInFull } from '@mui/icons-material';
import {
	Box,
	Button,
	Card,
	CardMedia,
	Grid,
	IconButton,
	Modal,
	Typography,
} from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import WaveSurfer from 'wavesurfer.js';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

type MediaType = {
	url: string;
	type: 'image' | 'video' | 'audio' | 'pdf';
};

interface MediaContainerProps {
	mediaFiles: MediaType[];
}

export const MediaContainer = ({ mediaFiles }: MediaContainerProps) => {
	const [open, setOpen] = useState(false);
	const waveformRef = useRef<WaveSurfer | null>(null);
	const audioRef = useRef<HTMLAudioElement | null>(null);

	useEffect(() => {
		if (audioRef.current) {
			waveformRef.current = WaveSurfer.create({
				container: '#waveform',
				waveColor: '#90caf9',
				progressColor: '#1e88e5',
				height: 40,
				responsive: true,
			});
			waveformRef.current.load(audioRef.current);
		}
		return () => waveformRef.current?.destroy();
	}, []);

	const renderMedia = (file: MediaType) => {
		switch (file.type) {
			case 'image':
				return (
					<CardMedia
						component="img"
						image={file.url}
						sx={{ borderRadius: 3, height: 140, objectFit: 'cover' }}
					/>
				);
			case 'video':
				return (
					<CardMedia
						component="video"
						controls
						sx={{ borderRadius: 3, height: 250, boxShadow: 1 }}>
						<source src={file.url} type="video/mp4" />
					</CardMedia>
				);
			case 'audio':
				return (
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						gap={1}>
						<audio
							ref={audioRef}
							src={file.url}
							controls
							style={{ width: '100%', borderRadius: 5 }}
						/>
						<Box
							id="waveform"
							width="100%"
							sx={{ background: '#e3f2fd', borderRadius: 2, height: 50 }}
						/>
					</Box>
				);
			case 'pdf':
				return (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						sx={{ backgroundColor: '#eceff1', borderRadius: 3, height: 140 }}>
						<Document file={file.url}>
							<Page pageNumber={1} width={120} />
						</Document>
					</Box>
				);
			default:
				return null;
		}
	};

	return (
		<Box display="flex" gap={2} alignItems="center" flexWrap="wrap">
			{mediaFiles.slice(0, 3).map((file, index) => (
				<Card
					key={index}
					sx={{
						width: 300,
						height: 'auto',
						bgcolor: 'rgba(255,255,255,0.1)',
						borderRadius: 3,
						transition: '0.3s',
					}}>
					{renderMedia(file)}
				</Card>
			))}

			{mediaFiles.length > 3 && (
				<>
					<Button
						variant="contained"
						startIcon={<OpenInFull />}
						onClick={() => setOpen(true)}
						sx={{
							bgcolor: '#1e88e5',
							color: 'white',
							'&:hover': { bgcolor: '#1565c0' },
							borderRadius: 3,
							px: 3,
							fontWeight: 'bold',
						}}>
						Show All
					</Button>
					<Modal open={open} onClose={() => setOpen(false)}>
						<Box
							sx={{
								position: 'absolute',
								top: '50%',
								left: '50%',
								transform: 'translate(-50%, -50%)',
								bgcolor: 'white',
								boxShadow: 24,
								p: 4,
								borderRadius: 3,
								width: '80%',
								maxHeight: '80vh',
								overflowY: 'auto',
							}}>
							<Box
								display="flex"
								justifyContent="space-between"
								alignItems="center">
								<Typography variant="h6" sx={{ fontWeight: 'bold' }}>
									All Media
								</Typography>
								<IconButton onClick={() => setOpen(false)}>
									<Close />
								</IconButton>
							</Box>
							<Grid container spacing={2} mt={2}>
								{mediaFiles.map((file, index) => (
									<Grid item xs={12} sm={6} md={4} key={index}>
										<Card
											sx={{
												p: 1,
												bgcolor: '#f5f5f5',
												borderRadius: 3,
												transition: '0.3s',
												'&:hover': { boxShadow: 4 },
											}}>
											{renderMedia(file)}
										</Card>
									</Grid>
								))}
							</Grid>
						</Box>
					</Modal>
				</>
			)}
		</Box>
	);
};
