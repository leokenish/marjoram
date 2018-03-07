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
1. Properties<br>
&nbsp; - url: 통신할 url 주소<br>
&nbsp; - param: 전송할 데이터 파리미터(json 타입)<br>
&nbsp; - async: 비동기 통신여부, 기본값은 true<br>
&nbsp; - result: 통신 후 반환 된 결과값이 자동으로 파싱되어 저장됩니다<br>
2. Methods<br>
&nbsp; - Call(): 지정된 url 주소로 통신을 호출합니다<br>
&nbsp; - Parse(): 호출된 문자열 결과를 json 타입으로 파싱하여 반환합니다<br>


#### ㅇ Sort Class
1. Properties<br>
&nbsp; - array: 정렬할 배열 오브젝트<br>
&nbsp; - val: 정렬 기준이 될 필드 명<br>
2. Methods<br>
&nbsp; - Ascend(): 지정된 필드를 기준으로 오름차순 합니다<br>
&nbsp; - Descend(): 지정된 필드를 기준으로 내림차순 합니다<br>
&nbsp; - Reverse(): 지정된 필드를 기준으로 역으로 나열합니다<br>
&nbsp; - Max(): 지정된 필드 중 최대값이 포함된 object를 반환합니다<br>
&nbsp; - Min(): 지정된 필드 중 최소값이 포함된 object를 반환합니다<br>
&nbsp; - Sum(): 지정된 필드의 데이터 값을 숫자화하여 합을 반환합니다<br>



#### ㅇ Modal Class
1. Properties<br>
&nbsp; - title: 모달창의 제목 입니다. html 태그로 디자인 가능 합니다<br>
&nbsp; - content: 정렬 기준이 될 필드 명<br>
&nbsp; - footer: 정렬 기준이 될 필드 명<br>
2. Methods<br>
&nbsp; - Create(): div태그의 모달창을 생성 합니다<br>
&nbsp; - Pop(): 생성된 모달창을 띄웁니다<br>
&nbsp; - Close(): 생성된 모달창을 종료합니다<br>
