import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  ajax: service(),

  model() {
    return this.get('ajax').request('/data-binding.json');
  },

  actions: {
    getTheMeters() {
      this.refresh();
    }
  }
});
