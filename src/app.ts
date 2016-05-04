enum Type { A, B, C }

var log = console.log;

log( Type.A == 0);
log( Type.A == Type.A);
log( Type.A.toString() == "0");
log( Type[Type.A] == "A");