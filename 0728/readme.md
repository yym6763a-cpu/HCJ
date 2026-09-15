# 💛 자바스크립트 기초 실습 (JavaScript Basics Practice)

이 프로젝트는 자바스크립트(JavaScript)의 기초적인 개념인 **외부 파일 연동**, **이벤트 처리(마우스 오버/아웃)**, **브라우저 대화상자**, 그리고 **산술 연산**을 실습하기 위한 코드 모음입니다.

---

## 📁 프로젝트 구조 (Directory Structure)

```text
.
├── 01_image_toggle.html    # 외부 JS 연동 및 마우스 호버 이미지 변경 예제
├── 02_dialogs.html         # alert, prompt, confirm 대화상자 활용 예제
├── 03_arithmetic.html      # 기본 변수 선언 및 산술 연산 예제
├── lib.js                  # 이미지 변경 로직이 담긴 외부 자바스크립트 파일
└── image/
    ├── apple.png           # 기본 이미지
    └── banana.png          # 마우스 호버 시 변경될 이미지
```

---

## 📝 주요 실습 내용

### 1. 외부 자바스크립트 파일 연동 및 이벤트 처리 (`01_image_toggle.html` & `lib.js`)
* `<script src="lib.js"></script>`를 사용해 외부 JS 파일을 불러옵니다.
* `onmouseover` 및 `onmouseout` 이벤트를 사용하여 마우스 커서의 위치에 따라 이미지를 바꿉니다.
* **`lib.js` 주요 함수:**
  * `over(obj)`: 마우스를 올렸을 때 이미지를 `banana.png`로 변경합니다.
  * `out(obj)`: 마우스를 뗐을 때 이미지를 `apple.png`로 변경합니다.

---

### 2. 브라우저 대화상자 활용 (`02_dialogs.html`)
* 브라우저에서 제공하는 기본 대화상자 함수 3가지를 활용합니다.
  * `alert()`: 알림 창 출력
  * `prompt()`: 사용자로부터 텍스트 입력받기
  * `confirm()`: 확인/취소 선택창을 띄우고 결과(`true`/`false`)에 따라 `if-else` 조건문 실행

---

### 3. 자바스크립트 산술 연산 (`03_arithmetic.html`)
* `let` 키워드를 활용한 변수 선언 및 기본 산술 연산자를 실습합니다.
* `document.write()`를 사용해 연산 결과를 웹 화면에 직접 출력합니다.
* **사용된 연산자:**
  * 덧셈 (`+`), 뺄셈 (`-`), 곱셈 (`*`), 나눗셈 (`/`), 몫/나머지 (`%`)

---

## 🚀 실행 방법 (How to Run)

1. 이 저장소를 복사(Clone)하거나 다운로드합니다.
2. `image` 폴더를 생성하고 `apple.png`와 `banana.png` 이미지를 넣어줍니다.
3. 실행하려는 HTML 파일(`01_image_toggle.html`, `02_dialogs.html`, `03_arithmetic.html`)을 웹 브라우저(Chrome, Edge 등)로 열어 결과를 확인합니다.
