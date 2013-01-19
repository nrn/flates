# Flates

Flates is simple functional templating in javascript.

[![browser support](http://ci.testling.com/nrn/flates.png)](http://ci.testling.com/nrn/flates)

## f(tag[, attributes, innerHTML...]) || f.tag([attributes, innerhtml])

Each function takes an optional attribute object which is just the
{ key: 'value' } representation of key="value" pairs you want
as attributes, and the contents of the element, and returns a
string of html.  This can be used server side to build the whole, or parts
of the html to respond to a request with, or client side to append or
set the inner html of a DOM element to.


```javascript
var f = Flates()
f.div({ id: 'foo' }, f.p('This Works? ' + f.strong('Weeeeeeeeeeee')))
// <div id="foo"><p>This Works? <strong>Weeeeeeeeeeee</strong></p></div>
```

Or you can do more complicated stuff, like recursively building html from an
object.

```javascript

function build (obj) {
  if (!obj) return obj
  else if (Array.isArray(obj)) return f.ul(obj.map(build).map(f.li))
  else if (typeof obj === 'object') {
    return f.dl(Object.keys(obj).map( function(key) {
      return f.dt(key) + f.dd(build(obj[key]))
    }))
  } else return obj
}

```

You'll notice arrays are turned into strings internally using .join(''),
stringify them beforehand if you want them joined another way.

Inspired by Christian Johansen - Pure, functional JavaScript.
http://vimeo.com/43382919


License: MIT

