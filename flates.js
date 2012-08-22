// Flates, composable functions to build html strings.
function Flates () {

  function f (tag, attr, con) {
    var attributes = ''
    if (stringNumArray(attr)) con = attr
    else attributes = attrStr(attr)
    if (Array.isArray(con)) con = con.join('')
    if (typeof con === 'undefined') con = ''
    return '<' + tag + attributes + '>' + con + '</' + tag + '>'
  }

  function attrOnly (tag, attr) {
    var attributes = attr ? ' ' + attrStr(attr) : ''
    return '<' + tag + attributes + '>'
  }

  function attrStr (attrObj) {
    if (typeof attrObj !== 'object') return ''
    return ' ' + Object.keys(attrObj).map(function (key) {
      return key + '="' + attrObj[key] + '"'
    }).join(' ')
  }

  function stringNumArray (item) {
    if (typeof item === 'string') return item
    if (typeof item === 'number') return item
    if (Array.isArray(item)) return item
    return undefined
  }

  function doctype (type) {
    if (!type) type = 'html'
    return '<!DOCTYPE ' + type + '>'
  }

  // Build and attach functions for most tag names.

  ;[ 'a'
  , 'abbr'
  , 'address'
  , 'area'
  , 'article'
  , 'aside'
  , 'audio'
  , 'bdi'
  , 'bdo'
  , 'blockquote'
  , 'body'
  , 'button'
  , 'canvas'
  , 'caption'
  , 'code'
  , 'dd'
  , 'del'
  , 'div'
  , 'dl'
  , 'dt'
  , 'em'
  , 'fieldset'
  , 'figcaption'
  , 'figure'
  , 'footer'
  , 'form'
  , 'h1'
  , 'h2'
  , 'h3'
  , 'h4'
  , 'h5'
  , 'h6'
  , 'head'
  , 'header'
  , 'hgroup'
  , 'html'
  , 'iframe'
  , 'ins'
  , 'kbd'
  , 'lable'
  , 'legend'
  , 'li'
  , 'map'
  , 'mark'
  , 'menu'
  , 'meter'
  , 'nav'
  , 'noscript'
  , 'object'
  , 'ol'
  , 'optgroup'
  , 'option'
  , 'output'
  , 'p'
  , 'pre'
  , 'progress'
  , 'q'
  , 'ruby'
  , 'samp'
  , 'script'
  , 'section'
  , 'select'
  , 'span'
  , 'strong'
  , 'style'
  , 'sub'
  , 'sup'
  , 'table'
  , 'tbody'
  , 'td'
  , 'textarea'
  , 'tfoot'
  , 'th'
  , 'thead'
  , 'title'
  , 'tr'
  , 'ul'
  , 'var'
  , 'video'
  ].forEach(function (tag) {
    f[tag] = f.bind(null, tag)
  })

  ;[ 'base'
  , 'br'
  , 'embed'
  , 'hr'
  , 'img'
  , 'input'
  , 'keygen'
  , 'link'
  , 'meta'
  , 'param'
  , 'source'
  , 'wbr'
  ].forEach(function (tag) {
    f[tag] = attrOnly.bind(null, tag)
  })

  f.attrStr = attrStr
  f.attrOnly = attrOnly
  f.d = f.doctype = doctype

  return f

}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Flates()
}

