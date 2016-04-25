import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.findRecord('restaurant', 1);
        //return this.store.findAll('restaurant');
    }
});
