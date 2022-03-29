## Nextjs Basic 사용해보기 / Nextjs이용해서 Sanity 연동해서 블로그 만들어보기

### note...

- Nextjs 의 가장큰 특징은 개발자가 ssr에 대해 직접적인 고민을 하지 않아도 된다는 점
- 정적사이트를 만들수있다
- file-system 라우팅
- 타입스크립트 서포트
- ssg and ssr 하이브리드

package.json에 스크립트 명령문 추가

```
	"dev": "next dev",
	"build": "next build",
	"start": "next start"
```

npm run dev 로 실행

npm run build 로 빌드시키면

npm start 로 실행가능.

.next 라는 폴더안에 build된 파일들이 생성됨

---

npx create-next-app 으로 프로젝트생성후

pages/index.js 에서 메인페이지 설정

Home이라는 함수안에 return값이 "/"페이지

pages 폴더안에 폴더작성시 폴더이름이 http://localhost:3000/[폴더이름] 으로 주소값이 폴더명이 됨. => 파일기반 라우팅시스템의 특징

getStaticProps getStaticPaths

next build 를 하면 npm start 로 서버를 올릴수있고 여기선 /api/hello 를 사용가능 CSR으로 바뀌면서 페이지이동속도가 빨라진다

next export 를 하면 out폴더가 생성되고 /api와 하위폴더 사용불가능해진다마찬가지로 CSR이라서 페이지이동속도는 빨라짐

---

### 사용된 라이브러리 및 기타 명령어

- npm i next react react-dom
- npx create-next-app [폴더명] //으로 cna 생성
- npm i antd @ant-design/icons
- npm i dayjs
- npm i @sanity/block-content-to-react
- npm i react-syntax-highlighter
