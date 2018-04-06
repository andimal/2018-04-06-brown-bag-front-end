import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | history/alerts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:history/alerts');
    assert.ok(route);
  });
});
