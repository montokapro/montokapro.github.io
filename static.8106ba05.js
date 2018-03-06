(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-collapse");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _logo = __webpack_require__(26);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { style: { textAlign: 'center' } },
      'Welcome to'
    ),
    _react2.default.createElement('img', { src: _logo2.default, alt: '' })
  );
});
//

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'What are duals and why should we care?'
    ),
    _react2.default.createElement(
      'p',
      null,
      '\'Dual\' is a mathematical term that expresses opposite-ness. Together, we will break down concepts like numbers, lists, and MapReduce. We will explore what the \'opposite\' of these well known concepts are, and open up entire new avenues of thinking and programming. In effect, we hope to double the number of tools in every programmer\'s toolkit!'
    )
  );
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Body = __webpack_require__(27);

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var comment = 'Algebras are recognizable to most programmers only as what they were taught in grade school. By using the very same properties, we can create structures we know and love, as well as discover a few more. Each of these charts defines a concept, and then iterates on that concept starting with Haskell and ending with algebraic encodings.';

var algebra = {
  header: [{
    name: 'Algebra',
    comment: 'An algebra contains elements and constructors. We can use algebras (specifically initial F-algebras) to formulate finite data structures.'
  }, {
    name: 'Coalgebra',
    comment: 'A coalgebra contains elements and destructors. We can use coalgebras (specifically terminal F-coalgebras) to formulate infinite data structures.'
  }],
  more: 'Specifically, we are defining F-algebras and F-coalgebras here. We will be analyzing initial F-algebras and terminal F-coalgebras.',
  references: [{
    name: 'Mike Gordon: Coinduction - Algebras and coalgebras',
    link: 'http://www.cl.cam.ac.uk/archive/mjcg/plans/Coinduction.html#algebras-and-coalgebras'
  }, {
    name: 'Wikipedia: F-algebra',
    link: 'https://en.wikipedia.org/wiki/F-algebra'
  }, {
    name: 'Gabriel Gonzalez: Morte Tutorial - Simple Types',
    link: 'https://hackage.haskell.org/package/morte-1.6.15/docs/Morte-Tutorial.html#g:4'
  }],
  rows: [{
    comment: 'Our data structures will resemble the following forms. We will be substituting "F a" with a variety of terms.',
    data: [{
      name: 'F a → a',
      comment: '\'F\' is a functor. \'→\' maps a functor applied to an object to another object.'
    }, {
      name: 'a → F a',
      comment: '\'F\' is a functor. \'→\' maps an object to a functor applied to another object.'
    }]
  }]
};

var natural = {
  header: [{
    name: 'Natural',
    comment: 'A natural number is defined as any number greater than or equal to zero. We can define natural numbers using peano arithmetic: a natural number is either zero or a successor to another natural number.'
  }, {
    name: 'Conatural',
    comment: 'A conatural number is defined as any number less or equal to infinity. We can define natural numbers using the dual of peano arithmetic: a conatural number is either infinity or a predecessor to another conatural number.'
  }],
  more: 'The common definitions of naturals and conaturals exclude zero and infinity. We will consider these differences akin to zero vs one indexing.',
  references: [{
    name: 'Mike Gordon: Coinduction - Numbers and conumbers',
    link: 'http://www.cl.cam.ac.uk/archive/mjcg/plans/Coinduction.html#numbers-and-conumbers'
  }, {
    name: 'Gabriel Gonzalez: Morte Tutorial - Recursion',
    link: 'https://hackage.haskell.org/package/morte-1.6.15/docs/Morte-Tutorial.html#g:6'
  }],
  todo: 'Should we rewrite descriptions to use one and \'co-one\' instead?',
  rows: [{
    comment: 'We can declare a functor that represents our structure. The difference between NatF and ConatF is purely nominal.',
    data: [{
      name: 'NatF a → a',
      comment: 'We can define naturals in Haskell by declaring "data NatF a = ZeroF | SuccF a".'
    }, {
      name: 'a → ConatF a',
      comment: 'We can define conaturals in Haskell by declaring "data ConatF a = ZeroF | PredF a".'
    }]
  }, {
    comment: 'Using the Maybe monad is equivalent to using NatF or ConatF. Maybe is defined as "data Maybe a = Nothing | Just a".',
    data: [{
      name: 'Maybe a → a',
      comment: 'Natural numbers are defined as the least fixed point applied to Maybe.'
    }, {
      name: 'a → Maybe a',
      comment: 'Conatural numbers are defined as the greatest fixed point applied to Maybe.'
    }]
  }, {
    comment: 'We can express our numbers more succinctly using algebraic notation. Here, the plus represents \'or\' and the sum type. 1 represents the unit type, of which there is only one possibility.',
    data: [{
      name: 'a + 1 → a',
      comment: 'Here we can clearly see that from a natural or zero we can generate another natural. \'1\' represents the concept of zero here.'
    }, {
      name: 'a → a + 1',
      comment: 'Here we can clearly see that from a conatural we can extract another conatural or infinity. \'1\' represents the concept of infinity here.'
    }]
  }, {
    comment: 'We can distribute implication to formulate another representation. Here, \'×\' represents \'and\' and the product type.',
    data: [{
      name: '(a → a) × (1 → a)',
      comment: 'We can create the structure for a natural by suppling two functions: a function to create a number from a number, and a constructor that supplies zero.'
    }, {
      name: '(a → a) × (a → 1)',
      comment: 'We can create the structure for a conatural by suppling two functions: a function to create a number from a number, and a destructor that consumes infinity.'
    }]
  }, {
    comment: 'We can use currying to transform products into implication. This is how dependency injection and higher order functions are used.',
    data: [{
      name: '(a → a) → (1 → a)',
      comment: 'Most languages will not define naturals in this form, but they may define other structures using similar techniques.'
    }, {
      name: '(a → a) → (a → 1)',
      comment: 'Most languages will not define conaturals in this form, but they may define other structures using similar techniques.'
    }]
  }, {
    comment: 'Instead of passing a constructor or destructor, we can pass the zero number itself. This assumption must be baked into our interpreter. The same syntax can have two different meanings, depending on which interpreter is used.',
    data: [{
      name: '(a → a) → a',
      comment: 'This is how naturals are defined in the calculus of constructions. Here we assume that a supplier of a value is equivalent to the value itself.'
    }, {
      name: '(a → a) → a',
      comment: 'This is how conaturals are defined in the dual to calculus of constructions. Here we assume that a consumer of a covalue is equivalent to the covalue itself.'
    }]
    // {
    //   data: [
    //     {
    //       name: '∀(a : *) → ∀(Succ : a → a) → ∀(Zero : a) → a',
    //       comment: 'This is how naturals are defined in the calculus of constructions.',
    //     }
    //   ]
    // }   
  }]
};

