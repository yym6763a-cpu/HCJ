const SPREADSHEET_ID = '1OdOMTXwVO5KfxIyCxq2xzX6RemzFY62pDSkdi_W6_gA';
const SHEET_NAME = 'Sheet1';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('교육 만족도 설문조사');
}

function submitSurvey(data) {
  var name = String(data.name || '').trim();
  var email = String(data.email || '').trim();
  var q1 = String(data.satisfaction || '').trim();
  var q2 = String(data.understanding || '').trim();
  var q3 = String(data.usefulness || '').trim();
  var q4 = String(data.usefulPart || '').trim();
  var q5 = String(data.opinion || '').trim();

  if (name === '') {
    throw new Error('성명을 입력해 주세요.');
  }
  if (email === '') {
    throw new Error('이메일을 입력해 주세요.');
  }
  if (q1 === '') {
    throw new Error('1번 질문에 답변해 주세요.');
  }
  if (q2 === '') {
    throw new Error('2번 질문에 답변해 주세요.');
  }
  if (q3 === '') {
    throw new Error('3번 질문에 답변해 주세요.');
  }

  if (q1 === '5') {
    q1 = '매우 만족';
  } else if (q1 === '4') {
    q1 = '만족';
  } else if (q1 === '3') {
    q1 = '보통';
  } else if (q1 === '2') {
    q1 = '불만족';
  } else if (q1 === '1') {
    q1 = '매우 불만족';
  }

  if (q2 === '5') {
    q2 = '매우 그렇다';
  } else if (q2 === '4') {
    q2 = '그렇다';
  } else if (q2 === '3') {
    q2 = '보통이다';
  } else if (q2 === '2') {
    q2 = '그렇지 않다';
  } else if (q2 === '1') {
    q2 = '전혀 그렇지 않다';
  }

  if (q3 === '5') {
    q3 = '매우 그렇다';
  } else if (q3 === '4') {
    q3 = '그렇다';
  } else if (q3 === '3') {
    q3 = '보통이다';
  } else if (q3 === '2') {
    q3 = '그렇지 않다';
  } else if (q3 === '1') {
    q3 = '전혀 그렇지 않다';
  }

  var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.getSheets()[0];
  }

  if (!sheet) {
    throw new Error('스프레드시트를 찾을 수 없습니다.');
  }

  sheet.appendRow([
    name,
    email,
    q1,
    q2,
    q3,
    q4,
    q5
  ]);

  return {
    success: true,
    message: '설문조사가 완료되었습니다.'
  };
}