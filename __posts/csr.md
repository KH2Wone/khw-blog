---
categories:
  - Development
  - CSR
  - React
date: "2023-07-15"
description: CSR에 대해 소개합니다.
slug: csr
tags:
  - react
  - next.js
  - client
  - rendering
  - CSR
  - SSR
title: CSR 알아보기
id: 123
---

# CSR

## CSR이란 무엇일까?
클라이언트가 렌더링 할게!

client-side-rendering, 영문 뜻 그대로 클라이언트 단(웹 브라우저)에서 JavaScript를 사용하여 동적으로 콘텐츠를 생성하고 렌더링하겠다는 의미이다. 서버에는 데이터를 요청하고, JavaScript로 컨트롤 한다.

SSR은 반대로 서버에서 동적으로 콘텐츠를 생성하고 렌더링하겠다는 의미가 된다.

### CSR, 장점?
깜빡임이 없는 매끄러운 UX
클라이언트에서 응답 데이터를 기반으로 새로운 페이지가 아닌 변경된 부분에 대해서만 업데이트한다.
사용자 이벤트에 반응하여 실시간으로 상호작용할 수 있으며 변경된 부분만 업데이트하게 되면 페이지가 전환될 때마다 Blinking Issue가 없어서 사용자의 경험을 해치지 않는다.
페이지간 이동시 빠르게 응답하여 로드
페이지를 구성할 때 필요한 데이터만 요청하므로 서버 부하 절감
UI 재사용 편리
변화된 부분만 업데이트하므로 UI를 재사용하기 편리하다.
개발 프로세스 단순화
클라이언트 <-> 서버간 각자 독립적으로 작업하게 되므로 프로세스가 단순화 된다.


### CSR, 단점?
```javascript
// index.html
<div id="root"></div>

// src/App.js
function App() {
  return (
    <div className="App">Hello World!</div>
  );
}
export default App;

// src/index.js
ReactDOM.render(<App />, document.getElementById('root'));
```


> App.js의 컨텐츠를 `id="root"`인 `div` 요소에 넣어서 렌더링하는구나!
> 그러면 처음에는 무조건 id="root"인 요소 내부는 텅- 비어있네?

1. 초기 페이지 로딩 시간 소요
초기 페이지 로딩시 모든 HTML과 JavaScript를 다운로드해야하기 때문에 이로 인해 로딩 시간이 더 소요된다.
2. 큰 규모의 애플리케이션에서는 초기 로딩 데이터 양이 크게 증가할 것이다.
3. SEO 대응 부족
초기에 HTML 콘텐츠가 비어져있다.. (root 참고) 그래서 검색 엔진이 크롤링할 데이터가 없다.
보안 취약
클라이언트 측에서 로직이 실행된다는 것은 보안 문제가 유발될 수 있다는 뜻이기도 하다.
