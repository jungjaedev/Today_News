# News API 활용한 프로젝트

## 프로젝트 소개

- 개요 : News API 활용한 프로젝트
- 주제 : OPen API를 이용한 기사 검색 서비스
- 기간 : 2022.09.13 ~ 2022.09.16

<br />

## 사용한 스택 목록

- Typescript : v4.8.3
- React : v18.2.0
- Styled-components : v5.3.5
- React-toolit : v1.8.5

<br />

## 디렉토리 구조

```js
/src
└───assets/                     // 프로젝트에서 사용하는 이미지 요소 포함
└───Components/                 // 컴포넌트
└───data/                       // redux store
└───GlobalStyles/               // 전역 스타일
└───lib/                        // 자주 쓰는 함수 모듈화
└───Pages/                      // 메인 컴포넌트
└───Structure/                  // <App />의 전체
└───Theme/                      // 자주 쓰는 컬러
└───type/                       // 자주 쓰는 타입
│   App.tsx                     // <Main /> 렌더링
│   index.tsx                   // <App />을 루트로 렌더링
...
```

<br />

## 구현 기능

- 검색, 정렬 기능

  - 메인 페이지는 기본값으로 US top headline이 보여집니다.
  - 검색은 입력 후 `Enter`키를 눌러도 동일하게 동작합니다.
  - 검색을 하면 정렬 버튼들이 보이게 됩니다.
  - 정렬버튼을 누르면 인기순(popularity), 최신순(recent)에 따라서 params를 수정 후 News API로 재요청하고, 정렬된 기사가 보여집니다.

- 로그인

  - `validateLogin`함수를 통해 아이디/비밀번호를 확인합니다.
  - 이메일/비밀번호가 일치하지 않을 시 오류 메세지를 사용자에게 보여줍니다.
  - 로그인 시 `<ArticleList />`컴포넌트가 보여집니다.
  - 로그인이 성공하면 전역 상태에서 `isLogin`을 `true`로 변경하고 로그인 정보를 로컬스토리지에 유효기간과 함께 담아둡니다.(유효기간은 기본값으로 1시간 지정)
  - 브라우저 새로고침 시에도 로그인 상태를 유지 시키기 위해 로컬스토리지에서 정보가 있는지 확인하고 유효기간을 비교합니다.
  - 로그인 모달 구현 - `<Portal />`
    - `ReactDom.createPortal`을 이용해 첫번째 인자로 로그인 `<Modal />`컴포넌트를 넣어주고 두번째 인자로 `#root`와 형제 요소인 `#modal`을 넣어서 사용했습니다.
    - 사용한 이유 - `z-index`를 아무리 높여도 부모의 `z-index`가 낮다면 원하는 방향으로 렌더링이 되지않습니다. 따라서 `index.html`에서 `#modal` div를 최상단에 생성하여 모달창을 띄우는 방식으로 만들었습니다.

- 페이지네이션(무한 스크롤)

  - `react-infinite-scroll-component` 라이브러리를 활용하여 구현하였습니다.
  - 한 번에 100개씩 데이터를 받아오고 스크롤을 하였을 때 다음 100개를 받아오는 방식으로 구현했습니다.
  - `page`, `hasMore` 두 변수로 더 받아올 데이터가 있는지 확인 후 요청합니다.

- 즐겨찾기 기능

  - 즐겨찾기버튼을 누르면 즐겨찾기 리스트에 추가에 추가됩니다.
  - 즐겨찾기는 전역상태와 로컬스토리지에 저장해서 추가되어있는지 확인하고 아이콘⭐️색이 바뀝니다.
  - 즐겨찾기 페이지에서 즐겨찾기 아이콘을 한번 더 누르면 즐겨찾기 리스트에서 삭제됩니다.

- 본문 수정 기능
  - 즐겨찾기 페이지에서 수정아이콘을 누르면 해당 기사의 `<Detail />`컴포넌트로 이동합니다.
  - 내용 수정 후 저장하기 버튼을 누르면 수정됩니다. (기사에 따로 id가 없기 때문에 `title`을 비교하여 내용을 수정하였습니다.)

<br />

## 프로젝트 설치 및 실행

1. Git Clone

```shell
$ git clone https://github.com/jungjaedev/codestates-fe-advanced-project-jungjaewon-4.git
```

2. 프로젝트 패키지 설치

```shell
$ npm install
```

3. 프로젝트 실행

로컬에서 실행 시 .env파일을 생성 후 저장

```.env
REACT_APP_API_URL=https://newsapi.org/v2
REACT_APP_API_KEY={News API에서 받아온 API Key}
```

```shell
$ npm run start
```

<br />

## 배포

- vercel을 통해 배포하였으나 News API CORS 정책으로 인해 정상작동되지 않습니다.

- 배포 스크린 샷 - 검색결과가 나오지 않습니다.
  <img src='notion://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff2b6f763-9e13-4e50-bb25-8a1d9dbeb006%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2022-09-26_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_5.45.43.png?table=block&id=845f1e71-cdf6-4961-8812-761d2c6f9779&spaceId=b913ab69-b9d5-449d-9c3f-5ce3e80307d2&width=2000&userId=9532ac57-72ac-4f70-9a6b-66f098f578f9&cache=v2' />

<br />

## GIF 스크린 샷

- <summary>로그인, 즐겨찾기</summary>
  <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ae780ff6-6e72-448c-92a8-b3f8059ccb84/loginFav.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T142904Z&X-Amz-Expires=86400&X-Amz-Signature=a0770202b9f213da86c3d7ec06325e46598cd905e6ea60831c5d05f686a0e7d1&X-Amz-SignedHeaders=host&x-id=GetObject' />

- <summary>페이지네이션(무한스크롤)</summary>
  <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/207611d7-fa53-4b57-b52c-602ad0448cfc/scrollinfi.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T142904Z&X-Amz-Expires=86400&X-Amz-Signature=1e0b19994fd6ee275850fec4bd1ebd6a6537f2efa3073c0927bfc2801e92c298&X-Amz-SignedHeaders=host&x-id=GetObject' />
  </details>

- <summary>최신순, 인기 출처순 정렬</summary>
  <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/95b1580f-0608-4cbd-889c-80ca442712be/searchsort.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T142904Z&X-Amz-Expires=86400&X-Amz-Signature=b72c3f20e02a93079f855f130db12c01e8c0a31dca24347ef9efd9df8c2ed83b&X-Amz-SignedHeaders=host&x-id=GetObject' />

  - <summary>즐겨찾기 본문 수정</summary>
    <img src='https://s3.us-west-2.amazonaws.com/secure.notion-static.com/c71d0406-b67b-4f0f-ad2f-e425a3d9000e/favEdit.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221004%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221004T142905Z&X-Amz-Expires=86400&X-Amz-Signature=174a598c33101a82403739352c25feca9dfb92eb5d32f03118a9cc80efd29246&X-Amz-SignedHeaders=host&x-id=GetObject' />
