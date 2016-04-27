import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service('restaurants-service'),
  restaurantId: null,

  model: function(params) {
    var resaurantPromise = this.get('ajax').getRestaurant(params.restaurantId);
    var reservationsPromise = this.get('ajax').getAllReservations(params.restaurantId, this.get);

    return Ember.$.when(resaurantPromise, reservationsPromise)
      .then(function (restaurant, reservations) {
        return {
          restaurant: restaurant[0],
          reservations: reservations[0]
        };
      });
  },
});
