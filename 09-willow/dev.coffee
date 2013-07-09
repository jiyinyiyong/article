
require('calabash').do 'dev',
  'pkill -f doodle'
  'jade -o ./ -wP layout/index.jade'
  'coffee -o build/ -mwbc coffee/'
  'doodle build/main.js delay:0 log:yes'