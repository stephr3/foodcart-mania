import Ember from 'ember';

export function starDisplay(params) {
  var rating = params[0];
  if(rating === 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  } else if (rating === 2){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (rating === 3){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (rating === 4){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (rating === 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else {
    return Ember.String.htmlSafe('<span>not rated</span>');
  }
}

export default Ember.Helper.helper(starDisplay);