var list = {
  header: [{
    name: 'List',
    comment: 'A list can be thought of as cells indexed by naturals, where each cell can hold a value. List start as empty, and can have elements added.'
  }, {
    name: 'Stream',
    comment: 'A stream can be thought of as cells indexed by conaturals, where each cell can hold a value. Streams can have elements removed until they are empty.'
  }],
  references: [{
    name: 'Gabriel Gonzalez: Morte Tutorial - Recursion',
    link: 'https://hackage.haskell.org/package/morte-1.6.15/docs/Morte-Tutorial.html#g:6'
  }],
  rows: [{
    comment: 'We can define lists in the same manner as the lisp language. A list is either the empty list or a cons cell with a value and a pointer to another list. To distinguish betweens lists and streams, we will use the terms \'push\' and \'pop\' for lists and streams respectively',
    data: [{
      name: 'ListF a b → b',
      comment: 'We can define lists in Haskell by declaring "data ListF a b = NilF | PushF a b".'
    }, {
      name: 'b → StreamF a b',
      comment: 'We can define streams in Haskell by declaring "data StreamF a b = NilF | PopF a b".'
    }]
  }, {
    comment: 'Using the Maybe functor is equivalent to using ListF and StreamF, when using a product type that represents the index and the value in a cell.',
    data: [{
      name: 'Maybe (a × b) → b'
    }, {
      name: 'b → Maybe (a × b)'
    }]
  }, {
    comment: 'We can fully express lists using algebraic structures. Here, the times represents the product type, the plus represents the sum type, and 1 represents the unit type.',
    data: [{
      name: '(a × b) + 1 → b'
    }, {
      name: 'b → (a × b) + 1'
    }]
  }, {
    comment: 'After distributing the implication, we see two functions. For fold, we see a binary function and a supplier. For unfold, we see a consumer and step function.',
    data: [{
      name: '(a × b → b) × (1 → b)'
    }, {
      name: '(b → a × b) × (b → 1)'
    }]
  }, {
    comment: 'We can apply currying again.',
    data: [{
      name: '((a → b) → b) → (1 → b)'
    }, {
      name: '(b → (a → b)) → (b → 1)'
    }]
  }, {
    comment: 'Instead of passing a constructor or destructor, we can pass empty itself. This assumption must be baked into our interpreter. The same syntax can have two different meanings, depending on which interpreter is used.',
    data: [{
      name: '((a → b) → b) → b',
      comment: 'This is how lists are defined in the calculus of constructions.'
    }, {
      name: '(b → (a → b)) → b',
      comment: 'This is how streams are defined in the dual to calculus of constructions.'
    }]
    // {
    //   data: [
    //     {
    //       name: 'λ(a : *) → ∀(B : *) → (∀Cons : ∀(head : a) → ∀(tail : B) → B) → ∀(Nil : B) → B',
    //       comment: 'This is how lists are defined in the calculus of constructions.',
    //     }
    //   ]
    // }
  }]
};

