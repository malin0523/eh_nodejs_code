//다양한 자료형이 존재하나 var로 동일하게 선언함, 안에 넣는 값을 다르게 한다.
var num = 1;
var string1 = "문자열";
var bool1 = false;

//typeof연산자 사용 시 변수 타입을 문자로 변환받는다
typeof 100; //number
typeof "hello"; //string
typeof true; //boolean
typeof undefined; //undefined
typeof null; //object

//undefined : 타입이 정해지지 않은 것. 초기화되지 않은 변수나 존재하지 않는 값에 접근 시 반환됨
var num; //초기화 x
var str = null; //null이므로 값이 존재하지 않음
typeof num2; //정의되지 않은 변수

//null과 undefined는 타입을 제외하면 같은 의미이지만 타입이 다르므로 일치하지는 않음
//즉, 동등한 관계이나 일치하지는 않는다
null == undefined; //true
null === undefined; //false

//묵시적 타입 변환 : 특정 값을 기대하는 곳에 다른 타입이 오면 자동으로 타입이 변환됨
10 + "문자열"; //10이 문자열로 변환되어 연결됨
"3" * "5"; //곱셈 수행을 위해 둘다 숫자로 바뀜