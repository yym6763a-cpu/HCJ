// 스프레드시트 고유 ID 설정
const SPREADSHEET_ID = '1wGv_jBjHwy8PO-KOE9K_QXr5DmikYvUHQyVkzSlOzLo';

// 웹앱 진입 시 index.html 렌더링
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('무인도 생존 성향 테스트')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// 설문 결과 스프레드시트에 저장
function submitSurvivalTest(data) {
  try {
    // 지정된 ID의 스프레드시트 열기
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = ss.getSheets()[0]; // 첫 번째 시트에 저장
    
    // 한국 시간대 기준 타임스탬프 생성
    const timestamp = Utilities.formatDate(new Date(), 'Asia/Seoul', 'yyyy-MM-dd HH:mm:ss');
    
    // [참여자 이름, 생존 유형, 이메일, 기록 일시] 행 추가
    sheet.appendRow([
      data.name || '익명 탐험가',
      data.resultType || '미확인',
      data.email || '미입력',
      timestamp
    ]);
    
    return { status: 'success', message: '테스트 완료' };
  } catch (error) {
    return { status: 'error', message: error.toString() };
  }
}
