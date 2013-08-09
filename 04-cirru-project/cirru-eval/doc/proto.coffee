
show = console.log

a =
  a: 'name of a'

a.set = (str) ->
  show @
  a.a = str

b =
  b: 'name of b'

b.__proto__ = a
b.set 'change to this'

show a, b