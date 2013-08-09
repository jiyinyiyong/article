
require('calabash').do 'dev',
  'jade -o page/ -wP src/'
  'stylus -o page/ -w src/'
  'livescript -o page/ -wbc src/'