import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ember/cli', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ember/cli');
    assert.ok(route);
  });
});