var tree = {
  header: [{
    name: 'Tree (Binary)',
    comment: 'A binary tree can be thought of as nodes with right and left children, where only the leaves hold values.'
  }, {
    name: 'Cotree (Binary)',
    comment: 'TODO'
  }],
  rows: [{
    comment: 'A binary tree is either a leaf with a value or a node that points to two trees. We will denote this by saying "data ListF a b = LeafF a | BranchF b b"',
    data: [{
      name: 'TreeF a b → b'
    }, {
      name: 'b → CotreeF a b'
    }]
  }, {
    comment: 'We can use a product type to represent branches, and use the Either monad.',
    data: [{
      name: 'Either a (b × b) → b'
    }, {
      name: 'b → Either a (b × b)'
    }]
  }, {
    comment: 'We can express binary trees entirely through algebraic data types.',
    data: [{
      name: '(b × b) + a → b'
    }, {
      name: 'b → (b × b) + a'
    }]
  }, {
    comment: 'We can distribute implication accross a product.',
    data: [{
      name: '(b × b → b) × (a → b)'
    }, {
      name: '(b → b x b) × (b → a)'
    }]
  }, {
    comment: 'We can curry away the product type.',
    data: [{
      name: '(b → b → b) → (a → b)'
    }, {
      name: '(b → b → b) → (b → a)'
    }]
  }]
};

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Algebra__Div'
})(['font-family:\'Inconsolata\',monospace;']);

var Table = _styledComponents2.default.table.withConfig({
  displayName: 'Algebra__Table'
})(['width:100%;table-layout:fixed;border-spacing:0;']);

var TableHead = _styledComponents2.default.thead.withConfig({
  displayName: 'Algebra__TableHead'
})(['background-color:#4CAF50;color:white;']);

var TableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'Algebra__TableRow'
})(['&:nth-child(even){background-color:#f2f2f2;}']);

var LSpan = _styledComponents2.default.span.withConfig({
  displayName: 'Algebra__LSpan'
})(['float:left;text-align:left;white-space:nowrap;']);

var RSpan = _styledComponents2.default.span.withConfig({
  displayName: 'Algebra__RSpan'
})(['float:right;text-align:right;white-space:nowrap;']);

var CodeSpan = _styledComponents2.default.span.withConfig({
  displayName: 'Algebra__CodeSpan'
})(['float:left;text-align:left;white-space:pre;']);

var H1 = _styledComponents2.default.h1.withConfig({
  displayName: 'Algebra__H1'
})(['float:center;text-align:center;']);

var H2 = _styledComponents2.default.h2.withConfig({
  displayName: 'Algebra__H2'
})(['float:center;text-align:center;margin:0;border:4px solid #4CAF50;background-color:#4CAF50;color:white;']);

var H3 = _styledComponents2.default.h3.withConfig({
  displayName: 'Algebra__H3'
})(['float:center;text-align:center;margin:0;background-color:#4CAF50;color:white;']);

