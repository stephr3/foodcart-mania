import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('cart', params.cart_id);
  }
});
