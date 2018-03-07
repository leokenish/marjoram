Welcome to Marjoram!
===================

Installation
-------------

Include **marjoram css** and **marjoram js** files in html head tag like below.

> &lt;link rel="stylesheet" type="text/css" href="css/marjoram-1.0.0.min.css"&gt;<br>
> &lt;script type="text/javascript" src="js/marjoram-1.5.0.min.js"&gt;<br>


Document
-------------

> https://marjoram.herokuapp.com/css/<br>
> https://marjoram.herokuapp.com/js/<br>


Usage
-------------
#### ㅇ Ajax Class
1. Properties
&nbsp; - url: 통신할 url 주소
&nbsp; - param: 전송할 데이터 파리미터(json 타입)
&nbsp; - async: 비동기 통신여부, 기본값은 true
&nbsp; - result: 통신 후 반환 된 결과값이 자동으로 파싱되어 저장됩니다.
2. Methods
&nbsp; - Call(): 지정된 url 주소로 통신을 호출합니다.
&nbsp; - Parse(): 호출된 문자열 결과를 json 타입으로 파싱하여 반환합니다.
