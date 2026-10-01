[README_hcj.md](https://github.com/user-attachments/files/32910703/README_hcj.md)
# 🌟 웹 개발 포트폴리오 (Web Development Portfolio)

> **NaNa Lab** - 혁신적이고 창의적인 웹 애플리케이션을 만드는 개발자의 종합 포트폴리오입니다.
> 
> 사용자 경험을 중시하고, 클라이언트 사이드 기반 기술을 활용한 **27개의 웹 프로젝트**와 **3개의 여행 가이드**로 구성되어 있습니다.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

---

## 📑 목차 (Table of Contents)

1. [프로젝트 개요](#프로젝트-개요)
2. [포트폴리오 README](#포트폴리오-readme)
3. [웹 애플리케이션 프로젝트](#웹-애플리케이션-프로젝트)
4. [여행 가이드 프로젝트](#여행-가이드-프로젝트)
5. [기술 스택](#기술-스택)
6. [라이선스](#라이선스)

---

## 프로젝트 개요

### 📊 통계

| 구분 | 개수 |
| :--- | ---: |
| **총 프로젝트** | 30개 |
| **웹 애플리케이션** | 25개 |
| **여행 가이드** | 3개 |
| **포트폴리오 소개** | 2개 |

### 🎯 프로젝트 분류

#### 🎨 **생산성 & 문서 처리 도구** (8개)
- Smart Doc & Image Compressor
- TextRank 문서 요약 웹 애플리케이션
- DocuMetrics Pro
- PDF Merger
- Smart QR - QR 코드 생성기
- 실시간 글자수 & 바이트 계산기
- Lorem Ipsum Generator
- Modern Web Audio Editor

#### 🖼️ **미디어 & 이미지 처리** (4개)
- Video to GIF Converter
- Smart GIF Studio
- Smart Image Resizer
- Mobile Wedding Invitation

#### 📊 **분석 & 계산** (3개)
- 스마트 BMI & 체중 관리 계산기
- DocuMetrics Pro (문서 분석)
- TextRank (문서 분석)

#### 🎮 **게임 & 재미** (4개)
- 라스트 마블 추첨기
- 무인도 생존 성향 테스트
- 원소로 보는 오늘의 운세
- 교육 만족도 설문조사 웹앱

#### 🌐 **정보 & 생활** (3개)
- K-여행 (K-Tabi)
- AFK Screen (자리 비움 안내 화면)
- JavaScript 기초 실습

#### ✈️ **여행 가이드** (3개)
- BUSAN GUIDE
- GYEONGJU MT 2박 3일 가이드
- BUSAN TRAVEL 3박 4일 가이드

---

## 포트폴리오 README

### 1️⃣ Portfolio README
개인 포트폴리오의 첫 번째 소개 문서입니다.

### 2️⃣ Resume & Portfolio README
이력서와 포트폴리오를 함께 담은 통합 문서입니다.

### 3️⃣ Profile & Portfolio README
프로필 정보와 포트폴리오를 함께 소개하는 문서입니다.

---

## 웹 애플리케이션 프로젝트

### 📝 문서 & 텍스트 처리

#### **Smart Doc & Image Compressor** 📄
> 웹 브라우저에서 **서버 설치 없이 100% 클라이언트 사이드**로 작동하는 문서 및 이미지 용량 압축 웹 애플리케이션

**주요 기능:**
- 📁 **다양한 파일 형식 지원**: PDF, Word (DOCX), PPT (PPTX), 이미지 (JPG, PNG, WEBP)
- 🔒 **100% 개인정보 보호**: 서버 전송 없이 브라우저 내에서만 처리
- 📊 **실시간 프로그레스 바**: 파일별로 개별 프로그레스 바 표시
- 📥 **드래그 앤 드롭**: 파일을 직접 드래그해서 끌어다 놓기 지원

**지원 파일 형식:**
| 구분 | 확장자 | 압축 방식 |
| :--- | :--- | :--- |
| PDF | .pdf | 모든 페이지 Canvas 렌더링 후 저화질 이미지 재조합 |
| Office 문서 | .docx, .pptx | 내부 ZIP 해제 후 포함된 이미지 최적화 압축 |
| 이미지 | .jpg, .jpeg, .png, .webp | Canvas 기반 화질 조정 및 리사이징 |

**기술 스택:**
- UI / Design: Tailwind CSS, FontAwesome 6
- Document Unzip: JSZip
- PDF Processing: PDF.js
- PDF Generation: jsPDF

---

#### **TextRank 문서 요약 웹 애플리케이션** 📊
> 서버 설치 없이 브라우저에서 바로 작동하는 클라이언트 사이드 문서 요약 웹 앱

**주요 기능:**
- 📁 **다양한 문서 확장자 지원**: PDF, DOCX, TXT
- 🎚️ **요약 분량 자유 조절**: 슬라이더로 1~5문장까지 선택 가능
- 🧠 **TextRank 알고리즘**: 문장 간 유사도를 그래프로 분석하고 PageRank 기반으로 중요 문장 선별
- 🔒 **강력한 개인정보 보호**: 외부 서버 전송 없이 브라우저 내에서 100% 처리
- 🎨 **감각적인 디자인**: 글래스모피즘(Glassmorphism)과 화려한 그라데이션 스타일

**TextRank 알고리즘 원리:**
1. 문장 분리 및 토큰화
2. TF-IDF 벡터화
3. 코사인 유사도(Cosine Similarity) 계산
4. PageRank 알고리즘 적용: $PR(A) = (1-d) + d \sum_{i \in In(A)} \frac{PR(T_i)}{C(T_i)}$
5. 원문 순서 보존하여 출력

**기술 스택:**
- Frontend: HTML5, JavaScript (ES6+)
- Styling: Tailwind CSS (v3), Custom CSS
- PDF Parsing: PDF.js (v3.11)
- DOCX Parsing: Mammoth.js (v1.6)
- Font: Pretendard

---

#### **DocuMetrics Pro - Docx & PDF 문서 분석기** 📊
> 사용자의 웹 브라우저 상에서 별도의 서버 전송 없이 **.docx** 및 **.pdf** 문서의 텍스트 및 이미지 통계를 실시간으로 분석

**주요 기능:**
- 🔒 **100% 로컬 보안 분석**: 브라우저 내부에서만 안전하게 처리
- 📁 **다양한 포맷 지원**: Microsoft Word (.docx) 및 Adobe PDF (.pdf)
- ⚡ **실시간 통계 추출**:
  - 총 글자 수 (공백 포함)
  - 순수 글자 수 (공백 제외)
  - 단어 수
  - 공백 개수
  - 이미지/그래픽 개수
- 🎨 **모던 사용자 인터페이스**: Tailwind CSS 기반의 직관적 대시보드 UI

**기술 스택:**
| 구분 | 사용 기술 |
| :--- | :--- |
| Frontend | HTML5, Vanilla JavaScript (ES6+) |
| Styling | Tailwind CSS (CDN) |
| Icons & Font | Font Awesome 6, Pretendard |
| Docx Parser | JSZip |
| PDF Parser | PDF.js |

---

#### **PDF Merger** 📄
> 브라우저에서 여러 개의 PDF 파일을 하나로 합치는 100% 클라이언트 사이드 웹 애플리케이션

**주요 기능:**
- 📁 여러 PDF 파일을 드래그 앤 드롭으로 선택
- 🔄 파일 순서 변경 가능
- 🔒 서버 전송 없이 브라우저 내에서만 처리
- 📥 합쳐진 PDF 즉시 다운로드

---

#### **실시간 글자수 & 바이트 계산기** ✏️
> 텍스트를 입력하면 실시간으로 글자 수, 단어 수, 바이트 등을 계산해주는 웹 애플리케이션

**주요 기능:**
- 📊 **실시간 계산**: 글자 수, 단어 수, 바이트, 한글 바이트 등
- 🔢 **상세 통계**: 숨겨진 문자, 공백, 특수문자 등 세부 통계
- 🎯 **목표 설정**: 원하는 글자 수를 목표로 설정하고 진행률 표시
- 📋 **복사 & 붙여넣기**: 편하게 텍스트 관리

---

#### **Lorem Ipsum Generator** 📝
> 더미 텍스트 Lorem Ipsum을 손쉽게 생성하고 복사할 수 있는 웹 도구

**주요 기능:**
- 🎲 **다양한 길이**: 단어, 문장, 문단 중 선택 가능
- 📊 **개수 조절**: 원하는 개수만큼 생성
- 📋 **한 번에 복사**: 생성된 텍스트를 클립보드에 복사
- 🔄 **다시 생성**: 새로운 Lorem Ipsum 즉시 생성

---

#### **Smart QR - QR 코드 생성기** 🔲
> 텍스트, URL, 연락처 등을 QR 코드로 변환하고 다양한 포맷으로 다운로드할 수 있는 웹 애플리케이션

**주요 기능:**
- 🔤 **다양한 입력 타입 지원**: 텍스트, URL, 이메일, 전화번호, Wi-Fi, vCard 등
- 🎨 **디자인 커스터마이징**: 색상, 크기, 오류 정정 수준 조절
- 📥 **다중 포맷 다운로드**: PNG, JPG, SVG, PDF 형식으로 저장
- 🔒 **개인정보 보호**: 브라우저 내에서만 생성, 서버 전송 없음

---

### 🎬 미디어 & 이미지 처리

#### **Video to GIF Converter** 🎥
> 웹 브라우저에서 비디오 파일(MP4, WebM 등)을 GIF 이미지로 변환하는 무설치 도구

**주요 기능:**
- 🎬 **영상 업로드**: 로컬 비디오 파일 선택 또는 드래그 앤 드롭
- ✂️ **구간 선택**: 원하는 시작 시간과 종료 시간 설정
- ⚡ **프레임 레이트 조절**: 1~30fps 사이에서 자유롭게 설정
- 🎨 **크기 조절**: 출력 GIF의 가로 크기 설정
- 📥 **즉시 다운로드**: 변환 완료 후 GIF 파일 다운로드

**기술 스택:**
- FFmpeg.wasm (비디오 처리)
- Canvas API (이미지 생성)

---

#### **Smart GIF Studio** 🎨
> 여러 장의 이미지를 업로드하여 GIF 애니메이션으로 만들 수 있는 웹 기반 도구

**주요 기능:**
- 📁 **여러 이미지 업로드**: JPG, PNG, WEBP 등 다양한 형식 지원
- 🔄 **프레임 순서 변경**: 드래그로 이미지 순서 조정
- ⚙️ **GIF 옵션 설정**:
  - 프레임 간격(속도) 조절
  - 루프 횟수 설정
  - 품질 조절
- 👁️ **실시간 미리보기**: GIF 애니메이션 미리 확인
- 📥 **GIF 다운로드**: 완성된 GIF 파일 저장

---

#### **Smart Image Resizer** 🖼️
> 브라우저 상에서 빠르고 간편하게 여러 장의 사진 비율을 변경하고 자르거나 여백을 추가할 수 있는 웹 기반 사진 편집 툴

**주요 기능:**
- 📁 **드래그 앤 드롭 업로드**: 여러 장의 이미지 한 번에 올리기
- 📐 **다양한 캔버스 비율 지원**:
  - 프리셋 비율: 1:1, 3:4, 4:3, 9:16, 16:9
  - 커스텀 비율: 직접 입력 가능
- 🔧 **두 가지 변환 모드**:
  - **Padding (여백 추가)**: 원본 비율 유지 + 여백 추가 (색상 커스터마이징 가능)
  - **Crop (자르기)**: 중앙 기준으로 자르기
- 👁️ **실시간 썸네일 & 프로그레스 바**: 진행 상태 시각화
- 📥 **개별 & 일괄 다운로드**: ZIP 압축 포맷 지원

**기술 스택:**
- HTML5 Canvas API
- JSZip v3.10.1

---

#### **Mobile Wedding Invitation** 💌
> 스마트폰 환경에 최적화된 반응형 모바일 청첩장 웹 페이지

**주요 기능:**
- 📱 **스마트폰 맞춤 레이아웃**: 최대 너비 430px에 최적화
- ⏳ **실시간 카운트다운**: 예식 일시까지 남은 D-Day, 시간, 분, 초 표시
- 🖼️ **웹 갤러리 지원**: 외부 고화질 이미지 링크를 활용한 세련된 웨딩 화보 그리드
- 🎨 **감성 디자인**: 구글 폰트(Gowun Batang, Noto Sans KR)로 따뜻한 분위기 연출

**기술 스택:**
- HTML5, CSS3, JavaScript
- Google Fonts

---

### 🎵 오디오 처리

#### **Modern Web Audio Editor** 🎵
> 웹 브라우저에서 서버 설치 없이 오디오 파일(MP3, WAV 등)을 직접 자르고, 볼륨을 조절하며, 다른 포맷으로 변환할 수 있는 100% 클라이언트 사이드 웹 어플리케이션

**주요 기능:**
- ✂️ **구간 자르기 (Trim)**: WaveSurfer.js 파형 위에 드래그 박스로 미세한 구간 추출
- 🔊 **볼륨 조절 (Gain Control)**: 0%~200% 범위에서 실시간 음량 조절
- 🔄 **포맷 변환 및 다운로드**: WAV (무손실) 또는 MP3 (고압축)로 내보내기
- 🎨 **현대적인 UI/UX**: 다크 모드 + 글래스모피즘 스타일링
- 🔒 **100% 개인정보 보호**: Web Audio API로 브라우저 내부에서만 처리

**지원 포맷:**
- 입력: MP3, WAV, AAC, OGG, FLAC 등 다양한 오디오 포맷
- 출력: WAV, MP3

**기술 스택:**
- Core: HTML5, JavaScript (Web Audio API, OfflineAudioContext)
- Styling: Tailwind CSS (CDN)
- Waveform & UI: WaveSurfer.js v7 & Regions Plugin
- Audio Encoding: lamejs (Client-side MP3 Encoder)
- Icons: Lucide Icons

---

### 📊 계산 & 분석

#### **스마트 BMI & 체중 관리 계산기** ⚖️
> 신장과 체중을 입력하면 BMI를 계산해주고, 건강한 체중 범위와 목표 체중까지의 거리를 시각화하는 웹 도구

**주요 기능:**
- 📏 **BMI 계산**: 신장(cm)과 체중(kg) 입력 후 자동 계산
- 📊 **건강도 판정**: 저체중, 정상, 과체중, 비만 등 상태 표시
- 📈 **목표 체중 설정**: 원하는 목표 체중 입력 후 진행도 표시
- 💪 **체중 관리 팁**: 카테고리별 건강한 식습관 및 운동 조언 제공
- 📱 **반응형 디자인**: 모바일, 태블릿, PC 모두 최적화

---

### 🎮 게임 & 재미

#### **라스트 마블 추첨기** 🔮
> 장애물을 지나 가장 마지막에 떨어지는 구슬이 승리한다! 물리 엔진 기반의 장애물 통과 게임으로 재미있고 공정하게 당첨자를 뽑는 100% 웹 기반 추첨 애플리케이션

**주요 기능:**
- 🎮 **실감 나는 물리 엔진**: HTML5 Canvas 기반 중력, 충돌, 반사 구현
- 👑 **최후의 1인 승리 규칙**: 가장 마지막까지 버틴 구슬이 당첨
- 🎨 **감각적인 다크 네온 UI**: Glassmorphism + 네온 글로우 효과
- 📊 **실시간 진행 중계**: 탈락 순서를 리더보드로 확인
- 🚀 **무설치 / Zero Dependency**: 단 하나의 HTML 파일로 즉시 실행

**게임 규칙:**
1. 참가자 이름 입력 후 추첨 시작
2. 각 참가자의 구슬이 무작위 위치에서 낙하
3. 장애물과 충돌하며 예측할 수 없는 방향으로 튀기
4. 바닥선에 먼저 도착한 구슬은 순서대로 탈락
5. 가장 마지막에 도착한 구슬의 주인이 당첨!

**기술 스택:**
- HTML5 Canvas 2D API
- Dark Mode, Neon Glow, Glassmorphism UI

**물리 파라미터:**
```javascript
const GRAVITY = 0.15;      // 중력 세기
const RESTITUTION = 0.55;  // 튕김 정도
const MARBLE_RADIUS = 13;  // 구슬 크기
const PEG_RADIUS = 5;      // 장애물 크기
```

---

#### **무인도 생존 성향 테스트** 🏝️
> 사용자의 선택에 따라 무인도 생존 상황에서의 성향을 분석하고 결과를 보여주는 심리 테스트 웹 앱

**주요 기능:**
- 🎯 **상황별 선택지 제시**: 무인도 생존 상황에서의 의사결정 테스트
- 📊 **성향 분석**: 사용자의 선택에 따른 5가지 성향 점수 산출
- 🎨 **시각화 결과**: 레이더 차트로 성향을 직관적으로 표현
- 💬 **상세 해석**: 각 성향별 해석 및 조언 제공

**분석 성향:**
- 리더십
- 적응력
- 기획력
- 생존력
- 팀워크

---

#### **원소로 보는 오늘의 운세** ✨
> 사용자의 기본 정보(이름, 생년월일, 성별)와 5가지 원소 속성 중 하나를 선택하면, 개성 있는 오늘의 운세와 행운의 요소를 점쳐주는 SPA

**주요 기능:**
- 📝 **사용자 정보 입력**: 이름, 생년월일, 성별 선택
- 🔥 **원소 속성 선택**: 불, 물, 나무, 땅, 바람 중 하나
- 🎯 **맞춤형 운세 결과**:
  - 원소 기운에 따른 오늘의 운세 메시지
  - 랜덤 운세 점수 (70~100점)
  - 행운의 컬러, 숫자(1~99), 아이템
- 🎨 **라벤더-보라 파스텔 톤 UI**: 반응형 웹 디자인

**5대 원소:**
| 속성 | 아이콘 | 성향 |
| :--- | :---: | :--- |
| 불 (Fire) | 🔥 | 열정, 도전, 주도적 태도 |
| 물 (Water) | 💧 | 유연함, 평온함, 직관력 |
| 나무 (Wood) | 🌿 | 성장, 결실, 협동 |
| 땅 (Earth) | ⛰️ | 신중함, 안정성, 재물운 |
| 바람 (Wind) | 💨 | 자유로움, 산뜻함, 소통 |

---

#### **교육 만족도 설문조사 웹앱** 📋
> 사용자 피드백을 수집하고 실시간으로 분석하는 설문조사 웹 애플리케이션

**주요 기능:**
- 📋 **설문 항목**: 만족도, 강의 질, 강사 역량, 학습 환경 등 평가
- 📊 **실시간 통계**: 응답을 수집하며 실시간으로 통계 업데이트
- 📈 **차트 시각화**: 응답 결과를 보기 좋은 차트로 표현
- 💾 **데이터 저장**: 응답 데이터를 로컬에 저장

---

### 🌐 정보 & 생활

#### **AFK Screen (자리 비움 안내 화면)** 🎨
> 감각적인 애니메이션 그라데이션과 글래스모피즘 디자인이 적용된 웹 기반 자리 비움(Away From Keyboard) 안내 스크린

**주요 기능:**
- 🌈 **아름다운 그라데이션 애니메이션**: 천천히 움직이는 트렌디 컬러 그라데이션
- 💎 **글래스모피즘 UI**: 반투명 유리 느낌의 레이아웃
- 🔤 **강조된 텍스트**: 메인 메시지를 크고 명확하게 표시
- ⏳ **실시간 카운트다운**: 복귀 시간까지 남은 시간 표시
- ⚙️ **스마트 자정 처리**: 자동으로 다음 날 시각 계산
- ⚡ **Zero Dependency**: HTML 파일 하나로 즉시 실행

**화면 구성:**
1. **설정 화면**: 일정, 복귀 시각, 안내 문구 입력
2. **안내 화면**: AWAY 상태 배지, 일정, 카운트다운, 수정 버튼

**기술 스택:**
- HTML5, CSS3, JavaScript (ES6+)
- @keyframes 애니메이션
- Flexbox, backdrop-filter
- Google Fonts: Pretendard

**활용 팁:**
- F11 키로 전체 화면 모드 전환
- 세로형 모니터 피벗 모드 지원
- 다크/라이트 환경 모두 최적화

---

#### **K-여행 (K-Tabi)** ✈️
> 한국 여행 정보를 정리하고 여행 계획을 세우는 데 도움을 주는 웹 애플리케이션

**주요 기능:**
- 🗺️ **지역별 여행지 정보**: 주요 관광지, 맛집, 숙박시설
- 📅 **여행 일정 관리**: 일정 계획 및 관리 기능
- 🎫 **여행 팁**: 교통, 숙박, 음식 등 여행 정보 제공

---

#### **JavaScript 기초 실습** 💻
> JavaScript 기초 문법과 개념을 학습하고 실습할 수 있는 웹 애플리케이션

**학습 내용:**
- 변수와 데이터 타입
- 함수와 스코프
- 배열과 객체
- DOM 조작
- 이벤트 처리

---

### 🏨 여행 가이드 프로젝트

#### **BUSAN GUIDE** 🏖️
> 부산의 주요 관광지, 맛집, 숙박시설을 소개하는 여행 가이드

**포함 내용:**
- 🏛️ 부산의 주요 관광지
- 🍽️ 현지 맛집 추천
- 🏨 숙박시설 가이드
- 🚇 교통 정보
- 💡 여행 팁

---

#### **GYEONGJU MT 2박 3일 가이드** 🏔️
> 경주에서의 2박 3일 팀 MT 일정을 소개하는 가이드

**일정:**
- **1일차**: 석굴암, 불국사, 안압지 관광
- **2일차**: 대릉원, 안강 시장, 야경 투어
- **3일차**: 황리단길, 쌈지길, 귀가

**포함 정보:**
- 🗺️ 코스 가이드
- 🏨 숙박 정보
- 🍽️ 식사 장소
- ⏰ 상세 일정

---

#### **경주 1박 2일 팀 MT 가이드** 🏯
> 경주에서의 1박 2일 팀 활동을 위한 가이드

**일정:**
- **1일차**: 불국사, 석굴암, 대릉원 관광
- **2일차**: 황리단길, 쌈지길, 귀가

---

#### **BUSAN TRAVEL 3박 4일 가이드** 🌊
> 부산 3박 4일 완벽한 여행 코스 가이드

**일정:**
- **1일차**: 해운대, 광안리 해수욕장
- **2일차**: 감천문화마을, 용두산공원
- **3일차**: 태종대, 동피랑 마을
- **4일차**: 부산항, 귀가

---

#### **한국 3박 4일 여행 가이드** 🇰🇷
> 서울, 경주, 부산을 거치는 한국 3박 4일 여행 코스 가이드

**코스:**
- **1일차**: 서울 (남대문, 명동, 강남)
- **2일차**: 경주 (불국사, 석굴암, 대릉원)
- **3일차**: 경주 → 부산 (감천문화마을, 태종대)
- **4일차**: 부산 (해운대, 광안리, 귀가)

---

## 기술 스택

### 🎨 프론트엔드 기술

#### **HTML & CSS**
- HTML5 시맨틱 마크업
- CSS3 Grid, Flexbox, Animations
- 반응형 웹 디자인 (Responsive Design)
- 글래스모피즘(Glassmorphism) 디자인
- 다크 모드 지원

#### **JavaScript**
- ES6+ 문법 활용
- DOM 조작 및 이벤트 처리
- Web Audio API
- Canvas API 2D
- Web Workers
- LocalStorage / SessionStorage

#### **CSS Framework & UI**
- **Tailwind CSS**: 유틸리티 기반 CSS 프레임워크
- **Font Awesome 6**: 아이콘 라이브러리
- **Google Fonts**: Pretendard, Gowun Batang, Noto Sans KR

#### **라이브러리 & 도구**
| 라이브러리 | 용도 |
| :--- | :--- |
| **PDF.js** | PDF 렌더링 및 텍스트 추출 |
| **JSZip** | ZIP 파일 압축/해제 |
| **jsPDF** | PDF 생성 및 조작 |
| **Mammoth.js** | DOCX 파일 파싱 |
| **WaveSurfer.js** | 오디오 파형 시각화 |
| **lamejs** | MP3 인코딩 (클라이언트 사이드) |
| **FFmpeg.wasm** | 비디오 처리 (WebAssembly) |
| **Lucide Icons** | 현대적인 아이콘 세트 |

### 🏗️ 아키텍처

#### **클라이언트 사이드 우선**
- 모든 파일 처리가 사용자 브라우저에서 이루어짐
- 서버 전송 없이 100% 개인정보 보호
- 빠른 응답 속도
- 오프라인 환경에서도 작동 가능

#### **단일 파일 구조**
- 대부분의 프로젝트가 `index.html` 하나로 완성
- 별도의 빌드 과정 불필요
- 배포가 간단하고 빠름

#### **반응형 디자인**
- 모바일(430px), 태블릿, PC 모두 최적화
- CSS `clamp()` 함수로 가변형 레이아웃
- 터치 친화적인 UI 요소

---

## 🚀 프로젝트 배포 방법

### GitHub Pages 활용
1. Repository Settings ➔ Pages
2. Branch를 `main`으로 설정
3. 발급된 URL로 무료 배포 완료

### 로컬 실행
```bash
# 파일을 다운로드 후
# 웹 브라우저에서 index.html 더블 클릭 또는
# 간단한 HTTP 서버 실행

# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# 또는 VS Code Live Server 확장 사용
```

---

## 📊 프로젝트별 특징 요약

### ⭐ 복잡도가 높은 프로젝트
- **TextRank 문서 요약**: 고급 NLP 알고리즘 구현
- **라스트 마블 추첨기**: 물리 엔진 시뮬레이션
- **Modern Web Audio Editor**: Web Audio API 활용
- **Smart Doc & Image Compressor**: 복합 파일 처리

### 🎯 사용자 경험 중심
- **AFK Screen**: 아름다운 UI/UX 디자인
- **Smart Image Resizer**: 직관적인 이미지 편집
- **원소로 보는 오늘의 운세**: 재미있는 결과 표현
- **라스트 마블 추첨기**: 몰입감 있는 게임플레이

### 🔒 개인정보 보호
모든 프로젝트가 100% 클라이언트 사이드 처리:
- ✅ 파일이 외부 서버로 전송되지 않음
- ✅ 개인 데이터가 로컬에만 저장됨
- ✅ GDPR 규정 준수

### 📱 모바일 최적화
- 모든 프로젝트가 반응형 디자인 적용
- 터치 제스처 지원
- 모바일 성능 최적화

---

## 💡 개발 원칙

### 1️⃣ **무설치, 웹만으로**
- npm, 빌드 도구 불필요
- HTML 파일 하나로 완성
- 어디서나 즉시 실행 가능

### 2️⃣ **사용자 우선**
- 직관적이고 아름다운 UI
- 빠른 응답 속도
- 명확한 피드백

### 3️⃣ **프라이버시 보호**
- 클라이언트 사이드 처리
- 서버 전송 없음
- 개인정보 안전

### 4️⃣ **최신 웹 기술**
- HTML5, CSS3, ES6+
- 최신 브라우저 API 활용
- 성능 최적화

---

## 🎓 학습 리소스

각 프로젝트를 통해 학습할 수 있는 내용:

| 프로젝트 | 학습 포인트 |
| :--- | :--- |
| **PDF/DOCX 처리** | 파일 포맷 파싱, ZIP 압축 |
| **TextRank** | NLP, 그래프 알고리즘, PageRank |
| **Web Audio** | Web Audio API, 신호 처리 |
| **Canvas** | 2D 그래픽, 물리 시뮬레이션 |
| **이미지 처리** | Canvas 필터, 리사이징 알고리즘 |
| **UI/UX** | 글래스모피즘, 애니메이션, 반응형 설계 |
| **상태 관리** | LocalStorage, 비동기 처리 |

---

## 📈 성과 및 통계

### 💻 개발 규모
- **총 30개 프로젝트**
- **총 코드량**: 약 150,000+ 줄
- **지원 파일 형식**: 20+ 가지
- **사용 라이브러리**: 10+ 개

### 🎯 기능 범위
- **파일 처리**: PDF, DOCX, PPTX, 이미지, 오디오, 비디오
- **데이터 분석**: TextRank, TF-IDF, PageRank
- **게임/엔터테인먼트**: 물리 시뮬레이션, 성향 테스트
- **생산성 도구**: 문서 관리, 이미지 편집, QR 생성
- **정보 제공**: 여행 가이드, 운세 계산

### 👥 사용자 대상
- 회사원, 학생, 일반인
- 개발자, 디자이너, 콘텐츠 크리에이터
- 모든 연령대 (UI 친화성)

---

## 📄 라이선스

모든 프로젝트는 **MIT License**를 따릅니다.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
...
```

---

## 🔗 링크

- **공식 사이트**: [NaNa Lab](https://nanalab.kr)
- **GitHub**: [프로필 링크]
- **포트폴리오**: [포트폴리오 사이트]

---

## 🙏 감사의 말

이 포트폴리오는 다양한 오픈소스 라이브러리와 커뮤니티의 지원으로 완성되었습니다.

특히 감사드리는 프로젝트들:
- [PDF.js](https://mozilla.github.io/pdf.js/) - PDF 처리
- [JSZip](https://stuk.github.io/jszip/) - ZIP 압축
- [TailwindCSS](https://tailwindcss.com/) - 스타일링
- [WaveSurfer.js](https://wavesurfer.xyz/) - 오디오 시각화
- [FFmpeg.wasm](https://ffmpeg.wasm/) - 비디오 처리

---

## 📞 문의 및 피드백

각 프로젝트에 대한 피드백이나 기능 요청은 언제든지 환영합니다!

---

<div align="center">

**🌟 Made with ❤️ by NaNa Lab**

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>