exports.default = function () {
  return _react2.default.createElement(
    Div,
    null,
    _react2.default.createElement(
      'p',
      null,
      comment
    ),
    _react2.default.createElement(_Body2.default, { body: algebra }),
    _react2.default.createElement(_Body2.default, { body: natural }),
    _react2.default.createElement(_Body2.default, { body: list })
  );
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Header = __webpack_require__(32);

var _Header2 = _interopRequireDefault(_Header);

var _Body = __webpack_require__(33);

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var background = 'Folds are recognizable to most programmers as <a>MapReduce</a>. However, the full power of folds and their neglected sibling unfold is likely unharnessed by most programmers. This chart is meant to express dualities and correlations in a succinct manner, though you may drill down in any section by clicking for context.';

var natBody = {
  name: 'Naturals',
  common: ['(Nat → a)', '(a → Nat)'],
  rows: [{
    comment: 'A natural number is defined as any number greater than zero (we will include zero as well). We can define natural numbers using peano arithmetic: a natural number is either zero or a successor to another natural number. We will denote this by saying "data NatF a = ZeroF | SuccF a", where \'F\' refers to \'functor\'.',
    data: ['(NatF a → a) →', '(a → NatF a) →']
  }, {
    comment: 'Using the Maybe monad is equivalent to using NatF. Maybe is defined as "Maybe a = Nothing | Just a"',
    more: 'Natural numbers are defined as the fixed point applied to Maybe',
    data: ['(Maybe a → a) →', '(a → Maybe a) →']
  }, {
    comment: 'We can express natural numbers using algebraic structures. Here, the plus represents \'or\', and 1 represents the unit type, of which there is only one possibility.',
    data: ['(a + 1 → a) →', '(a → a + 1) →']
  }, {
    comment: 'We can distribute implication to divide our algebraic structure into two groups. Thus a natural number is defined as an object that constains two functions: a function from a natural number to a natural number, and a function that creates a natural number from nothing, consuming only time. When unfolding, we have a continuation that consumes zero returns nothing.',
    data: ['(a → a) × (1 → a) →', '(a → 1) × (a → a) →']
  }, {
    comment: 'We can use currying to transform products into implication.',
    data: ['(a → a) → (1 → a) →', '(a → 1) → (a → a) →']
  }, {
    comment: 'Instead of passing a constructor that creates zero, we can pass zero itself. So far, I am unsure if continuations can be simplified in a similar manner.',
    data: ['(a → a) → a →', '']
  }]
};

var listBody = {
  name: 'Lists',
  comment: 'A list is defined similarly to natural numbers. A list can be thought of as cells indexed by the natural numbers, where each cell can hold a value. Often the [ ] notation is used to denote lists. We can fold over a list to reduce it to a value, or unfold from a seed value to create an infinite list.',
  common: ['([a] → b)', '(b → [a])'],
  rows: [{
    comment: 'We can define lists in the same manner as the lisp language. A list is either the empty list or a cons cell with a value and a pointer to another list. We will denote this by saying "data ListF a b = NilF | ConsF a b"',
    data: ['(ListF a b → b) →', '(b → ListF a b) →']
  }, {
    comment: 'Using the Maybe functor is equivalent to using ListF, when using a product type that represents the index and the value in a cell.',
    data: ['(Maybe (a × b) → b) →', '(b → Maybe (a × b)) →']
  }, {
    comment: 'We can fully express lists using algebraic structures. Here, the times represents the product type, the plus represents the sum type, and 1 represents the unit type.',
    data: ['((a × b) + 1 → b) →', '(b → (a × b) + 1) →']
  }, {
    comment: 'After distributing the implication, we see two functions. For fold, we see a binary function and a supplier. For unfold, we see a consumer and step function',
    data: ['(a × b → b) × (1 → b) →', '(b → 1) × (b → a × b) →']
  }, {
    comment: 'We can apply currying again.',
    data: ['(a × b → b) → (1 → b) →', '(b → 1) → (b → a × b) →']
  }, {
    comment: 'After removing the unit type we get a weaker but common representation of unfold, which takes a binary function, a seed value, and a list, then returns a value. It is unclear to me what removing the unit type implies for unfold.',
    data: ['(a × b → b) → b →', '']
  }, {
    comment: 'We can apply currying one more time.',
    data: ['(a → b → b) → b →', '']
  }]
};

var treeBody = {
  name: 'Trees',
  comment: 'TODO: Several kinds of trees exist. This tree is specifically a binary tree, where only the leaves contain values. We can fold over a tree to reduce it to a value, or unfold from a seed value to create an infinite tree.',
  common: ['(T a → b)', '(b → T a)'],
  rows: [{
    comment: 'A binary tree is either a leaf with a value or a node that points to two trees. We will denote this by saying "data ListF a b = LeafF a | BranchF b b"',
    data: ['(TreeF a b → b) →', '(b → TreeF a b) →']
  }, {
    comment: 'We can use a product type to represent branches, and use the Either monad.',
    data: ['(Either a (b × b) → b) →', '(b → Either a (b × b)) →']
  }, {
    comment: 'We can express binary trees entirely through algebraic data types.',
    data: ['((b × b) + a → b) →', '(b → (b × b) + a) →']
  }, {
    comment: 'We can distribute implication accross a product.',
    data: ['(b × b → b) × (a → b) →', '(b → b x b) × (b → a) →']
  }, {
    comment: 'We can curry away the product type.',
    data: ['(b → b → b) → (a → b) →', '(b → b → b) → (b → a) →']
  }]
};

var factorialHylos = [{
  fold: 'f :: Maybe (Nat, Nat) \u2192 Nat\nf Just b = a \u2192 a * b\nf Nothing = a \u2192 a',
  unfold: 'g :: Nat \u2192 Maybe (Nat, Nat)\ng 0 = Nothing\ng n = Just (n, n - 1)'
}, {
  fold: 'f :: ListF Nat Nat \u2192 Nat\nf ConsF a b : a * b\nf NilF : 1',
  unfold: 'g :: Nat \u2192 ListF Nat Nat\ng 0 : NilF\ng n : ConsF n (n - 1)'
}];

var parallelFactorialHylos = [{
  fold: 'f :: Tree Nat (Nat, Nat) \u2192 Nat\nf Branch a b = a * b\nf Leaf a = a',
  unfold: 'g :: (Nat, Nat) \u2192 Tree Nat (Nat, Nat)\ng (a, b) = case\n  (a > b) : Leaf 1\n  (a = b) : Leaf a\n  (a < b) : Branch (a, avg) (avg + 1, b)\n    where avg = (a + b) / 2'
}];

var fibonacciHylos = [{
  fold: 'f :: Tree Nat (Nat, Nat) \u2192 Nat\nf Branch a b = a + b\nf Leaf a = a',
  unfold: 'g :: Nat \u2192 Tree Nat (Nat, Nat)\ng 0 : Leaf 0\ng 1 : Leaf 1\ng n : Branch (n - 1) (n - 2)'
}];

var fibonacciUnfolds = [{
  fold: 'TODO: get at index',
  unfold: 'g :: (Nat, Nat) \u2192 Maybe (Nat, (Nat, Nat))\ng (a, b) = Just (a + b, (b, a + b)))'
}];

// const quickSortHylos = [
//   {
//     fold: `g :: Maybe (a, [a], [a]) -> [a]
// inord Just (x, l, r) = l ++ [x] ++ r
// inord Nothing = []`,
//     unfold: `f :: [a] -> Maybe (a, ([a], [a]))
// f [] = Nothing
// f (x : xs) = Just (x, filter (< x) xs, filter (> x) xs)`
//   }
// ];

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Fold__Div'
})(['font-family:\'Inconsolata\',monospace;']);

