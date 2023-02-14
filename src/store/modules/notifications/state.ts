import { Notification } from "../../typings/store/states/NotificationStoreState";

export const state = {
	notifications: [] as Notification[],
	defaultNotificationOptions: {
		type: "error",
		title: "Test Default Notification",
		message: "Default Message was provided...",
		autoClose: true,
		duration: 5
	}

}

export type State = typeof state;

