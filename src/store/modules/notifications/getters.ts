import NotificationStoreGetters from "../../../constants/store/notifications/NotificationStoreGetters";

export default {
	[NotificationStoreGetters.STOP_BODY_OVERFLOW]: (_: null) => {
			return document && document.body.classList.add(...["hide-overflow"]);
		},
	[NotificationStoreGetters.ALLOW_BODY_OVERFLOW]: (_: null): void => {
			return document && document.body.classList.remove(...["hide-overflow"]);
		},
}