function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('ソウル満喫 3泊4日モデルコース | SEOUL TRIP GUIDE')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
}