
cd `dirname $0`

# jade -wP *jade &
doodle index.html &

read

# pkill -f jade
pkill -f doodle