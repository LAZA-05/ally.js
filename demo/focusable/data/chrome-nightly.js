define(function defineDemoFocusableChromeCanary(require) {
  'use strict';

  // The contents of this file have been collected by running focusable/index.html

  return {
    "platform": {
      "description": "Chrome 40.0.2200.2 on OS X 10.8.5",
      "layout": "Blink",
      "manufacturer": null,
      "name": "Chrome",
      "prerelease": null,
      "product": null,
      "ua": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2200.2 Safari/537.36",
      "version": "40.0.2200.2",
      "os": {
        "architecture": 32,
        "family": "OS X",
        "version": "10.8.5"
      }
    },
    "focusable": [
      "BODY",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "input[type=text]",
      "via(label[for=\"label-target\"]): input[type=text]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "iframe",
      "audio[controls]",
      "embed",
      "object",
      "object[usemap]",
      "keygen",
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "[contenteditable]",
      "[tabindex=-2]",
      "[tabindex=-1]",
      "[tabindex=0]",
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "fieldset[tabindex=0][disabled]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tr td a",
      "table tr{collapse} td a{visible}"
    ],
    "tabOrder": [
      "[tabindex=1]",
      "[tabindex=+2]",
      "[tabindex= +2]",
      "[tabindex=3 ]",
      "input[type=text]",
      "input[type=password]",
      "input[type=checkbox]",
      "input[type=radio]",
      "input[type=submit]",
      "input[type=radio]",
      "select",
      "textarea",
      "button[type=button]",
      "a[href]",
      "a[href=\"\"]",
      "area[href].upper",
      "area[href].lower",
      "a:has([ismap])",
      "audio[controls]",
      "keygen",
      "svg",
      "svg a[xlink|href]",
      "svg a[xlink|href] text",
      "[contenteditable]",
      "[tabindex=0]",
      "fieldset[tabindex=0][disabled]",
      "{hidden} > a{visible}",
      "{hidden} > {visible} > a",
      "table tr td a",
      "table tr{collapse} td a{visible}"
    ],
    "a11y": {
      "focusable": [
        "BODY",
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "a:has([ismap])",
        "iframe",
        "audio[controls]",
        "embed",
        "object",
        "object[usemap]",
        "keygen",
        "[contenteditable]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "{hidden} > a{visible}",
        "{hidden} > {visible} > a",
        "table tr td a",
        "table tr{collapse} td a{visible}"
      ],
      "tabOrder": null
    },
    "jquery": {
      "focusable": [
        "input[type=text]",
        "input[type=password]",
        "input[type=checkbox]",
        "input[type=radio]",
        "input[type=submit]",
        "input[type=radio]",
        "select",
        "textarea",
        "button[type=button]",
        "a[href]",
        "a[href=\"\"]",
        "area[href].upper",
        "area[href].lower",
        "a:has([ismap])",
        "object",
        "object[usemap]",
        "[tabindex=-2]",
        "[tabindex=-1]",
        "[tabindex=0]",
        "[tabindex=1]",
        "[tabindex=+2]",
        "[tabindex= +2]",
        "[tabindex=\"\"]",
        "[tabindex=3 ]",
        "fieldset[tabindex=0][disabled]",
        "table tr td a",
        "table tr{collapse} td a",
        "table tr{collapse} td a{visible}"
      ],
      "tabOrder": null
    }
  };
});