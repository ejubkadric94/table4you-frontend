import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service('user-service'),
  ajax2: Ember.inject.service('restaurants-service'),

  queryParams: ['restaurantId', 'guestCount', 'date', 'time'],
  restaurantId: null,
  guestCount: null,
  date: null,
  time: null,
  restaurant: null,
  currentUser: Ember.computed.alias('ajax.currentUser'),
  isReservationSuccessful: false,
  error: null,
  dateTime: null,
  successMessage: null,
  actions: {
    finishReservation: function () {
      this.set('dateTime' ,this.getProperDate(this.get('date'), this.get('time')));

      this.get('ajax2').makeReservation(this.get('restaurantId') ,{
        dateTime: this.get('dateTime'),
        guestCount: this.get('guestCount'),
        note: this.get('note'),
      },
      this.get('ajax').getToken()).done(function() {
        this.set('successMessage', 'Your reservation was successful. Thank you for using our services!');
        this.set('error', null);
      }.bind(this)).fail(function(response) {
        this.set('error', "Invalid input");
        this.set('successMessage', null);
      }.bind(this));
    },
    modifyDate: function (date) {
      this.set('date', date);
    },
    modifyTime: function (time) {
      this.set('time', time);
    },
    modifyNote: function (note) {
      this.set('note', note);
    },
    modifyGuestCount: function(guestCount) {
      this.set('guestCount', guestCount);
    }
  },

  getProperDate: function (date, time) {
    var dateValues = date.split('-');
    return dateValues[2] + '/' + dateValues[1]+ '/'+dateValues[0] + ' ' + time + ":00";
  },
  
});
