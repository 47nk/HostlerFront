export type MediaType = {
	type: 'image' | 'video' | 'audio';
	url: string;
};

export type UserType = {
	user_id: string;
	name: string;
	avatar: string;
};

export type AnnouncementMessage = {
	message_id: string;
	type: 'announcement';
	title: string;
	description: string;
	media?: MediaType[];
	created_by: UserType;
	creation_time: string;
	priority: 'low' | 'medium' | 'high';
};

export type ChatMessage = {
	message_id: string;
	type: 'message' | 'text';
	message: string;
	media?: MediaType[];
	created_by: UserType;
	creation_time: string;
};

export type MessageType = AnnouncementMessage | ChatMessage;

export type ChatData = {
	chat_id: string;
	messages: MessageType[];
};
