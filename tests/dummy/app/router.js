import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('usage');
  this.route('i18n');
  this.route('validators', function() {
    this.route('presence');
    this.route('acceptance');
    this.route('absence');
    this.route('format');
    this.route('length');
    this.route('email');
    this.route('zipcode');
    this.route('hexcolor');
    this.route('subdomain');
    this.route('url');
    this.route('inclusion');
    this.route('exclusion');
    this.route('match');
    this.route('date');
    this.route('numericality');
    this.route('custom');
    this.route('relations');
  });
});

export default Router;
