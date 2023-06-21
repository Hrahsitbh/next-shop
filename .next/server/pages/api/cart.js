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
exports.id = "pages/api/cart";
exports.ids = ["pages/api/cart"];
exports.modules = {

/***/ "(api)/./lib/apiUtils.js":
/*!*************************!*\
  !*** ./lib/apiUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ApiError\": () => (/* binding */ ApiError),\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher)\n/* harmony export */ });\nclass ApiError extends Error {\n    constructor(url, status){\n        super(`'${url}' returned ${status}`);\n        if (Error.captureStackTrace) {\n            Error.captureStackTrace(this, ApiError);\n        }\n        this.name = \"ApiError\";\n        this.status = status;\n    }\n}\nasync function fetcher(url, options) {\n    const resp = await fetch(url, options);\n    if (!resp.ok) throw new ApiError(url, resp.status);\n    return await resp.json();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvYXBpVXRpbHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxNQUFNQSxRQUFRLFNBQVNDLEtBQUs7SUFDakNDLFlBQVlDLEdBQUcsRUFBRUMsTUFBTSxDQUFFO1FBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRUQsR0FBRyxDQUFDLFdBQVcsRUFBRUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUlILEtBQUssQ0FBQ0ksaUJBQWlCLEVBQUU7WUFDM0JKLEtBQUssQ0FBQ0ksaUJBQWlCLENBQUMsSUFBSSxFQUFFTCxRQUFRLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBSSxDQUFDTSxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3ZCLElBQUksQ0FBQ0YsTUFBTSxHQUFHQSxNQUFNLENBQUM7SUFDdkI7Q0FDRDtBQUVNLGVBQWVHLE9BQU8sQ0FBQ0osR0FBRyxFQUFFSyxPQUFPLEVBQUU7SUFDMUMsTUFBTUMsSUFBSSxHQUFHLE1BQU1DLEtBQUssQ0FBQ1AsR0FBRyxFQUFFSyxPQUFPLENBQUM7SUFDdEMsSUFBSSxDQUFDQyxJQUFJLENBQUNFLEVBQUUsRUFBRSxNQUFNLElBQUlYLFFBQVEsQ0FBQ0csR0FBRyxFQUFFTSxJQUFJLENBQUNMLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELE9BQU8sTUFBTUssSUFBSSxDQUFDRyxJQUFJLEVBQUUsQ0FBQztBQUMzQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zaG9wLy4vbGliL2FwaVV0aWxzLmpzPzgyMTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEFwaUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3Rvcih1cmwsIHN0YXR1cykge1xuICAgIHN1cGVyKGAnJHt1cmx9JyByZXR1cm5lZCAke3N0YXR1c31gKTtcbiAgICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEFwaUVycm9yKTtcbiAgICB9XG4gICAgdGhpcy5uYW1lID0gXCJBcGlFcnJvclwiO1xuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCwgb3B0aW9ucykge1xuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2godXJsLCBvcHRpb25zKTtcbiAgaWYgKCFyZXNwLm9rKSB0aHJvdyBuZXcgQXBpRXJyb3IodXJsLCByZXNwLnN0YXR1cyk7XG4gIHJldHVybiBhd2FpdCByZXNwLmpzb24oKTtcbn1cbiJdLCJuYW1lcyI6WyJBcGlFcnJvciIsIkVycm9yIiwiY29uc3RydWN0b3IiLCJ1cmwiLCJzdGF0dXMiLCJjYXB0dXJlU3RhY2tUcmFjZSIsIm5hbWUiLCJmZXRjaGVyIiwib3B0aW9ucyIsInJlc3AiLCJmZXRjaCIsIm9rIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/apiUtils.js\n");

/***/ }),

