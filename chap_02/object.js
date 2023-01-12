var person = {
    name:"홍길동",
    birth:"030219",
    pID : "12345678",
    fullid : function(){
        return this.birth + this.pID;
    }
};

/*
var 객체 이름 = {
    프로퍼티1이름 : 값,
    프로퍼티2이름 : 값,
    프로퍼티n이름 : 값 ...
};

이후 new 연산자를 사용해 객체를 생성
*/