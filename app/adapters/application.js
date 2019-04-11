import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: "http://api.library.com:3000/v1/"
});
