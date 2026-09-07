/**
 * 부산 3박 4일 여행 웹페이지 - Google Apps Script
 *
 * 사용법
 * 1) script.google.com 에서 새 프로젝트 생성
 * 2) Code.gs에 이 코드를 붙여넣기
 * 3) index.html 파일을 추가하고 아래 index.html 내용을 붙여넣기
 * 4) 배포 > 새 배포 > 유형: 웹 앱
 * 5) 실행 사용자: 나 / 액세스 권한: 필요에 맞게 선택
 *
 * Google Apps Script의 HtmlService로 index.html을 웹 앱으로 제공합니다.
 * https://developers.google.com/apps-script/guides/html
 */

function doGet() {
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .setTitle('BUSAN 3박 4일 | 일본인 관광객 여행 가이드')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * index.html에서 사용할 수 있는 서버 함수.
 * 현재는 외부 API 없이 정적 여행 데이터를 제공하므로
 * 향후 Google Sheets/예약/문의 폼 등을 연결할 때 확장할 수 있습니다.
 */
function getTravelInfo() {
  return {
    title: 'BUSAN 3박 4일',
    subtitle: '일본인 관광객을 위한 부산 여행 가이드',
    updated: Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd')
  };
}
