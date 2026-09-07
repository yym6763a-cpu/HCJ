/**
 * 경주 3박4일 팀 MT 일정 웹앱 / 慶州3泊4日チームMTスケジュールWebアプリ
 *
 * 배포 방법:
 * 1. Apps Script 프로젝트에 Code.gs, index.html 두 파일을 그대로 붙여넣기
 * 2. 상단 메뉴 [배포] > [새 배포] > 유형: "웹 앱" 선택
 * 3. 실행 계정: 나(본인) / 액세스 권한: 링크가 있는 모든 사용자 (팀 공유 시)
 * 4. [배포] 클릭 후 생성된 웹앱 URL을 팀원에게 공유
 *
 * デプロイ方法:
 * 1. Apps Scriptプロジェクトに Code.gs, index.html の2ファイルをそのまま貼り付け
 * 2. 上部メニュー [デプロイ] > [新しいデプロイ] > 種類:「ウェブアプリ」を選択
 * 3. 実行ユーザー:自分 / アクセス権限:リンクを知っている全員(チーム共有時)
 * 4. [デプロイ]をクリックし、発行されたWebアプリURLをチームに共有
 */

function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('경주 3박4일 팀 MT / 慶州3泊4日チームMT')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
