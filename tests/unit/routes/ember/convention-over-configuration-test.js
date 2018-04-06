import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | ember/convention-over-configuration', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:ember/convention-over-configuration');
    assert.ok(route);
  });
});
