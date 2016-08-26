import Ember from 'ember';

export default Ember.Component.extend({
  favoritesList: Ember.inject.service(),
  ratingAverage: Ember.computed('comments.@each.rating', function(){
    var total = 0;
    (this.get('comments')).forEach(function(comment){
      total += comment.get('rating');
    });
    return Math.round(total/this.get('comments').get('length'));
  }),
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    },
    addToFavorites(item) {
      this.get('favoritesList').add(item);
    }
  }
});
