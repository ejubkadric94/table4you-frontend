import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('landingPage', {path: '/'});
  this.route('login');
  this.route('register');
  this.route('information');

  this.route('reserve');
  this.route('reservations');
  this.route('allRestaurants');
  this.route('singleRestaurant', { path: '/singleRestaurant/:restaurantId' });
});

export default Router;
