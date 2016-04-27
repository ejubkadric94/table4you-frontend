import base from './base-service';
import Ember from 'ember';


export default base.extend({
  authToken: Ember.computed.alias('userService.authToken'),

  userService: Ember.inject.service('user-service'),
    getRestaurant: function (id) {
        return this.ajax({
            method: 'GET',
            url: '/v1/restaurants/'+id,
        });
    },

    getAllRestaurants: function() {
      return this.ajax({
        method: 'GET',
        url: '/v1/restaurants',
      });
    },

    makeReservation: function (restaurantId, reservation, token) {
      return this.ajax({
        method: 'POST',
        url: '/v1/restaurants/' + restaurantId + '/reservations',
        contentType: "application/json",
        dataType: 'json',
        data: JSON.stringify(reservation),
        headers: {
          "USER-ACCESS-TOKEN": token,
        },
      });
    },

    getAllReservations: function (restaurantId, token) {
      return this.ajax({
        method: 'GET',
        url: '/v1/restaurants/' + restaurantId + '/reservations',
      });
    }
});
