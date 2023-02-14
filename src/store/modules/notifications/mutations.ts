import NotificationStoreMutations from "../../../constants/store/notifications/NotificationStoreMutations";
import { INotificationStoreState, Notification, CreateNotification } from "../../typings/store/states/NotificationStoreState";
import { createUUID } from '../../../assets/createUUID';

export default {
	[NotificationStoreMutations.CREATE_NOTIFICATION](state: INotificationStoreState, payload: CreateNotification): void {
		const _options: CreateNotification = Object.assign({
			...state.defaultNotificationOptions
		}, payload);

		state.notifications.push(
			...[{
				id: createUUID(),
				..._options,
			}] as Notification[]
		);
	},
	[NotificationStoreMutations.REMOVE_NOTIFICATION](state: INotificationStoreState, payload: string): void {		
		const index: number = state.notifications.findIndex((item: { id: string }) => item.id === payload);
		if (index !== -1) state.notifications.splice(index, 1);
	},
}