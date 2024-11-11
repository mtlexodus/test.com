class Gui {
  constructor() {
    $("[data-mabo-action]").each(function (index, value) {
      this.addEventListener('click', function handleClick(event) {
        const bb = this.dataset.maboAction;
        /* ------------------------------ mabo1[bb](); ------------------------------ */
        mabo1[this.dataset.maboAction]();
      });
    });
  }


toggleFileManager() {
  Toast_Alert("00:toggleFileManager");
}

toggleLeftColumn() {
  Toast_Alert("01:toggleLeftColumn");
}

toggleRightColumn() {
  Toast_Alert("02:toggleRightColumn");
}

undo() {
  Toast_Alert("03:undo");
}

redo() {
  Toast_Alert("04:redo");
}

setDesignerMode() {
  Toast_Alert("05:setDesignerMode");
}

preview() {
  Toast_Alert("06:preview");
}

fullscreen() {
  Toast_Alert("07:fullscreen");
}

saveAjax() {
  Toast_Alert("08:saveAjax");
}

download() {
  Toast_Alert("09:download");
}

viewportMobile() {
  Toast_Alert("10:viewport Mobile");
}

viewportTablet() {
  Toast_Alert("11:viewport Tablet");
}

viewportDesktop() {
  Toast_Alert("12:viewport Desktop");
}

}