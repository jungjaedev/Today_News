# 엘리스헬스케어 기업 과제

FE-advanced-course 4번 과제입니다.

## 🍫 프로젝트 실행 방법

`npm install` -> `npm run start` : 터미널에 입력하여 로컬 환경에서 프로젝트 실행

## 🍫 사용한 스택 목록

- Typescript : v4.8.3
- React : v18.2.0
- Styled-components : v5.3.5
- React-redux : v8.0.2

## 🍫 구현 방법

- 전체적인 디렉토리 구조

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
└───type/                       // 타입
│   App.tsx                     // <Main /> 렌더링
│   index.tsx                   // <App />을 루트로 렌더링
...
```

- 로그인
  - `validateLogin`으로 아이디/비밀번호 확인
  - 이메일/비밀번호가 일치하지 않을 시 오류 메세지를 사용자에게 보여줍니다.
  - 로그인 시 ArticleList 컴포넌트가 보여집니다.
  - 로그인이 성공하면 전역 상태 `isLogin`을 `true`로 변경하고 로그인 정보를 로컬스토리지에 유효기간과 함께 담아둡니다.
  - 브라우저 새로고침 시에도 로그인 상태를 유지 시키기 위해 로컬스토리지에서 정보가 있는지 확인하고 유효기간을 비교합니다.
- 정렬 기능

  - 검색을 하면 정렬 버튼들이 보이게 됩니다.
  - 정렬버튼을 누르면 인기순(popularity), 최신순(recent)에 따라서 params를 수정 후 News API로 재요청하고, 정렬된 기사가 보여집니다.

- 페이지네이션(무한 스크롤)

  - `react-infinite-scroll-component` 라이브러리를 활용하여 구현하였습니다.
  - 한 번에 100개씩 데이터를 받아오고 스크롤을 하였을 때 다음 100개를 받아오는 방식으로 구현했습니다.
  - `page`, `hasMore` 두 변수로 더 받아올 데이터가 있는지 확인 후 요청합니다.

- 즐겨찾기 기능

  - 즐겨찾기버튼 즐겨찾기 리스트에 추가에 추가됩니다.
  - 즐겨찾기는 전역상태와 로컬스토리지에 저장해서 추가되어있는지 확인하고 아이콘⭐️색이 바뀝니다.
  - 즐겨찾기 페이지에서 즐겨찾기 아이콘을 한번 더 누르면 즐겨찾기 리스트에서 삭제됩니다.

- 본문 수정 기능
  - 즐겨찾기 페이지에서 수정아이콘을 누르면 해당 기사의 Detail컴포넌트로 이동합니다.
  - 내용 수정 후 저장하기 버튼을 누르면 수정됩니다. (기사에 따로 id가 없어서 title을 비교하여 수정하였습니다.)

```
로컬에서 실행 시
.env파일을 생성 후
REACT_APP_API_URL=https://newsapi.org/v2
REACT_APP_API_KEY={News API에서 받아온 API Key}
를 입력 후 저장해 줍니다.
```

## 🍫 스크린 샷 (토글버튼을 누르면 gif가 보여집니다.)

<details>
  <summary>로그인, 정렬</summary>
<img src='https://user-images.githubusercontent.com/69428509/190664183-80729a26-5929-439a-b22d-12dd491367ce.gif' />
</details>

<details>
  <summary>페이지네이션</summary>
<img src='https://velog.velcdn.com/images/jungjaedev/post/9857a1dd-683c-4c48-9255-f6a35c13e519/image.gif' />
</details>

<details>
  <summary>즐겨찾기, 수정</summary>
<img src='https://user-images.githubusercontent.com/69428509/190663814-310701cb-4e3f-4f6c-aa5e-a837e5e69a8f.gif' />
</details>
