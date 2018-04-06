import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | history/table-layout', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:history/table-layout');
    assert.ok(route);
  });
});