var Table = _styledComponents2.default.table.withConfig({
  displayName: 'Fold__Table'
})(['width:100%;table-layout:fixed;border-spacing:0;']);

var TableHead = _styledComponents2.default.thead.withConfig({
  displayName: 'Fold__TableHead'
})(['background-color:#4CAF50;color:white;']);

var TableRow = _styledComponents2.default.tr.withConfig({
  displayName: 'Fold__TableRow'
})(['&:nth-child(even){background-color:#f2f2f2;}']);

var LSpan = _styledComponents2.default.span.withConfig({
  displayName: 'Fold__LSpan'
})(['float:left;text-align:left;white-space:nowrap;']);

var RSpan = _styledComponents2.default.span.withConfig({
  displayName: 'Fold__RSpan'
})(['float:right;text-align:right;white-space:nowrap;']);

var CodeSpan = _styledComponents2.default.span.withConfig({
  displayName: 'Fold__CodeSpan'
})(['float:left;text-align:left;white-space:pre;']);

var H1 = _styledComponents2.default.h1.withConfig({
  displayName: 'Fold__H1'
})(['float:center;text-align:center;']);

var H2 = _styledComponents2.default.h2.withConfig({
  displayName: 'Fold__H2'
})(['float:center;text-align:center;margin:0;border:4px solid #4CAF50;background-color:#4CAF50;color:white;']);

var H3 = _styledComponents2.default.h3.withConfig({
  displayName: 'Fold__H3'
})(['float:center;text-align:center;margin:0;background-color:#4CAF50;color:white;']);

