
/*
shortcut
3: undo --- ctrl+z
4: redo --- ctrl+shift+z
8: saveAjax --- ctrl+e
*/

if (mabo === undefined) var mabo = {};

function Toast_Alert(myText) {
  var x = document.getElementById("DivToast");
  x.textContent = myText;
  x.className = "show";
  setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

mabo.global = {};

mabo.Gui = {

  isPreview: false,

  init: function () {
    $("[data-mabo-action]").each(function () {
      on = "click";
      if (this.dataset.maboOn) on = this.dataset.maboOn;

      $(this).on(on, mabo.Gui[this.dataset.maboAction]);
      if (this.dataset.maboShortcut) {
        $(document).bind('keydown', this.dataset.maboShortcut, mabo.Gui[this.dataset.maboAction]);
        $(window.FrameDocument, window.FrameWindow).bind('keydown', this.dataset.maboShortcut, mabo.Gui[this.dataset.maboAction]);
      }
    });
  },



  toggleFileManager: function () {
    Toast_Alert("00:toggleFileManager");
  },

  toggleLeftColumn: function () {
    Toast_Alert("01:toggleLeftColumn");
  },

  toggleRightColumn: function () {
    Toast_Alert("02:toggleRightColumn");
  },

  undo: function () {
    Toast_Alert("03:undo");
  },

  redo: function () {
    Toast_Alert("04:redo");
  },

  setDesignerMode: function () {
    Toast_Alert("05:setDesignerMode");
  },

  preview: function () {
    Toast_Alert("06:preview");
  },

  fullscreen: function () {
    Toast_Alert("07:fullscreen");
  },

  saveAjax: function () {
    Toast_Alert("08:saveAjax");
  },

  download: function () {
    Toast_Alert("09:download");
  },

  viewportMobile: function () {
    Toast_Alert("10:viewport Mobile");
  },

  viewportTablet: function () {
    Toast_Alert("11:viewport Tablet");
  },

  viewportDesktop: function () {
    Toast_Alert("12:viewport Desktop");
  },

};