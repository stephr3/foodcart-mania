import Ember from 'ember';

export default Ember.Component.extend({
  ratingAverage: Ember.computed('comments.@each.rating', function(){
    {{debugger}}
    var total = 0;
    (this.get('comments')).forEach(function(comment){
      total += comment.get('rating');
    });
    return Math.round(total/this.get('comments').get('length'));
  }),
  actions: {
    saveComment(params) {
      this.sendAction('saveComment', params);
    }
  }
});
