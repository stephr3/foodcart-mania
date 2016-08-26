import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('cart', params.cart_id);
  },
  actions: {
    saveComment(params) {
      if (params.rating === '*'){
        params.rating = 1;
      } else if (params.rating ==='**') {
        params.rating = 2;
      } else if (params.rating === '***') {
        params.rating = 3;
      } else if (params.rating === '****') {
        params.rating = 4;
      } else {
        params.rating = 5;
      }
      var newComment = this.store.createRecord('comment', params);
      var cart = params.cart;
      cart.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return cart.save();
      });
      this.transitionTo('cart', params.cart);
    }
  }
});
