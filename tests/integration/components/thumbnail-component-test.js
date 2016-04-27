import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('thumbnail-component', 'Integration | Component | thumbnail component', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{thumbnail-component}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#thumbnail-component}}
      template block text
    {{/thumbnail-component}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
