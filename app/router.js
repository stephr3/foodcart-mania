import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin');
  this.route('cart', {path: '/cart/:cart_id'});
  this.route('favorites');
  this.route('about');
});

export default Router;
