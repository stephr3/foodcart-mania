import Ember from 'ember';

export default Ember.Component.extend({
  // ratings: ["*", "**", "***", "****", "*****"],
  addNewComment: false,
  actions: {
    addNewComment(){
      this.set('addNewComment', true);
    },
    saveComment(){
      var params = {
        rating: this.get('rating'),
        text: this.get('text'),
        author: this.get('author'),
        date: Date.now(),
        cart: this.get('cart')
      };
      this.sendAction('saveComment', params);
      this.set('addNewComment', false);
      this.set('author', "");
      this.set('rating', "");
      this.set('text', "");
    }
  }
});
