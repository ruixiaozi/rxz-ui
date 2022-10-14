import { RxzInput } from './../../Form/RxzInput/index';
import { Options, Vue } from 'vue-class-component';
import { debounce } from 'lodash';

/**
 * Component: RxzSearch
 * @description: RxzSearch
 * @author: ruixiaozi
 * @since: 2.0.0
 */
@Options({
  name: 'RxzSearch',
  components: {
    RxzInput,
  },
})
export class RxzSearchCnt extends Vue {

  // props and provide

  // injects

  // refs

  // injectServices

  // setup

  // entity
  searchValue = '';

  // computes

  // watchs

  // hooks

  // methods
  handleEnter = debounce((event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.search();
    }
  }, 100);

  search() {
    this.$emit('search', this.searchValue);
  }

}
