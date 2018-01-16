;(function() {
  "use strict";

  var BaseController = require("BaseController");

  new BaseController({
    siteName: "StreamElements",
    playPause: "#dashboard > div > div.songrequest-wrap.layout-row.layout-align-center-start.layout-sm-column.layout-xs-column > md-card > md-content > div.controls.layout-row.layout-align-start-center.element-100pw > div.layout-row.layout-align-center-center.actions > button:nth-child(1)",
    playNext: "#dashboard > div > div.songrequest-wrap.layout-row.layout-align-center-start.layout-sm-column.layout-xs-column > md-card > md-content > div.controls.layout-row.layout-align-start-center.element-100pw > div.layout-row.layout-align-center-center.actions > button:nth-child(2)",
    song: "#dashboard > div > div.songrequest-wrap.layout-row.layout-align-center-start.layout-sm-column.layout-xs-column > md-card > md-content > div.info.element-100pw > div > h1",
    iframe: ".video"
  });
})();
