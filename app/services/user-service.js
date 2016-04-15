import base from './base-service';


export default base.extend({
  loginUser: function (email, password) {
    return this.ajax({
      method: 'POST',
      url: '/v1/login',
      data: JSON.stringify({"email":email, "password":password}),
      contentType: "application/json",
      dataType: 'json',
    });
  },
});
