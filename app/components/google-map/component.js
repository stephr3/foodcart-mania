import Ember from 'ember';

export default Ember.Component.extend ({
  map: Ember.inject.service('google-map'),
  actions: {
    showMap(cart) {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(cart.get('latitude'), cart.get('longitude')),
        zoom: 15
      };
      var newMap = this.get('map').findMap(container, options);
      var markerOptions = {
        position: {lat: cart.get('latitude'), lng: cart.get('longitude')},
        map: newMap,
        title: cart.get('name'),
        icon: 'images/foodtruck-icon-map.png',
      };
      var cartName = cart.get('name');
      var cartAddress = cart.get('address');
      var content = {
        content:"<p><strong>"+cartName+"</strong></p>"+
                "<p>"+cartAddress+"</p>"
      };
      var infowindow = this.get('map').createInfoWindow(content);
      var marker = this.get('map').createMarker(markerOptions);
      marker.addListener('click', function(){
        infowindow.open(newMap, marker);
      });
    }
  }
});
