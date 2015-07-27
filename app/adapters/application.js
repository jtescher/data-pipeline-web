import DS from 'ember-data';
import Ember from 'ember';

const { dasherize, pluralize } = Ember.String;

export default DS.RESTAdapter.extend({
  namespace: 'v1',

  pathForType(type) {
    const dasherized = dasherize(type);
    return pluralize(dasherized);
  }
});
