"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "(api)/./lib/apiUtils.js":
/*!*************************!*\
  !*** ./lib/apiUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiError\": () => (/* binding */ ApiError),\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher)\n/* harmony export */ });\nclass ApiError extends Error {\n    constructor(url, status){\n        super(`'${url}' returned ${status}`);\n        if (Error.captureStackTrace) {\n            Error.captureStackTrace(this, ApiError);\n        }\n        this.name = \"ApiError\";\n        this.status = status;\n    }\n}\nasync function fetcher(url, options) {\n    const resp = await fetch(url, options);\n    if (!resp.ok) throw new ApiError(url, resp.status);\n    return await resp.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXBpVXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxRQUFRLFNBQVNDLEtBQUs7SUFDakNDLFlBQVlDLEdBQUcsRUFBRUMsTUFBTSxDQUFFO1FBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUQsR0FBRyxDQUFDLFdBQVcsRUFBRUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUlILEtBQUssQ0FBQ0ksaUJBQWlCLEVBQUU7WUFDM0JKLEtBQUssQ0FBQ0ksaUJBQWlCLENBQUMsSUFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBSSxDQUFDTSxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0YsTUFBTSxHQUFHQSxNQUFNLENBQUM7SUFDdkI7Q0FDRDtBQUVNLGVBQWVHLE9BQU8sQ0FBQ0osR0FBRyxFQUFFSyxPQUFPLEVBQUU7SUFDMUMsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQ1AsR0FBRyxFQUFFSyxPQUFPLENBQUM7SUFDdEMsSUFBSSxDQUFDQyxJQUFJLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlYLFFBQVEsQ0FBQ0csR0FBRyxFQUFFTSxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELE9BQU8sTUFBTUssSUFBSSxDQUFDRyxJQUFJLEVBQUUsQ0FBQztBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zaG9wLy4vbGliL2FwaVV0aWxzLmpzPzgyMTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwaUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih1cmwsIHN0YXR1cykge1xuICAgIHN1cGVyKGAnJHt1cmx9JyByZXR1cm5lZCAke3N0YXR1c31gKTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEFwaUVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5uYW1lID0gXCJBcGlFcnJvclwiO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCwgb3B0aW9ucykge1xuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgaWYgKCFyZXNwLm9rKSB0aHJvdyBuZXcgQXBpRXJyb3IodXJsLCByZXNwLnN0YXR1cyk7XG4gIHJldHVybiBhd2FpdCByZXNwLmpzb24oKTtcbn1cbiJdLCJuYW1lcyI6WyJBcGlFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJ1cmwiLCJzdGF0dXMiLCJjYXB0dXJlU3RhY2tUcmFjZSIsIm5hbWUiLCJmZXRjaGVyIiwib3B0aW9ucyIsInJlc3AiLCJmZXRjaCIsIm9rIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/apiUtils.js\n");

/***/ }),

/***/ "(api)/./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_apiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/apiUtils */ \"(api)/./lib/apiUtils.js\");\n\nconst { CMS_URL  } = process.env;\nasync function handleUser(req, res) {\n    const { jwt  } = req.cookies;\n    if (!jwt) {\n        res.status(401).end();\n        return;\n    }\n    try {\n        const user = await (0,_lib_apiUtils__WEBPACK_IMPORTED_MODULE_0__.fetcher)(`${CMS_URL}/users/me`, {\n            headers: {\n                Authorization: `Bearer ${jwt}`\n            }\n        });\n        res.status(200).json({\n            id: user.id,\n            name: user.username\n        });\n    } catch (err) {\n        res.status(401).end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleUser);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE2QztBQUU3QyxNQUFNLEVBQUVDLE9BQU8sR0FBRSxHQUFHQyxPQUFPLENBQUNDLEdBQUc7QUFFL0IsZUFBZUMsVUFBVSxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNsQyxNQUFNLEVBQUVDLEdBQUcsR0FBRSxHQUFHRixHQUFHLENBQUNHLE9BQU87SUFDM0IsSUFBSSxDQUFDRCxHQUFHLEVBQUU7UUFDUkQsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLE9BQU87SUFDVCxDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1DLElBQUksR0FBRyxNQUFNWCxzREFBTyxDQUFDLENBQUMsRUFBRUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hEVyxPQUFPLEVBQUU7Z0JBQUVDLGFBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRU4sR0FBRyxDQUFDLENBQUM7YUFBRTtTQUM1QyxDQUFDO1FBQ0ZELEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDSyxJQUFJLENBQUM7WUFBRUMsRUFBRSxFQUFFSixJQUFJLENBQUNJLEVBQUU7WUFBRUMsSUFBSSxFQUFFTCxJQUFJLENBQUNNLFFBQVE7U0FBRSxDQUFDLENBQUM7SUFDN0QsRUFBRSxPQUFPQyxHQUFHLEVBQUU7UUFDWlosR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVOLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtc2hvcC8uL3BhZ2VzL2FwaS91c2VyLmpzPzhhNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuLi8uLi9saWIvYXBpVXRpbHNcIjtcblxuY29uc3QgeyBDTVNfVVJMIH0gPSBwcm9jZXNzLmVudjtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlVXNlcihyZXEsIHJlcykge1xuICBjb25zdCB7IGp3dCB9ID0gcmVxLmNvb2tpZXM7XG4gIGlmICghand0KSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoZXIoYCR7Q01TX1VSTH0vdXNlcnMvbWVgLCB7XG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaWQ6IHVzZXIuaWQsIG5hbWU6IHVzZXIudXNlcm5hbWUgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5lbmQoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVVc2VyO1xuIl0sIm5hbWVzIjpbImZldGNoZXIiLCJDTVNfVVJMIiwicHJvY2VzcyIsImVudiIsImhhbmRsZVVzZXIiLCJyZXEiLCJyZXMiLCJqd3QiLCJjb29raWVzIiwic3RhdHVzIiwiZW5kIiwidXNlciIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwianNvbiIsImlkIiwibmFtZSIsInVzZXJuYW1lIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.js"));
module.exports = __webpack_exports__;

})();