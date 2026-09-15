# 🖼️ Smart Image Resizer

> 브라우저 상에서 빠르고 간편하게 여러 장의 사진 비율을 변경하고 자르거나 여백을 추가할 수 있는 웹 기반 사진 편집 툴입니다.

![Smart Image Resizer Preview](https://via.placeholder.com/800x400/6366f1/ffffff?text=Smart+Image+Resizer+UI)

---

## ✨ 주요 기능 (Features)

1. **상단 로고 & 헤더**
   - 로고 클릭 시 [`nanalab.kr`](https://nanalab.kr) 사이트로 즉시 이동합니다.
2. **드래그 앤 드롭 업로드 (Drag & Drop)**
   - 여러 장의 이미지 파일(JPG, PNG, WEBP 등)을 드래그 앤 드롭하거나 파일 선택 버튼을 통해 한 번에 올릴 수 있습니다.
3. **다양한 캔버스 비율 지원**
   - 프리셋 비율: `1:1`, `3:4`, `4:3`, `9:16`, `16:9`
   - **커스텀 비율**: 가로/세로 비율 직접 입력 가능.
4. **두 가지 변환 모드 (Padding / Crop)**
   - **Padding (여백 추가)**: 원본 비율을 유지하며 모자라는 공간에 여백을 채웁니다. 여백 색상(기본 흰색)을 사용자가 원하는 색으로 자유롭게 변경할 수 있습니다.
   - **Crop (자르기)**: 원본 사진의 중앙을 기준으로 선택한 캔버스 비율에 맞게 잘라냅니다.
5. **실시간 썸네일 & 프로그레스 바**
   - 업로드된 사진마다 썸네일 미리보기와 변환 진행 상태(Progress Bar)를 시각적으로 보여줍니다.
6. **개별 및 일괄 압축 다운로드 (ZIP)**
   - 각 사진의 처리가 100% 완료되면 **개별 다운로드**가 활성화됩니다.
   - 목록 전체의 변환이 끝나면 **일괄 다운로드 (ZIP)** 버튼을 눌러 모든 이미지를 하나의 `.zip` 압축 파일로 일괄 저장할 수 있습니다.
7. **100% 클라이언트 사이드 동작**
   - 서버로 사진을 전송하지 않고 브라우저(Canvas API) 내에서 모든 처리가 이루어지므로 **속도가 빠르고 개인정보가 안전**합니다.

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 |
| --- | --- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Graphic Library** | HTML5 Canvas API |
| **Archive Library** | [JSZip v3.10.1](https://stuk.github.io/jszip/) (CDN) |

---

## 🚀 시작하기 (Getting Started)

별도의 개발 환경이나 서버 설치 없이 브라우저에서 바로 실행 가능합니다.

### 1. Repository 클론 또는 파일 다운로드
```bash
git clone https://github.com/your-username/smart-image-resizer.git
cd smart-image-resizer
```

### 2. 실행 방법
`index.html` 파일을 크롬, 엣지, 웨일 등 임의의 웹 브라우저로 엽니다.

```bash
# MacOS
open index.html

# Windows
start index.html
```

---

## 📁 프로젝트 구조 (Project Structure)

```text
smart-image-resizer/
├── index.html        # HTML, CSS, JavaScript가 모두 통합된 메인 파일
├── logo.png          # 상단 헤더 로고 이미지
└── README.md         # 프로젝트 설명 문서
```

---

## 💡 사용 방법 (How to Use)

1. 웹 페이지 중앙의 **업로드 영역**에 사진을 드래그하여 떨어뜨리거나 **사진 파일 선택** 버튼을 클릭합니다.
2. 원하는 **캔버스 비율**(`1:1`, `16:9` 등 또는 커스텀 입력)을 클릭합니다.
3. **Padding** 모드 선택 시 우측의 **여백 색상**을 원하는 색으로 지정합니다. (Crop 모드 선택 시 배경색은 비활성화됩니다)
4. 이미지 변환 프로그레스 바가 100% 완료되면 개별 **다운로드** 버튼을 누르거나, 우측 상단의 **일괄 다운로드 (ZIP)** 버튼을 클릭하여 결과물을 다운로드합니다.

---

## 📄 라이선스 (License)

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Developed with ❤️ by <a href="https://nanalab.kr">NANA LAB</a>
</p>
