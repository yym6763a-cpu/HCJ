# 🇰🇷 한국 여행 & 팀 MT 웹 가이드 컬렉션
> **Korea Travel & MT Web Guide Collection**
>
> 국내 주요 여행지(서울·경주·부산) 일정 추천 및 팀 MT 리트릿 가이드를 위한 **단일 페이지(Single Page Web) 웹 애플리케이션 컬렉션**입니다. 외부 프레임워크 없이 바닐라 웹 기술로 제작되었으며, 모바일 최적화 및 다국어(KO/JA) 지원, Google Apps Script(GAS) 배포 호환성을 갖추고 있습니다.

---

## 📌 목차
- [📂 프로젝트 구성 요약](#-프로젝트-구성-요약)
- [✨ 프로젝트별 핵심 특징](#-프로젝트별-핵심-특징)
- [📊 전체 프로젝트 비교표](#-전체-프로젝트-비교표)
- [🛠️ 공통 기술 스택](#️-공통-기술-스택)
- [📁 통합 디렉토리 구조](#-통합-디렉토리-구조)
- [🚀 로컬 실행 및 배포 방법](#-로컬-실행-및-배포-방법)

---

## 📂 프로젝트 구성 요약

본 컬렉션은 목적과 대상 고객층에 맞춘 4개의 웹 가이드 프로젝트로 구성되어 있습니다.

### 1. 🌙 경주 MT 2박 3일 가이드 (`gyeongju-mt-guide`)
- **개요**: 부산 출발 1시간, 경주에서 보내는 2박 3일 팀 리트릿 올인원 가이드
- **핵심 포인트**: CSS 별빛·모닥불 애니메이션, Canvas 클릭 불꽃 파티클, 패럴랙스 인터랙션 및 준비물 체크리스트

### 2. 🏛️ 경주 1박 2일 팀 MT 가이드 (`gyeongju-1n2d-mt`)
- **개요**: 천년 신라의 도시 경주에서 즐기는 짧고 알찬 1박 2일 팀 MT 가이드
- **핵심 포인트**: 실시간 다국어(KO/JA) 토글 지원, 일자별 타임라인 탭, 숙소 비교 분석 카드 및 QR 링크

### 3. 🌊 부산 여행 3박 4일 가이드 (`busan-travel-guide`)
- **개요**: 바다와 미식을 즐기는 부산 3박 4일 추천 모델 코스
- **핵심 포인트**: 다국어(KO/JA) 인터페이스, 일자별 동적 일정 탭, 반응형 갤러리 및 모바일 접속 QR 코드

### 4. 🇰🇷 한국 3박 4일 여행 가이드 (서울 · 경주 · 부산) (`korea-travel-guide`)
- **개요**: 서울의 현대/전통, 경주의 역사, 부산의 바다를 잇는 글로벌/일본인 대상 한국 투어 코스
- **핵심 포인트**: Google Apps Script(GAS) 통합 최적화, 탭 기반 타임라인, 권역별 대표 미식 및 예산 가이드

---

## ✨ 프로젝트별 핵심 특징

### 🌙 1. 경주 MT 2박 3일 가이드
* **인터랙티브 visual 효과**: 별빛 점멸, 모닥불 및 반딧불 CSS 효과, 첨성대/왕릉 능선 SVG 실루엣 렌더링
* **캔버스 파티클 시스템**: HTML5 Canvas 및 `requestAnimationFrame`을 이용한 불꽃 링 및 이모지 버스트 애니메이션
* **실용적 인터랙션**: dynamic 스무스 스크롤, `IntersectionObserver` 스크롤 인터랙션, Plan B 대체 코스 안내

### 🏛️ 2. 경주 1박 2일 팀 MT 가이드
* **실시간 다국어 토글**: `data-ko`, `data-ja` 속성과 JS 상태 제어로 새로고침 없이 한국어/일본어 즉시 전환
* **숙소 가이드 비교**: 독채 펜션/글램핑 대 리조트/콘도형 숙소의 가격대, 적정 인원, 시설 실시간 비교
* **QR 코드 연동**: 오프라인 현장 접근성을 위한 단축 URL QR 코드 포함

### 🌊 3. 부산 여행 3박 4일 가이드
* **바다 감성 디자인**: 해운대, 광안리, 감천문화마을 등 부산 주요 명소 맞춤형 UI 스타일링
* **인터랙티브 일정 탭**: DAY 1부터 DAY 4까지 매끄러운 화면 전환으로 일자별 스케줄 확인
* **여행자 편의 기능**: 현지 미식 가이드, 주요 관광지 맵 연동 및 모바일 반응형 Grid

### 🇰🇷 4. 한국 3박 4일 여행 가이드 (서울 · 경주 · 부산)
* **GAS 환경 최적화**: Google Apps Script의 `HtmlService` 빌드 환경에 맞춘 단일 파일 정적 웹 구조
* **광역 코스 설계**: 수도권(서울), 영남권(경주), 해안권(부산)을 잇는 동선 설계
* **여행자 종합 가이드**: 팁, 추천 예산, 대표 미식 카테고리화 제공

---

## 📊 전체 프로젝트 비교표

| 프로젝트명 | 주요 목적 | 추천 기간 | 지원 언어 | 주요 기술적 특징 |
| :--- | :--- | :--- | :--- | :--- |
| **경주 MT 2박 3일** | 팀 리트릿 / 워크숍 | 2박 3일 | KO | Canvas 불꽃 파티클, SVG 패럴랙스, CheckList UI |
| **경주 1박 2일** | 팀 MT / 문화 탐방 | 1박 2일 | KO / JA | 실시간 다국어 토글, 숙소 비교 카드, QR 코드 |
| **부산 여행 3박 4일** | 휴양 및 식도락 여행 | 3박 4일 | KO / JA | 탭 기반 일정 렌더링, 모바일 최적화 QR, Gallery Grid |
| **한국 3박 4일** | 광역 여행 (서울·경주·부산) | 3박 4일 | KO / JA | GAS (Google Apps Script) 최적화, 정적 원페이지 |

---

## 🛠️ 공통 기술 스택

* **Frontend**: HTML5, CSS3 (Flexbox & CSS Grid, Custom Variables), Vanilla JavaScript (ES6+)
* **Graphics & Interaction**: Canvas API, SVG Graphics, `IntersectionObserver`, `requestAnimationFrame`
* **Deployment & Integration**: GitHub Pages, Google Apps Script (GAS `HtmlService`)

---

## 📁 통합 디렉토리 구조

```bash
korea-travel-web-collection/
├── gyeongju-mt-3d2n/ # 🌙 경주 2박 3일 팀 MT 가이드
│ ├── index.html
│ └── README.md
├── gyeongju-mt-2d1n/ # 🏛️ 경주 1박 2일 팀 MT 가이드
│ ├── index.html
│ └── README.md
├── busan-travel-4d3n/ # 🌊 부산 3박 4일 여행 가이드
│ ├── index.html
│ ├── Code.gs # GAS 배포용 스크립트 (선택)
│ └── README.md
├── korea-travel-4d3n/ # 🇰🇷 한국 3박 4일 여행 가이드 (서울·경주·부산)
│ ├── index.html
│ ├── Code.gs # GAS 서버 사이드 진입점
│ └── README.md
└── README.md # 통합 안내 문서 (본 파일)
```

---

## 🚀 로컬 실행 및 배포 방법

### 1. 로컬 환경에서 실행 (Common)
빌드 도구나 `npm install` 과정 없이 브라우저에서 바로 실행할 수 있습니다.

1. 프로젝트 저장소를 클론(Clone)합니다.
   ```bash
   git clone https://github.com/your-username/korea-travel-web-collection.git
   cd korea-travel-web-collection
   ```
2. 실행하고자 하는 디렉토리로 이동 후 `index.html` 파일을 브라우저로 엽니다.
   - VS Code의 **Live Server** 확장 프로그램을 사용하는 것을 추천합니다.

---

### 2. GitHub Pages 배포 방법
1. GitHub 저장소의 **Settings** > **Pages** 탭으로 이동합니다.
2. **Source**를 `Deploy from a branch`로 설정하고 `main` (또는 `master`) 브라우저/루트 폴더를 선택합니다.
3. 저장 후 발급되는 URL로 정적 사이트에 무료 접속할 수 있습니다.

---

### 3. Google Apps Script(GAS) 배포 방법 (선택)
`Code.gs`가 포함된 프로젝트의 경우 아래 절차로 배포할 수 있습니다:

1. [Google Apps Script](https://script.google.com/)에서 새 프로젝트를 생성합니다.
2. `Code.gs` 파일에 아래 코드를 작성합니다:
   ```javascript
   function doGet() {
     return HtmlService.createTemplateFromFile('index')
       .evaluate()
       .setTitle('여행 가이드')
       .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
   }
3. `index.html` 파일을 추가하고 소스 코드를 복사해 붙여넣습니다.
4. **배포(Deploy)** > **새 배포** > **웹 앱(Web App)**을 선택하여 배포 URL을 생성합니다.
