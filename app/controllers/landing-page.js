import Ember from 'ember';

export default Ember.Controller.extend({
    restaurantId: 1,
    actions: {
      makeReservation: function () {
        this.transitionToRoute('reserve', { queryParams: {
          restaurantId: this.get('restaurantId'),
          guestCount: this.get('guestCount'),
          date: this.get('date'),
          time: this.get('time'),
        }});
      },
      selectRestaurant: function(restaurant) {
        this.set('restaurantId', restaurant);
      }
    },
});
