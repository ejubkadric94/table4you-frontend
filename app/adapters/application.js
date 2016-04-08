import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    namespace: 'v1',
    host: 'http://default-environment.z6gkicxids.us-west-2.elasticbeanstalk.com',

});
