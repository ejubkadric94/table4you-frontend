import Ember from 'ember';
var ajax= Ember.inject.service('restaurants-service');

export default Ember.Route.extend({
    model: function() {
        return ajax.getAllRestaurants();
    }

});
