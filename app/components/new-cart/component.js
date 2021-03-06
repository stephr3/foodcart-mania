import Ember from 'ember';

export default Ember.Component.extend({
  // cuisines: ['American', 'Asian', 'Latin', 'Middle Eastern', 'European', 'African'],
  actions: {
    save() {
      var params = {
        name: this.get('name'),
        image: this.get('image') ? this.get('image'): 'http://foodtruckfiesta.com/wp-content/uploads/2011/07/pure-pasty-cart-s.jpg',
        cuisine: this.get('cuisine'),
        address: this.get('address'),
        latitude: parseInt(this.get('latitude')),
        longitude: parseInt(this.get('longitude')),
        description: this.get('description')
      };
      this.set('showNewForm', false);
      this.sendAction('save', params);
      this.set('name', "");
      this.set('cuisine', "");
      this.set('address', "");
      this.set('latitude', "");
      this.set('image', "");
      this.set('longitude', "");
      this.set('description', "");
    }
  }
});
