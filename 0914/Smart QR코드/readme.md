# 📱 Smart QR - 스마트 QR 코드 생성기

> **Smart QR**은 웹사이트 주소(URL)를 입력하면 즉시 QR 코드를 생성하고, 클릭 한 번으로 고품질 JPG 이미지로 다운로드할 수 있는 웹 애플리케이션입니다.

---

## ✨ 주요 기능 (Key Features)

- 🎨 **마우스 추적 인터랙티브 그라데이션**: 커서 위치에 따라 파스텔 톤의 배경 빛깔이 부드럽게 변하는 동적 UI
- 💎 **글래스모피즘(Glassmorphism) 디자인**: 투명 유리 느낌의 세련되고 화사한 프리미엄 디자인
- 🔗 **자동 URL 보정**: `https://` 또는 `http://`를 입력하지 않아도 자동으로 보정하여 스캔 오류 방지
- 📥 **원클릭 JPG 다운로드**: 생성된 QR 코드를 클릭하면 스캔 인식률을 최적화한 흰색 여백 포함 JPG 이미지(`Smart_QR.jpg`)로 다운로드
- 📱 **반응형 웹 지원**: PC, 태블릿, 모바일 등 모든 디바이스에 최적화된 레이아웃

---

## 📁 프로젝트 구조 (Directory Structure)

```text
Smart-QR/
├── index.html       # 메인 웹페이지 (HTML + CSS + JS 통합)
├── logo.png         # 상단 좌측 로고 이미지 (사용자 준비)
└── README.md        # 프로젝트 문서
```

---

## 🚀 사용 방법 (Getting Started)

1. 이 프로젝트의 코드를 다운로드하거나 `index.html` 파일로 저장합니다.
2. `index.html`과 같은 폴더에 사용할 **`logo.png`** 이미지 파일을 준비합니다.
3. `index.html` 파일을 웹 브라우저(Chrome, Edge, Safari 등)로 실행합니다.
4. 중앙 입력창에 원하는 웹사이트 주소(예: `naver.com`)를 입력하고 **QR 생성** 버튼을 누릅니다.
5. 화면 중앙에 나타난 QR 코드를 클릭하여 JPG 이미지로 다운로드합니다.

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla JS) |
| **Library** | [QRCode.js](https://davidshimjs.github.io/qrcodejs/) (CDN 사용) |
| **Font** | Pretendard Web Font |

---

## 💡 참고 사항 (Notice)

- `logo.png` 파일이 지정된 위치에 없을 경우 로고 영역이 자동으로 숨겨지며 깔끔하게 사이트 이름만 표시됩니다.
- QR 코드 다운로드 시 이미지 가장자리에 충분한 흰색 여백(Margin)을 자동 부여하여 스마트폰 카메라 스캔 성공률을 극대화했습니다.
