import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service('restaurants-service'),

  currentUser: function () {
    return this.get('ajax').getUser();
  },

  model: function (params) {
    return this.get('ajax').getRestaurant(params.restaurantId);
  },

  resetController: function (controller) {
    controller.set('error', null);
    controller.set('successMessage', null);
    controller.set('time', null);
    controller.set('date', null);
    controller.set('guestCount', null);
  }
});
