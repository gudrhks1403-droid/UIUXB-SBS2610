# Day 01. 오늘의 UI/UX · Frontend 학습 기록

학습 날짜: 2026-10-19 월
학습 주제: vs코드로 winget 설치와 codex,node,git,npm 버전 확인 , html을 이용하여 '마켓컬리'웹페이지 제작
학습 키워드: #터미널(에이전트) 이용 #winget #html 마켓컬리 제작 #개발자도구 분석

## 1. 오늘의 학습 목표

터미널로 개발 도구 버전을 확인하고, 마켓컬리 실제 페이지의 수치(높이, 색상, 글자)를 분석하여 html/css로 제작하기

### 2. 핵심 개념 정리

개념 1. winget (윈도우 패키지 관리자)

정의: 명령어로 프로그램을 설치·업데이트·삭제하는 Windows 공식 도구 (명령어로 쓰는 앱스토어)

사용하는 이유: 사이트에 들어가 설치 파일을 받지 않아도 명령어 한 줄로 설치하고, 여러 프로그램을 한 번에 업데이트할 수 있음

작동 원리: winget이 프로그램 저장소에서 설치 파일을 찾아 자동으로 다운로드하고 설치

실제 사용 사례: winget install Git.Git 으로 Git 설치, winget upgrade --all 로 전체 업데이트

개념 2. 상단 띠배너 (Top Banner)

정의: 웹페이지 맨 위에 띠처럼 길게 들어가는 홍보 배너

사용하는 이유: 회원가입 쿠폰, 이벤트 같은 중요한 홍보 내용을 가장 먼저 보여주기 위해 사용

작동 원리: 헤더 위에 한 줄 영역을 만들고 링크 문구와 닫기 버튼을 배치

실제 사용 사례: 마켓컬리 "지금 가입하고 최대 1만 2천원 할인 쿠폰 받아가세요!" 배너

개념 3. 유틸 메뉴 (Utility Menu)

정의: 헤더 오른쪽 위에 있는 회원가입 · 로그인 · 고객센터 같은 작은 보조 메뉴

사용하는 이유: 자주 쓰는 계정·고객 기능을 어느 페이지에서든 바로 찾을 수 있게 하기 위해 사용

작동 원리: display: flex 로 메뉴를 가로로 나란히 놓고, 사이에 세로 구분선을 넣음

실제 사용 사례: 마켓컬리 헤더의 회원가입(보라색) | 로그인 | 고객센터 ▼

#### 3. 개념 도식화

개발 도구 버전 확인 결과

도구     ㅣ 확인 명령어        ㅣ 버전

winget   ㅣ winget --version   ㅣ v1.29.280

node     ㅣ node -v            ㅣ v24.15.0

npm      ㅣ npm -v             ㅣ 11.12.1

git      ㅣ git --version      ㅣ 2.54.0

codex    ㅣ codex --version    ㅣ 0.163.0


마켓컬리 헤더 분석 수치

구분     ㅣ 상단 띠배너(.top-banner)     ㅣ 유틸 메뉴(.util-menu)

높이     ㅣ 42px                        ㅣ 35px

배경색   ㅣ #5f0080 (컬리 보라)          ㅣ 투명

글자크기 ㅣ 14px                        ㅣ 12px

글자색   ㅣ #fff                        ㅣ #333 (회원가입만 #5f0080)

글자두께 ㅣ 400 (강조 부분 700)          ㅣ 400

기타     ㅣ line-height 42px, Pretendard ㅣ 구분선 1px x 13px, #d9d9d9, 좌우 여백 12px


-마켓컬리 헤더 구조

flowchart TD
    A["상단 띠배너 .top-banner (42px)"] --> B["헤더 영역"]
    B --> C["유틸 메뉴 .util-menu (35px)"]
    C --> D["회원가입 .signup"]
    C --> E["로그인"]
    C --> F["고객센터 ▼"]

##### 4. 실습 및 코드

실습 목표

터미널로 개발 도구 버전을 확인하고, 마켓컬리 띠배너와 유틸 메뉴를 html/css로 만들기

작성 코드

```powershell
winget --version
node -v
npm -v
git --version
codex --version
```

```html
<html lang="ko">

<div class="top-banner">
  <a href="#">지금 가입하고 <b>최대 1만 2천원 할인 쿠폰</b> 받아가세요!</a>
</div>

<div class="util-menu">
  <a href="#" class="signup">회원가입</a>
  <a href="#">로그인</a>
  <a href="#">고객센터</a>
</div>
```

```css
.top-banner {
  height: 42px;
  background-color: #5f0080;
  color: #fff;
  font-family: Pretendard, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 42px;
}
.top-banner b {
  font-weight: 700;
}

.util-menu {
  display: flex;
  align-items: center;
  height: 35px;
  font-size: 12px;
  color: #333;
}
.util-menu .signup {
  color: #5f0080;
}
.util-menu a + a::before {
  content: "";
  display: inline-block;
  width: 1px;
  height: 13px;
  margin: 0 12px;
  background-color: #d9d9d9;
  vertical-align: middle;
}
```

실행 결과

모든 도구의 버전이 정상 출력되어 개발 환경이 준비된 것을 확인함
마켓컬리 실제 수치를 그대로 적용하여 띠배너와 유틸 메뉴를 비슷하게 만들 수 있음

###### 5. 오류 및 해결 과정

발생 문제

마켓컬리 클래스명(css-x80o0r, ezqxymp3 등)이 무슨 뜻인지 알 수 없음

원인

CSS-in-JS 라이브러리(Emotion)가 자동으로 만든 이름이라 의미가 없음

해결 방법

역할이 바로 보이는 이름으로 직접 지어서 사용 (.top-banner, .util-menu, .signup)

###### 6. 오늘의 핵심 요약

winget = 명령어로 쓰는 앱스토어 (install 설치 / upgrade 업데이트 / uninstall 삭제 / list 목록)

lang="ko" = 이 페이지가 한국어라고 브라우저에 알려주는 속성

상단 띠배너 = 높이 42px, 배경 #5f0080, 글자 14px

유틸 메뉴 = 높이 35px, 글자 12px #333, 회원가입만 보라색

클래스명은 짧고 역할이 보이게 짓기 (.top-banner, .util-menu, .signup)

###### 7. 추가 학습 및 복습

winget 주요 명령어(search, install, upgrade, uninstall, list) 직접 실행해보기

개발자 도구로 다른 영역(로고, 검색창, 메뉴)의 높이·색상·글자 수치 확인해보기




| 번호 | 이미지 문구 | 상품명 | 정가 | 할인율 | 판매가 | 추가 표시 |
|---:|---|---|---:|---:|---:|---|
| 1 | 일일특가 | [일일특가][Kurly's] 동물복지 유정란 20구 | 10,580원 | 24% | 7,990원 | Kurly Only |
| 2 | +20% 쿠폰 | [KF365] 새콤달콤 제주 감귤 1.5kg (비가림 하우스) | 15,900원 | 25% | 11,900원 | Kurly Only |
| 3 | 멤버스특가 | [Dole] 스위티오 바나나 2종 (택1) | 4,200원 | 5% | 3,990원~ | — |
| 4 | +10% 쿠폰 | [KF365] 항공직송 노르웨이 생연어 6종, 택1 (냉장) | 15,900원 | 17% | 13,150원~ | Kurly Only |