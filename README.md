# movie-slider
https://wsss.tistory.com/1852 블로그님의 이미지 슬라이드 에 영감을 받아 최신 영화 포스터 슬라이드 웹 페이지를 만들어 보기로 했다.

>## 2022년 11월 6일(일) 프로젝트 세팅
 - express 로 웹서버를 구축하였으며 https://wsss.tistory.com/1852 블로그에 있는 코드를 먼저 세팅하여 보았다.

- issue
   1. slider.js 에 있는gsap 를 import 해 보려 하는대 그냥은 node_modules 에 있는 모듈을 import 하는 방법을 모르겠다.
   2. 확인 해 보니 해당 모듈은 commonjs 방식으로 export 되어 있다. 그래서 express에 node_moduels 폴더를 정적 경로로 설정 하고, index.html 에서 script태그로 import 한 slider.js 에 require 구문을 활용해 node_modules 에 있는 index.js 파일을 require 시도 해 보았다. 결론은 "Uncaught ReferenceError: require is not defined" require 구문을 사용 할 수 없단다.

   3. 해당 문제의 원인에 대해서 다음 포스팅을 통해 확인하였다. https://stackabuse.com/bytes/fix-require-is-not-defined-in-javascript-node/

   4. 결론은 require 구문은 브라우저에서 동작하지 않는단다. 이를 대체하기위해 webpack 과 같은 모듈 번들러를 활용한단다.

   5. 이번 기회에 webpack 에 대해서 공부할겸 모듈 번들링 하는 법을 학습 해 보아야 겠다.
   