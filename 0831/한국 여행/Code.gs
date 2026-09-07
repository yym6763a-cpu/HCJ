function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
      .setTitle('韓国3泊4日 満喫モデルコース')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
