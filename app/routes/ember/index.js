import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('ember.convention-over-configuration');
  },
});
