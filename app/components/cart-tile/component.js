import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  inFavoritesList: Ember.computed('favoritesList.items.[]', function(){
    return this.get('favoritesList').includes(this.get('cart'));
  }),
  ratingAverage: Ember.computed('comments.@each.rating', function(){
    var total = 0;
    (this.get('comments')).forEach(function(comment){
      total += comment.get('rating');
    });
    return Math.round(total/this.get('comments').get('length'));
  }),
  actions: {
    addToFavorites(item) {
      this.get('favoritesList').add(item);
    },
    removeFromFavorites(item) {
      this.get('favoritesList').remove(item);
    }
  }
});
