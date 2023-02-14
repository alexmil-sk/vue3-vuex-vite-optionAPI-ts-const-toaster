<template>
  <div class="page-content">
    <h2>Contact Page</h2>
    <div class="btn-group">
      <button
        @click.prevent="
          $store.commit(
            `${StoreNames.NOTIFICATIONS}/${NotificationStoreMutations.CREATE_NOTIFICATION}`,
            {
              type: 'info',
              message: 'Info Contact Page',
            }
          )
        "
      >
        Info
      </button>
      <button
        @click.prevent="
          $store.commit(`${StoreNames.NOTIFICATIONS}/${NotificationStoreMutations.CREATE_NOTIFICATION}`, {
            type: 'error',
            message: 'Error Notification from Contact Page',
            duration: 10,
          })
        "
      >
        Error
      </button>
      <button
        @click.prevent="
          $store.commit(`${StoreNames.NOTIFICATIONS}/${NotificationStoreMutations.CREATE_NOTIFICATION}`, {
            type: 'warning',
            message: 'Warning Notification from Contact Page',
          })
        "
      >
        Warning
      </button>
      <button
        @click.prevent="
          $store.commit(`${StoreNames.NOTIFICATIONS}/${NotificationStoreMutations.CREATE_NOTIFICATION}`, {
            type: 'success',
            message: 'Success Notification from Contact Page',
          })
        "
      >
        Success
      </button>
      <button
        @click.prevent="
          $store.commit(`${StoreNames.NOTIFICATIONS}/${NotificationStoreMutations.CREATE_NOTIFICATION}`, {
            type: 'default',
            message: 'Persistant Notification Contact Page',
            autoClose: false,
          })
        "
      >
        Persistant Info
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotificationStoreMutations from "../constants/store/notifications/NotificationStoreMutations";
import StoreNames from "../constants/store/StoreNames";

export default defineComponent({
	name: "Contact",
	data() {
		return {
			StoreNames,
			NotificationStoreMutations,
		}
	}
});
</script>