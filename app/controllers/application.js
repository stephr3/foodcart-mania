import Ember from 'ember';

export default Ember.Controller.extend({
  favoritesList: Ember.inject.service(),
  favoritesTotalDisplay: Ember.computed('favoritesList.items.[]', function(){
    return this.get('favoritesList').get('items').get('length');
  })
});