exports.default = function () {
  return _react2.default.createElement(
    Div,
    null,
    _react2.default.createElement(_Header2.default, null),
    _react2.default.createElement(
      'p',
      null,
      background
    ),
    _react2.default.createElement(_Body2.default, { body: natBody }),
    _react2.default.createElement(_Body2.default, { body: listBody }),
    _react2.default.createElement(_Body2.default, { body: treeBody }),
    _react2.default.createElement(
      H1,
      null,
      'Hylomorphisms'
    ),
    _react2.default.createElement(
      'p',
      null,
      'hylo f g = fold f . unfold g = unfold g ; fold f'
    ),
    _react2.default.createElement(
      H2,
      null,
      'factorial :: Nat \u2192 Nat'
    ),
    _react2.default.createElement(
      H3,
      null,
      'factorial = hylo f g'
    ),
    _react2.default.createElement(
      Table,
      null,
      _react2.default.createElement(
        'tbody',
        null,
        factorialHylos.map(function (pair, index) {
          return _react2.default.createElement(
            TableRow,
            { key: index },
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.fold
              )
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.unfold
              )
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      H3,
      null,
      'parallelFactorial n = hylo f g (1, n)'
    ),
    _react2.default.createElement(
      Table,
      null,
      _react2.default.createElement(
        'tbody',
        null,
        parallelFactorialHylos.map(function (pair, index) {
          return _react2.default.createElement(
            TableRow,
            { key: index },
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.fold
              )
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.unfold
              )
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      H2,
      null,
      'fibonacci :: Nat \u2192 Nat'
    ),
    _react2.default.createElement(
      H3,
      null,
      'fibonacci = hylo f g'
    ),
    _react2.default.createElement(
      Table,
      null,
      _react2.default.createElement(
        'tbody',
        null,
        fibonacciHylos.map(function (pair, index) {
          return _react2.default.createElement(
            TableRow,
            { key: index },
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.fold
              )
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.unfold
              )
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      H3,
      null,
      'fibonacci = unfold g (0, 1)'
    ),
    _react2.default.createElement(
      Table,
      null,
      _react2.default.createElement(
        'tbody',
        null,
        fibonacciUnfolds.map(function (pair, index) {
          return _react2.default.createElement(
            TableRow,
            { key: index },
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.fold
              )
            ),
            _react2.default.createElement(
              'th',
              null,
              _react2.default.createElement(
                CodeSpan,
                null,
                pair.unfold
              )
            )
          );
        })
      )
    ),
    _react2.default.createElement(
      H1,
      null,
      'References'
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'a',
        null,
        'https://en.wikipedia.org/wiki/F-algebra'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'a',
        null,
        'http://conal.net/talks/folds-and-unfolds.pdf'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'a',
        null,
        'https://en.wikipedia.org/wiki/Hylomorphism_(computer_science)'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'a',
        null,
        'https://gist.github.com/yuwki0131/db2dcc08d8b6b086d055182dc32c0300'
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      'CHARITABLE THOUGHTS by Robin Cockett'
    )
  );
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCollapse = __webpack_require__(2);

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Row__Div'
})(['']);

var Row = _styledComponents2.default.div.withConfig({
  displayName: 'Row'
})(['display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;']);

var Cell = _styledComponents2.default.div.withConfig({
  displayName: 'Row__Cell'
})(['display:flex;flex-grow:1;flex-direction:row;justify-content:space-between;width:50%;']);

var Unique = _styledComponents2.default.pre.withConfig({
  displayName: 'Row__Unique'
})(['white-space:nowrap;margin:0;padding:4px;']);

var Common = _styledComponents2.default.pre.withConfig({
  displayName: 'Row__Common'
})(['white-space:nowrap;color:#4CAF50;margin:0;padding:4px;']);

var Comment = _styledComponents2.default.p.withConfig({
  displayName: 'Row__Comment'
})(['background-color:#f2f2f2;margin:0;padding:4px;']);

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      expanded: false
    };
    _this.toggleExpanded = _this.toggleExpanded.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'toggleExpanded',
    value: function toggleExpanded() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Div,
        null,
        _react2.default.createElement(
          Row,
          { onClick: this.toggleExpanded },
          this.props.common.map(function (value, columnIndex) {
            return _react2.default.createElement(
              Cell,
              { key: columnIndex },
              _react2.default.createElement(
                Unique,
                null,
                _this2.props.unique[columnIndex]
              ),
              _react2.default.createElement(
                Common,
                null,
                value
              )
            );
          })
        ),
        _react2.default.createElement(
          _reactCollapse2.default,
          { isOpened: this.state.expanded },
          _react2.default.createElement(
            Comment,
            null,
            this.props.comment
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      '404 - We looked for your page and came back with Nothing!'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Don\'t worry, we have Just what you need in one of our other pages.'
    )
  );
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(14);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(15);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  body {\n    font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial,\n      \'Lucida Grande\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  body {\n    font-family: \'HelveticaNeue-Light\', \'Helvetica Neue Light\', \'Helvetica Neue\', Helvetica, Arial,\n      \'Lucida Grande\', sans-serif;\n    font-weight: 300;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n  }\n']);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(4);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactHotLoader = __webpack_require__(16);

var _reactStaticRoutes = __webpack_require__(17);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//


(0, _styledComponents.injectGlobal)(_templateObject);

var AppStyles = _styledComponents2.default.div.withConfig({
  displayName: 'App__AppStyles'
})(['a{text-decoration:none;color:#108db8;font-weight:bold;}nav{width:100%;background:#108db8;a{color:white;padding:1rem;display:inline-block;}}.content{padding:1rem;}img{max-width:100%;}']);

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(
      AppStyles,
      null,
      _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/' },
          'Home'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/about' },
          'About'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/algebra' },
          'Algebra'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/fold' },
          'Fold'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'content' },
        _react2.default.createElement(_reactStaticRoutes2.default, null)
      )
    )
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(18);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(19);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(20);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(21);

var _reactUniversalComponent = __webpack_require__(22);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error() {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An unknown error has occured loading this page. Please reload your browser and try again.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/steve/code/js/react/dual/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 7)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(7);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/steve/code/js/react/dual/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 8)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(8);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Algebra',
  file: '/home/steve/code/js/react/dual/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 9)), (0, _importCss3.default)('src/containers/Algebra', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Algebra');
  },
  resolve: function resolve() {
    return /*require.resolve*/(9);
  },
  chunkName: function chunkName() {
    return 'src/containers/Algebra';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Fold',
  file: '/home/steve/code/js/react/dual/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 10)), (0, _importCss3.default)('src/containers/Fold', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Fold');
  },
  resolve: function resolve() {
    return /*require.resolve*/(10);
  },
  chunkName: function chunkName() {
    return 'src/containers/Fold';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/steve/code/js/react/dual/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 12)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(12);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
var templateMap = {
  t_0: t_0,
  t_1: t_1,
  t_2: t_2,
  t_3: t_3,
  t_4: t_4

  // Template Tree
};var templateTree = { c: { "404": { t: "t_4" }, "/": { t: "t_0" }, "about": { t: "t_1" }, "algebra": { t: "t_2" }, "fold": { t: "t_3" } }

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  var parts = path === '/' ? ['/'] : path.split('/').filter(function (d) {
    return d;
  });
  var cursor = templateTree;
  try {
    parts.forEach(function (part) {
      cursor = cursor.c[part];
    });
    return templateMap[cursor.t];
  } catch (e) {
    return false;
  }
};

