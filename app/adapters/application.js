import DS from 'ember-data';
import conf from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: conf.apiHost
});
