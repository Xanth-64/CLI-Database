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





const CREATE_PERSONA_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_3__["gql"]`
    mutation createPersona(
        $nombre: String!
        $apellido: String!
        $extranjeria: String!
        $numero_ci: Int!
        $edad: Int!
    ) {
        createPersona {
            nombre
            apellido
            extranjeria
            numero_ci
            edad
        }
    }
`;
const PersonaForm = () => {
  const [createPersona, {
    loading
  }] = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(CREATE_PERSONA_MUTATION);
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
          extranjeria: formData['extranjeria'],
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
            lineNumber: 102,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
          onSubmit: handleSubmit,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "name",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Nombre "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "text",
              required: true,
              ref: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "lastName",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: " Apellido "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "text",
              required: true,
              ref: lastName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "ci",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "C\xE9dula de Identidad "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "number",
              placeholder: "Cedula de identidad",
              ref: ci
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "age",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Edad"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Control, {
              type: "number",
              placeholder: "Edad",
              ref: age
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"].Group, {
            id: "age",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Venezolano"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
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
              lineNumber: 131,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
              children: "Extranjero"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
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
              lineNumber: 140,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            type: "submit",
            className: "w-100",
            children: "Generar Persona"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
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
          fields: {}
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QZXJzb25hRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvYXBvbGxvQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWVwbWVyZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gvaXNFcXVhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQ1JFQVRFX1BFUlNPTkFfTVVUQVRJT04iLCJncWwiLCJQZXJzb25hRm9ybSIsImNyZWF0ZVBlcnNvbmEiLCJsb2FkaW5nIiwidXNlTXV0YXRpb24iLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJub21icmUiLCJhcGVsbGlkbyIsImVkYWQiLCJleHRyYW5qZXLDrWEiLCJudW1lcm9fY2kiLCJuYW1lIiwidXNlUmVmIiwibGFzdE5hbWUiLCJjaSIsImFnZSIsInZlbmV6dWVsYW4iLCJmb3JlaWduIiwiaGFuZGxlQ2hhbmdlcyIsImUiLCJoYW5kbGVTdWJtaXQiLCJkYXRhIiwib3JpZ2luIiwicHJldmVudERlZmF1bHQiLCJjdXJyZW50IiwidmFsdWUiLCJ0b1N0cmluZyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjaGVja2VkIiwiZm9ybWRhdGEiLCJleHRyYW5qZXJpYSIsInZhcmlhYmxlcyIsImNhdGNoIiwiZXJyIiwiQVBPTExPX1NUQVRFX1BST1BfTkFNRSIsImFwb2xsb0NsaWVudCIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiSHR0cExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiaW5pdGlhbGl6ZUFwb2xsbyIsImluaXRpYWxTdGF0ZSIsIl9hcG9sbG9DbGllbnQiLCJleGlzdGluZ0NhY2hlIiwiZXh0cmFjdCIsIm1lcmdlIiwiYXJyYXlNZXJnZSIsImRlc3RpbmF0aW9uQXJyYXkiLCJzb3VyY2VBcnJheSIsImZpbHRlciIsImQiLCJldmVyeSIsInMiLCJpc0VxdWFsIiwicmVzdG9yZSIsImFkZEFwb2xsb1N0YXRlIiwiY2xpZW50IiwicGFnZVByb3BzIiwicHJvcHMiLCJ1c2VBcG9sbG8iLCJzdGF0ZSIsInN0b3JlIiwidXNlTWVtbyIsIk15QXBwIiwiQ29tcG9uZW50IiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFD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Ozs7Ozs7O0FDWkQsMkM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2FyZCwgRm9ybSwgQnV0dG9uLCBGb3JtTGFiZWwsIEFsZXJ0IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBBcG9sbG9DbGllbnQsXHJcbiAgICBIdHRwTGluayxcclxuICAgIEluTWVtb3J5Q2FjaGUsXHJcbiAgICB1c2VNdXRhdGlvbixcclxuICAgIGdxbCxcclxufSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgY29uY2F0UGFnaW5hdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L3V0aWxpdGllcydcclxuY29uc3QgQ1JFQVRFX1BFUlNPTkFfTVVUQVRJT04gPSBncWxgXHJcbiAgICBtdXRhdGlvbiBjcmVhdGVQZXJzb25hKFxyXG4gICAgICAgICRub21icmU6IFN0cmluZyFcclxuICAgICAgICAkYXBlbGxpZG86IFN0cmluZyFcclxuICAgICAgICAkZXh0cmFuamVyaWE6IFN0cmluZyFcclxuICAgICAgICAkbnVtZXJvX2NpOiBJbnQhXHJcbiAgICAgICAgJGVkYWQ6IEludCFcclxuICAgICkge1xyXG4gICAgICAgIGNyZWF0ZVBlcnNvbmEge1xyXG4gICAgICAgICAgICBub21icmVcclxuICAgICAgICAgICAgYXBlbGxpZG9cclxuICAgICAgICAgICAgZXh0cmFuamVyaWFcclxuICAgICAgICAgICAgbnVtZXJvX2NpXHJcbiAgICAgICAgICAgIGVkYWRcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFBlcnNvbmFGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2NyZWF0ZVBlcnNvbmEsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKENSRUFURV9QRVJTT05BX01VVEFUSU9OKVxyXG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbm9tYnJlOiAnJyxcclxuICAgICAgICBhcGVsbGlkbzogJycsXHJcbiAgICAgICAgZWRhZDogMCxcclxuICAgICAgICBleHRyYW5qZXLDrWE6ICcnLFxyXG4gICAgICAgIG51bWVyb19jaTogMCxcclxuICAgIH0pXHJcbiAgICBjb25zdCBuYW1lID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGxhc3ROYW1lID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGNpID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGFnZSA9IHVzZVJlZigpXHJcbiAgICBjb25zdCB2ZW5lenVlbGFuID0gdXNlUmVmKClcclxuICAgIGNvbnN0IGZvcmVpZ24gPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlcyA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9ybURhdGEoZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XHJcbiAgICAgICAgbGV0IG9yaWdpbiA9ICdWJ1xyXG4gICAgICAgIGRhdGEucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgbmFtZS5jdXJyZW50LnZhbHVlLnRvU3RyaW5nKCkubGVuZ3RoID4gMjAgfHxcclxuICAgICAgICAgICAgbGFzdE5hbWUuY3VycmVudC52YWx1ZS50b1N0cmluZygpLmxlbmd0aCA+IDIwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtYXlvciBhIDIwJylcclxuICAgICAgICB9IGVsc2UgaWYgKGFnZS5jdXJyZW50LnZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZWRhZCBuZWcnKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghdmVuZXp1ZWxhbi5jdXJyZW50LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbiA9ICdFJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICAgICAgJ25hbWU6ICcsXHJcbiAgICAgICAgICAgICAgICBuYW1lLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAnQXBlbGxpZHA6ICcsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgJ0VkYWQ6ICcsXHJcbiAgICAgICAgICAgICAgICBhZ2UuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICduYWNpb25hbGlkYWQ6ICcsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICAnQ2k6ICcsXHJcbiAgICAgICAgICAgICAgICBjaS5jdXJyZW50LnZhbHVlXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgY29uc3QgZm9ybWRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBub21icmU6IG5hbWUuY3VycmVudC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIGFwZWxsaWRvOiBsYXN0TmFtZS5jdXJyZW50LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZWRhZDogYWdlLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBleHRyYW5qZXJpYTogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgY2k6IGNpLmN1cnJlbnQudmFsdWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9ybWRhdGEpXHJcbiAgICAgICAgICAgIGF3YWl0IGNyZWF0ZVBlcnNvbmEoe1xyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiBmb3JtRGF0YVsnbm9tYnJlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgYXBlbGxpZG86IGZvcm1EYXRhWydhcGVsbGlkbyddLFxyXG4gICAgICAgICAgICAgICAgICAgIGVkYWQ6IGZvcm1EYXRhWydlZGFkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZXh0cmFuamVyaWE6IGZvcm1EYXRhWydleHRyYW5qZXJpYSddLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bWVyb19jaTogZm9ybURhdGFbJ2NpJ10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzb21ldGhpbmcgaGFwcGVuZWQnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7JyAnfVxyXG4gICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwiQ2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYjRcIj4gQ3JlYXIgUGVyc29uYTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Ob21icmUgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgcmVmPXtuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwibGFzdE5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+IEFwZWxsaWRvIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIHJlZj17bGFzdE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgaWQ9XCJjaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Dw6lkdWxhIGRlIElkZW50aWRhZCA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNlZHVsYSBkZSBpZGVudGlkYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Y2l9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGlkPVwiYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkVkYWQ8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVkYWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17YWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBpZD1cImFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5WZW5lem9sYW5vPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZlbmV6b2xhbm9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiVlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZvcm1SYWRpdXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwib3B0aW9uMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt2ZW5lenVlbGFufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RXh0cmFuamVybzwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeHRyYW5qZXJvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmb3JtUmFkaXVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIm9wdGlvbjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17Zm9yZWlnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdlbmVyYXIgUGVyc29uYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBIdHRwTGluaywgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5pbXBvcnQgeyBjb25jYXRQYWdpbmF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzJ1xyXG5pbXBvcnQgbWVyZ2UgZnJvbSAnZGVlcG1lcmdlJ1xyXG5pbXBvcnQgaXNFcXVhbCBmcm9tICdsb2Rhc2gvaXNFcXVhbCdcclxuXHJcbmV4cG9ydCBjb25zdCBBUE9MTE9fU1RBVEVfUFJPUF9OQU1FID0gJ19fQVBPTExPX1NUQVRFX18nXHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoKSB7XHJcbiAgICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICAgICAgc3NyTW9kZTogdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcsXHJcbiAgICAgICAgbGluazogbmV3IEh0dHBMaW5rKHtcclxuICAgICAgICAgICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnLCAvLyBTZXJ2ZXIgVVJMIChtdXN0IGJlIGFic29sdXRlKVxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJywgLy8gQWRkaXRpb25hbCBmZXRjaCgpIG9wdGlvbnMgbGlrZSBgY3JlZGVudGlhbHNgIG9yIGBoZWFkZXJzYFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XHJcbiAgICAgICAgICAgIHR5cGVQb2xpY2llczoge1xyXG4gICAgICAgICAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IHt9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZSA9IG51bGwpIHtcclxuICAgIGNvbnN0IF9hcG9sbG9DbGllbnQgPSBhcG9sbG9DbGllbnQgPz8gY3JlYXRlQXBvbGxvQ2xpZW50KClcclxuXHJcbiAgICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcclxuICAgIGlmIChpbml0aWFsU3RhdGUpIHtcclxuICAgICAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ2FjaGUgPSBfYXBvbGxvQ2xpZW50LmV4dHJhY3QoKVxyXG5cclxuICAgICAgICAvLyBNZXJnZSB0aGUgZXhpc3RpbmcgY2FjaGUgaW50byBkYXRhIHBhc3NlZCBmcm9tIGdldFN0YXRpY1Byb3BzL2dldFNlcnZlclNpZGVQcm9wc1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBtZXJnZShpbml0aWFsU3RhdGUsIGV4aXN0aW5nQ2FjaGUsIHtcclxuICAgICAgICAgICAgLy8gY29tYmluZSBhcnJheXMgdXNpbmcgb2JqZWN0IGVxdWFsaXR5IChsaWtlIGluIHNldHMpXHJcbiAgICAgICAgICAgIGFycmF5TWVyZ2U6IChkZXN0aW5hdGlvbkFycmF5LCBzb3VyY2VBcnJheSkgPT4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc291cmNlQXJyYXksXHJcbiAgICAgICAgICAgICAgICAuLi5kZXN0aW5hdGlvbkFycmF5LmZpbHRlcigoZCkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VBcnJheS5ldmVyeSgocykgPT4gIWlzRXF1YWwoZCwgcykpXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIGNhY2hlIHdpdGggdGhlIG1lcmdlZCBkYXRhXHJcbiAgICAgICAgX2Fwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGRhdGEpXHJcbiAgICB9XHJcbiAgICAvLyBGb3IgU1NHIGFuZCBTU1IgYWx3YXlzIGNyZWF0ZSBhIG5ldyBBcG9sbG8gQ2xpZW50XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBfYXBvbGxvQ2xpZW50XHJcbiAgICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgICBpZiAoIWFwb2xsb0NsaWVudCkgYXBvbGxvQ2xpZW50ID0gX2Fwb2xsb0NsaWVudFxyXG5cclxuICAgIHJldHVybiBfYXBvbGxvQ2xpZW50XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRBcG9sbG9TdGF0ZShjbGllbnQsIHBhZ2VQcm9wcykge1xyXG4gICAgaWYgKHBhZ2VQcm9wcz8ucHJvcHMpIHtcclxuICAgICAgICBwYWdlUHJvcHMucHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV0gPSBjbGllbnQuY2FjaGUuZXh0cmFjdCgpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhZ2VQcm9wc1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKHBhZ2VQcm9wcykge1xyXG4gICAgY29uc3Qgc3RhdGUgPSBwYWdlUHJvcHNbQVBPTExPX1NUQVRFX1BST1BfTkFNRV1cclxuICAgIGNvbnN0IHN0b3JlID0gdXNlTWVtbygoKSA9PiBpbml0aWFsaXplQXBvbGxvKHN0YXRlKSwgW3N0YXRlXSlcclxuICAgIHJldHVybiBzdG9yZVxyXG59XHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9mb3JtU3R5bGVzLmNzcydcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSAnLi4vbGliL2Fwb2xsb0NsaWVudCdcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG8ocGFnZVByb3BzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG9DbGllbnR9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcclxuIiwiaW1wb3J0IHsgYW15QXBwIH0gZnJvbSAnLi9fYXBwJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcydcclxuaW1wb3J0IHsgUGVyc29uYUZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL1BlcnNvbmFGb3JtJ1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvLCBhZGRBcG9sbG9TdGF0ZSB9IGZyb20gJy4uL2xpYi9hcG9sbG9DbGllbnQnXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxteUFwcD5cclxuICAgICAgICAgICAgICAgIDxQZXJzb25hRm9ybSAvPlxyXG4gICAgICAgICAgICA8L215QXBwPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50L3V0aWxpdGllc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkZWVwbWVyZ2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoL2lzRXF1YWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9