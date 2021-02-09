module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PersonaForm.js":
/*!***********************************!*\
  !*** ./components/PersonaForm.js ***!
  \***********************************/
/*! exports provided: PersonaForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonaForm", function() { return PersonaForm; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client/utilities */ "@apollo/client/utilities");
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Alman\\Documents\\collegeProyects\\DBCLI\\CLI-Database\\front-end\\components\\PersonaForm.js";





const CREATE_POST_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
        mutation createPersona ( nombre: String!
            apellido: String!
            extranjeria: String!
            numero_ci: Int!
            edad: Int!) {
            createPersona (nombre: $nombre, apellido: $apellido, extranjeria: $extranjeria,numero_ci: $numero_ci, edad: $edad){
                id
                apellido
            }
        }
    `;
const PersonaForm = () => {
  const [createPersona, {
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(CREATE_POST_MUTATION);
  const {
    0: formData,
    1: setFormData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    nombre: '',
    apellido: '',
    edad: 0,
    extranjería: '',
    numero_ci: 0
  });
  const name = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const lastName = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const ci = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const age = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const venezuelan = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const foreign = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  const handleChanges = e => {
    setFormData(e);
  };

  const handleSubmit = async data => {
    let origin = 'V';
    data.preventDefault();

    if (name.current.value.toString().length > 20 || lastName.current.value.toString().length > 20) {
      console.log('mayor a 20');
    } else if (age.current.value < 0) {
      console.log('edad neg');
    } else {
      if (!venezuelan.current.checked) {
        origin = 'E';
      }

      console.log('name: ', name.current.value, 'Apellidp: ', lastName.current.value, 'Edad: ', age.current.value, 'nacionalidad: ', origin, 'Ci: ', ci.current.value);
      const formdata = {
        nombre: name.current.value,
        apellido: lastName.current.value,
        edad: age.current.value,
        extranjeria: origin,
        ci: ci.current.value
      };
      console.log(formdata);
      await createPersona({
        variables: {
          nombre: formData['nombre'],
          apellido: formData['apellido'],
          edad: formData['edad'],
          extranjeria: ormData['extranjeria'],
          numero_ci: formData['ci']
        }
      }).catch(err => {
        console.log(err);
      });
      console.log('something happened');
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "wrapper",
      children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "Card",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Card"].Body, {
          children: [' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
            className: "text-center mb4",
            children: " Crear Persona"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "name",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Nombre "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "text",
              required: true,
              ref: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "lastName",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: " Apellido "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "text",
              required: true,
              ref: lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "ci",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "C\xE9dula de Identidad "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "number",
              placeholder: "Cedula de identidad",
              ref: ci
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "age",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "number",
              placeholder: "Edad",
              ref: age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "age",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Venezolano"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "radio",
              placeholder: "Venezolano",
              value: "V",
              name: "formRadius",
              id: "option1",
              ref: venezuelan
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Extranjero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "radio",
              placeholder: "Extranjero",
              value: "E",
              name: "formRadius",
              id: "option2",
              ref: foreign
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "submit",
            className: "w-100",
            children: "Generar Persona"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/***/ }),

/***/ "./lib/apolloClient.js":
/*!*****************************!*\
  !*** ./lib/apolloClient.js ***!
  \*****************************/
/*! exports provided: APOLLO_STATE_PROP_NAME, initializeApollo, addApolloState, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOLLO_STATE_PROP_NAME", function() { return APOLLO_STATE_PROP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeApollo", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addApolloState", function() { return addApolloState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApollo", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/utilities */ "@apollo/client/utilities");
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! deepmerge */ "deepmerge");
/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_4__);





const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';
let apolloClient;

function createApolloClient() {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    ssrMode: true,
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
      uri: 'http://localhost:4000/graphql',
      // Server URL (must be absolute)
      credentials: 'same-origin' // Additional fetch() options like `credentials` or `headers`

    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            allPosts: Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_2__["concatPagination"])()
          }
        }
      }
    })
  });
}

function initializeApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Merge the existing cache into data passed from getStaticProps/getServerSideProps


    const data = deepmerge__WEBPACK_IMPORTED_MODULE_3___default()(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [...sourceArray, ...destinationArray.filter(d => sourceArray.every(s => !lodash_isEqual__WEBPACK_IMPORTED_MODULE_4___default()(d, s)))]
    }); // Restore the cache with the merged data

    _apolloClient.cache.restore(data);
  } // For SSG and SSR always create a new Apollo Client


  if (true) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function addApolloState(client, pageProps) {
  if (pageProps !== null && pageProps !== void 0 && pageProps.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}
function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(state), [state]);
  return store;
}

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_formStyles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/formStyles.css */ "./styles/formStyles.css");
/* harmony import */ var _styles_formStyles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_formStyles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apolloClient */ "./lib/apolloClient.js");

var _jsxFileName = "C:\\Users\\Alman\\Documents\\collegeProyects\\DBCLI\\CLI-Database\\front-end\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MyApp({
  Component,
  pageProps
}) {
  const apolloClient = Object(_lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__["useApollo"])(pageProps);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
    client: apolloClient,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_app */ "./pages/_app.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_PersonaForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PersonaForm */ "./components/PersonaForm.js");
/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apolloClient */ "./lib/apolloClient.js");


var _jsxFileName = "C:\\Users\\Alman\\Documents\\collegeProyects\\DBCLI\\CLI-Database\\front-end\\pages\\index.js";




function Home() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("myApp", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PersonaForm__WEBPACK_IMPORTED_MODULE_3__["PersonaForm"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)
  }, void 0, false);
}
async function getStaticProps() {
  const apolloClient = Object(_lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__["initializeApollo"])();
  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars
  });
  return Object(_lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__["addApolloState"])(apolloClient, {
    props: {},
    revalidate: 1
  });
}

/***/ }),

/***/ "./styles/formStyles.css":
/*!*******************************!*\
  !*** ./styles/formStyles.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/utilities":
/*!*******************************************!*\
  !*** external "@apollo/client/utilities" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deepmerge");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZXJzb25hRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwbWVyZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFcXVhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ1JFQVRFX1BPU1RfTVVUQVRJT04iLCJncWwiLCJQZXJzb25hRm9ybSIsImNyZWF0ZVBlcnNvbmEiLCJsb2FkaW5nIiwidXNlTXV0YXRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJub21icmUiLCJhcGVsbGlkbyIsImVkYWQiLCJleHRyYW5qZXLDrWEiLCJudW1lcm9fY2kiLCJuYW1lIiwidXNlUmVmIiwibGFzdE5hbWUiLCJjaSIsImFnZSIsInZlbmV6dWVsYW4iLCJmb3JlaWduIiwiaGFuZGxlQ2hhbmdlcyIsImUiLCJoYW5kbGVTdWJtaXQiLCJkYXRhIiwib3JpZ2luIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJ0b1N0cmluZyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwiZm9ybWRhdGEiLCJleHRyYW5qZXJpYSIsInZhcmlhYmxlcyIsIm9ybURhdGEiLCJjYXRjaCIsImVyciIsIkFQT0xMT19TVEFURV9QUk9QX05BTUUiLCJhcG9sbG9DbGllbnQiLCJjcmVhdGVBcG9sbG9DbGllbnQiLCJBcG9sbG9DbGllbnQiLCJzc3JNb2RlIiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsImFsbFBvc3RzIiwiY29uY2F0UGFnaW5hdGlvbiIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJtZXJnZSIsImFycmF5TWVyZ2UiLCJkZXN0aW5hdGlvbkFycmF5Iiwic291cmNlQXJyYXkiLCJmaWx0ZXIiLCJkIiwiZXZlcnkiLCJzIiwiaXNFcXVhbCIsInJlc3RvcmUiLCJhZGRBcG9sbG9TdGF0ZSIsImNsaWVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwidXNlQXBvbGxvIiwic3RhdGUiLCJzdG9yZSIsInVzZU1lbW8iLCJNeUFwcCIsIkNvbXBvbmVudCIsIkhvbWUiLCJnZXRTdGF0aWNQcm9wcyIsInF1ZXJ5IiwiQUxMX1BPU1RTX1FVRVJZIiwiYWxsUG9zdHNRdWVyeVZhcnMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtR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QUFBQSwyQkFDSTtBQUFBLDZCQUNJLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFPSDtBQUNNLGVBQWVDLGNBQWYsR0FBZ0M7QUFDbkMsUUFBTXpDLFlBQVksR0FBR2UsMEVBQWdCLEVBQXJDO0FBRUEsUUFBTWYsWUFBWSxDQUFDMEMsS0FBYixDQUFtQjtBQUNyQkEsU0FBSyxFQUFFQyxlQURjO0FBRXJCaEQsYUFBUyxFQUFFaUQ7QUFGVSxHQUFuQixDQUFOO0FBS0EsU0FBT2Qsd0VBQWMsQ0FBQzlCLFlBQUQsRUFBZTtBQUNoQ2lDLFNBQUssRUFBRSxFQUR5QjtBQUVoQ1ksY0FBVSxFQUFFO0FBRm9CLEdBQWYsQ0FBckI7QUFJSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkQsMkM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCwgRm9ybSwgQnV0dG9uLCBGb3JtTGFiZWwsIEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBBcG9sbG9DbGllbnQsXHJcbiAgICBIdHRwTGluayxcclxuICAgIEluTWVtb3J5Q2FjaGUsXHJcbiAgICB1c2VNdXRhdGlvbixcclxuICAgIGdxbCxcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgY29uY2F0UGFnaW5hdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcydcclxuY29uc3QgQ1JFQVRFX1BPU1RfTVVUQVRJT04gPSBncWxgXHJcbiAgICAgICAgbXV0YXRpb24gY3JlYXRlUGVyc29uYSAoIG5vbWJyZTogU3RyaW5nIVxyXG4gICAgICAgICAgICBhcGVsbGlkbzogU3RyaW5nIVxyXG4gICAgICAgICAgICBleHRyYW5qZXJpYTogU3RyaW5nIVxyXG4gICAgICAgICAgICBudW1lcm9fY2k6IEludCFcclxuICAgICAgICAgICAgZWRhZDogSW50ISkge1xyXG4gICAgICAgICAgICBjcmVhdGVQZXJzb25hIChub21icmU6ICRub21icmUsIGFwZWxsaWRvOiAkYXBlbGxpZG8sIGV4dHJhbmplcmlhOiAkZXh0cmFuamVyaWEsbnVtZXJvX2NpOiAkbnVtZXJvX2NpLCBlZGFkOiAkZWRhZCl7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgYXBlbGxpZG9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIGBcclxuZXhwb3J0IGNvbnN0IFBlcnNvbmFGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NyZWF0ZVBlcnNvbmEsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKENSRUFURV9QT1NUX01VVEFUSU9OKVxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbm9tYnJlOiAnJyxcclxuICAgICAgICBhcGVsbGlkbzogJycsXHJcbiAgICAgICAgZWRhZDogMCxcclxuICAgICAgICBleHRyYW5qZXLDrWE6ICcnLFxyXG4gICAgICAgIG51bWVyb19jaTogMCxcclxuICAgIH0pXHJcbiAgICBjb25zdCBuYW1lID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGxhc3ROYW1lID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGNpID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGFnZSA9IHVzZVJlZigpXHJcbiAgICBjb25zdCB2ZW5lenVlbGFuID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGZvcmVpZ24gPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlcyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IG9yaWdpbiA9ICdWJ1xyXG4gICAgICAgIGRhdGEucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmFtZS5jdXJyZW50LnZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID4gMjAgfHxcclxuICAgICAgICAgICAgbGFzdE5hbWUuY3VycmVudC52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA+IDIwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXlvciBhIDIwJylcclxuICAgICAgICB9IGVsc2UgaWYgKGFnZS5jdXJyZW50LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWRhZCBuZWcnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdmVuZXp1ZWxhbi5jdXJyZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbiA9ICdFJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgJ25hbWU6ICcsXHJcbiAgICAgICAgICAgICAgICBuYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAnQXBlbGxpZHA6ICcsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ0VkYWQ6ICcsXHJcbiAgICAgICAgICAgICAgICBhZ2UuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICduYWNpb25hbGlkYWQ6ICcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICAnQ2k6ICcsXHJcbiAgICAgICAgICAgICAgICBjaS5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc3QgZm9ybWRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBub21icmU6IG5hbWUuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGFwZWxsaWRvOiBsYXN0TmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZWRhZDogYWdlLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBleHRyYW5qZXJpYTogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgY2k6IGNpLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVBlcnNvbmEoe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBmb3JtRGF0YVsnbm9tYnJlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG86IGZvcm1EYXRhWydhcGVsbGlkbyddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkYWQ6IGZvcm1EYXRhWydlZGFkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFuamVyaWE6IG9ybURhdGFbJ2V4dHJhbmplcmlhJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtZXJvX2NpOiBmb3JtRGF0YVsnY2knXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NvbWV0aGluZyBoYXBwZW5lZCcpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJDYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iNFwiPiBDcmVhciBQZXJzb25hPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPk5vbWJyZSA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdHlwZT1cInRleHRcIiByZXF1aXJlZCByZWY9e25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJsYXN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD4gQXBlbGxpZG8gPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcmVmPXtsYXN0TmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBpZD1cImNpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkPDqWR1bGEgZGUgSWRlbnRpZGFkIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2VkdWxhIGRlIGlkZW50aWRhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RWRhZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRWRhZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXthZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwiYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlZlbmV6b2xhbm88L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmVuZXpvbGFub1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJWXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZm9ybVJhZGl1c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJvcHRpb24xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ZlbmV6dWVsYW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5FeHRyYW5qZXJvPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkV4dHJhbmplcm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiRVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZvcm1SYWRpdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3B0aW9uMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtmb3JlaWdufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2VuZXJhciBQZXJzb25hXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEh0dHBMaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXHJcbmltcG9ydCB7IGNvbmNhdFBhZ2luYXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudC91dGlsaXRpZXMnXHJcbmltcG9ydCBtZXJnZSBmcm9tICdkZWVwbWVyZ2UnXHJcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2xvZGFzaC9pc0VxdWFsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQT0xMT19TVEFURV9QUk9QX05BTUUgPSAnX19BUE9MTE9fU1RBVEVfXydcclxuXHJcbmxldCBhcG9sbG9DbGllbnRcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcclxuICAgIHJldHVybiBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgICAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyxcclxuICAgICAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICAgICAgICB1cmk6ICdodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbCcsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcclxuICAgICAgICAgICAgdHlwZVBvbGljaWVzOiB7XHJcbiAgICAgICAgICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQb3N0czogY29uY2F0UGFnaW5hdGlvbigpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVBcG9sbG8oaW5pdGlhbFN0YXRlID0gbnVsbCkge1xyXG4gICAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKVxyXG5cclxuICAgIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxyXG4gICAgaWYgKGluaXRpYWxTdGF0ZSkge1xyXG4gICAgICAgIC8vIEdldCBleGlzdGluZyBjYWNoZSwgbG9hZGVkIGR1cmluZyBjbGllbnQgc2lkZSBkYXRhIGZldGNoaW5nXHJcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpXHJcblxyXG4gICAgICAgIC8vIE1lcmdlIHRoZSBleGlzdGluZyBjYWNoZSBpbnRvIGRhdGEgcGFzc2VkIGZyb20gZ2V0U3RhdGljUHJvcHMvZ2V0U2VydmVyU2lkZVByb3BzXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IG1lcmdlKGluaXRpYWxTdGF0ZSwgZXhpc3RpbmdDYWNoZSwge1xyXG4gICAgICAgICAgICAvLyBjb21iaW5lIGFycmF5cyB1c2luZyBvYmplY3QgZXF1YWxpdHkgKGxpa2UgaW4gc2V0cylcclxuICAgICAgICAgICAgYXJyYXlNZXJnZTogKGRlc3RpbmF0aW9uQXJyYXksIHNvdXJjZUFycmF5KSA9PiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zb3VyY2VBcnJheSxcclxuICAgICAgICAgICAgICAgIC4uLmRlc3RpbmF0aW9uQXJyYXkuZmlsdGVyKChkKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZUFycmF5LmV2ZXJ5KChzKSA9PiAhaXNFcXVhbChkLCBzKSlcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcclxuICAgICAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoZGF0YSlcclxuICAgIH1cclxuICAgIC8vIEZvciBTU0cgYW5kIFNTUiBhbHdheXMgY3JlYXRlIGEgbmV3IEFwb2xsbyBDbGllbnRcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIF9hcG9sbG9DbGllbnRcclxuICAgIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcclxuICAgIGlmICghYXBvbGxvQ2xpZW50KSBhcG9sbG9DbGllbnQgPSBfYXBvbGxvQ2xpZW50XHJcblxyXG4gICAgcmV0dXJuIF9hcG9sbG9DbGllbnRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEFwb2xsb1N0YXRlKGNsaWVudCwgcGFnZVByb3BzKSB7XHJcbiAgICBpZiAocGFnZVByb3BzPy5wcm9wcykge1xyXG4gICAgICAgIHBhZ2VQcm9wcy5wcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXSA9IGNsaWVudC5jYWNoZS5leHRyYWN0KClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFnZVByb3BzXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcG9sbG8ocGFnZVByb3BzKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHBhZ2VQcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXVxyXG4gICAgY29uc3Qgc3RvcmUgPSB1c2VNZW1vKCgpID0+IGluaXRpYWxpemVBcG9sbG8oc3RhdGUpLCBbc3RhdGVdKVxyXG4gICAgcmV0dXJuIHN0b3JlXHJcbn1cclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCAnLi4vc3R5bGVzL2Zvcm1TdHlsZXMuY3NzJ1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VBcG9sbG8gfSBmcm9tICcuLi9saWIvYXBvbGxvQ2xpZW50J1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb0NsaWVudH0+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxyXG4iLCJpbXBvcnQgeyBhbXlBcHAgfSBmcm9tICcuL19hcHAnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJ1xyXG5pbXBvcnQgeyBQZXJzb25hRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUGVyc29uYUZvcm0nXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG8sIGFkZEFwb2xsb1N0YXRlIH0gZnJvbSAnLi4vbGliL2Fwb2xsb0NsaWVudCdcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG15QXBwPlxyXG4gICAgICAgICAgICAgICAgPFBlcnNvbmFGb3JtIC8+XHJcbiAgICAgICAgICAgIDwvbXlBcHA+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsbygpXHJcblxyXG4gICAgYXdhaXQgYXBvbGxvQ2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICBxdWVyeTogQUxMX1BPU1RTX1FVRVJZLFxyXG4gICAgICAgIHZhcmlhYmxlczogYWxsUG9zdHNRdWVyeVZhcnMsXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBhZGRBcG9sbG9TdGF0ZShhcG9sbG9DbGllbnQsIHtcclxuICAgICAgICBwcm9wczoge30sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMSxcclxuICAgIH0pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlZXBtZXJnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2gvaXNFcXVhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=