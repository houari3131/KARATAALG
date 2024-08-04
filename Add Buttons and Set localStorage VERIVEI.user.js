// ==UserScript==
// @name         BLS CAPTCHA solver nnnnnnnnnnnn
// @namespace    https://gakeys.eu.org/
// @version      2024-06-11
// @description  Free BLS CAPTCHA UNLIMITED By GAKEYS
// @author       GAKEYS
// @match        https://www.blsspainmorocco.net/*
// @match        https://algeria.blsspainglobal.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blsspainglobal.com
// @grant        none
// ==/UserScript==

//https://algeria.blsspainglobal.com/DZA/Captcha/SubmitCaptcha

(function() {
    'use strict';

    var trueCaptcha = {
        key:  "Ya8ItgnXH2m0sEuU3pNS",


        userId:  "benahrref.oussama@gmail.com"
    };

    function dcodeImg(image_data, code, max) {
        var params = {
            'userid': trueCaptcha.userId,
            'apikey': trueCaptcha.key,
            'data': image_data.attr("src")
        };
        var opts = {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        fetch("https://api.apitruecaptcha.org/one/gettext", opts)
            .then((response) => response.json())
            .then((data) => {
                if (Number(data.result) == Number(code)) {
                    console.log(data.result + "===>" + code);
                    image_data.click();
                }
                if (max == 9) {
                    if (code.length > 0) {
                        setTimeout(function() {
                           // document.querySelector("#btnVerify").click();
                            document.querySelector("#submit").click();

                        }, 1000);
                    }
                }
            });
    }

    function boxNumberShow() {
        let index = 0;
        let boxShow = 0;
        document.querySelectorAll(".box-label").forEach(function(box) {
            if ($(box).css("display") === "block") {
                if ($(box).css("zIndex") > index) {
                    index = $(box).css("zIndex");
                }
            }
        });
        document.querySelectorAll(".box-label").forEach(function(box) {
            if ($(box).css("display") === "block") {
                if ($(box).css("zIndex") == index) {
                    boxShow = $(box).html().split("Please select all boxes with number ")[1];
                }
            }
        });
        return boxShow;
    }

    function imgShow() {
        let zIndex1 = 0, zIndex2 = 0, zIndex3 = 0, zIndex4 = 0, zIndex5 = 0, zIndex6 = 0, zIndex7 = 0, zIndex8 = 0, zIndex9 = 0;
        let cas1 = null, cas2 = null, cas3 = null, cas4 = null, cas5 = null, cas6 = null, cas7 = null, cas8 = null, cas9 = null;

        document.querySelectorAll(".captcha-img").forEach(function(dev) {
            if ($(dev.parentElement).css("display") === "block") {
                if ($(dev.parentElement).css("left") === "0px" && $(dev.parentElement).css("top") === "0px" && $(dev.parentElement).css("zIndex") > zIndex1) {
                    zIndex1 = $(dev.parentElement).css("zIndex");
                    cas1 = $(dev);
                } else if ($(dev.parentElement).css("left") === "0px" && $(dev.parentElement).css("top") === "110px" && $(dev.parentElement).css("zIndex") > zIndex2) {
                    zIndex2 = $(dev.parentElement).css("zIndex");
                    cas2 = $(dev);
                } else if ($(dev.parentElement).css("left") === "0px" && $(dev.parentElement).css("top") === "220px" && $(dev.parentElement).css("zIndex") > zIndex3) {
                    zIndex3 = $(dev.parentElement).css("zIndex");
                    cas3 = $(dev);
                } else if ($(dev.parentElement).css("left") === "110px" && $(dev.parentElement).css("top") === "0px" && $(dev.parentElement).css("zIndex") > zIndex4) {
                    zIndex4 = $(dev.parentElement).css("zIndex");
                    cas4 = $(dev);
                } else if ($(dev.parentElement).css("left") === "110px" && $(dev.parentElement).css("top") === "110px" && $(dev.parentElement).css("zIndex") > zIndex5) {
                    zIndex5 = $(dev.parentElement).css("zIndex");
                    cas5 = $(dev);
                } else if ($(dev.parentElement).css("left") === "110px" && $(dev.parentElement).css("top") === "220px" && $(dev.parentElement).css("zIndex") > zIndex6) {
                    zIndex6 = $(dev.parentElement).css("zIndex");
                    cas6 = $(dev);
                } else if ($(dev.parentElement).css("left") === "220px" && $(dev.parentElement).css("top") === "0px" && $(dev.parentElement).css("zIndex") > zIndex7) {
                    zIndex7 = $(dev.parentElement).css("zIndex");
                    cas7 = $(dev);
                } else if ($(dev.parentElement).css("left") === "220px" && $(dev.parentElement).css("top") === "110px" && $(dev.parentElement).css("zIndex") > zIndex8) {
                    zIndex8 = $(dev.parentElement).css("zIndex");
                    cas8 = $(dev);
                } else if ($(dev.parentElement).css("left") === "220px" && $(dev.parentElement).css("top") === "220px" && $(dev.parentElement).css("zIndex") > zIndex9) {
                    zIndex9 = $(dev.parentElement).css("zIndex");
                    cas9 = $(dev);
                }
            }
        });

        return [cas1, cas2, cas3, cas4, cas5, cas6, cas7, cas8, cas9];
    }

    $(document).ready(function() {
        var indexCap = 0;
        var codeCaptcha = boxNumberShow();
        imgShow().forEach(function(dev) {
            indexCap = indexCap + 1;
            dcodeImg($(dev), codeCaptcha, indexCap);
        });

          setTimeout(() => {
 //   doment.querySelector("#submit").click();

 }, 1100);
    });

})();
