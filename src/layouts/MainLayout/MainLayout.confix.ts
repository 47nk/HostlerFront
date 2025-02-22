import axios from 'axios';

import { apiEndpoints } from '@constants';
import mocksideBarData from '@mockData/sideBar.json'; // contains only Dashboard item

// Function to fetch announcements and return a structured sidebar object
export const fetchAnnouncementsData = async (): Promise<any[]> => {
	try {
		const token = document.cookie
			.split('; ')
			.find((row) => row.startsWith('jwt='))
			?.split('=')[1];

		const { data: entities } = await axios.get(
			`${apiEndpoints.remoteAPI}/announcements/get-channels`,
			{
				withCredentials: true, // This sends cookies with the request
				headers: { Cookie: `jwt=${token}` },
			},
		);
		// Map each entity into a tree node with its channels as subLinks
		let treeData = entities.map((entity: any) => ({
			displayLabel: entity.name,
			icon: 'BusinessTwoTone', // optional icon for the entity
			subLinks: entity.Channels.map((channel: any) => ({
				icon: 'TagTwoTone',
				displayLabel: channel.Name.toLowerCase(),
				url: `/channel/${channel.ID}`,
			})),
		}));

		const updatedSideBarData = JSON.parse(JSON.stringify(mocksideBarData));

		if (treeData.length > 0) {
			updatedSideBarData[0].push({
				displayLabel: 'Announcements',
				icon: 'CampaignIcon', // optional: can be mapped using iconMap if needed
				subLinks: treeData,
			});
		}
		treeData = null;
		return updatedSideBarData;
	} catch (error) {
		console.error('Error fetching channels:', error);
		return mocksideBarData; // Return the original mock data in case of an error
	}
};
