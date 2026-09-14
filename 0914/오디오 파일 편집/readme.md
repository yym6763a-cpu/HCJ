# 🎵 Modern Web Audio Editor

**Web Audio Editor**는 웹 브라우저에서 서버 설치 없이 오디오 파일(MP3, WAV 등)을 직접 자르고, 볼륨을 조절하며, 다른 포맷으로 변환할 수 있는 100% 클라이언트 사이드 웹 어플리케이션입니다.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-blue.style=flat-square)

---

## ✨ 주요 기능

* ✂️ **구간 자르기 (Trim)**
  * `WaveSurfer.js` 파형 위에 드래그 박스를 이용하여 직관적이고 미세하게 원하는 구간을 추출할 수 있습니다.
* 🔊 **볼륨 조절 (Gain Control)**
  * `0%`부터 `200%`까지 실시간으로 오디오 음량을 증폭하거나 줄일 수 있습니다.
* 🔄 **포맷 변환 및 다운로드 (Format Export)**
  * 편집된 오디오를 **WAV (무손실)** 또는 **MP3 (고압축)** 포맷으로 즉시 인코딩하여 다운로드합니다.
* 🎨 **현대적인 UI/UX**
  * Tailwind CSS 기반의 다크 모드 및 글래스모피즘(Glassmorphism) 스타일링이 적용된 세련된 인터페이스.
* 🔒 **100% 개인정보 보호**
  * Web Audio API를 활용하여 모든 오디오 연산이 사용자 브라우저 내부에서만 이루어지므로, 서버로 파일이 업로드되지 않아 안전합니다.

---

## 🛠 사용된 기술 및 라이브러리

- **Core**: HTML5, JavaScript (Web Audio API, `OfflineAudioContext`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN)
- **Waveform & UI Component**: [WaveSurfer.js v7](https://wavesurfer.xyz/) & Regions Plugin
- **Audio Encoding**: [lamejs](https://github.com/vscodeshift/lamejs) (Client-side MP3 Encoder)
- **Icons**: [Lucide Icons](https://lucide.dev/)

---

## 🚀 시작하기

별도의 빌드 과정이나 백엔드 서버가 필요하지 않습니다.

1. 이 저장소를 클론(Clone)하거나 `index.html` 파일을 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/web-audio-editor.git
   ```
2. `index.html` 파일을 웹 브라우저(Chrome, Edge, Safari 등)에서 실행합니다.

---

## 📖 사용 방법

1. **파일 업로드**:
   * 업로드 영역에 편집하고 싶은 오디오 파일(MP3, WAV, AAC, OGG 등)을 드래그 앤 드롭하거나 클릭하여 선택합니다.
2. **구간 선택**:
   * 생성된 파형 위에 표시되는 **보라색 영역**의 양쪽 끝을 드래그하여 남겨두고 싶은 구간을 설정합니다.
3. **볼륨 조절**:
   * 하단의 **볼륨 조절** 슬라이더를 통해 출력 음량을 설정합니다.
4. **포맷 선택 및 내보내기**:
   * 변환 포맷(`WAV` 또는 `MP3`)을 선택한 후 **'편집된 파일 내보내기'** 버튼을 누르면 처리가 완료된 후 자동으로 다운로드됩니다.

---

## 🌐 브라우저 지원

Web Audio API 및 ES6를 지원하는 최신 브라우저를 권장합니다.

* Google Chrome (권장)
* Microsoft Edge (권장)
* Safari
* Mozilla Firefox

---

## 📄 라이선스

이 프로젝트는 [MIT License](LICENSE)를 따릅니다.
