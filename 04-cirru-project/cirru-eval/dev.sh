
cd `dirname $0`
echo '-- start watching'

stylus -o examples/ -w page/*styl &
jade -O examples/ -wP page/*jade &
coffee -o examples/  -wbc page/*coffee &
coffee -o src/  -wbc script/*coffee &
doodle examples/ src/ &

read

pkill -f jade
pkill -f stylus
pkill -f coffee
pkill -f doodle

echo '-- stop watching'