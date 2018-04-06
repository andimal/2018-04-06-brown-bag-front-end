import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | history/developer-tools', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:history/developer-tools');
    assert.ok(route);
  });
});
