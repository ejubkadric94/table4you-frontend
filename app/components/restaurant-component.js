import Ember from 'ember';


export default Ember.Component.extend({
  ajax: Ember.inject.service('restaurants-service'),
  isLoading: false,

  init() {
    this.set('isLoading', true);

    this._super.apply(this,arguments);
    this.get('ajax').getAllRestaurants().done(data => {
      this.set('model', data);
    });
    
    this.set('isLoading', false);
  },



});
