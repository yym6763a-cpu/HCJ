# 🌊 釜山 案内 | BUSAN GUIDE

> **부산 감성 여행 웹 가이드 (Vite + React + TypeScript)**  
> 일본인 여행객을 위한 세련된 타이포그래피 기반의 부산 여행 가이드 프론트엔드 프로젝트입니다.

---

## 📌 목차
- [✨ 프로젝트 개요](#-프로젝트-개요)
- [📂 디렉토리 구조](#-디렉토리-구조)
- [🎨 타이포그래피 & 디자인 시스템](#-타이포그래피--디자인-시스템)
- [🛠️ 기술 스택](#️-기술-스택)
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

## 📂 디렉토리 구조

```bash
busan-guide/
├── index.html              # 앱 진입점 HTML (웹폰트 및 메타데이터 설정)
├── package.json            # 의존성 및 스크립트 설정
├── tsconfig.json           # TypeScript 설정
├── vite.config.ts          # Vite 설정 파일
├── public/
│   └── favicon.svg         # 파비콘 에셋
└── src/
    ├── main.tsx            # React 루트 렌더링 진입점
    ├── App.tsx             # 메인 앱 레이아웃 및 라우터
    ├── assets/             # 이미지 및 정적 리소스
    ├── components/         # 재사용 가능한 UI 컴포넌트
    ├── pages/              # 뷰 페이지 (일정, 명소, 미식 등)
    └── styles/             # 전역 스타일 및 CSS 모듈