if (typeof document !== 'undefined') {
  window.reactStaticGetComponentForPath = getComponentForPath;
}

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;

      var renderProps = {
        templateMap: templateMap,
        templateTree: templateTree,
        getComponentForPath: getComponentForPath
      };
      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }
      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getComponentForPath(props.location.pathname);
          if (!Comp) {
            Comp = getComponentForPath('404');
          }
          return Comp && _react2.default.createElement(Comp, props);
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(23);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(24);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(25);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        if (Component) return Promise.resolve(Component);

        return requireAsync(props, context);
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)(module)))

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(5);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.5b9a7a21.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _HeaderRow = __webpack_require__(28);

var _HeaderRow2 = _interopRequireDefault(_HeaderRow);

var _Row = __webpack_require__(30);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Body__Div'
})(['border:0.25em solid #4CAF50;']);

var Less = _styledComponents2.default.h3.withConfig({
  displayName: 'Body__Less'
})(['margin:0;padding:0.25em;']);

var More = _styledComponents2.default.div.withConfig({
  displayName: 'Body__More'
})(['background-color:#f2f2f2;margin:0;padding:0.25em;']);

exports.default = function (_ref) {
  var body = _ref.body;
  return _react2.default.createElement(
    Div,
    null,
    _react2.default.createElement(_HeaderRow2.default, { columns: body.header }),
    body.rows && body.rows.map(function (row, index) {
      return _react2.default.createElement(_Row2.default, { key: index, comment: row.comment, columns: row.data });
    }),
    body.rows && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        Less,
        null,
        'References'
      ),
      body.references.map(function (reference, index) {
        return _react2.default.createElement(
          More,
          { key: index },
          _react2.default.createElement(
            'a',
            { href: reference.link },
            reference.name
          )
        );
      })
    )
  );
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _HeaderCell = __webpack_require__(29);

var _HeaderCell2 = _interopRequireDefault(_HeaderCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'HeaderRow__Div'
})(['display:flex;flex-direction:row;justify-content:space-between;cursor:pointer;']);

exports.default = function (_ref) {
  var columns = _ref.columns;
  return _react2.default.createElement(
    Div,
    null,
    columns.map(function (value, index) {
      return _react2.default.createElement(_HeaderCell2.default, { key: index, less: value.name, more: value.comment });
    })
  );
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCollapse = __webpack_require__(2);

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'HeaderCell__Div'
})(['width:50%;']);

var Less = _styledComponents2.default.h2.withConfig({
  displayName: 'HeaderCell__Less'
})(['text-align:center;margin:0;padding:0.25em;']);

var More = _styledComponents2.default.p.withConfig({
  displayName: 'HeaderCell__More'
})(['background-color:#f2f2f2;margin:0;padding:0.25em;']);

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      expanded: false
    };
    _this.toggleExpanded = _this.toggleExpanded.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'toggleExpanded',
    value: function toggleExpanded() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Div,
        { onClick: this.toggleExpanded },
        _react2.default.createElement(
          Less,
          null,
          this.props.less
        ),
        _react2.default.createElement(
          _reactCollapse2.default,
          { isOpened: this.state.expanded },
          _react2.default.createElement(
            More,
            null,
            this.props.more
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCollapse = __webpack_require__(2);

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _Cell = __webpack_require__(31);

var _Cell2 = _interopRequireDefault(_Cell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Row__Div'
})(['cursor:pointer;:hover{background-color:#f2f2f2;}']);

var Padding = _styledComponents2.default.div.withConfig({
  displayName: 'Row__Padding'
})(['padding:0.25em;']);

var More = _styledComponents2.default.p.withConfig({
  displayName: 'Row__More'
})(['margin:0;background-color:#f2f2f2;padding:0.25em;']);

var Less = _styledComponents2.default.div.withConfig({
  displayName: 'Row__Less'
})(['display:flex;flex-direction:row;justify-content:space-between;']);

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.toggleExpanded = function (event) {
      _this.setState({ expanded: !_this.state.expanded });
    };

    _this.state = {
      expanded: _this.props.expanded ? _this.props.expanded : false
    };
    _this.toggleExpanded = _this.toggleExpanded.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        Div,
        { onClick: this.toggleExpanded },
        this.props.comment && _react2.default.createElement(
          _reactCollapse2.default,
          { isOpened: this.state.expanded },
          _react2.default.createElement(
            Padding,
            null,
            _react2.default.createElement(
              More,
              null,
              this.props.comment
            )
          )
        ),
        _react2.default.createElement(
          Less,
          null,
          this.props.columns.map(function (value, index) {
            return _react2.default.createElement(_Cell2.default, { expanded: _this2.state.expanded, key: index, less: value.name, more: value.comment });
          })
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCollapse = __webpack_require__(2);

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Cell__Div'
})(['width:50%;']);

var Padding = _styledComponents2.default.div.withConfig({
  displayName: 'Cell__Padding'
})(['padding:0.25em;']);

