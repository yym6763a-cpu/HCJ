# 🎬 Video to GIF Converter

웹 브라우저에서 동영상 파일을 손쉽게 GIF 애니메이션으로 변환할 수 있는 웹 애플리케이션입니다.  
서버 업로드 없이 사용자의 브라우저 내에서 직접 프레임을 추출하여 안전하고 빠르게 GIF를 생성합니다.

> **공식 웹사이트:** [Nanalab 방문하기](https://nanalab.kr)

---

## ✨ 주요 기능 (Key Features)

* **⚡ 29 FPS 최적화**: 브라우저 부하를 줄이고 빠른 변환 속도를 유지하기 위해 애니메이션을 **29 FPS**로 제한 및 최적화했습니다.
* **📂 간편한 파일 업로드**: 드래그 앤 드롭(Drag & Drop) 및 파일 탐색기 선택 방식을 모두 지원합니다.
* **📊 실시간 변환 프로그레스 바**: 업로드된 파일별 썸네일과 GIF 변환 진행률(0% ~ 100%)을 실시간으로 확인할 수 있습니다.
* **💾 안전한 다운로드**: 변환이 100% 완료되면 다운로드 버튼이 활성화되어 클릭 한 번으로 GIF를 저장할 수 있습니다.
* **🎨 모던 UI/UX**: 세련된 그라데이션 컬러, 글래스모피즘 헤더, 반응형 카드 레이아웃을 적용했습니다.

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla ES6+) |
| **GIF Library** | [gifshot.js v0.3.2](https://github.com/yahoo/gifshot) |
| **Style Concept** | Glassmorphism, Modern Gradient UI |

---

## 📂 프로젝트 구조 (Project Structure)

```text
.
├── index.html        # 웹 애플리케이션 단일 실행 파일 (HTML + CSS + JS)
└── README.md         # 프로젝트 관련 문서
```

---

## 🚀 실행 방법 (Getting Started)

별도의 개발 환경(Node.js, 빌드 도구 등)이나 백엔드 서버가 필요하지 않습니다.

1. 이 저장소를 클론(Clone)하거나 `index.html` 파일을 다운로드합니다.
2. `index.html` 파일을 웹 브라우저(Chrome, Edge, Safari 등)에서 실행합니다.
3. 원하는 동영상 파일(`mp4`, `webm`, `mov` 등)을 드래그하여 GIF 변환을 진행하세요.

---

## 📖 사용 방법 (How to Use)

1. **헤더 로고**: 좌측 상단의 **`Nanalab`** 로고를 누르면 [Nanalab 홈페이지](https://nanalab.kr)로 이동합니다.
2. **동영상 업로드**: 
   * 중앙의 업로드 상자로 동영상 파일을 **드래그 앤 드롭**합니다.
   * 또는 **[파일 직접 선택]** 버튼을 눌러 파일을 선택합니다.
3. **변환 확인**: 
   * 파일 목록에 썸네일과 함께 **프로그레스 바**가 나타납니다.
4. **GIF 다운로드**: 
   * 진행률이 **100%**에 도달하면 활성화되는 초록색 **[다운로드]** 버튼을 눌러 완성된 GIF 파일(`*.gif`)을 저장합니다.

---

## ⚙️ 변환 기본 옵션

| 항목 | 설정값 | 설명 |
| **프레임 레이트 (FPS)** | `29 FPS` | 속도 및 성능 최적화 제약 조건 |
| **변환 구간** | `최대 10초` | 영상 시작 시점부터 최대 10초 분량 변환 |
| **해상도** | `480 x 270` | 웹 공유에 적합한 가로/세로 비율 |

---

## 🔗 관련 링크

* **Nanalab**: [https://nanalab.kr](https://nanalab.kr)
* **Gifshot 라이브러리**: [Yahoo Gifshot GitHub](https://github.com/yahoo/gifshot)
