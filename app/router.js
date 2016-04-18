import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landingPage');
  this.route('login');
  this.route('register');
  this.route('restaurant');
});

export default Router;
