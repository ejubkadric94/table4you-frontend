import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        getAllRestaurants: function () {
            restaurants: Ember.inject.service('getRestaurants');
        }
    },
    myName: 'Ejub'
});
