그리드 1400px
gutter 22px
margin 20px

header - main - footer

flex-direction: column; 세로 바꿈
justify-content: space-between; :왼쪽 오른쪽분리
 <button type="button" class="lang-btn"></button> 버튼은 항상 타입이 있어야함
link 는 타이틀 밑에
88x30

---

# index.html / style.css vs ex.html / ex_style.css 비교

> 비교 대상: `1코딩/모나미/` 폴더 (2026-10-28 기준)

## 1. HTML 비교 (`index.html` vs `ex.html`)

### `<head>` 부분
| 항목 | index.html | ex.html | 차이 |
|---|---|---|---|
| `lang` 속성 | `en` (영어) | `ko` (한국어) | 한국어 사이트라서 `ko`가 맞음 |
| `<title>` | `MONAMI` | `모나미` | 글자만 다름 |
| 연결한 CSS 파일 | `style.css` | `ex_style.css` | 서로 다른 파일 |
| `<link>` 순서 | CSS 파일 → 구글 심볼 | 구글 심볼 → CSS 파일 | ex.html 순서가 좋음. 내 CSS가 뒤에 와야 덮어쓸 수 있음 |
| 주석 | 없음 | `<!-- 구글 심볼 -->` | ex.html에만 있음 |

### 유틸메뉴 (`utmenu`)
| 항목 | index.html | ex.html | 차이 |
|---|---|---|---|
| 언어 버튼 감싸는 `div.lang` | ❌ 없음 | ✅ 있음 | ex.html은 버튼을 한 번 더 감쌈 |
| SNS Emmet 주석 | ❌ 없음 | ✅ `<!-- ul>li*3>a>img -->` | ex.html에만 있음 |
| SNS 아이콘 3개 | ✅ | ✅ | 같음 |
| topmenu 구조 | `span` 3개 | `ul > li > a` 3개 | ex.html이 목록과 링크 구조로 더 알맞음 |
| topmenu 글자 | HOMESITE / MAP / CONTACT US | HOMESITE / **MAPCONTACT** / **US** | ⚠️ ex.html 글자가 잘못 나뉨. `MAP`, `CONTACT US`가 맞음 |
| topmenu 링크 | ❌ 없음 | ✅ `href="#"` | ex.html에만 있음 |

### 상단바 (`top-bar`)
| 항목 | index.html | ex.html | 차이 |
|---|---|---|---|
| 로고 `h1.logo-box` | 글자 "로고 박스" | `a > img(logo.jpg)` | ex.html은 실제 로고 이미지와 링크가 들어감 |
| `nav` | 글자 "네비바" | `ul > li*7 > a` 메뉴 7개 | ex.html은 GNB가 완성됨 |
| Emmet 주석 | ❌ 없음 | ✅ 있음 | 주석 안에 아직 `herf` 오타가 남아 있음 (동작에는 영향 없음) |
| 유틸메뉴 `.header-util` | 글자 "유틸메뉴" | 검색 아이콘과 메뉴 아이콘 | ex.html에만 아이콘 있음 |
| `id` 사용 | ❌ 없음 | ✅ `id="header-util"` | ex.html에만 있음 |
| `.header-util` 개수 | 1개 | ⚠️ **2개가 겹쳐 있음** | 같은 클래스가 이중으로 있어서 스타일이 두 번 적용됨. 하나로 합치는 게 좋음 |
| 아이콘 태그 | ― | `span` | 누를 수 있는 아이콘이니 `button type="button"`으로 감싸는 게 좋음 |

### `main` / `footer`
| 항목 | index.html | ex.html | 차이 |
|---|---|---|---|
| `main` 안쪽 | 글자만 있음 | `div.con`으로 감쌈 | ex.html은 1400px 가운데 정렬이 적용됨 |
| `footer` 안쪽 | 글자만 있음 | `div.con`으로 감쌈 | 위와 같음 |

### HTML 요약
- **ex.html에만 있는 것:** 실제 로고 이미지, GNB 메뉴 7개, 검색·메뉴 아이콘, `div.lang`, `id="header-util"`, `main`·`footer`의 `.con`, Emmet 주석
- **index.html에만 있는 것:** 없음. ex.html이 index.html의 구조를 다 포함하고 더 진행된 상태
- **ex.html에서 고칠 것:** topmenu 글자 나뉨(`MAPCONTACT` / `US`), `.header-util` 이중 중첩, 아이콘을 `button`으로 감싸기

---

## 2. CSS 비교 (`style.css` vs `ex_style.css`)

