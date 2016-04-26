import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service('restaurants-service'),
  restaurantId: null,

  model: function(params) {
    return this.get('ajax').getRestaurant(params.restaurantId);
  },
});
