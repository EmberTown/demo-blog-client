import Ember from 'ember';

const {
  inject
} = Ember;

export default Ember.Route.extend({
  moment: inject.service(),

  beforeModel() {
    this.get('moment').changeLocale('nb');
  }
});
