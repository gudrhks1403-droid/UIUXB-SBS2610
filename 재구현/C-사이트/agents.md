# C-사이트 (블루보틀 코리아) 비교 정리

`index.html` / `style.css` (첫 작업)와 `index_solution.html` / `style_solution.css` (정답 기준)의 차이입니다.

## HTML 비교

| 항목 | index.html (첫 작업) | index_solution.html (정답 기준) | 차이 설명 |
|---|---|---|---|
| 언어 | `lang="en"` | `lang="ko"` | 한국어 사이트라 `ko`가 맞음 |
| 제목 | `bluebottlecoffee` | `블루보틀 코리아` | |
| 탭 아이콘 | 없음 | `<link rel="icon">` | |
| 공지 띠 | `<div class="notice-bar">`가 **header 밖** | `<div class="announcement">`가 **header 안** | 정답은 공지도 상단 영역의 일부로 묶음 |
| 공지 문구 | 35,000원 이상 구매 시 무료 배송 | 원두 및 커피 최대 10% 할인 번들 구매 혜택 | |
| header | `<header>` | `<header id="BBC-01">` | 구간 번호 id로 링크 이동 가능 |
| 메뉴 감싸기 | `<div class="header-menu">` | `<nav class="main-nav">` | 메뉴는 의미에 맞는 `<nav>` 태그 사용 |
| 메뉴 항목 | `<li>쇼핑</li>` (글자만) | `<li><a href="#">쇼핑</a></li>` | 링크가 있어야 클릭 가능 |
| 로고 | `<div class="header-logo"><img></div>` | `<h1 class="logo-box"><a><img></a></h1>` | 로고는 사이트 제목이라 `<h1>`, 누르면 홈으로 가게 `<a>`로 감쌈 |
| 로고 alt | `블루보틀 커피` | `BLUE BOTTLE COFFEE` | |
| 아이콘 감싸기 | `.header-icons` 하나 | `.header-util` 안에 `.header-icons` | 바깥 박스로 너비 520px를 잡아 로고를 가운데로 보냄 |
| main / footer | `<main>메인</main>`, `<footer>하단</footer>` | 없음 | 정답은 상단(BBC-01)만 만든 상태 |

## CSS 비교

| 항목 | style.css (첫 작업) | style_solution.css (정답 기준) | 차이 설명 |
|---|---|---|---|
| 글꼴 | 지정 안 함 | Pretendard | |
| 기본 초기화 | `body { margin:0 }`만 | body, ul, li, h1~h6, p, a, button, img 모두 초기화 | 브라우저 기본 여백·밑줄 제거 |
| 배경색 | header에만 `#FDFBF7` | body 전체에 `#fdfbf7` | |
| 확인용 테두리 | `border: 1px solid red`, 파란 배경 | 없음 | 작업 중 확인용이라 완성본에선 뺌 |
| 공지 띠 | 높이 30px, 글자 12px, 배경 없음 | 높이 28px, 글자 11px, 흰 배경 | |
| 헤더 높이 | 80px | 88px | |
| 콘텐츠 너비 | 너비 제한 없음 + padding 60px | `.con` 1400px + padding 20px, 가운데 정렬 | 정답은 공통 `.con`을 다른 구간에서도 재사용 |
| 가로 배치 방식 | **grid** `1fr 1fr 1fr` (3등분) | **flex** + `space-between` | 정답은 수업에서 배운 flex만 사용 |
| 로고 가운데 정렬 | grid 3등분의 가운데 칸 | 메뉴·아이콘을 둘 다 520px로 맞춰 가운데로 | 방법만 다르고 결과는 비슷 |
| 메뉴 간격 | 40px | 32px | |
| 메뉴 글자 | 14px, 굵기 500, 자간 0.28px | 14px | |
| 메뉴 hover | 없음 | 파란색 `#00a1df` | |
| 로고 크기 | 지정 안 함 (원본 크기) | 25 × 62px | |
| 아이콘 크기 | 20 × 20px | 24 × 24px | |
| 아이콘 간격 | 20px | 24px | |

## 정답 원본과 index_solution의 차이 (폴더 구조 때문)

| 항목 | 정답 원본 | index_solution | 이유 |
|---|---|---|---|
| 이미지 경로 | `../../image/search.svg` 등 | `images/icon-search.svg` 등 | 이 프로젝트의 이미지 폴더 기준 |
| 링크 | `../../02_전체통합/...` | `#` | 해당 폴더가 이 프로젝트에 없음 |
| 글꼴 | `../../font/` 로컬 파일 | CDN `@import` | font 폴더가 없음 |

## 참고

- 정답은 **1600px PC 화면** 기준입니다. `.con` 바깥 너비가 1440px이라 화면이 그보다 좁으면 아이콘이 잘리고 로고가 가운데가 아닌 것처럼 보입니다. 브라우저를 최대화하거나 `Ctrl + -`로 축소해서 확인하세요.
- **한 줄 요약:** 첫 작업은 grid로 3칸을 나눠 배치했고, 정답은 flex + 고정 너비(520px)로 배치했습니다. 정답은 `<nav>`, `<h1>`, `<a>` 같은 의미 있는 태그를 씁니다.
