var Type;
(function (Type) {
    Type[Type["A"] = 0] = "A";
    Type[Type["B"] = 1] = "B";
    Type[Type["C"] = 2] = "C";
})(Type || (Type = {}));
var log = console.log;
log(Type.A == 0);
log(Type.A == Type.A);
log(Type.A.toString() == "0");
log(Type[Type.A] == "A");
