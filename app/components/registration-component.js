import Ember from 'ember';

export default Ember.Component.extend({
  ajax: Ember.inject.service('user-service'),
  actions: {
    registerNewUser: function () {
      if(this.isValid(
          this.get('firstName'),
          this.get('lastName'),
          this.get('password'),
          this.get('passwordConfirmation'),
          this.get('phone'),
          this.get('month') + '/' + this.get('day') + '/' + this.get('year')
        )){
        this.get('ajax').registerUser({
          email: this.get('email'),
          password: this.get('password'),
          passwordConfirmation: this.get('passwordConfirmation'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          address: {
            streetName: this.get('streetName'),
            city: this.get('city'),
            country: this.get('country'),
          },
          phone: this.get('phone'),
          gender: this.$( "input:checked" ).val(),
          birthdate: this.get('day') + '/' + this.get('month') + '/' + this.get('year'),
        }).done(function() {
          this.sendAction('on-register');
        }.bind(this)).fail(function(response) {
          this.sendAction('on-error', response.responseJSON.error);

        }.bind(this));
      } else {
        this.sendAction('on-error');
        alert("action is sent");
      }
    }
  },

  isValid: function (firstName, lastName, password, passwordConfirmation, phone, birthDate) {
    return this.isValidName(firstName, lastName) && this.isValidPassword(password, passwordConfirmation) &&
      this.isValidPhone(phone) && this.isValidDate(birthDate);
  },

  isValidName: function(firstName, lastName){
    if(firstName == null ||lastName == null){
      return false;
    }

    if(/^[a-zA-Z ]+$/.test(firstName) && /^[a-zA-Z ]+$/.test(lastName)){
      return true;
    }
    return false;
  },

  isValidPassword: function (password, passwordConfirmation) {
    if(password == null && passwordConfirmation == null){
      return false;
    }

    if( password.localeCompare(passwordConfirmation) === 0){
      return true;
    }
    return false;
  },

  isValidPhone: function (phone) {
    if(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(phone)){
      return true;
    }
    return false;
  },

  isValidDate: function (birthDate) {
    if(birthDate == null){
      return false;
    }
    // First check for the pattern
    if(!/(\d+)(-|\/)(\d+)(?:-|\/)(?:(\d+)\s+(\d+):(\d+)(?::(\d+))?(?:\.(\d+))?)?/.test(birthDate)){
      return false;
    }

    // Parse the date parts to integers
    var parts = birthDate.split("/");
    var day = parseInt(parts[1], 10);
    var month = parseInt(parts[0], 10);
    var year = parseInt(parts[2], 10);

    // Check the ranges of month and year
    if(year < 1000 || year > 3000 || month < 0 || month > 12){
      return false;
    }

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    // Adjust for leap years
    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthLength[1] = 29;
    }

    // Check the range of the day
    return day > 0 && day <= monthLength[month - 1];
  }
});
