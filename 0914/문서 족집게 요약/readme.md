# 📄 TextRank 문서 요약 웹 애플리케이션 (TextRank Summarizer)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

> **서버 설치 없이 브라우저에서 바로 작동하는 클라이언트 사이드 문서 요약 웹 앱입니다.**  
> PDF, DOCX, TXT 등 다양한 포맷의 문서 파일에서 **TextRank 알고리즘**을 통해 요점만 자동으로 추출해 줍니다.

---

## ✨ 주요 기능 (Key Features)

* 📁 **다양한 문서 확장자 지원**: `PDF`, `DOCX`, `TXT` 파일을 드래그 & 드롭하여 손쉽게 업로드
* 🎚️ **요약 분량 자유 조절**: 슬라이더를 이용해 최소 1문장(핵심)부터 최대 5문장(상세)까지 요약 길이 선택
* 🧠 **TextRank 알고리즘**: 문장 간 유사도를 그래프로 분석하고 PageRank 기반으로 가장 중요한 문장을 선별
* 🔒 **강력한 개인정보 보호**: 외부 서버로 문서를 전송하지 않고 사용자의 브라우저 내에서 100% 텍스트 파싱 및 처리
* 🎨 **감각적인 디자인**: 트렌디한 **글래스모피즘(Glassmorphism)** 과 **화려한 그라데이션** 스타일 적용

---

## 🎨 디자인 특징 (Design Highlights)

* **Multi-color Radial Mesh Background**: 눈이 편안하면서도 세련된 멀티 톤 핑크/퍼플 그라데이션 배경
* **Glassmorphic Cards**: 반투명 유리 질감(`backdrop-blur`)의 카드 레이아웃으로 모던함 강조
* **Gradient Controls & Buttons**: 슬라이더 트랙, 버튼, 타이틀 영역에 생동감 있는 그래디언트 포인트 적용
* **반응형 UI**: 모바일, 태블릿, 데스크톱 환경을 모두 지원하는 Responsive Layout

---

## 🧠 TextRank 알고리즘 원리

본 앱은 문서 내 문장들을 그래프의 **노드(Node)** 로 두고, 문장 간 단어 유사도를 **간선(Edge)** 의 가중치로 설정합니다.

1. **문장 분리 및 토큰화**: 원문을 문장 단위로 분할하고 단어를 추출합니다.
2. **TF-IDF 벡터화**: 단어 빈도 및 역단어 빈도를 계산하여 문장별 벡터를 생성합니다.
3. **코사인 유사도(Cosine Similarity) 계산**: 문장 간 유사도를 행렬로 구합니다.
4. **PageRank 알고리즘 적용**: 아래 수식을 반복 계산하여 각 문장의 중요도 점수($PR$)를 산출합니다.
   $$PR(A) = (1-d) + d \sum_{i \in In(A)} \frac{PR(T_i)}{C(T_i)}$$
   *(여기서 $d$는 감쇠 인자(Damping Factor, 기본값 0.85)입니다.)*
5. **원문 순서 보존**: 상위 $N$개 문장을 선별한 후, 문맥의 흐름을 유지하도록 원래 글 순서대로 정렬하여 출력합니다.

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 | 설명 |
| :--- | :--- | :--- |
| **Frontend** | HTML5, JavaScript (ES6+) | 웹 표준 단일 파일 구조 |
| **Styling** | Tailwind CSS (v3), Custom CSS | 그라데이션 및 글래스모피즘 스타일링 |
| **PDF Parsing** | PDF.js (v3.11) | 클라이언트 단 PDF 텍스트 추출 |
| **DOCX Parsing** | Mammoth.js (v1.6) | 클라이언트 단 Word 문서 텍스트 추출 |
| **Font** | Pretendard | 가독성 높은 산세리프 웹 폰트 |

---

## 🚀 시작하기 (Quick Start)

별도의 백엔드 서버나 Node.js/Python 패키지 설치가 **전혀 필요하지 않습니다.**

1. 이 리포지토리를 클론(Clone)하거나 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/textrank-summarizer.git
   ```
2. 다운로드한 `index.html` 파일을 웹 브라우저(Chrome, Edge, Safari 등)에서 더블 클릭하여 바로 실행합니다.

---

## 📖 사용 방법 (How to Use)

1. **파일 업로드**: 점선으로 된 박스 영역에 `.pdf`, `.docx`, `.txt` 파일을 드래그 & 드롭하거나 클릭하여 파일을 선택합니다.
2. **요약 문장 수 설정**: 슬라이더를 조절하여 요약받고 싶은 핵심 문장 개수(1~5개)를 정합니다.
3. **요약 실행**: **`🚀 핵심 요약 실행하기`** 버튼을 누르면 우측 카드에 번호순으로 요점 문장이 정리되어 나타납니다.

---

## 📄 라이선스 (License)

본 프로젝트는 [MIT License](LICENSE)를 따릅니다. 누구나 자유롭게 수정 및 재배포할 수 있습니다.
