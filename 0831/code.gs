function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('경주 3박4일 팀 MT / 慶州3泊4日チームMT')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
