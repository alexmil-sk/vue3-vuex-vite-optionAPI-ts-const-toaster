<template>
  <div class="page-content">
    <h2>Home Page</h2>
    <div class="btn-group">
      <button
        @click.prevent="$store.commit(`${StoreNames.NOTIFICATIONS}/${NotificationStoreMutations.CREATE_NOTIFICATION}`, {
            type: 'error',
            message: 'Error Notification from Home Page',
            duration: 10,
          })
        "
      >Create Notification Home
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NotificationStoreMutations from "../constants/store/notifications/NotificationStoreMutations";
import StoreNames from "../constants/store/StoreNames";

export default defineComponent({
	name: "Home",
	data() {
		return {
			StoreNames,
			NotificationStoreMutations,
		}
	}
});
</script>
