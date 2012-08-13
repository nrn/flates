test = require('tap').test
f = require('../flates')

function build (obj) {
  if (Array.isArray(obj)) return f.ul(obj.map(build).map(f.li))
  else if (typeof obj === 'object') {
      return f.dl(Object.keys(obj).map( function(key) {
          return f.dt(key) + f.dd(build(obj[key]))
        }))
  } else return obj
}

thing = { test: { foo: 'stuff', bar: [ 0, 1, { nest: 'deep' } ] }, two: 2 }

test('Returned HTML', function (t) {
  t.plan(2)
  t.equal(f.d(), '<!DOCTYPE html>', 'f.d, doctype')
  t.equal(build(thing),
    '<dl><dt>test</dt><dd><dl><dt>foo</dt><dd>stuff</dd><dt>bar</dt><dd>' +
      '<ul><li>0</li><li>1</li><li><dl><dt>nest</dt><dd>deep</dd></dl></li></ul></dd>' +
      '</dl></dd><dt>two</dt><dd>2</dd></dl>',
    'build thing')
})
