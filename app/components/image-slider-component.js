import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service('restaurants-service'),

  init() {
    this._super.apply(this,arguments);

    this.get('ajax').getRestaurant(1).done(data => {
      this.set('restaurant1', data);
    });
    this.get('ajax').getRestaurant(2).done(data => {
      this.set('restaurant2', data);
    });
    this.get('ajax').getRestaurant(4).done(data => {
      this.set('restaurant3', data);
    });
    this.get('ajax').getRestaurant(10).done(data => {
      this.set('restaurant4', data);
    });
  },
});
