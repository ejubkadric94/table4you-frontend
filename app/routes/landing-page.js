import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service('restaurants-service'),

    model: function() {
      return this.get('ajax').getAllRestaurants();
    },

    resetController: function (controller, isExisting) {
      controller.set('time', null);
      controller.set('date', null);
      controller.set('guestCount', null);
    },
});
