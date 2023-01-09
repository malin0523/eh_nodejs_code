//console.log("Hello World");

const http = require('http'); //import와 유사

http.createServer(/*함수시작*/(req, res) => {
    res.statusCode = 200; //정상 실행 시 200이라는 statusCode 사용하겠음
    res.setHeader("Content-type", "text/plain"); //헤더에는 보여줄 콘텐츠 타입을 나타냄
    res.end("Hello TUK World!!"); //보여줄 결과
}/*함수끝*/).listen(3000); // 3000이라는 포트 번호를 사용
