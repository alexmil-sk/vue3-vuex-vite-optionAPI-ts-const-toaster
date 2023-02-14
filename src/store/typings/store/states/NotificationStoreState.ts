export type Notification = {
	id: string;
	type: string;
	title: string;
	message: string;
	autoClose: boolean;
	duration: number;
};

export type CreateNotification = {
	(options: {
		type?: string;
		title?: string;
		message?: string;
		autoClose?: boolean;
		duration?: number;
	}): void;
};

export interface INotificationStoreState {
	notifications: Notification[],
	defaultNotificationOptions: CreateNotification
};






