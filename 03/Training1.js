var a = 20;
var b = 40;
var c = 60;
if(a > b){
    document.writeln("a > b");
}else if( b > c){
    document.writeln("b > c");
}else if( a < c){
    document.writeln("a < c");
}else if( b < c){
    document.writeln("b > c");
}else{
    document.writeln("모든 조건을 만족하지 않아용..");
}