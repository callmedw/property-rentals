import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('important-announcements', 'Integration | Component | important announcements', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{important-announcements}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#important-announcements}}
      template block text
    {{/important-announcements}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
