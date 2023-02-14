import {
	createStore
} from "vuex";
import StoreNames from '../constants/store/StoreNames';
import NotificationStoreModule from './modules/notifications';

export const store = createStore({
	modules: {
		[StoreNames.NOTIFICATIONS]: NotificationStoreModule
	}
});

