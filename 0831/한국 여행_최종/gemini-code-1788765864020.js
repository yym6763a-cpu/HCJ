/**
 * 웹 앱 진입점 함수 (GET 요청 처리)
 * index.html 템플릿을 렌더링하여 웹 앱 화면으로 반환합니다.
 */
function doGet() {
  return HtmlService.createTemplateFromFile('index')
    .evaluate()
    .setTitle('韓国3泊4日旅行｜ソウル・慶州・釜山')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}