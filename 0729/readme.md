# 🌊 釜山 案内 | BUSAN GUIDE

> **부산 감성 여행 웹 가이드 (Vite + React + TypeScript)**  
> 일본인 여행객을 위한 세련된 타이포그래피 기반의 부산 여행 가이드 프론트엔드 팀 프로젝트입니다.

---

## 📌 목차
- [✨ 프로젝트 개요](#-프로젝트-개요)
- [🎨 타이포그래피 & 디자인 시스템](#-타이포그래피--디자인-시스템)
- [📂 디렉토리 구조](#-디렉토리-구조)
- [🛠️ 기술 스택](#️-기술-스택)
- [💡 주요 기능](#-주요-기능)
- [🚀 시작하기 (Getting Started)](#-시작하기-getting-started)
- [📦 빌드 및 배포](#-빌드-및-배포)

---

## ✨ 프로젝트 개요

- **타깃**: 감성적이고 직관적인 부산 여행 정보를 찾는 일본인 및 글로벌 여행객
- **특징**:
  - Vite 기반의 빠르고 가벼운 SPA(Single Page Application) 구조
  - 일본어 명조(Shippori Mincho) 및 세리프(Instrument Serif) 폰트를 활용한 감성적인 매거진 스타일 UI
  - React + TypeScript를 통한 타입 안전성 및 컴포넌트 재사용성 확보

---

## 🎨 타이포그래피 & 디자인 시스템

Google Fonts를 통해 로딩되는 웹폰트로 클래식하면서도 현대적인 감성 매거진 스타일을 구현합니다.

| 폰트명 | 스타일/굵기 | 적용 용도 |
| :--- | :--- | :--- |
| **Instrument Serif** | Regular, Italic | 영문 타이틀 및 포인트 헤더 |
| **Shippori Mincho** | 500, 600, 700, 800 | 일본어 본문, 주요 제목 및 감성 문구 |
| **M PLUS Rounded 1c** | 700, 800, 900 | 강조 태그, 버튼, 둥근 스타일 UI 요소 |

---

## 📂 디렉토리 구조

```bash
busan-guide/
├── index.html            # 앱 진입점 HTML (웹폰트 및 메타데이터 설정)
├── package.json          # 의존성 및 스크립트 설정
├── tsconfig.json         # TypeScript 설정
├── vite.config.ts        # Vite 설정 파일
├── public/
│   └── favicon.svg       # 파비콘 에셋
└── src/
    ├── main.tsx          # React 루트 렌더링 진입점
    ├── App.tsx           # 메인 앱 레이아웃 및 라우터
    ├── assets/           # 이미지 및 정적 리소스
    ├── components/       # 재사용 가능한 UI 컴포넌트
    ├── pages/            # 뷰 페이지 (일정, 명소, 미식 등)
    └── styles/           # 전역 스타일 및 CSS 모듈

🛠️ 기술 스택
Environment: Node.js

Build Tool: Vite

Library: React 18

Language: TypeScript

Styling: CSS Modules / Tailwind CSS (프로젝트 설정에 따라 맞춤 적용)

💡 주요 기능
부산 명소 가이드: 해운대, 감천문화마을, 광안리 등 주요 관광지 소개

코스 및 일정 추천: 감성 카페 투어, 바다 여행 등 테마별 추천 일정 제공

미식 정보: 부산 대표 먹거리(돼지국밥, 밀면 등) 소개 및 맛집 지도 안내

다국어 맞춤 UI: 일본어 타이포그래피 특화를 통한 가독성 최적화

🚀 시작하기 (Getting Started)
1. 레포지토리 클론
git clone [https://github.com/username/busan-guide.git](https://github.com/username/busan-guide.git)
cd busan-guide

2. 의존성 패키지 설치
npm install
# 또는
pnpm install / yarn

3. 개발 서버 실행
npm run dev
실행 후 브라우저에서 http://localhost:5173 접속

📦 빌드 및 배포
프로덕션 빌드
npm run build

빌드 결과물 미리보기
npm run preview
