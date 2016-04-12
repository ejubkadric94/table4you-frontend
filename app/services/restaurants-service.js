import base from './base-service';


export default base.extend({
    getRestaurants: function () {
        return this.ajax({
            method: 'GET',
            url: '/v1/restaurants'
        });
    },

    getAllRestaurants() {
        return this.ajax({
            method: 'GET',
            url: '/v1/restaurants',
        });
    },
});
