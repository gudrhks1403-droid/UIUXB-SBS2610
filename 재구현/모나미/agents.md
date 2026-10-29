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
2026.10.28
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




2026.10.29

.menu02가 가장 가까운 position: relative를 기준으로 삼아서 그런 거예요.

규칙 하나만 기억하세요

▎ position: absolute인 요소는 위로 올라가면서 처음 만나는 position이 지정된 조상(relative, absolute 등)을 기준으로 삼는다.

지금 상황에 대입하면

.menu02에서 위로 올라가면 이런 순서입니다.

.menu02 (absolute)
  ↑ li        ← relative 있음 → 여기서 멈춤! 기준 = li
  ↑ ul
  ↑ nav
  ↑ .con
  ↑ .top-bar

- li에 relative가 있어서 거기서 바로 멈춥니다. 그래서 width: 100%가 모나미소개 한 칸 폭이 됐어요.
- ul이나 .top-bar에 relative를 추가해도, 그보다 가까운 li의 relative가 먼저 걸리기 때문에 아무 변화가 없었던 겁니다.

그런데 왜 li에 relative를 넣었었냐면

빨간 밑줄 ::after가 각 메뉴 칸마다 붙어야 해서 li를 기준으로 삼은 거였어요. 그래서 하나의 relative를 두 요소가 같이 쓰는 상황이 됐습니다.
- 빨간 밑줄은 li 기준이 필요합니다(칸마다).
- 주황색 판은 더 큰 요소 기준이 필요합니다(메뉴 전체 또는 화면 전체).

그래서 해결 방법이 "li의 relative를 빼고, 밑줄은 a를 기준으로 옮기기"였던 거예요. 각자 다른 기준을 갖게 해주는 거죠.


 ::after는 inline이라 원래는 width: 100%; height: 2px가 안 먹어야 합니다.
- 그런데 밑줄이 잘 보였죠? position: absolute를 주면 요소가 자동으로 block처럼 바뀌어서 width와 height가 적용되기 때문입니다.
- 앞으로 밑줄을 a에 옮길 때도 같은 원리입니다. a(inline)에 position: relative를 주면 기준은 되지만, a의 높이는 글자 높이뿐이에요. 그래서 밑줄이 메뉴 바닥이 아니라 글자 바로 아래에 붙습니다. 메뉴 바닥에 붙이고 싶다면 a의 높이를 어떻게 키울지도 생각해 봐야 해요.



사실 display: inline은 직접 쓸 일이 많지 않습니다. a, span, strong, ::after 같은 요소는 원래 inline이라 따로 안 써도 되거든요. 직접 쓰는 건 주로 아래 경우입니다.

1. block 요소를 글자처럼 한 줄에 흐르게 할 때

div, p, li, h2 같은 block 요소는 무조건 줄바꿈이 됩니다. 이걸 문장 속 글자처럼 이어 붙이고 싶을 때 씁니다.
- 예: 빵부스러기 메뉴 홈 > 모나미소개 > CEO 메시지를 li로 만들었을 때, 한 줄로 이어지게 하기
- 예: 문단(p) 두 개를 한 줄로 이어 보이게 하기

2. 바꿔 놓은 것을 되돌릴 때

위에서 a { display: block; }처럼 바꿔 놨는데, 특정 부분에서만 원래대로 돌리고 싶을 때 씁니다.

실무에서는 다른 값을 더 많이 씀

inline은 width, height, 위아래 margin이 안 먹는다는 큰 단점이 있습니다. 그래서 나란히 놓으면서 크기도 조절하고 싶으면 아래 값을 씁니다.

┌──────────────────────────────────────────────────────┬──────────────┐
│                     하고 싶은 것                     │   쓰는 값    │
├──────────────────────────────────────────────────────┼──────────────┤
│ 글자처럼 흐르기만 하면 됨 (크기 조절 X)              │ inline       │
├──────────────────────────────────────────────────────┼──────────────┤
│ 옆으로 나란히 + 크기 조절 O (버튼, 배지 등)          │ inline-block │
├──────────────────────────────────────────────────────┼──────────────┤
│ 여러 개를 나란히 배치하고 간격과 정렬 조절 (메뉴 등) │ 부모에 flex  │
└──────────────────────────────────────────────────────┴──────────────┘

지금 만드시는 모나미 메뉴처럼 **레이아웃을 짤 때는 flex**를 쓰고 있죠. 그게 요즘 정석입니다. inline은 "문장 안에 들어가는 작은 것들"의 성질이라고 생각하면 됩니다.