var Less = _styledComponents2.default.pre.withConfig({
  displayName: 'Cell__Less'
})(['margin-left:0.25em;margin-right:0.25em;margin-top:0em;margin-bottom:0em;padding:0.25em;']);

var More = _styledComponents2.default.p.withConfig({
  displayName: 'Cell__More'
})(['margin:0em;background-color:#f2f2f2;padding:0.25em;']);

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));
    // this.state = {
    //   expanded: false,
    // }
    // this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  // toggleExpanded() {
  // this.setState({ expanded: !this.state.expanded });
  // }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Div,
        null,
        _react2.default.createElement(
          Less,
          null,
          this.props.less
        ),
        this.props.more && _react2.default.createElement(
          _reactCollapse2.default,
          { isOpened: this.props.expanded },
          _react2.default.createElement(
            Padding,
            null,
            _react2.default.createElement(
              More,
              null,
              this.props.more
            )
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCollapse = __webpack_require__(2);

var _reactCollapse2 = _interopRequireDefault(_reactCollapse);

var _Row = __webpack_require__(11);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var foldComment = 'A fold is an operation that transforms one algebra to another. An algebra has a morphism of the form \'F a → a\'. F represents an functor that can be mapped across (as in map reduce). Folding is often called reducing.';
var unfoldComment = 'An unfold is an operation that transforms one coalgebra to another. A coalgebra has a morphism of the form \'a → F a\'. F represents an functor that can be mapped across (as in map reduce). Unfolding is the dual of reducing';

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Header__Div'
})(['display:flex;flex-direction:row;align-content:center;justify-content:space-between;']);

var Cell = _styledComponents2.default.div.withConfig({
  displayName: 'Header__Cell'
})(['flex-grow:1;width:50%;']);

var H1 = _styledComponents2.default.h1.withConfig({
  displayName: 'Header__H1'
})(['float:center;text-align:center;cursor:pointer;']);

var Comment = _styledComponents2.default.p.withConfig({
  displayName: 'Header__Comment'
})(['background-color:#f2f2f2;margin:0;padding:4px;']);

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      foldExpanded: false,
      unfoldExpanded: false
    };
    _this.toggleFoldExpanded = _this.toggleFoldExpanded.bind(_this);
    _this.toggleUnfoldExpanded = _this.toggleUnfoldExpanded.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: 'toggleFoldExpanded',
    value: function toggleFoldExpanded() {
      this.setState({ foldExpanded: !this.state.foldExpanded });
    }
  }, {
    key: 'toggleUnfoldExpanded',
    value: function toggleUnfoldExpanded() {
      this.setState({ unfoldExpanded: !this.state.unfoldExpanded });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        Div,
        null,
        _react2.default.createElement(
          Cell,
          null,
          _react2.default.createElement(
            H1,
            { onClick: this.toggleFoldExpanded },
            'Fold'
          ),
          _react2.default.createElement(
            _reactCollapse2.default,
            { isOpened: this.state.foldExpanded },
            _react2.default.createElement(
              Comment,
              null,
              foldComment
            )
          )
        ),
        _react2.default.createElement(
          Cell,
          null,
          _react2.default.createElement(
            H1,
            { onClick: this.toggleUnfoldExpanded },
            'Unfold'
          ),
          _react2.default.createElement(
            _reactCollapse2.default,
            { isOpened: this.state.unfoldExpanded },
            _react2.default.createElement(
              Comment,
              null,
              unfoldComment
            )
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styledComponents = __webpack_require__(1);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Row = __webpack_require__(11);

var _Row2 = _interopRequireDefault(_Row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Div = _styledComponents2.default.div.withConfig({
  displayName: 'Body__Div'
})(['']);

var Header = _styledComponents2.default.h2.withConfig({
  displayName: 'Body__Header'
})(['float:center;text-align:center;margin:0;border:4px solid #4CAF50;background-color:#4CAF50;color:white;']);

var Row = _styledComponents2.default.div.withConfig({
  displayName: 'Body__Row'
})(['display:flex;flex-direction:row;justify-content:space-between;&:nth-child(even){background-color:#f2f2f2;}']);

var Cell = _styledComponents2.default.div.withConfig({
  displayName: 'Body__Cell'
})(['display:flex;flex-grow:1;flex-direction:row;justify-content:space-between;']);

var Unique = _styledComponents2.default.pre.withConfig({
  displayName: 'Body__Unique'
})(['white-space:nowrap;padding:4px;']);

var Common = _styledComponents2.default.pre.withConfig({
  displayName: 'Body__Common'
})(['white-space:nowrap;color:#4CAF50;padding:4px;']);

exports.default = function (_ref) {
  var body = _ref.body;
  return _react2.default.createElement(
    Div,
    null,
    _react2.default.createElement(
      Header,
      null,
      body.name
    ),
    body.rows.map(function (row, rowIndex) {
      return _react2.default.createElement(_Row2.default, { key: rowIndex,
        common: body.common, unique: row.data, comment: row.comment });
    })
  );
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.8106ba05.js.map