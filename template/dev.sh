
cd `dirname $0`

jade -O page/ -wP src/*jade &
stylus -o page/ -w src/*styl &
doodle page/ &

read

pkill -f jade
pkill -f stylus
pkill -f doodle