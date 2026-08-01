import { useState } from 'react';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ixuwoesbfkzrwlzxtsic.supabase.co/';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4dXdvZXNiZmt6cndsenh0c2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMwNDQzNDMsImV4cCI6MjA0ODYyMDM0M30.97vfWgRJvWE2d7371Zm8WuPtJQ4P8-CA3CJpmeTXsPw';
const supabase = createClient(supabaseUrl, supabaseKey);

export const FileUpload = () => {
	const [file, setFile] = useState(null);
	const [uploading, setUploading] = useState(false);
	const [message, setMessage] = useState('');

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const uploadFile = async () => {
		if (!file) return alert('Please select a file!');

		setUploading(true);
		const filePath = `uploads/${Date.now()}_${file.name}`;

		const { error } = await supabase.storage
			.from('announcements') // Your bucket name
			.upload(filePath, file);

		setUploading(false);

		if (error) {
			setMessage('Upload failed: ' + error.message);
		} else {
			setMessage('File uploaded successfully!');
		}
	};

	return (
		<div>
			<input type="file" onChange={handleFileChange} />
			<button onClick={uploadFile} disabled={uploading}>
				{uploading ? 'Uploading...' : 'Upload'}
			</button>
			{message && <p>{message}</p>}
		</div>
	);
};
