# 📄 Smart Doc & Image Compressor

웹 브라우저에서 **서버 설치 없이 100% 클라이언트 사이드**로 작동하는 문서 및 이미지 용량 압축 웹 애플리케이션입니다.  
별도의 백엔드 서버나 파이썬 환경 구축 없이 `index.html` 파일 하나만으로 즉시 구동됩니다.

---

## ✨ 주요 기능

- **100% 개인정보 보호 (Client-Side Processing)**
  - 문서나 이미지가 외부 서버로 업로드되지 않고, 사용자 브라우저 내부에서만 압축됩니다.
- **다양한 파일 형식 지원**
  - **PDF**: 각 페이지를 캡처하여 저화질 스캔본 스타일로 재조합함으로써 용량을 대폭 줄입니다.
  - **Word / PPT (`.docx`, `.pptx`)**: 문서 내부에 포함된 고화질 사진을 최적화 압축합니다.
  - **이미지 (`.jpg`, `.jpeg`, `.png`, `.webp`)**: 이미지 품질을 재설정하여 빠르게 압축합니다.
  - **HWP 감지 기능**: HWP/HWPX 파일 업로드 시 PDF 또는 Word 변환 안내 팝업을 출력합니다.
- **드래그 앤 드롭 (Drag & Drop) 지원**
  - 브라우저에 파일을 직접 드래그해서 끌어다 놓으면 자동으로 파일 목록에 추가됩니다.
- **실시간 프로그레스 바**
  - 파일별로 개별 프로그레스 바가 표시되어 압축 진행률과 상태를 실시간으로 확인할 수 있습니다.
- **자동 파일명 변경**
  - 압축이 끝나면 다운로드 버튼이 활성화되며 `compressed_원본파일명` 형태로 안전하게 저장됩니다.

---

## 📁 지원 파일 형식

| 구분 | 확장자 | 압축 방식 |
| :--- | :--- | :--- |
| **PDF** | `.pdf` | 모든 페이지 Canvas 렌더링 후 저화질 이미지 재조합 |
| **Office 문서** | `.docx`, `.pptx` | 내부 ZIP 해제 후 포함된 이미지 최적화 압축 |
| **이미지** | `.jpg`, `.jpeg`, `.png`, `.webp` | Canvas 기반 화질 조정 및 리사이징 |
| **한글 문서** | `.hwp`, `.hwpx` | *지원 불가 (PDF / DOCX 변환 안내 팝업 제공)* |

---

## 🚀 사용 방법

### 1. 다운로드 및 실행
1. `index.html` 파일을 다운로드합니다.
2. `index.html` 파일을 더블 클릭하여 크롬(Chrome), 엣지(Edge), Safari 등 선호하는 웹 브라우저로 엽니다.

### 2. 파일 압축하기
1. 화면 중앙의 **"파일 선택하기"** 버튼을 누르거나, 파일을 드래그 앤 드롭합니다.
2. 진행 상태바를 확인합니다.
3. 작업이 끝나면 오른쪽에 활성화되는 **"다운로드"** 버튼을 눌러 압축된 파일을 저장합니다.

---

## 🛠️ 사용된 기술 및 라이브러리 (CDN)

- **UI / Design**: [Tailwind CSS](https://tailwindcss.com/), [FontAwesome 6](https://fontawesome.com/)
- **Document Unzip**: [JSZip](https://stuk.github.io/jszip/)
- **PDF Processing**: [PDF.js](https://mozilla.github.io/pdf.js/) (Page Rendering)
- **PDF Generation**: [jsPDF](https://github.com/parallax/jsPDF) (PDF Re-bundling)

---

## 🔗 링크

- **공식 사이트**: [NaNa Lab](https://nanalab.kr) (좌상단 로고 클릭 시 이동)
