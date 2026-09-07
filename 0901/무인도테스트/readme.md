# 🏝️ 무인도 생존 성향 테스트

Google Apps Script(GAS)와 Google Sheets를 연동하여 제작한 스낵형 인터랙티브 심리테스트 웹앱입니다.

## 📌 주요 기능
- **반응형 웹 UI**: 모바일/데스크톱 환경에 최적화된 설문 화면
- **성향 분석 로직**: 4가지 돌발 상황 선택지에 따른 실시간 성향(전략가, 행동파, 희망 탐험가) 분류
- **스프레드시트 DB 연동**: 참여자 이름, 성향 분석 결과, 이메일, 제출 일시 자동 기록

## 🛠️ 기술 스택
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla JS)
- **Backend & DB**: Google Apps Script (GAS), Google Sheets API

## 🚀 설치 및 배포
1. 구글 스프레드시트 생성 후 `확장 프로그램` > `Apps Script` 진입
2. `Code.gs` 및 `index.html` 파일 추가
3. `Code.gs`의 `SPREADSHEET_ID` 변수에 본인 시트 ID 입력
4. **배포** > **새 배포** > 유형: **웹 앱** 선택 후 배포 URL 생성
