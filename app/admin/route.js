import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(params) {
      var newCart = this.store.createRecord('cart', params);
      newCart.save();
      this.transitionTo('cart', newCart.id);
    }
  }
});
