import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ember/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ember/index');
    assert.ok(route);
  });
});
