import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('history', function() {
    this.route('table-layout');
    this.route('alerts');
    this.route('developer-tools');
  });
  this.route('sass');

  this.route('ember', function() {
    this.route('convention-over-configuration');
    this.route('cli');
    this.route('data-binding');
    this.route('addons');
    this.route('inspector');
  });
});

export default Router;
