# 🔮 라스트 마블 추첨기 (Last Marble Winner Picker)

> **장애물을 지나 가장 마지막에 떨어지는 구슬이 승리한다!**  
> 물리 엔진 기반의 장애물 통과 게임으로 재미있고 공정하게 당첨자를 뽑는 100% 웹 기반 추첨 애플리케이션입니다.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

---

## ✨ 주요 특징 (Key Features)

- 🎮 **실감 나는 물리 엔진**: HTML5 Canvas를 활용한 중력, 장애물 튕김, 구슬 간 충돌 및 벽면 반사 구현
- 👑 **최후의 1인 승리 규칙**: 먼저 떨어진 참가자는 순서대로 탈락하며, **가장 마지막까지 버틴 구슬**이 최종 당첨되는 반전 재미 제공
- 🎨 **감각적인 다크 네온 UI**: Glassmorphism 디자인과 네온 글로우 효과가 적용된 세련된 인터페이스
- 📊 **실시간 진행 중계**: 통과(탈락) 순서를 실시간 리더보드로 확인할 수 있어 몰입감 증가
- 🚀 **무설치 / 외부 라이브러리 ZERO**: 외부 npm 패키지나 CDN 없이 단 하나의 HTML 파일로 즉시 실행 가능

---

## 🕹️ 게임 규칙 (Game Rules)

1. 참가자 이름을 입력하고 **[추첨 시작!]** 버튼을 누르면 각 참가자의 이름이 새겨진 구슬들이 무작위 위치에서 낙하합니다.
2. 구슬들은 배치된 핀(Pegs) 장애물들과 부딪히며 예측할 수 없는 방향으로 튀어 오릅니다.
3. 바닥선에 먼저 도착한 구슬은 순서대로 **탈락** 처리됩니다.
4. 모든 장애물을 거쳐 **가장 마지막에 바닥에 도달한 최종 survivor가 당첨자**가 됩니다!

---

## 🚀 시작하기 (Getting Started)

별도의 설치 과정이나 빌드 과정이 필요하지 않습니다.

### 1. 실행 방법
1. 본 저장소의 `index.html` (또는 `marble_draw.html`) 파일을 다운로드합니다.
2. 다운로드한 `.html` 파일을 Chrome, Edge, Safari 등 **웹 브라우저로 더블 클릭하여 실행**하면 끝!

---

## 📖 사용 방법 (How to Use)

| 단계 | 설명 |
| :--- | :--- |
| **1. 참가자 입력** | 좌측 입력창에 추첨할 사람들의 이름을 줄바꿈(`Enter`) 또는 쉼표(`,`)로 구분하여 입력합니다. |
| **2. 추첨 시작** | **[추첨 시작!]** 버튼을 눌러 구슬을 낙하시킵니다. |
| **3. 진행 관전** | 중앙 캔버스에서 구슬들의 낙하 양상을 관전하고, 우측 패널에서 탈락 순서를 확인합니다. |
| **4. 당첨자 확인** | 마지막 구슬이 도착하면 축하 팝업 모달과 함께 최종 당첨자가 공개됩니다. |

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 사용 기술 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla ES6+) |
| **Graphics** | HTML5 Canvas 2D API |
| **Style Concept** | Dark Mode, Neon Glow, Glassmorphism UI |

---

## ⚙️ 주요 물리 파라미터 수정 가이드

`script` 태그 내부의 주요 상수를 수정하면 게임의 난이도나 속도를 조절할 수 있습니다.

```javascript
const GRAVITY = 0.15;      // 중력 세기 (높을수록 빠르게 하강)
const RESTITUTION = 0.55;  // 튕김 정도 (0 ~ 1 사이, 높을수록 잘 튕김)
const MARBLE_RADIUS = 13;  // 구슬 크기
const PEG_RADIUS = 5;      // 장애물(핀) 크기
```

---

## 📄 라이선스 (License)

이 프로젝트는 **MIT 라이선스**에 따라 자유롭게 수정, 배포 및 상업적으로 이용할 수 있습니다.
