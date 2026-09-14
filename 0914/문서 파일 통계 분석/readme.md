# 📊 DocuMetrics Pro - Docx & PDF 문서 분석기

**DocuMetrics Pro**는 사용자의 웹 브라우저 상에서 별도의 서버 전송 없이 **.docx** 및 **.pdf** 문서의 텍스트 및 이미지 통계를 실시간으로 분석해 주는 클라이언트 사이드 웹 애플리케이션입니다.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)

---

## ✨ 주요 기능

- 🔒 **100% 로컬 보안 분석**: 업로드된 문서가 외부 서버로 전송되지 않고 브라우저 내부에서만 안전하게 처리됩니다.
- 📁 **다양한 포맷 지원**: Microsoft Word (`.docx`) 및 Adobe PDF (`.pdf`) 포맷 지원.
- ⚡ **실시간 통계 추출**:
  - **총 글자 수 (공백 포함)**
  - **순수 글자 수 (공백 제외)**
  - **단어 수** (공백 구별 기준)
  - **공백 개수** (띄어쓰기, 탭, 줄바꿈)
  - **이미지/그래픽 개수** (문서 내 포함된 이미지 수)
- 🎨 **모던 사용자 인터페이스**: Tailwind CSS 기반의 직관적이고 깔끔한 대시보드 UI 및 드래그 앤 드롭 지원.

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 사용 기술 / 라이브러리 | 설명 |
| :--- | :--- | :--- |
| **Frontend** | HTML5, Vanilla JavaScript (ES6+) | 기본 웹 프레임워크 |
| **Styling** | Tailwind CSS (CDN) | 반응형 대시보드 UI 스타일링 |
| **Icons & Font** | Font Awesome 6, Pretendard | 시각적 아이콘 및 한글 최적화 폰트 |
| **Docx Parser** | [JSZip](https://stuk.github.io/jszip/) | `.docx` 내부 `document.xml` 및 미디어 압축 해제 및 분석 |
| **PDF Parser** | [PDF.js](https://mozilla.github.io/pdf.js/) | `.pdf` 텍스트 컨텐츠 파싱 및 Operator List 스캔 |

---

## 🚀 시작하기 (How to Run)

본 프로젝트는 단일 파일(`index.html`)로 구성되어 있어 **별도의 설치 과정이나 웹 서버 실행(npm/node) 없이** 바로 실행할 수 있습니다.

### 1. 저장소 클론 (Clone) 또는 코드 다운로드
```bash
git clone https://github.com/your-username/documetric-pro.git
cd documetric-pro
```

### 2. 실행
다운로드한 `index.html` 파일을 크롬, 엣지, 웨일 등 임의의 웹 브라우저로 더블 클릭하여 실행합니다.

---

## 📖 사용 방법

1. 브라우저에서 `index.html` 페이지를 엽니다.
2. 분석하려는 `.docx` 또는 `.pdf` 파일을 중앙 드롭존에 **드래그 앤 드롭**하거나 **클릭해서 선택**합니다.
3. 분석이 완료되면 화면 하단에 글자 수, 단어 수, 공백 수, 이미지 수 통계 카드가 즉시 출력됩니다.
4. 다른 문서를 분석하려면 우측 상단의 `파일 취소` 버튼을 클릭합니다.

---

## 💡 참고 및 제한 사항

- **PDF 스캔본/이미지 PDF**: 텍스트가 이미키화된 스캔본 PDF(OCR 미처리 문서)의 경우, 텍스트를 인식하지 못해 글자 수가 `0`으로 표시될 수 있습니다. (텍스트 드래그가 가능한 정상 PDF는 완벽히 지원됩니다.)
- **대용량 파일**: 몇백 페이지 이상의 대용량 PDF 문서의 경우 브라우저 성능에 따라 수 초간 파싱 시간이 소요될 수 있습니다.

---

## 📝 라이선스 (License)

This project is licensed under the **MIT License**.
