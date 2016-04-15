import Ember from 'ember';

export default Ember.Route.extend({
    ajax: Ember.inject.service('restaurants-service'),

    model: function() {
        return this.get('ajax').getAllRestaurants();


    },
});
