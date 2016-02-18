import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  title: attr('string'),
  body: attr('string'),
  createdAt: attr('date'),
  author: belongsTo('user')
});
