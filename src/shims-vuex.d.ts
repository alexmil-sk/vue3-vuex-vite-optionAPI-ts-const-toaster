import { Store } from 'vuex';
import { State } from './store';

declare module '@vue/runtime-core' {
	// provide typings for `this.$store`
	interface ComponentCustomProperties {
		$store: Store<State>
	}
}


//You can use it if you need with using the composition API in components
//You should have "import {useStore} from 'vuex'"


//declare module 'vuex' {
//	export function useStore(key?: string): Store<State>
//}