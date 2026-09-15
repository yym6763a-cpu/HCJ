# 💌 Mobile Wedding Invitation (모바일 청첩장)

스마트폰 환경에 최적화된 반응형 모바일 청첩장 웹 페이지입니다.  
별도의 백엔드 서버나 복잡한 설정 없이 `index.html` 단일 파일로 손쉽게 동작하도록 제작되었습니다.

---

## ✨ 주요 기능 (Key Features)

* 📱 **스마트폰 맞춤 레이아웃**: 아이폰 및 안드로이드 주요 해상도(최대 너비 430px)에 최적화된 프레임 설계
* ⏳ **실시간 카운트다운**: 예식 일시(2026년 12월 31일 12:00)까지 남은 D-Day, 시간, 분, 초를 실시간 애니메이션으로 표시
* 🖼️ **웹 갤러리 지원**: 외부 고화질 이미지 링크를 활용한 세련된 웨딩 화보 그리드
* 🎨 **감성 디자인 & 폰트**: 구글 폰트(`Gowun Batang`, `Noto Sans KR`)를 활용한 정갈하고 따뜻한 분위기 연출

---

## 📁 파일 구조 (Project Structure)

```text
.
├── README.md         # 프로젝트 설명 문서
└── index.html        # 청첩장 전체 소스코드 (HTML + CSS + JS 통합)
```

---

## 🛠️ 수정 방법 (Customization Guide)

`index.html` 파일을 텍스트 편집기나 코드 에디터로 열어 아래 항목들을 자유롭게 수정할 수 있습니다.

1. **예식 날짜 및 카운트다운 수정**
   ```javascript
   // index.html 하단 <script> 내부
   const weddingDate = new Date("2026-12-31T12:00:00").getTime();
   ```

2. **신랑 · 신부 이름 및 안내 문구 수정**
   * `<h1 class="cover-names">`: 메인 화면 이름
   * `<p class="content">`: 초대의 글 본문

3. **갤러리 이미지 교체**
   * `<img src="...">` 태그 내의 이미지 URL 경로를 본인의 이미지 링크로 교체

---

## 🌐 미리보기 및 배포 (Deployment)

GitHub Pages 기능을 활성화하면 무료 웹 주소(URL)를 생성하여 모바일로 접속할 수 있습니다.

1. Repository **Settings** ➔ **Pages** 이동
2. Branch를 `main`으로 설정 후 **Save**
3. 발급된 URL을 통해 모바일 청첩장 확인
