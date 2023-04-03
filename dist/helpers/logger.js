"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentDate = void 0;
var now = new Date();
var year = now.getFullYear();
var month = String(now.getMonth() + 1).padStart(2, '0');
var day = String(now.getDate()).padStart(2, '0');
var hours = String(now.getHours()).padStart(2, '0');
var minutes = String(now.getMinutes()).padStart(2, '0');
var seconds = String(now.getSeconds()).padStart(2, '0');
var formattedDate = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
function currentDate() {
    return formattedDate;
}
exports.currentDate = currentDate;