/***/ "(api)/./pages/api/cart.js":
/*!***************************!*\
  !*** ./pages/api/cart.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_apiUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/apiUtils */ \"(api)/./lib/apiUtils.js\");\n\nconst { CMS_URL  } = process.env;\nfunction transfromCartData(cartItem) {\n    return {\n        id: cartItem.id,\n        product: {\n            id: cartItem.product.id,\n            title: cartItem.product.title,\n            price: cartItem.product.price\n        },\n        quantity: cartItem.quantity\n    };\n}\nasync function handleGetCart(req, res) {\n    const { jwt  } = req.cookies;\n    if (!jwt) {\n        res.status(401).end();\n        return;\n    }\n    try {\n        const data = await (0,_lib_apiUtils__WEBPACK_IMPORTED_MODULE_0__.fetcher)(`${CMS_URL}/cart-items`, {\n            headers: {\n                Authorization: `Bearer ${jwt}`\n            }\n        });\n        res.status(200).json(data.map(transfromCartData));\n    } catch (err) {\n        res.status(401).end();\n    }\n}\nasync function handlePostCart(req, res) {\n    const { jwt  } = req.cookies;\n    if (!jwt) {\n        res.status(401).end();\n        return;\n    }\n    const { productId , quantity  } = req.body;\n    console.log(quantity);\n    try {\n        const res1 = await (0,_lib_apiUtils__WEBPACK_IMPORTED_MODULE_0__.fetcher)(`${CMS_URL}/cart-items`, {\n            method: \"POST\",\n            headers: {\n                Authorization: `Bearer ${jwt}`,\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                product: productId,\n                quantity\n            })\n        });\n        res1.status(200).json({});\n    } catch  {\n        res.status(401).end();\n    }\n}\nasync function handleCart(req, res) {\n    switch(req.method){\n        case \"GET\":\n            {\n                return handleGetCart(req, res);\n            }\n        case \"POST\":\n            {\n                return handlePostCart(req, res);\n            }\n        default:\n            return res.status(405).end();\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleCart);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUcsQ0FBQ2lCLE1BQU07UUFDaEIsS0FBSyxLQUFLO1lBQUU7Z0JBQ1YsT0FBT2xCLGFBQWEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0QsS0FBSyxNQUFNO1lBQUU7Z0JBQ1gsT0FBT1csY0FBYyxDQUFDWixHQUFHLEVBQUVDLEdBQUcsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7UUFDRDtZQUNFLE9BQU9BLEdBQUcsQ0FBQ0csTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxHQUFHLEVBQUUsQ0FBQztLQUNoQztBQUNILENBQUM7QUFFRCxpRUFBZWUsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1zaG9wLy4vcGFnZXMvYXBpL2NhcnQuanM/ZDZhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4uLy4uL2xpYi9hcGlVdGlsc1wiO1xuXG5jb25zdCB7IENNU19VUkwgfSA9IHByb2Nlc3MuZW52O1xuXG5mdW5jdGlvbiB0cmFuc2Zyb21DYXJ0RGF0YShjYXJ0SXRlbSkge1xuICByZXR1cm4ge1xuICAgIGlkOiBjYXJ0SXRlbS5pZCxcbiAgICBwcm9kdWN0OiB7XG4gICAgICBpZDogY2FydEl0ZW0ucHJvZHVjdC5pZCxcbiAgICAgIHRpdGxlOiBjYXJ0SXRlbS5wcm9kdWN0LnRpdGxlLFxuICAgICAgcHJpY2U6IGNhcnRJdGVtLnByb2R1Y3QucHJpY2UsXG4gICAgfSxcbiAgICBxdWFudGl0eTogY2FydEl0ZW0ucXVhbnRpdHksXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldENhcnQocmVxLCByZXMpIHtcbiAgY29uc3QgeyBqd3QgfSA9IHJlcS5jb29raWVzO1xuICBpZiAoIWp3dCkge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5lbmQoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaGVyKGAke0NNU19VUkx9L2NhcnQtaXRlbXNgLCB7XG4gICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtqd3R9YCB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEubWFwKHRyYW5zZnJvbUNhcnREYXRhKSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5lbmQoKTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVQb3N0Q2FydChyZXEsIHJlcykge1xuICBjb25zdCB7IGp3dCB9ID0gcmVxLmNvb2tpZXM7XG4gIGlmICghand0KSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7IHByb2R1Y3RJZCwgcXVhbnRpdHkgfSA9IHJlcS5ib2R5O1xuICBjb25zb2xlLmxvZyhxdWFudGl0eSlcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaGVyKGAke0NNU19VUkx9L2NhcnQtaXRlbXNgLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7and0fWAsXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgcHJvZHVjdDogcHJvZHVjdElkLFxuICAgICAgICBxdWFudGl0eSxcbiAgICAgIH0pLFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHt9KTtcbiAgfSBjYXRjaCB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUNhcnQocmVxLCByZXMpIHtcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOiB7XG4gICAgICByZXR1cm4gaGFuZGxlR2V0Q2FydChyZXEsIHJlcyk7XG4gICAgfVxuICAgIGNhc2UgXCJQT1NUXCI6IHtcbiAgICAgIHJldHVybiBoYW5kbGVQb3N0Q2FydChyZXEsIHJlcyk7XG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUNhcnQ7XG4iXSwibmFtZXMiOlsiZmV0Y2hlciIsIkNNU19VUkwiLCJwcm9jZXNzIiwiZW52IiwidHJhbnNmcm9tQ2FydERhdGEiLCJjYXJ0SXRlbSIsImlkIiwicHJvZHVjdCIsInRpdGxlIiwicHJpY2UiLCJxdWFudGl0eSIsImhhbmRsZUdldENhcnQiLCJyZXEiLCJyZXMiLCJqd3QiLCJjb29raWVzIiwic3RhdHVzIiwiZW5kIiwiZGF0YSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwianNvbiIsIm1hcCIsImVyciIsImhhbmRsZVBvc3RDYXJ0IiwicHJvZHVjdElkIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2FydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/cart.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/cart.js"));
module.exports = __webpack_exports__;

})();