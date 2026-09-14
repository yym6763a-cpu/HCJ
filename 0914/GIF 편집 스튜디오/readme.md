# 🎬 Smart GIF Studio

> **Smart GIF Studio**는 서버 전송 없이 100% 웹 브라우저 내에서 GIF 애니메이션을 빠르게 편집하고 변환할 수 있는 강력한 웹 애플리케이션입니다.

![Smart GIF Studio](https://img.shields.io/badge/License-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-Canvas%20%26%20WebCodecs-orange.svg)

---

## 🌟 주요 특징 (Key Features)

- **🔒 100% Privacy-Focused (개인정보 보호)**  
  업로드한 GIF 파일 및 작업 데이터가 외부 서버로 절대 전송되지 않습니다. 모든 연산과 가공은 사용자의 브라우저 메모리 내에서 실행됩니다.
  
- **📊 상세 메타데이터 분석**  
  GIF의 바이너리 헤더를 직접 해석하여 **파일 용량, 해상도, 정확한 FPS(Frame Rate), 총 프레임 수**를 실시간으로 출력합니다.

- **🛠 9가지 강력한 GIF 편집 도구**  
  리사이징, 크롭, 용량 축소, 포맷 변환(MP4/JPG), 회전/반전, 최적화, 역재생, 속도 조절, 구간 자르기 기능을 한곳에서 제공합니다.

- **📱 반응형 웹 디자인**  
  데스크톱(좌/우 레이아웃)과 모바일(위/아래 레이아웃) 환경에 맞춰 최적화된 사용자 경험(UX)을 선사합니다.

---

## 🛠 제공 기능 (Tools & Capabilities)

| 도구 | 설명 |
| :--- | :--- |
| **Resize** | X축/Y축 슬라이더 및 수치 입력으로 해상도 조절 (비율 고정 자물쇠 토글 기능 지원) |
| **Crop** | 1:1, 16:9, 4:3, 9:16 등 비율 프리셋 및 빈 공간 확대/단색 배경 채우기 옵션 |
| **Downsizing** | 이미지 크기 축소, 프레임 스킵(1/2 FPS), 팔레트 감색을 조합한 획기적 용량 경량화 |
| **Format Convert** | 애니메이션 GIF를 **MP4 동영상**으로 전환하거나 **대표 프레임 JPG** 추출 |
| **Rotate** | 90°, 180°, 270° 회전 및 좌우(Horizontal) / 상하(Vertical) 반전 |
| **Optimize** | 색상 팔레트 및 투명도 구조 정리를 통한 화질 손실 최소화 압축 |
| **Reverse** | 애니메이션 거꾸로 재생(Reverse) 및 부메랑(Ping-Pong) 루프 효과 |
| **Speed** | 0.25배속(슬로모션)부터 4.0배속(배속 재생)까지 정밀한 재생 속도 조절 |
| **Cut** | 원하는 시작 프레임과 끝 프레임 구간을 지정하여 특정 장면만 추출 |

---

## 🚀 사용 기술 (Tech Stack)

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla ES6+)
- **API & Core Technology**:
  - `HTML5 Canvas API` (프레임 렌더링 및 가공)
  - `ImageDecoder API` (웹 기반 고속 GIF 프레임 디코딩)
  - `MediaRecorder API` (GIF -> MP4 비디오 실시간 인코딩)
  - Custom Binary GIF Parser & LZW GIF Encoder

---

## 💻 실행 방법 (Getting Started)

별도의 백엔드 서버 구축이나 Node.js 패키지 설치 과정이 필요하지 않습니다.

1. 저장소를 클론(Clone)하거나 소스코드를 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/smart-gif-studio.git
   ```
2. `index.html` 파일을 크롬(Chrome), 엣지(Edge), Safari 등 최신 웹 브라우저에서 여시면 바로 작동합니다.

---

## 🔗 링크 (Links)

- **Official Website**: [NaNaLab (https://nanalab.kr)](https://nanalab.kr)

---

## 📜 라이선스 (License)

This project is licensed under the MIT License - see the LICENSE file for details.