### 폰트 / 기본 설정(리셋)
| 항목 | style.css | ex_style.css | 차이 |
|---|---|---|---|
| Pretendard `@font-face` | ❌ 없음 | ✅ 굵기 100~900 | ex_style.css에만 웹폰트가 있음 |
| `body` 폰트 지정 | ❌ 없음 | ✅ `font-family: 'Pretendard'` | style.css는 브라우저 기본 폰트로 나옴 |
| `body, ul, li` 리셋 | ✅ | ✅ | 같음 |
| `h1~h6, p` 리셋 | ✅ | ✅ | 같음 |
| `a` 리셋 (색 상속, 밑줄 제거) | ❌ 없음 | ✅ 있음 | style.css는 링크가 파란색에 밑줄로 나옴 |
| `button` 리셋 | ✅ | ✅ | 같음 |
| `img` | `display: block` + `background-color: #f1f1f1` | `display: block`만 | ex_style.css는 회색 배경을 지움 |
| `.img` | ⚠️ 있음 | ❌ 없음 | 클래스 선택자라서 `<img>` 태그에는 적용되지 않음. 지워도 됨 |
| `.con` | ✅ | ✅ | 같음 |

### 밑줄(구분선)
| 항목 | style.css | ex_style.css | 차이 |
|---|---|---|---|
| `header` 밑줄 | ✅ | ❌ 없음 | |
| `.utmenu` 밑줄 | ❌ 없음 | ✅ | ex_style.css는 유틸메뉴 아래에도 선이 있음 |
| `.top-bar` 밑줄 | ❌ 없음 | ✅ | |
| 결과 | 헤더 맨 아래에만 선 1줄 | 유틸메뉴 아래, 상단바 아래에 선 2줄 | 실제 사이트와 같은 건 ex_style.css |

### 유틸메뉴
| 항목 | style.css | ex_style.css | 차이 |
|---|---|---|---|
| `.utmenu-con` | `display: flex` 중복 + space-between + 58px | space-between + 58px | `.con`에 이미 flex가 있어서 빼도 됨 |
| `.links` | ✅ | ✅ | 같음 |
| `.lang-btn` 모서리 | `10px` | `4px` | |
| `.lang-btn` 글자 | ❌ 없음 | `11px`, 굵기 100 | |
| `.lang-btn` 주석 | ❌ 없음 | ✅ 속성마다 설명 | |
| `.sns` | ✅ 있음 | ❌ 없음 | |
| `.sns ul` / `.sns > ul` | 자손 선택자(띄어쓰기) | 자식 선택자(`>`) | 결과는 같음 |
| `.topmenu` | `.topmenu`에 flex | `.topmenu > ul`, `> li`에 flex | HTML 구조(`span` / `ul>li>a`)가 달라서 그럼 |
| topmenu 글자 색과 크기 | ❌ 없음 | `#9b9a9a`, `11px` | |
| 구분선 `\|` (`::after`) | ❌ 없음 | ✅ | ex_style.css에만 있음 |

### 상단바 / GNB
| 항목 | style.css | ex_style.css | 차이 |
|---|---|---|---|
| `.top-bar` | flex와 정렬 | 밑줄만 | 정렬은 안쪽 `.topbar-con`이 맡음. style.css는 바깥에 불필요한 flex가 있음 |
| `.topbar-con` 높이 | ❌ 없음 | `89px` | 실제 사이트와 같은 높이 |
| `.logo-box` | ❌ 없음 | `align-self: center` | |
| `nav > ul` | ❌ 없음 | flex, `height: 100%` | |
| 메뉴 `li` | ❌ 없음 | 좌우 padding `27px`, `17px`, `#303030` | |
| 마우스 올렸을 때 굵게 | ❌ 없음 | ✅ `font-weight: 700` | |
| 마우스 올렸을 때 빨간 밑줄 애니메이션 | ❌ 없음 | ✅ `::after` + `transition` (`#c40f39`) | |
| `.header-util` | ❌ 없음 | flex, `gap: 28px` | |
| `#header-util` (id 선택자) | ❌ 없음 | ✅ 아이콘 색 `#303030` | |

### `main` / `footer`
| 항목 | style.css | ex_style.css | 차이 |
|---|---|---|---|
| `main` | ❌ 없음 | 빨간 테두리(확인용) | 작업이 끝나면 지우기 |
| `footer` | ❌ 없음 | 반투명 회색 배경 | |

### CSS 요약
- **ex_style.css에만 있는 것:** Pretendard 폰트, `a` 리셋, 유틸메뉴·상단바 각각의 밑줄, topmenu 구분선, GNB 메뉴 스타일, 마우스 올렸을 때 효과, 유틸 아이콘 스타일
- **style.css에만 있는 것:** `header` 밑줄, `img` 회색 배경, `.sns`, 쓰이지 않는 `.img`, 중복된 `display: flex`
- **ex_style.css에서 확인할 것:**
  - 주석 오타: `comoinent` → `component`
  - `/* 투명도 0 ~ 1 */` 주석이 내용과 상관없는 위치에 있음
  - 메뉴 `:hover` 때 `font-weight: 700`으로 글자가 굵어지면 글자 폭이 넓어져서, 옆 메뉴가 살짝 밀릴 수 있음



