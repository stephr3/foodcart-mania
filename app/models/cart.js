import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  cuisine: DS.attr(),
  address: DS.attr(),
  latitude: DS.attr(),
  longitude: DS.attr(),
  description: DS.attr(),
  comments: DS.hasMany('comment', {async:true})
});
