import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  actions: {
    remove(item) {
      this.get('favoritesList').remove(item);
    }
  }
});
