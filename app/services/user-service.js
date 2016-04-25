import base from './base-service';


export default base.extend({


  loginUser: function (email, password) {
    return this.ajax({
      method: 'POST',
      url: '/v1/login',
      data: JSON.stringify({email:email, password:password}),
      contentType: "application/json",
      dataType: 'json',
    });
  },

  getCurrentUser: function () {
    return this.ajax({
      method: 'GET',
      url: '/v1/getCurrentUser',
      contentType: "application/json",
    });
  },

  registerUser: function (user) {
    return this.ajax({
      method: 'POST',
      url: '/v1/registration',
      contentType: "application/json",
      dataType: 'json',
      data: JSON.stringify(user),
    });
  },

  setCurrentUser: function (user) {
    this.set('currentUser', user);
  },

  setCurrentUserToken: function (token) {
    window.localStorage.setItem('USER-ACCESS-TOKEN', token);
    this.set('authToken', token);
  },

  removeCurrentUserToken: function () {
    localStorage.removeItem('USER-ACCESS-TOKEN');
    this.set('authToken', null);
  },

  removeCurrentUser: function () {
    this.set('currentUser', null);
  }
});

