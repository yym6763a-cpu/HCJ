# 🏋️‍♂️ 스마트 BMI & 체중 관리 계산기 (Smart BMI Calculator)

사용자의 성별, 키, 몸무게를 입력받아 **BMI(체질량지수)**를 계산하고, **표준 체중 기준 90%, 100%, 110%**에 도달하기 위해 몇 kg을 감량하거나 증량해야 하는지 한눈에 보여주는 반응형 웹 애플리케이션입니다.

---

## 🛠️ 기술 스택 (Tech Stack)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

- **Language:** HTML5, JavaScript (ES6+)
- **Styling:** Tailwind CSS (via CDN)
- **Icons & Fonts:** FontAwesome 6, Google Fonts (Noto Sans KR)

---

## ✨ 주요 기능 (Key Features)

1. **직관적이고 트렌디한 UI/UX**
   - 모바일과 PC 환경 모두에 최적화된 반응형 카드 레이아웃.
   - 직관적인 게이지 바 및 색상 태그를 통한 BMI 상태 시각화.

2. **대한비만학회 기준 BMI 분석**
   - BMI 수치 계산 및 6단계 비만도 분류 (저체중, 정상, 과체중, 비만 1~3단계).

3. **목표 체중 세분화 및 감량/증량 체중 계산**
   - 성별 맞춤형 표준 체중 공식 적용.
   - **표준 체중의 90% (슬림)**, **100% (이상적)**, **110% (통통)** 세 가지 목표 체중 제시.
   - 현재 체중 대비 정확한 감량/증량 필요 체중($\text{kg}$) 자동 계산 및 안내.

4. **제로 세팅 (Zero-Dependency)**
   - 빌드 과정이나 백엔드 서버 없이, 단일 `index.html` 파일만으로 즉시 실행 가능.

---

## 📐 계산 공식 및 기준 (Calculations)

### 1. BMI 공식
$$BMI = \frac{\text{체중(kg)}}{\text{키(m)}^2}$$

### 2. 성별 표준 체중 (100% 기준)
- **남성:** $Height(m)^2 \times 22$
- **여성:** $Height(m)^2 \times 21$

### 3. 목표 체중 단계별 계산
- **90% 목표 (슬림):** $\text{표준 체중} \times 0.9$
- **100% 목표 (이상적):** $\text{표준 체중} \times 1.0$
- **110% 목표 (통통):** $\text{표준 체중} \times 1.1$

### 4. 대한비만학회 비만도 판정 기준

| 구분 | BMI 범위 ($\text{kg/m}^2$) | 색상 구분 |
| :--- | :--- | :--- |
| **저체중** | $< 18.5$ | Blue |
| **정상 체중** | $18.5 \sim 22.9$ | Emerald |
| **비만 전단계 (과체중)** | $23.0 \sim 24.9$ | Amber |
| **1단계 비만** | $25.0 \sim 29.9$ | Rose |
| **2단계 비만** | $30.0 \sim 34.9$ | Dark Rose |
| **3단계 비만 (고도비만)** | $\ge 35.0$ | Deep Red |

---

## 🚀 실행 방법 (How to Run)

 별도의 설치 과정이 필요하지 않습니다.

1. 이 저장소를 클론하거나 `index.html` 파일을 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/bmi-calculator.html.git
   ```
2. `index.html` 파일을 마우스로 두 번 클릭하거나 웹 브라우저(Chrome, Edge, Safari 등)로 엽니다.

---

## 📁 프로젝트 구조 (Project Structure)

```text
.
└── index.html   # HTML 구조, CSS 디자인, 계산 JS 로직이 포함된 단일 파일
```

---

## 📄 라이선스 (License)

본 프로젝트는 **MIT License**를 따릅니다. 자유롭게 수정하고 재배포할 수 있습니다.
