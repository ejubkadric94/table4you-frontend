import base from './base-service';


export default base.extend({
    getRestaurant: function (id) {
        return this.ajax({
            method: 'GET',
            url: '/v1/restaurants/'+id
        });
    },

    getAllRestaurants: function() {
      return this.ajax({
        method: 'GET',
        url: '/v1/restaurants',
      });
    }
});
