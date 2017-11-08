! function(n, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : n.Sweetalert2 = e()
}(this, function() {
    "use strict";
    ! function(n, e) {
        if ("undefined" == typeof document) return e;
        n = n || "";
        var t = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
        o.type = "text/css", t.appendChild(o), o.styleSheet ? o.styleSheet.cssText = n : o.appendChild(document.createTextNode(n))
    }("body.swal2-shown {\n  overflow-y: hidden; }\n\nbody.swal2-iosfix {\n  position: fixed;\n  left: 0;\n  right: 0; }\n\n.swal2-container {\n  display: flex;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 10px;\n  background-color: transparent;\n  z-index: 1060; }\n  .swal2-container.swal2-fade {\n    transition: background-color .1s; }\n  .swal2-container.swal2-shown {\n    background-color: rgba(0, 0, 0, 0.4); }\n\n.swal2-modal {\n  background-color: #fff;\n  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  box-sizing: border-box;\n  text-align: center;\n  margin: auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none;\n  position: relative;\n  max-width: 100%; }\n  .swal2-modal:focus {\n    outline: none; }\n  .swal2-modal.swal2-loading {\n    overflow-y: hidden; }\n  .swal2-modal .swal2-title {\n    color: #595959;\n    font-size: 30px;\n    text-align: center;\n    font-weight: 600;\n    text-transform: none;\n    position: relative;\n    margin: 0 0 .4em;\n    padding: 0;\n    display: block;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-buttonswrapper {\n    margin-top: 15px; }\n    .swal2-modal .swal2-buttonswrapper:not(.swal2-loading) .swal2-styled[disabled] {\n      opacity: .4;\n      cursor: no-drop; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-confirm {\n      box-sizing: border-box;\n      border: 4px solid transparent;\n      border-color: transparent;\n      width: 40px;\n      height: 40px;\n      padding: 0;\n      margin: 7.5px;\n      vertical-align: top;\n      background-color: transparent !important;\n      color: transparent;\n      cursor: default;\n      border-radius: 100%;\n      animation: rotate-loading 1.5s linear 0s infinite normal;\n      user-select: none; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading .swal2-styled.swal2-cancel {\n      margin-left: 30px;\n      margin-right: 30px; }\n    .swal2-modal .swal2-buttonswrapper.swal2-loading :not(.swal2-styled).swal2-confirm::after {\n      display: inline-block;\n      content: '';\n      margin-left: 5px;\n      vertical-align: -1px;\n      height: 15px;\n      width: 15px;\n      border: 3px solid #999999;\n      box-shadow: 1px 1px 1px #fff;\n      border-right-color: transparent;\n      border-radius: 50%;\n      animation: rotate-loading 1.5s linear 0s infinite normal; }\n  .swal2-modal .swal2-styled {\n    border: 0;\n    border-radius: 3px;\n    box-shadow: none;\n    color: #fff;\n    cursor: pointer;\n    font-size: 17px;\n    font-weight: 500;\n    margin: 15px 5px 0;\n    padding: 10px 32px; }\n    .swal2-modal .swal2-styled:focus {\n      outline: none;\n      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(50, 100, 150, 0.4); }\n  .swal2-modal .swal2-image {\n    margin: 20px auto;\n    max-width: 100%; }\n  .swal2-modal .swal2-close {\n    background: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    width: 38px;\n    height: 40px;\n    font-size: 36px;\n    line-height: 40px;\n    font-family: serif;\n    position: absolute;\n    top: 5px;\n    right: 8px;\n    cursor: pointer;\n    color: #cccccc;\n    transition: color .1s ease; }\n    .swal2-modal .swal2-close:hover {\n      color: #d55; }\n  .swal2-modal > .swal2-input,\n  .swal2-modal > .swal2-file,\n  .swal2-modal > .swal2-textarea,\n  .swal2-modal > .swal2-select,\n  .swal2-modal > .swal2-radio,\n  .swal2-modal > .swal2-checkbox {\n    display: none; }\n  .swal2-modal .swal2-content {\n    font-size: 18px;\n    text-align: center;\n    font-weight: 300;\n    position: relative;\n    float: none;\n    margin: 0;\n    padding: 0;\n    line-height: normal;\n    color: #545454;\n    word-wrap: break-word; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea,\n  .swal2-modal .swal2-select,\n  .swal2-modal .swal2-radio,\n  .swal2-modal .swal2-checkbox {\n    margin: 20px auto; }\n  .swal2-modal .swal2-input,\n  .swal2-modal .swal2-file,\n  .swal2-modal .swal2-textarea {\n    width: 100%;\n    box-sizing: border-box;\n    font-size: 18px;\n    border-radius: 3px;\n    border: 1px solid #d9d9d9;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06);\n    transition: border-color .3s, box-shadow .3s; }\n    .swal2-modal .swal2-input.swal2-inputerror,\n    .swal2-modal .swal2-file.swal2-inputerror,\n    .swal2-modal .swal2-textarea.swal2-inputerror {\n      border-color: #f27474 !important;\n      box-shadow: 0 0 2px #f27474 !important; }\n    .swal2-modal .swal2-input:focus,\n    .swal2-modal .swal2-file:focus,\n    .swal2-modal .swal2-textarea:focus {\n      outline: none;\n      border: 1px solid #b4dbed;\n      box-shadow: 0 0 3px #c4e6f5; }\n    .swal2-modal .swal2-input::placeholder,\n    .swal2-modal .swal2-file::placeholder,\n    .swal2-modal .swal2-textarea::placeholder {\n      color: #cccccc; }\n  .swal2-modal .swal2-range input {\n    float: left;\n    width: 80%; }\n  .swal2-modal .swal2-range output {\n    float: right;\n    width: 20%;\n    font-size: 20px;\n    font-weight: 600;\n    text-align: center; }\n  .swal2-modal .swal2-range input,\n  .swal2-modal .swal2-range output {\n    height: 43px;\n    line-height: 43px;\n    vertical-align: middle;\n    margin: 20px auto;\n    padding: 0; }\n  .swal2-modal .swal2-input {\n    height: 43px;\n    padding: 0 12px; }\n    .swal2-modal .swal2-input[type='number'] {\n      max-width: 150px; }\n  .swal2-modal .swal2-file {\n    font-size: 20px; }\n  .swal2-modal .swal2-textarea {\n    height: 108px;\n    padding: 12px; }\n  .swal2-modal .swal2-select {\n    color: #545454;\n    font-size: inherit;\n    padding: 5px 10px;\n    min-width: 40%;\n    max-width: 100%; }\n  .swal2-modal .swal2-radio {\n    border: 0; }\n    .swal2-modal .swal2-radio label:not(:first-child) {\n      margin-left: 20px; }\n    .swal2-modal .swal2-radio input,\n    .swal2-modal .swal2-radio span {\n      vertical-align: middle; }\n    .swal2-modal .swal2-radio input {\n      margin: 0 3px 0 0; }\n  .swal2-modal .swal2-checkbox {\n    color: #545454; }\n    .swal2-modal .swal2-checkbox input,\n    .swal2-modal .swal2-checkbox span {\n      vertical-align: middle; }\n  .swal2-modal .swal2-validationerror {\n    background-color: #f0f0f0;\n    margin: 0 -20px;\n    overflow: hidden;\n    padding: 10px;\n    color: gray;\n    font-size: 16px;\n    font-weight: 300;\n    display: none; }\n    .swal2-modal .swal2-validationerror::before {\n      content: '!';\n      display: inline-block;\n      width: 24px;\n      height: 24px;\n      border-radius: 50%;\n      background-color: #ea7d7d;\n      color: #fff;\n      line-height: 24px;\n      text-align: center;\n      margin-right: 10px; }\n\n@supports (-ms-accelerator: true) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  .swal2-range input {\n    width: 100% !important; }\n  .swal2-range output {\n    display: none; } }\n\n.swal2-icon {\n  width: 80px;\n  height: 80px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  margin: 20px auto 30px;\n  padding: 0;\n  position: relative;\n  box-sizing: content-box;\n  cursor: default;\n  user-select: none; }\n  .swal2-icon.swal2-error {\n    border-color: #f27474; }\n    .swal2-icon.swal2-error .swal2-x-mark {\n      position: relative;\n      display: block; }\n    .swal2-icon.swal2-error [class^='swal2-x-mark-line'] {\n      position: absolute;\n      height: 5px;\n      width: 47px;\n      background-color: #f27474;\n      display: block;\n      top: 37px;\n      border-radius: 2px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='left'] {\n        transform: rotate(45deg);\n        left: 17px; }\n      .swal2-icon.swal2-error [class^='swal2-x-mark-line'][class$='right'] {\n        transform: rotate(-45deg);\n        right: 16px; }\n  .swal2-icon.swal2-warning {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #f8bb86;\n    border-color: #facea8;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-info {\n    font-family: 'Open Sans', sans-serif;\n    color: #3fc3ee;\n    border-color: #9de0f6;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-question {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    color: #87adbd;\n    border-color: #c9dae1;\n    font-size: 60px;\n    line-height: 80px;\n    text-align: center; }\n  .swal2-icon.swal2-success {\n    border-color: #a5dc86; }\n    .swal2-icon.swal2-success [class^='swal2-success-circular-line'] {\n      border-radius: 50%;\n      position: absolute;\n      width: 60px;\n      height: 120px;\n      transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='left'] {\n        border-radius: 120px 0 0 120px;\n        top: -7px;\n        left: -33px;\n        transform: rotate(-45deg);\n        transform-origin: 60px 60px; }\n      .swal2-icon.swal2-success [class^='swal2-success-circular-line'][class$='right'] {\n        border-radius: 0 120px 120px 0;\n        top: -11px;\n        left: 30px;\n        transform: rotate(-45deg);\n        transform-origin: 0 60px; }\n    .swal2-icon.swal2-success .swal2-success-ring {\n      width: 80px;\n      height: 80px;\n      border: 4px solid rgba(165, 220, 134, 0.2);\n      border-radius: 50%;\n      box-sizing: content-box;\n      position: absolute;\n      left: -4px;\n      top: -4px;\n      z-index: 2; }\n    .swal2-icon.swal2-success .swal2-success-fix {\n      width: 7px;\n      height: 90px;\n      position: absolute;\n      left: 28px;\n      top: 8px;\n      z-index: 1;\n      transform: rotate(-45deg); }\n    .swal2-icon.swal2-success [class^='swal2-success-line'] {\n      height: 5px;\n      background-color: #a5dc86;\n      display: block;\n      border-radius: 2px;\n      position: absolute;\n      z-index: 2; }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='tip'] {\n        width: 25px;\n        left: 14px;\n        top: 46px;\n        transform: rotate(45deg); }\n      .swal2-icon.swal2-success [class^='swal2-success-line'][class$='long'] {\n        width: 47px;\n        right: 8px;\n        top: 38px;\n        transform: rotate(-45deg); }\n\n.swal2-progresssteps {\n  font-weight: 600;\n  margin: 0 0 20px;\n  padding: 0; }\n  .swal2-progresssteps li {\n    display: inline-block;\n    position: relative; }\n  .swal2-progresssteps .swal2-progresscircle {\n    background: #3085d6;\n    border-radius: 2em;\n    color: #fff;\n    height: 2em;\n    line-height: 2em;\n    text-align: center;\n    width: 2em;\n    z-index: 20; }\n    .swal2-progresssteps .swal2-progresscircle:first-child {\n      margin-left: 0; }\n    .swal2-progresssteps .swal2-progresscircle:last-child {\n      margin-right: 0; }\n    .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep {\n      background: #3085d6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progresscircle {\n        background: #add8e6; }\n      .swal2-progresssteps .swal2-progresscircle.swal2-activeprogressstep ~ .swal2-progressline {\n        background: #add8e6; }\n  .swal2-progresssteps .swal2-progressline {\n    background: #3085d6;\n    height: .4em;\n    margin: 0 -1px;\n    z-index: 10; }\n\n[class^='swal2'] {\n  -webkit-tap-highlight-color: transparent; }\n\n@keyframes showSweetAlert {\n  0% {\n    transform: scale(0.7); }\n  45% {\n    transform: scale(1.05); }\n  80% {\n    transform: scale(0.95); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes hideSweetAlert {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0.5);\n    opacity: 0; } }\n\n.swal2-show {\n  animation: showSweetAlert .3s; }\n  .swal2-show.swal2-noanimation {\n    animation: none; }\n\n.swal2-hide {\n  animation: hideSweetAlert .15s forwards; }\n  .swal2-hide.swal2-noanimation {\n    animation: none; }\n\n@keyframes animate-success-tip {\n  0% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  54% {\n    width: 0;\n    left: 1px;\n    top: 19px; }\n  70% {\n    width: 50px;\n    left: -8px;\n    top: 37px; }\n  84% {\n    width: 17px;\n    left: 21px;\n    top: 48px; }\n  100% {\n    width: 25px;\n    left: 14px;\n    top: 45px; } }\n\n@keyframes animate-success-long {\n  0% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  65% {\n    width: 0;\n    right: 46px;\n    top: 54px; }\n  84% {\n    width: 55px;\n    right: 0;\n    top: 35px; }\n  100% {\n    width: 47px;\n    right: 8px;\n    top: 38px; } }\n\n@keyframes rotatePlaceholder {\n  0% {\n    transform: rotate(-45deg); }\n  5% {\n    transform: rotate(-45deg); }\n  12% {\n    transform: rotate(-405deg); }\n  100% {\n    transform: rotate(-405deg); } }\n\n.swal2-animate-success-line-tip {\n  animation: animate-success-tip .75s; }\n\n.swal2-animate-success-line-long {\n  animation: animate-success-long .75s; }\n\n.swal2-success.swal2-animate-success-icon .swal2-success-circular-line-right {\n  animation: rotatePlaceholder 4.25s ease-in; }\n\n@keyframes animate-error-icon {\n  0% {\n    transform: rotateX(100deg);\n    opacity: 0; }\n  100% {\n    transform: rotateX(0deg);\n    opacity: 1; } }\n\n.swal2-animate-error-icon {\n  animation: animate-error-icon .5s; }\n\n@keyframes animate-x-mark {\n  0% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  50% {\n    transform: scale(0.4);\n    margin-top: 26px;\n    opacity: 0; }\n  80% {\n    transform: scale(1.15);\n    margin-top: -6px; }\n  100% {\n    transform: scale(1);\n    margin-top: 0;\n    opacity: 1; } }\n\n.swal2-animate-x-mark {\n  animation: animate-x-mark .5s; }\n\n@keyframes rotate-loading {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n");
    var n = {
            title: "",
            titleText: "",
            text: "",
            html: "",
            type: null,
            customClass: "",
            target: "body",
            animation: !0,
            allowOutsideClick: !0,
            allowEscapeKey: !0,
            allowEnterKey: !0,
            showConfirmButton: !0,
            showCancelButton: !1,
            preConfirm: null,
            confirmButtonText: "OK",
            confirmButtonAriaLabel: "",
            confirmButtonColor: "#3085d6",
            confirmButtonClass: null,
            cancelButtonText: "Cancel",
            cancelButtonAriaLabel: "",
            cancelButtonColor: "#aaa",
            cancelButtonClass: null,
            buttonsStyling: !0,
            reverseButtons: !1,
            focusConfirm: !0,
            focusCancel: !1,
            showCloseButton: !1,
            closeButtonAriaLabel: "Close this dialog",
            showLoaderOnConfirm: !1,
            imageUrl: null,
            imageWidth: null,
            imageHeight: null,
            imageAlt: "",
            imageClass: null,
            timer: null,
            width: 500,
            padding: 20,
            background: "#fff",
            input: null,
            inputPlaceholder: "",
            inputValue: "",
            inputOptions: {},
            inputAutoTrim: !0,
            inputClass: null,
            inputAttributes: {},
            inputValidator: null,
            progressSteps: [],
            currentProgressStep: null,
            progressStepsDistance: "40px",
            onOpen: null,
            onClose: null,
            useRejections: !0
        },
        e = function(n) {
            var e = {};
            for (var t in n) e[n[t]] = "swal2-" + n[t];
            return e
        },
        t = e(["container", "shown", "iosfix", "modal", "overlay", "fade", "show", "hide", "noanimation", "close", "title", "content", "buttonswrapper", "confirm", "cancel", "icon", "image", "input", "file", "range", "select", "radio", "checkbox", "textarea", "inputerror", "validationerror", "progresssteps", "activeprogressstep", "progresscircle", "progressline", "loading", "styled"]),
        o = e(["success", "warning", "info", "question", "error"]),
        a = function(n, e) {
            (n = String(n).replace(/[^0-9a-f]/gi, "")).length < 6 && (n = n[0] + n[0] + n[1] + n[1] + n[2] + n[2]), e = e || 0;
            for (var t = "#", o = 0; o < 3; o++) {
                var a = parseInt(n.substr(2 * o, 2), 16);
                t += ("00" + (a = Math.round(Math.min(Math.max(0, a + a * e), 255)).toString(16))).substr(a.length)
            }
            return t
        },
        r = function(n) {
            var e = [];
            for (var t in n) - 1 === e.indexOf(n[t]) && e.push(n[t]);
            return e
        },
        i = function(n) {
            console.warn("SweetAlert2: " + n)
        },
        s = function(n) {
            console.error("SweetAlert2: " + n)
        },
        l = {
            previousWindowKeyDown: null,
            previousActiveElement: null,
            previousBodyPadding: null
        },
        c = function(n) {
            var e = d();
            e && e.parentNode.removeChild(e); {
                if ("undefined" != typeof document) {
                    var o = document.createElement("div");
                    o.className = t.container, o.innerHTML = u, ("string" == typeof n.target ? document.querySelector(n.target) : n.target).appendChild(o);
                    var a = p(),
                        r = L(a, t.input),
                        i = L(a, t.file),
                        l = a.querySelector("." + t.range + " input"),
                        c = a.querySelector("." + t.range + " output"),
                        f = L(a, t.select),
                        m = a.querySelector("." + t.checkbox + " input"),
                        w = L(a, t.textarea);
                    return r.oninput = function() {
                        X.resetValidationError()
                    }, i.onchange = function() {
                        X.resetValidationError()
                    }, l.oninput = function() {
                        X.resetValidationError(), c.value = l.value
                    }, l.onchange = function() {
                        X.resetValidationError(), l.previousSibling.value = l.value
                    }, f.onchange = function() {
                        X.resetValidationError()
                    }, m.onchange = function() {
                        X.resetValidationError()
                    }, w.oninput = function() {
                        X.resetValidationError()
                    }, a
                }
                s("SweetAlert2 requires document to initialize")
            }
        },
        u = ('\n <div role="dialog" aria-labelledby="' + t.title + '" aria-describedby="' + t.content + '" class="' + t.modal + '" tabindex="-1">\n   <ul class="' + t.progresssteps + '"></ul>\n   <div class="' + t.icon + " " + o.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + t.icon + " " + o.question + '">?</div>\n   <div class="' + t.icon + " " + o.warning + '">!</div>\n   <div class="' + t.icon + " " + o.info + '">i</div>\n   <div class="' + t.icon + " " + o.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + t.image + '" />\n   <h2 class="' + t.title + '" id="' + t.title + '"></h2>\n   <div id="' + t.content + '" class="' + t.content + '"></div>\n   <input class="' + t.input + '" />\n   <input type="file" class="' + t.file + '" />\n   <div class="' + t.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + t.select + '"></select>\n   <div class="' + t.radio + '"></div>\n   <label for="' + t.checkbox + '" class="' + t.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + t.textarea + '"></textarea>\n   <div class="' + t.validationerror + '" id="' + t.validationerror + '"></div>\n   <div class="' + t.buttonswrapper + '">\n     <button type="button" class="' + t.confirm + '">OK</button>\n     <button type="button" class="' + t.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + t.close + '">×</button>\n </div>\n').replace(/(^|\n)\s*/g, ""),
        d = function() {
            return document.body.querySelector("." + t.container)
        },
        p = function() {
            return d() ? d().querySelector("." + t.modal) : null
        },
        f = function() {
            return p().querySelectorAll("." + t.icon)
        },
        m = function(n) {
            return d() ? d().querySelector("." + n) : null
        },
        w = function() {
            return m(t.title)
        },
        g = function() {
            return m(t.content)
        },
        h = function() {
            return m(t.image)
        },
        b = function() {
            return m(t.progresssteps)
        },
        x = function() {
            return m(t.validationerror)
        },
        y = function() {
            return m(t.confirm)
        },
        v = function() {
            return m(t.cancel)
        },
        k = function() {
            return m(t.buttonswrapper)
        },
        C = function() {
            return m(t.close)
        },
        S = function() {
            var n = Array.from(p().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort(function(n, e) {
                    return n = parseInt(n.getAttribute("tabindex")), e = parseInt(e.getAttribute("tabindex")), n > e ? 1 : n < e ? -1 : 0
                }),
                e = Array.prototype.slice.call(p().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));
            return r(n.concat(e))
        },
        A = function(n, e) {
            return !!n.classList && n.classList.contains(e)
        },
        B = function(n) {
            if (n.focus(), "file" !== n.type) {
                var e = n.value;
                n.value = "", n.value = e
            }
        },
        E = function(n, e) {
            n && e && e.split(/\s+/).filter(Boolean).forEach(function(e) {
                n.classList.add(e)
            })
        },
        P = function(n, e) {
            n && e && e.split(/\s+/).filter(Boolean).forEach(function(e) {
                n.classList.remove(e)
            })
        },
        L = function(n, e) {
            for (var t = 0; t < n.childNodes.length; t++)
                if (A(n.childNodes[t], e)) return n.childNodes[t]
        },
        T = function(n, e) {
            e || (e = "block"), n.style.opacity = "", n.style.display = e
        },
        q = function(n) {
            n.style.opacity = "", n.style.display = "none"
        },
        V = function(n) {
            for (; n.firstChild;) n.removeChild(n.firstChild)
        },
        H = function(n) {
            return n.offsetWidth || n.offsetHeight || n.getClientRects().length
        },
        z = function(n, e) {
            n.style.removeProperty ? n.style.removeProperty(e) : n.style.removeAttribute(e)
        },
        M = function() {
            var n = document.createElement("div"),
                e = {
                    WebkitAnimation: "webkitAnimationEnd",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                };
            for (var t in e)
                if (e.hasOwnProperty(t) && void 0 !== n.style[t]) return e[t];
            return !1
        }(),
        O = function() {
            if (window.onkeydown = l.previousWindowKeyDown, l.previousActiveElement && l.previousActiveElement.focus) {
                var n = window.scrollX,
                    e = window.scrollY;
                l.previousActiveElement.focus(), n && e && window.scrollTo(n, e)
            }
        },
        N = function() {
            if ("ontouchstart" in window || navigator.msMaxTouchPoints) return 0;
            var n = document.createElement("div");
            n.style.width = "50px", n.style.height = "50px", n.style.overflow = "scroll", document.body.appendChild(n);
            var e = n.offsetWidth - n.clientWidth;
            return document.body.removeChild(n), e
        },
        j = function(n, e) {
            var t = void 0;
            return function() {
                clearTimeout(t), t = setTimeout(function() {
                    t = null, n()
                }, e)
            }
        },
        I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        },
        R = (function() {
            function n(n) {
                this.value = n
            }

            function e(e) {
                function t(a, r) {
                    try {
                        var i = e[a](r),
                            s = i.value;
                        s instanceof n ? Promise.resolve(s.value).then(function(n) {
                            t("next", n)
                        }, function(n) {
                            t("throw", n)
                        }) : o(i.done ? "return" : "normal", i.value)
                    } catch (n) {
                        o("throw", n)
                    }
                }

                function o(n, e) {
                    switch (n) {
                        case "return":
                            a.resolve({
                                value: e,
                                done: !0
                            });
                            break;
                        case "throw":
                            a.reject(e);
                            break;
                        default:
                            a.resolve({
                                value: e,
                                done: !1
                            })
                    }(a = a.next) ? t(a.key, a.arg): r = null
                }
                var a, r;
                this._invoke = function(n, e) {
                    return new Promise(function(o, i) {
                        var s = {
                            key: n,
                            arg: e,
                            resolve: o,
                            reject: i,
                            next: null
                        };
                        r ? r = r.next = s : (a = r = s, t(n, e))
                    })
                }, "function" != typeof e.return && (this.return = void 0)
            }
            "function" == typeof Symbol && Symbol.asyncIterator && (e.prototype[Symbol.asyncIterator] = function() {
                return this
            }), e.prototype.next = function(n) {
                return this._invoke("next", n)
            }, e.prototype.throw = function(n) {
                return this._invoke("throw", n)
            }, e.prototype.return = function(n) {
                return this._invoke("return", n)
            }
        }(), Object.assign || function(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = arguments[e];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o])
            }
            return n
        }),
        D = R({}, n),
        U = [],
        W = void 0;
    "undefined" == typeof Promise && s("This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)");
    var K = function(n) {
            ("string" == typeof n.target && !document.querySelector(n.target) || "string" != typeof n.target && !n.target.appendChild) && (i('Target parameter is not valid, defaulting to "body"'), n.target = "body");
            var e = void 0,
                a = p(),
                r = "string" == typeof n.target ? document.querySelector(n.target) : n.target;
            e = a && r && a.parentNode !== r.parentNode ? c(n) : a || c(n);
            for (var l in n) X.isValidParameter(l) || i('Unknown parameter "' + l + '"');
            e.style.width = "number" == typeof n.width ? n.width + "px" : n.width, e.style.padding = n.padding + "px", e.style.background = n.background;
            for (var u = e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix"), d = 0; d < u.length; d++) u[d].style.background = n.background;
            var m = w(),
                x = g(),
                S = k(),
                A = y(),
                B = v(),
                L = C();
            if (n.titleText ? m.innerText = n.titleText : m.innerHTML = n.title.split("\n").join("<br />"), n.text || n.html) {
                if ("object" === I(n.html))
                    if (x.innerHTML = "", 0 in n.html)
                        for (var H = 0; H in n.html; H++) x.appendChild(n.html[H].cloneNode(!0));
                    else x.appendChild(n.html.cloneNode(!0));
                else n.html ? x.innerHTML = n.html : n.text && (x.textContent = n.text);
                T(x)
            } else q(x);
            n.showCloseButton ? (L.setAttribute("aria-label", n.closeButtonAriaLabel), T(L)) : q(L), e.className = t.modal, n.customClass && E(e, n.customClass);
            var M = b(),
                O = parseInt(null === n.currentProgressStep ? X.getQueueStep() : n.currentProgressStep, 10);
            n.progressSteps.length ? (T(M), V(M), O >= n.progressSteps.length && i("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"), n.progressSteps.forEach(function(e, o) {
                var a = document.createElement("li");
                if (E(a, t.progresscircle), a.innerHTML = e, o === O && E(a, t.activeprogressstep), M.appendChild(a), o !== n.progressSteps.length - 1) {
                    var r = document.createElement("li");
                    E(r, t.progressline), r.style.width = n.progressStepsDistance, M.appendChild(r)
                }
            })) : q(M);
            for (var N = f(), j = 0; j < N.length; j++) q(N[j]);
            if (n.type) {
                var R = !1;
                for (var D in o)
                    if (n.type === D) {
                        R = !0;
                        break
                    }
                if (!R) return s("Unknown alert type: " + n.type), !1;
                var U = e.querySelector("." + t.icon + "." + o[n.type]);
                if (T(U), n.animation) switch (n.type) {
                    case "success":
                        E(U, "swal2-animate-success-icon"), E(U.querySelector(".swal2-success-line-tip"), "swal2-animate-success-line-tip"), E(U.querySelector(".swal2-success-line-long"), "swal2-animate-success-line-long");
                        break;
                    case "error":
                        E(U, "swal2-animate-error-icon"), E(U.querySelector(".swal2-x-mark"), "swal2-animate-x-mark")
                }
            }
            var W = h();
            n.imageUrl ? (W.setAttribute("src", n.imageUrl), W.setAttribute("alt", n.imageAlt), T(W), n.imageWidth ? W.setAttribute("width", n.imageWidth) : W.removeAttribute("width"), n.imageHeight ? W.setAttribute("height", n.imageHeight) : W.removeAttribute("height"), W.className = t.image, n.imageClass && E(W, n.imageClass)) : q(W), n.showCancelButton ? B.style.display = "inline-block" : q(B), n.showConfirmButton ? z(A, "display") : q(A), n.showConfirmButton || n.showCancelButton ? T(S) : q(S), A.innerHTML = n.confirmButtonText, B.innerHTML = n.cancelButtonText, A.setAttribute("aria-label", n.confirmButtonAriaLabel), B.setAttribute("aria-label", n.cancelButtonAriaLabel), n.buttonsStyling && (A.style.backgroundColor = n.confirmButtonColor, B.style.backgroundColor = n.cancelButtonColor), A.className = t.confirm, E(A, n.confirmButtonClass), B.className = t.cancel, E(B, n.cancelButtonClass), n.buttonsStyling ? (E(A, t.styled), E(B, t.styled)) : (P(A, t.styled), P(B, t.styled), A.style.backgroundColor = A.style.borderLeftColor = A.style.borderRightColor = "", B.style.backgroundColor = B.style.borderLeftColor = B.style.borderRightColor = ""), !0 === n.animation ? P(e, t.noanimation) : E(e, t.noanimation), n.showLoaderOnConfirm && !n.preConfirm && i("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://limonte.github.io/sweetalert2/#ajax-request")
        },
        $ = function(n, e) {
            var o = d(),
                a = p();
            n ? (E(a, t.show), E(o, t.fade), P(a, t.hide)) : P(a, t.fade), T(a), o.style.overflowY = "hidden", M && !A(a, t.noanimation) ? a.addEventListener(M, function n() {
                a.removeEventListener(M, n), o.style.overflowY = "auto"
            }) : o.style.overflowY = "auto", E(document.documentElement, t.shown), E(document.body, t.shown), E(o, t.shown), _(), Q(), l.previousActiveElement = document.activeElement, null !== e && "function" == typeof e && setTimeout(function() {
                e(a)
            })
        },
        _ = function() {
            null === l.previousBodyPadding && document.body.scrollHeight > window.innerHeight && (l.previousBodyPadding = document.body.style.paddingRight, document.body.style.paddingRight = N() + "px")
        },
        Z = function() {
            null !== l.previousBodyPadding && (document.body.style.paddingRight = l.previousBodyPadding, l.previousBodyPadding = null)
        },
        Q = function() {
            if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream && !A(document.body, t.iosfix)) {
                var n = document.body.scrollTop;
                document.body.style.top = -1 * n + "px", E(document.body, t.iosfix)
            }
        },
        Y = function() {
            if (A(document.body, t.iosfix)) {
                var n = parseInt(document.body.style.top, 10);
                P(document.body, t.iosfix), document.body.style.top = "", document.body.scrollTop = -1 * n
            }
        },
        X = function n() {
            for (var e = arguments.length, o = Array(e), r = 0; r < e; r++) o[r] = arguments[r];
            if (void 0 === o[0]) return s("SweetAlert2 expects at least 1 attribute!"), !1;
            var i = R({}, D);
            switch (I(o[0])) {
                case "string":
                    i.title = o[0], i.html = o[1], i.type = o[2];
                    break;
                case "object":
                    R(i, o[0]), i.extraParams = o[0].extraParams, "email" === i.input && null === i.inputValidator && (i.inputValidator = function(n) {
                        return new Promise(function(e, t) {
                            /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(n) ? e() : t("Correo electronico invalido")
                        })
                    }), "url" === i.input && null === i.inputValidator && (i.inputValidator = function(n) {
                        return new Promise(function(e, t) {
                            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/.test(n) ? e() : t("Invalid URL")
                        })
                    });
                    break;
                default:
                    return s('Unexpected type of argument! Expected "string" or "object", got ' + I(o[0])), !1
            }
            K(i);
            var c = d(),
                u = p();
            return new Promise(function(e, o) {
                i.timer && (u.timeout = setTimeout(function() {
                    n.closeModal(i.onClose), i.useRejections ? o("timer") : e({
                        dismiss: "timer"
                    })
                }, i.timer));
                var r = function(n) {
                        if (!(n = n || i.input)) return null;
                        switch (n) {
                            case "select":
                            case "textarea":
                            case "file":
                                return L(u, t[n]);
                            case "checkbox":
                                return u.querySelector("." + t.checkbox + " input");
                            case "radio":
                                return u.querySelector("." + t.radio + " input:checked") || u.querySelector("." + t.radio + " input:first-child");
                            case "range":
                                return u.querySelector("." + t.range + " input");
                            default:
                                return L(u, t.input)
                        }
                    },
                    f = function() {
                        var n = r();
                        if (!n) return null;
                        switch (i.input) {
                            case "checkbox":
                                return n.checked ? 1 : 0;
                            case "radio":
                                return n.checked ? n.value : null;
                            case "file":
                                return n.files.length ? n.files[0] : null;
                            default:
                                return i.inputAutoTrim ? n.value.trim() : n.value
                        }
                    };
                i.input && setTimeout(function() {
                    var n = r();
                    n && B(n)
                }, 0);
                for (var m = function(t) {
                    i.showLoaderOnConfirm && n.showLoading(), i.preConfirm ? i.preConfirm(t, i.extraParams).then(function(o) {
                        n.closeModal(i.onClose), e(o || t)
                    }, function(e) {
                        n.hideLoading(), e && n.showValidationError(e)
                    }) : (n.closeModal(i.onClose), e(i.useRejections ? t : {
                        value: t
                    }))
                }, A = function(t) {
                    var r = t || window.event,
                        s = r.target || r.srcElement,
                        l = y(),
                        c = v(),
                        u = l && (l === s || l.contains(s)),
                        d = c && (c === s || c.contains(s));
                    switch (r.type) {
                        case "mouseover":
                        case "mouseup":
                            i.buttonsStyling && (u ? l.style.backgroundColor = a(i.confirmButtonColor, -.1) : d && (c.style.backgroundColor = a(i.cancelButtonColor, -.1)));
                            break;
                        case "mouseout":
                            i.buttonsStyling && (u ? l.style.backgroundColor = i.confirmButtonColor : d && (c.style.backgroundColor = i.cancelButtonColor));
                            break;
                        case "mousedown":
                            i.buttonsStyling && (u ? l.style.backgroundColor = a(i.confirmButtonColor, -.2) : d && (c.style.backgroundColor = a(i.cancelButtonColor, -.2)));
                            break;
                        case "click":
                            if (u && n.isVisible())
                                if (n.disableButtons(), i.input) {
                                    var p = f();
                                    i.inputValidator ? (n.disableInput(), i.inputValidator(p, i.extraParams).then(function() {
                                        n.enableButtons(), n.enableInput(), m(p)
                                    }, function(e) {
                                        n.enableButtons(), n.enableInput(), e && n.showValidationError(e)
                                    })) : m(p)
                                } else m(!0);
                            else d && n.isVisible() && (n.disableButtons(), n.closeModal(i.onClose), i.useRejections ? o("cancel") : e({
                                dismiss: "cancel"
                            }))
                    }
                }, V = u.querySelectorAll("button"), z = 0; z < V.length; z++) V[z].onclick = A, V[z].onmouseover = A, V[z].onmouseout = A, V[z].onmousedown = A;
                C().onclick = function() {
                    n.closeModal(i.onClose), i.useRejections ? o("close") : e({
                        dismiss: "close"
                    })
                }, c.onclick = function(t) {
                    t.target === c && i.allowOutsideClick && (n.closeModal(i.onClose), i.useRejections ? o("overlay") : e({
                        dismiss: "overlay"
                    }))
                };
                var M = k(),
                    O = y(),
                    N = v();
                i.reverseButtons ? O.parentNode.insertBefore(N, O) : O.parentNode.insertBefore(O, N);
                var R = function(n, e) {
                        for (var t = S(i.focusCancel), o = 0; o < t.length; o++) {
                            (n += e) === t.length ? n = 0 : -1 === n && (n = t.length - 1);
                            var a = t[n];
                            if (H(a)) return a.focus()
                        }
                    },
                    D = function(t) {
                        var a = t || window.event;
                        if ("Enter" === a.key) a.target === r() && (n.clickConfirm(), a.preventDefault());
                        else if ("Tab" === a.key) {
                            for (var s = a.target || a.srcElement, l = S(i.focusCancel), c = -1, u = 0; u < l.length; u++)
                                if (s === l[u]) {
                                    c = u;
                                    break
                                }
                            a.shiftKey ? R(c, -1) : R(c, 1), a.stopPropagation(), a.preventDefault()
                        } else ["ArrowLeft", "ArrowRight", "ArrowUp", "Arrowdown"].includes(a.key) ? document.activeElement === O && H(N) ? N.focus() : document.activeElement === N && H(O) && O.focus() : "Escape" === a.key && !0 === i.allowEscapeKey && (n.closeModal(i.onClose), i.useRejections ? o("esc") : e({
                            dismiss: "esc"
                        }))
                    };
                window.onkeydown && window.onkeydown.toString() === D.toString() || (l.previousWindowKeyDown = window.onkeydown, window.onkeydown = D), i.buttonsStyling && (O.style.borderLeftColor = i.confirmButtonColor, O.style.borderRightColor = i.confirmButtonColor), n.hideLoading = n.disableLoading = function() {
                    i.showConfirmButton || (q(O), i.showCancelButton || q(k())), P(M, t.loading), P(u, t.loading), u.removeAttribute("aria-busy"), O.disabled = !1, N.disabled = !1
                }, n.getTitle = function() {
                    return w()
                }, n.getContent = function() {
                    return g()
                }, n.getInput = function() {
                    return r()
                }, n.getImage = function() {
                    return h()
                }, n.getButtonsWrapper = function() {
                    return k()
                }, n.getConfirmButton = function() {
                    return y()
                }, n.getCancelButton = function() {
                    return v()
                }, n.enableButtons = function() {
                    O.disabled = !1, N.disabled = !1
                }, n.disableButtons = function() {
                    O.disabled = !0, N.disabled = !0
                }, n.enableConfirmButton = function() {
                    O.disabled = !1
                }, n.disableConfirmButton = function() {
                    O.disabled = !0
                }, n.enableInput = function() {
                    var n = r();
                    if (!n) return !1;
                    if ("radio" === n.type)
                        for (var e = n.parentNode.parentNode.querySelectorAll("input"), t = 0; t < e.length; t++) e[t].disabled = !1;
                    else n.disabled = !1
                }, n.disableInput = function() {
                    var n = r();
                    if (!n) return !1;
                    if (n && "radio" === n.type)
                        for (var e = n.parentNode.parentNode.querySelectorAll("input"), t = 0; t < e.length; t++) e[t].disabled = !0;
                    else n.disabled = !0
                }, n.recalculateHeight = j(function() {
                    var n = p();
                    if (n) {
                        var e = n.style.display;
                        n.style.minHeight = "", T(n), n.style.minHeight = n.scrollHeight + 1 + "px", n.style.display = e
                    }
                }, 50), n.showValidationError = function(n) {
                    var e = x();
                    e.innerHTML = n, T(e);
                    var o = r();
                    o && (o.setAttribute("aria-invalid", !0), o.setAttribute("aria-describedBy", t.validationerror), B(o), E(o, t.inputerror))
                }, n.resetValidationError = function() {
                    var e = x();
                    q(e), n.recalculateHeight();
                    var o = r();
                    o && (o.removeAttribute("aria-invalid"), o.removeAttribute("aria-describedBy"), P(o, t.inputerror))
                }, n.getProgressSteps = function() {
                    return i.progressSteps
                }, n.setProgressSteps = function(n) {
                    i.progressSteps = n, K(i)
                }, n.showProgressSteps = function() {
                    T(b())
                }, n.hideProgressSteps = function() {
                    q(b())
                }, n.enableButtons(), n.hideLoading(), n.resetValidationError();
                for (var U = ["input", "file", "range", "select", "radio", "checkbox", "textarea"], _ = void 0, Z = 0; Z < U.length; Z++) {
                    var Q = t[U[Z]],
                        Y = L(u, Q);
                    if (_ = r(U[Z])) {
                        for (var X in _.attributes)
                            if (_.attributes.hasOwnProperty(X)) {
                                var J = _.attributes[X].name;
                                "type" !== J && "value" !== J && _.removeAttribute(J)
                            }
                        for (var F in i.inputAttributes) _.setAttribute(F, i.inputAttributes[F])
                    }
                    Y.className = Q, i.inputClass && E(Y, i.inputClass), q(Y)
                }
                var G = void 0;
                switch (i.input) {
                    case "text":
                    case "email":
                    case "password":
                    case "number":
                    case "tel":
                    case "url":
                        (_ = L(u, t.input)).value = i.inputValue, _.placeholder = i.inputPlaceholder, _.type = i.input, T(_);
                        break;
                    case "file":
                        (_ = L(u, t.file)).placeholder = i.inputPlaceholder, _.type = i.input, T(_);
                        break;
                    case "range":
                        var nn = L(u, t.range),
                            en = nn.querySelector("input"),
                            tn = nn.querySelector("output");
                        en.value = i.inputValue, en.type = i.input, tn.value = i.inputValue, T(nn);
                        break;
                    case "select":
                        var on = L(u, t.select);
                        if (on.innerHTML = "", i.inputPlaceholder) {
                            var an = document.createElement("option");
                            an.innerHTML = i.inputPlaceholder, an.value = "", an.disabled = !0, an.selected = !0, on.appendChild(an)
                        }
                        G = function(n) {
                            for (var e in n) {
                                var t = document.createElement("option");
                                t.value = e, t.innerHTML = n[e], i.inputValue === e && (t.selected = !0), on.appendChild(t)
                            }
                            T(on), on.focus()
                        };
                        break;
                    case "radio":
                        var rn = L(u, t.radio);
                        rn.innerHTML = "", G = function(n) {
                            for (var e in n) {
                                var o = document.createElement("input"),
                                    a = document.createElement("label"),
                                    r = document.createElement("span");
                                o.type = "radio", o.name = t.radio, o.value = e, i.inputValue === e && (o.checked = !0), r.innerHTML = n[e], a.appendChild(o), a.appendChild(r), a.for = o.id, rn.appendChild(a)
                            }
                            T(rn);
                            var s = rn.querySelectorAll("input");
                            s.length && s[0].focus()
                        };
                        break;
                    case "checkbox":
                        var sn = L(u, t.checkbox),
                            ln = r("checkbox");
                        ln.type = "checkbox", ln.value = 1, ln.id = t.checkbox, ln.checked = Boolean(i.inputValue);
                        var cn = sn.getElementsByTagName("span");
                        cn.length && sn.removeChild(cn[0]), (cn = document.createElement("span")).innerHTML = i.inputPlaceholder, sn.appendChild(cn), T(sn);
                        break;
                    case "textarea":
                        var un = L(u, t.textarea);
                        un.value = i.inputValue, un.placeholder = i.inputPlaceholder, T(un);
                        break;
                    case null:
                        break;
                    default:
                        s('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + i.input + '"')
                }
                "select" !== i.input && "radio" !== i.input || (i.inputOptions instanceof Promise ? (n.showLoading(), i.inputOptions.then(function(e) {
                    n.hideLoading(), G(e)
                })) : "object" === I(i.inputOptions) ? G(i.inputOptions) : s("Unexpected type of inputOptions! Expected object or Promise, got " + I(i.inputOptions))), $(i.animation, i.onOpen), i.allowEnterKey ? i.focusCancel && H(N) ? N.focus() : i.focusConfirm && H(O) ? O.focus() : R(-1, 1) : document.activeElement && document.activeElement.blur(), d().scrollTop = 0, "undefined" == typeof MutationObserver || W || (W = new MutationObserver(n.recalculateHeight)).observe(u, {
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })
            })
        };
    return X.isVisible = function() {
        return !!p()
    }, X.queue = function(n) {
        U = n;
        var e = function() {
                U = [], document.body.removeAttribute("data-swal2-queue-step")
            },
            t = [];
        return new Promise(function(n, o) {
            ! function a(r, i) {
                r < U.length ? (document.body.setAttribute("data-swal2-queue-step", r), X(U[r]).then(function(n) {
                    t.push(n), a(r + 1, i)
                }, function(n) {
                    e(), o(n)
                })) : (e(), n(t))
            }(0)
        })
    }, X.getQueueStep = function() {
        return document.body.getAttribute("data-swal2-queue-step")
    }, X.insertQueueStep = function(n, e) {
        return e && e < U.length ? U.splice(e, 0, n) : U.push(n)
    }, X.deleteQueueStep = function(n) {
        void 0 !== U[n] && U.splice(n, 1)
    }, X.close = X.closeModal = function(n) {
        var e = d(),
            o = p();
        if (o) {
            P(o, t.show), E(o, t.hide), clearTimeout(o.timeout), O();
            var a = function() {
                e.parentNode && e.parentNode.removeChild(e), P(document.documentElement, t.shown), P(document.body, t.shown), Z(), Y()
            };
            M && !A(o, t.noanimation) ? o.addEventListener(M, function n() {
                o.removeEventListener(M, n), A(o, t.hide) && a()
            }) : a(), null !== n && "function" == typeof n && setTimeout(function() {
                n(o)
            })
        }
    }, X.clickConfirm = function() {
        return y().click()
    }, X.clickCancel = function() {
        return v().click()
    }, X.showLoading = X.enableLoading = function() {
        var n = p();
        n || X(""), n = p();
        var e = k(),
            o = y(),
            a = v();
        T(e), T(o, "inline-block"), E(e, t.loading), E(n, t.loading), o.disabled = !0, a.disabled = !0, n.setAttribute("aria-busy", !0), n.focus()
    }, X.isValidParameter = function(e) {
        return n.hasOwnProperty(e) || "extraParams" === e
    }, X.setDefaults = function(n) {
        if (!n || "object" !== (void 0 === n ? "undefined" : I(n))) return s("the argument for setDefaults() is required and has to be a object");
        for (var e in n) X.isValidParameter(e) || (i('Unknown parameter "' + e + '"'), delete n[e]);
        R(D, n)
    }, X.resetDefaults = function() {
        D = R({}, n)
    }, X.noop = function() {}, X.version = "6.10.2", X.default = X, X
}), window.Sweetalert2 && (window.sweetAlert = window.swal = window.Sweetalert2);