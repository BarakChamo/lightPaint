webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	__webpack_require__(3);
	
	// Dependencies
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _redux = __webpack_require__(164);
	
	var _reactRedux = __webpack_require__(173);
	
	// Reduced State
	
	var _reducers = __webpack_require__(182);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	// Components
	
	var _componentsApp = __webpack_require__(184);
	
	var _componentsApp2 = _interopRequireDefault(_componentsApp);
	
	// Controllers
	
	var _controllersMedia = __webpack_require__(216);
	
	var _controllersMedia2 = _interopRequireDefault(_controllersMedia);
	
	// Actions
	
	var _actions = __webpack_require__(183);
	
	// Action Constants
	
	// Initialize redux store
	var store = (0, _redux.createStore)(_reducers2['default']);
	
	/*
		Bind media manager events
	*/
	
	_controllersMedia2['default'].on('sources', function (sources) {
		store.dispatch((0, _actions.setSources)(sources));
	});
	
	_controllersMedia2['default'].on('stream', function (stream, live) {
		// Set new stream
		store.dispatch((0, _actions.setStream)(stream));
	
		// Check if new stream is live feed stream or recording
		store.dispatch((0, _actions.setDisplay)(live ? _actions.displayModes.RECORD : _actions.displayModes.PLAYBACK));
	});
	
	/*
		Start media capture
	*/
	
	// Get user media, or ask for permissions
	_controllersMedia2['default'].getStream();
	
	/*
		Render base
	*/
	
	_reactDom2['default'].render(_react2['default'].createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2['default'].createElement(_componentsApp2['default'], null)
	), document.getElementById('container'));

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(9);


/***/ },
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(10);


/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createStore = __webpack_require__(165);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _utilsCombineReducers = __webpack_require__(167);
	
	var _utilsCombineReducers2 = _interopRequireDefault(_utilsCombineReducers);
	
	var _utilsBindActionCreators = __webpack_require__(170);
	
	var _utilsBindActionCreators2 = _interopRequireDefault(_utilsBindActionCreators);
	
	var _utilsApplyMiddleware = __webpack_require__(171);
	
	var _utilsApplyMiddleware2 = _interopRequireDefault(_utilsApplyMiddleware);
	
	var _utilsCompose = __webpack_require__(172);
	
	var _utilsCompose2 = _interopRequireDefault(_utilsCompose);
	
	exports.createStore = _createStore2['default'];
	exports.combineReducers = _utilsCombineReducers2['default'];
	exports.bindActionCreators = _utilsBindActionCreators2['default'];
	exports.applyMiddleware = _utilsApplyMiddleware2['default'];
	exports.compose = _utilsCompose2['default'];

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = createStore;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsIsPlainObject = __webpack_require__(166);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	/**
	 * These are private action types reserved by Redux.
	 * For any unknown actions, you must return the current state.
	 * If the current state is undefined, you must return the initial state.
	 * Do not reference these action types directly in your code.
	 */
	var ActionTypes = {
	  INIT: '@@redux/INIT'
	};
	
	exports.ActionTypes = ActionTypes;
	/**
	 * Creates a Redux store that holds the state tree.
	 * The only way to change the data in the store is to call `dispatch()` on it.
	 *
	 * There should only be a single store in your app. To specify how different
	 * parts of the state tree respond to actions, you may combine several reducers
	 * into a single reducer function by using `combineReducers`.
	 *
	 * @param {Function} reducer A function that returns the next state tree, given
	 * the current state tree and the action to handle.
	 *
	 * @param {any} [initialState] The initial state. You may optionally specify it
	 * to hydrate the state from the server in universal apps, or to restore a
	 * previously serialized user session.
	 * If you use `combineReducers` to produce the root reducer function, this must be
	 * an object with the same shape as `combineReducers` keys.
	 *
	 * @returns {Store} A Redux store that lets you read the state, dispatch actions
	 * and subscribe to changes.
	 */
	
	function createStore(reducer, initialState) {
	  if (typeof reducer !== 'function') {
	    throw new Error('Expected the reducer to be a function.');
	  }
	
	  var currentReducer = reducer;
	  var currentState = initialState;
	  var listeners = [];
	  var isDispatching = false;
	
	  /**
	   * Reads the state tree managed by the store.
	   *
	   * @returns {any} The current state tree of your application.
	   */
	  function getState() {
	    return currentState;
	  }
	
	  /**
	   * Adds a change listener. It will be called any time an action is dispatched,
	   * and some part of the state tree may potentially have changed. You may then
	   * call `getState()` to read the current state tree inside the callback.
	   *
	   * @param {Function} listener A callback to be invoked on every dispatch.
	   * @returns {Function} A function to remove this change listener.
	   */
	  function subscribe(listener) {
	    listeners.push(listener);
	    var isSubscribed = true;
	
	    return function unsubscribe() {
	      if (!isSubscribed) {
	        return;
	      }
	
	      isSubscribed = false;
	      var index = listeners.indexOf(listener);
	      listeners.splice(index, 1);
	    };
	  }
	
	  /**
	   * Dispatches an action. It is the only way to trigger a state change.
	   *
	   * The `reducer` function, used to create the store, will be called with the
	   * current state tree and the given `action`. Its return value will
	   * be considered the **next** state of the tree, and the change listeners
	   * will be notified.
	   *
	   * The base implementation only supports plain object actions. If you want to
	   * dispatch a Promise, an Observable, a thunk, or something else, you need to
	   * wrap your store creating function into the corresponding middleware. For
	   * example, see the documentation for the `redux-thunk` package. Even the
	   * middleware will eventually dispatch plain object actions using this method.
	   *
	   * @param {Object} action A plain object representing “what changed”. It is
	   * a good idea to keep actions serializable so you can record and replay user
	   * sessions, or use the time travelling `redux-devtools`. An action must have
	   * a `type` property which may not be `undefined`. It is a good idea to use
	   * string constants for action types.
	   *
	   * @returns {Object} For convenience, the same action object you dispatched.
	   *
	   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
	   * return something else (for example, a Promise you can await).
	   */
	  function dispatch(action) {
	    if (!_utilsIsPlainObject2['default'](action)) {
	      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
	    }
	
	    if (typeof action.type === 'undefined') {
	      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
	    }
	
	    if (isDispatching) {
	      throw new Error('Reducers may not dispatch actions.');
	    }
	
	    try {
	      isDispatching = true;
	      currentState = currentReducer(currentState, action);
	    } finally {
	      isDispatching = false;
	    }
	
	    listeners.slice().forEach(function (listener) {
	      return listener();
	    });
	    return action;
	  }
	
	  /**
	   * Replaces the reducer currently used by the store to calculate the state.
	   *
	   * You might need this if your app implements code splitting and you want to
	   * load some of the reducers dynamically. You might also need this if you
	   * implement a hot reloading mechanism for Redux.
	   *
	   * @param {Function} nextReducer The reducer for the store to use instead.
	   * @returns {void}
	   */
	  function replaceReducer(nextReducer) {
	    currentReducer = nextReducer;
	    dispatch({ type: ActionTypes.INIT });
	  }
	
	  // When a store is created, an "INIT" action is dispatched so that every
	  // reducer returns their initial state. This effectively populates
	  // the initial state tree.
	  dispatch({ type: ActionTypes.INIT });
	
	  return {
	    dispatch: dispatch,
	    subscribe: subscribe,
	    getState: getState,
	    replaceReducer: replaceReducer
	  };
	}

/***/ },
/* 166 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = isPlainObject;
	var fnToString = function fnToString(fn) {
	  return Function.prototype.toString.call(fn);
	};
	
	/**
	 * @param {any} obj The object to inspect.
	 * @returns {boolean} True if the argument appears to be a plain object.
	 */
	
	function isPlainObject(obj) {
	  if (!obj || typeof obj !== 'object') {
	    return false;
	  }
	
	  var proto = typeof obj.constructor === 'function' ? Object.getPrototypeOf(obj) : Object.prototype;
	
	  if (proto === null) {
	    return true;
	  }
	
	  var constructor = proto.constructor;
	
	  return typeof constructor === 'function' && constructor instanceof constructor && fnToString(constructor) === fnToString(Object);
	}
	
	module.exports = exports['default'];

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = combineReducers;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createStore = __webpack_require__(165);
	
	var _utilsIsPlainObject = __webpack_require__(166);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	var _utilsMapValues = __webpack_require__(168);
	
	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);
	
	var _utilsPick = __webpack_require__(169);
	
	var _utilsPick2 = _interopRequireDefault(_utilsPick);
	
	/* eslint-disable no-console */
	
	function getUndefinedStateErrorMessage(key, action) {
	  var actionType = action && action.type;
	  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
	
	  return 'Reducer "' + key + '" returned undefined handling ' + actionName + '. ' + 'To ignore an action, you must explicitly return the previous state.';
	}
	
	function getUnexpectedStateKeyWarningMessage(inputState, outputState, action) {
	  var reducerKeys = Object.keys(outputState);
	  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'initialState argument passed to createStore' : 'previous state received by the reducer';
	
	  if (reducerKeys.length === 0) {
	    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
	  }
	
	  if (!_utilsIsPlainObject2['default'](inputState)) {
	    return 'The ' + argumentName + ' has unexpected type of "' + ({}).toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
	  }
	
	  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
	    return reducerKeys.indexOf(key) < 0;
	  });
	
	  if (unexpectedKeys.length > 0) {
	    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
	  }
	}
	
	function assertReducerSanity(reducers) {
	  Object.keys(reducers).forEach(function (key) {
	    var reducer = reducers[key];
	    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });
	
	    if (typeof initialState === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
	    }
	
	    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
	    if (typeof reducer(undefined, { type: type }) === 'undefined') {
	      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
	    }
	  });
	}
	
	/**
	 * Turns an object whose values are different reducer functions, into a single
	 * reducer function. It will call every child reducer, and gather their results
	 * into a single state object, whose keys correspond to the keys of the passed
	 * reducer functions.
	 *
	 * @param {Object} reducers An object whose values correspond to different
	 * reducer functions that need to be combined into one. One handy way to obtain
	 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
	 * undefined for any action. Instead, they should return their initial state
	 * if the state passed to them was undefined, and the current state for any
	 * unrecognized action.
	 *
	 * @returns {Function} A reducer function that invokes every reducer inside the
	 * passed object, and builds a state object with the same shape.
	 */
	
	function combineReducers(reducers) {
	  var finalReducers = _utilsPick2['default'](reducers, function (val) {
	    return typeof val === 'function';
	  });
	  var sanityError;
	
	  try {
	    assertReducerSanity(finalReducers);
	  } catch (e) {
	    sanityError = e;
	  }
	
	  var defaultState = _utilsMapValues2['default'](finalReducers, function () {
	    return undefined;
	  });
	
	  return function combination(state, action) {
	    if (state === undefined) state = defaultState;
	
	    if (sanityError) {
	      throw sanityError;
	    }
	
	    var hasChanged = false;
	    var finalState = _utilsMapValues2['default'](finalReducers, function (reducer, key) {
	      var previousStateForKey = state[key];
	      var nextStateForKey = reducer(previousStateForKey, action);
	      if (typeof nextStateForKey === 'undefined') {
	        var errorMessage = getUndefinedStateErrorMessage(key, action);
	        throw new Error(errorMessage);
	      }
	      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
	      return nextStateForKey;
	    });
	
	    if (process.env.NODE_ENV !== 'production') {
	      var warningMessage = getUnexpectedStateKeyWarningMessage(state, finalState, action);
	      if (warningMessage) {
	        console.error(warningMessage);
	      }
	    }
	
	    return hasChanged ? finalState : state;
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 168 */
/***/ function(module, exports) {

	/**
	 * Applies a function to every key-value pair inside an object.
	 *
	 * @param {Object} obj The source object.
	 * @param {Function} fn The mapper function that receives the value and the key.
	 * @returns {Object} A new object that contains the mapped values for the keys.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = mapValues;
	
	function mapValues(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    result[key] = fn(obj[key], key);
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 169 */
/***/ function(module, exports) {

	/**
	 * Picks key-value pairs from an object where values satisfy a predicate.
	 *
	 * @param {Object} obj The object to pick from.
	 * @param {Function} fn The predicate the values must satisfy to be copied.
	 * @returns {Object} The object with the values that satisfied the predicate.
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = pick;
	
	function pick(obj, fn) {
	  return Object.keys(obj).reduce(function (result, key) {
	    if (fn(obj[key])) {
	      result[key] = obj[key];
	    }
	    return result;
	  }, {});
	}
	
	module.exports = exports["default"];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = bindActionCreators;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilsMapValues = __webpack_require__(168);
	
	var _utilsMapValues2 = _interopRequireDefault(_utilsMapValues);
	
	function bindActionCreator(actionCreator, dispatch) {
	  return function () {
	    return dispatch(actionCreator.apply(undefined, arguments));
	  };
	}
	
	/**
	 * Turns an object whose values are action creators, into an object with the
	 * same keys, but with every function wrapped into a `dispatch` call so they
	 * may be invoked directly. This is just a convenience method, as you can call
	 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
	 *
	 * For convenience, you can also pass a single function as the first argument,
	 * and get a function in return.
	 *
	 * @param {Function|Object} actionCreators An object whose values are action
	 * creator functions. One handy way to obtain it is to use ES6 `import * as`
	 * syntax. You may also pass a single function.
	 *
	 * @param {Function} dispatch The `dispatch` function available on your Redux
	 * store.
	 *
	 * @returns {Function|Object} The object mimicking the original object, but with
	 * every action creator wrapped into the `dispatch` call. If you passed a
	 * function as `actionCreators`, the return value will also be a single
	 * function.
	 */
	
	function bindActionCreators(actionCreators, dispatch) {
	  if (typeof actionCreators === 'function') {
	    return bindActionCreator(actionCreators, dispatch);
	  }
	
	  if (typeof actionCreators !== 'object' || actionCreators === null || actionCreators === undefined) {
	    // eslint-disable-line no-eq-null
	    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
	  }
	
	  return _utilsMapValues2['default'](actionCreators, function (actionCreator) {
	    return bindActionCreator(actionCreator, dispatch);
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = applyMiddleware;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _compose = __webpack_require__(172);
	
	var _compose2 = _interopRequireDefault(_compose);
	
	/**
	 * Creates a store enhancer that applies middleware to the dispatch method
	 * of the Redux store. This is handy for a variety of tasks, such as expressing
	 * asynchronous actions in a concise manner, or logging every action payload.
	 *
	 * See `redux-thunk` package as an example of the Redux middleware.
	 *
	 * Because middleware is potentially asynchronous, this should be the first
	 * store enhancer in the composition chain.
	 *
	 * Note that each middleware will be given the `dispatch` and `getState` functions
	 * as named arguments.
	 *
	 * @param {...Function} middlewares The middleware chain to be applied.
	 * @returns {Function} A store enhancer applying the middleware.
	 */
	
	function applyMiddleware() {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }
	
	  return function (next) {
	    return function (reducer, initialState) {
	      var store = next(reducer, initialState);
	      var _dispatch = store.dispatch;
	      var chain = [];
	
	      var middlewareAPI = {
	        getState: store.getState,
	        dispatch: function dispatch(action) {
	          return _dispatch(action);
	        }
	      };
	      chain = middlewares.map(function (middleware) {
	        return middleware(middlewareAPI);
	      });
	      _dispatch = _compose2['default'].apply(undefined, chain)(store.dispatch);
	
	      return _extends({}, store, {
	        dispatch: _dispatch
	      });
	    };
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 172 */
/***/ function(module, exports) {

	/**
	 * Composes single-argument functions from right to left.
	 *
	 * @param {...Function} funcs The functions to compose.
	 * @returns {Function} A function obtained by composing functions from right to
	 * left. For example, compose(f, g, h) is identical to arg => f(g(h(arg))).
	 */
	"use strict";
	
	exports.__esModule = true;
	exports["default"] = compose;
	
	function compose() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return function (arg) {
	    return funcs.reduceRight(function (composed, f) {
	      return f(composed);
	    }, arg);
	  };
	}
	
	module.exports = exports["default"];

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequire(obj) { return obj && obj.__esModule ? obj['default'] : obj; }
	
	var _componentsProvider = __webpack_require__(174);
	
	exports.Provider = _interopRequire(_componentsProvider);
	
	var _componentsConnect = __webpack_require__(176);
	
	exports.connect = _interopRequire(_componentsConnect);

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _utilsStoreShape = __webpack_require__(175);
	
	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);
	
	var didWarnAboutReceivingStore = false;
	function warnAboutReceivingStore() {
	  if (didWarnAboutReceivingStore) {
	    return;
	  }
	
	  didWarnAboutReceivingStore = true;
	  console.error( // eslint-disable-line no-console
	  '<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/rackt/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
	}
	
	var Provider = (function (_Component) {
	  _inherits(Provider, _Component);
	
	  Provider.prototype.getChildContext = function getChildContext() {
	    return { store: this.store };
	  };
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    _Component.call(this, props, context);
	    this.store = props.store;
	  }
	
	  Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var store = this.store;
	    var nextStore = nextProps.store;
	
	    if (store !== nextStore) {
	      warnAboutReceivingStore();
	    }
	  };
	
	  Provider.prototype.render = function render() {
	    var children = this.props.children;
	
	    return _react.Children.only(children);
	  };
	
	  return Provider;
	})(_react.Component);
	
	exports['default'] = Provider;
	
	Provider.propTypes = {
	  store: _utilsStoreShape2['default'].isRequired,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _utilsStoreShape2['default'].isRequired
	};
	module.exports = exports['default'];

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(8);
	
	exports['default'] = _react.PropTypes.shape({
	  subscribe: _react.PropTypes.func.isRequired,
	  dispatch: _react.PropTypes.func.isRequired,
	  getState: _react.PropTypes.func.isRequired
	});
	module.exports = exports['default'];

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = connect;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _utilsStoreShape = __webpack_require__(175);
	
	var _utilsStoreShape2 = _interopRequireDefault(_utilsStoreShape);
	
	var _utilsShallowEqual = __webpack_require__(177);
	
	var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);
	
	var _utilsIsPlainObject = __webpack_require__(178);
	
	var _utilsIsPlainObject2 = _interopRequireDefault(_utilsIsPlainObject);
	
	var _utilsWrapActionCreators = __webpack_require__(179);
	
	var _utilsWrapActionCreators2 = _interopRequireDefault(_utilsWrapActionCreators);
	
	var _hoistNonReactStatics = __webpack_require__(180);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(181);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var defaultMapStateToProps = function defaultMapStateToProps() {
	  return {};
	};
	var defaultMapDispatchToProps = function defaultMapDispatchToProps(dispatch) {
	  return { dispatch: dispatch };
	};
	var defaultMergeProps = function defaultMergeProps(stateProps, dispatchProps, parentProps) {
	  return _extends({}, parentProps, stateProps, dispatchProps);
	};
	
	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}
	
	// Helps track hot reloading.
	var nextVersion = 0;
	
	function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
	  var options = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
	  var shouldSubscribe = Boolean(mapStateToProps);
	  var finalMapStateToProps = mapStateToProps || defaultMapStateToProps;
	  var finalMapDispatchToProps = _utilsIsPlainObject2['default'](mapDispatchToProps) ? _utilsWrapActionCreators2['default'](mapDispatchToProps) : mapDispatchToProps || defaultMapDispatchToProps;
	  var finalMergeProps = mergeProps || defaultMergeProps;
	  var shouldUpdateStateProps = finalMapStateToProps.length > 1;
	  var shouldUpdateDispatchProps = finalMapDispatchToProps.length > 1;
	  var _options$pure = options.pure;
	  var pure = _options$pure === undefined ? true : _options$pure;
	  var _options$withRef = options.withRef;
	  var withRef = _options$withRef === undefined ? false : _options$withRef;
	
	  // Helps track hot reloading.
	  var version = nextVersion++;
	
	  function computeStateProps(store, props) {
	    var state = store.getState();
	    var stateProps = shouldUpdateStateProps ? finalMapStateToProps(state, props) : finalMapStateToProps(state);
	
	    _invariant2['default'](_utilsIsPlainObject2['default'](stateProps), '`mapStateToProps` must return an object. Instead received %s.', stateProps);
	    return stateProps;
	  }
	
	  function computeDispatchProps(store, props) {
	    var dispatch = store.dispatch;
	
	    var dispatchProps = shouldUpdateDispatchProps ? finalMapDispatchToProps(dispatch, props) : finalMapDispatchToProps(dispatch);
	
	    _invariant2['default'](_utilsIsPlainObject2['default'](dispatchProps), '`mapDispatchToProps` must return an object. Instead received %s.', dispatchProps);
	    return dispatchProps;
	  }
	
	  function _computeNextState(stateProps, dispatchProps, parentProps) {
	    var mergedProps = finalMergeProps(stateProps, dispatchProps, parentProps);
	    _invariant2['default'](_utilsIsPlainObject2['default'](mergedProps), '`mergeProps` must return an object. Instead received %s.', mergedProps);
	    return mergedProps;
	  }
	
	  return function wrapWithConnect(WrappedComponent) {
	    var Connect = (function (_Component) {
	      _inherits(Connect, _Component);
	
	      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	        if (!pure) {
	          this.updateStateProps(nextProps);
	          this.updateDispatchProps(nextProps);
	          this.updateState(nextProps);
	          return true;
	        }
	
	        var storeChanged = nextState.storeState !== this.state.storeState;
	        var propsChanged = !_utilsShallowEqual2['default'](nextProps, this.props);
	        var mapStateProducedChange = false;
	        var dispatchPropsChanged = false;
	
	        if (storeChanged || propsChanged && shouldUpdateStateProps) {
	          mapStateProducedChange = this.updateStateProps(nextProps);
	        }
	
	        if (propsChanged && shouldUpdateDispatchProps) {
	          dispatchPropsChanged = this.updateDispatchProps(nextProps);
	        }
	
	        if (propsChanged || mapStateProducedChange || dispatchPropsChanged) {
	          this.updateState(nextProps);
	          return true;
	        }
	
	        return false;
	      };
	
	      function Connect(props, context) {
	        _classCallCheck(this, Connect);
	
	        _Component.call(this, props, context);
	        this.version = version;
	        this.store = props.store || context.store;
	
	        _invariant2['default'](this.store, 'Could not find "store" in either the context or ' + ('props of "' + this.constructor.displayName + '". ') + 'Either wrap the root component in a <Provider>, ' + ('or explicitly pass "store" as a prop to "' + this.constructor.displayName + '".'));
	
	        this.stateProps = computeStateProps(this.store, props);
	        this.dispatchProps = computeDispatchProps(this.store, props);
	        this.state = { storeState: null };
	        this.updateState();
	      }
	
	      Connect.prototype.computeNextState = function computeNextState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        return _computeNextState(this.stateProps, this.dispatchProps, props);
	      };
	
	      Connect.prototype.updateStateProps = function updateStateProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        var nextStateProps = computeStateProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextStateProps, this.stateProps)) {
	          return false;
	        }
	
	        this.stateProps = nextStateProps;
	        return true;
	      };
	
	      Connect.prototype.updateDispatchProps = function updateDispatchProps() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        var nextDispatchProps = computeDispatchProps(this.store, props);
	        if (_utilsShallowEqual2['default'](nextDispatchProps, this.dispatchProps)) {
	          return false;
	        }
	
	        this.dispatchProps = nextDispatchProps;
	        return true;
	      };
	
	      Connect.prototype.updateState = function updateState() {
	        var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	
	        this.nextState = this.computeNextState(props);
	      };
	
	      Connect.prototype.isSubscribed = function isSubscribed() {
	        return typeof this.unsubscribe === 'function';
	      };
	
	      Connect.prototype.trySubscribe = function trySubscribe() {
	        if (shouldSubscribe && !this.unsubscribe) {
	          this.unsubscribe = this.store.subscribe(this.handleChange.bind(this));
	          this.handleChange();
	        }
	      };
	
	      Connect.prototype.tryUnsubscribe = function tryUnsubscribe() {
	        if (this.unsubscribe) {
	          this.unsubscribe();
	          this.unsubscribe = null;
	        }
	      };
	
	      Connect.prototype.componentDidMount = function componentDidMount() {
	        this.trySubscribe();
	      };
	
	      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
	        this.tryUnsubscribe();
	      };
	
	      Connect.prototype.handleChange = function handleChange() {
	        if (!this.unsubscribe) {
	          return;
	        }
	
	        this.setState({
	          storeState: this.store.getState()
	        });
	      };
	
	      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
	        _invariant2['default'](withRef, 'To access the wrapped instance, you need to specify ' + '{ withRef: true } as the fourth argument of the connect() call.');
	
	        return this.refs.wrappedInstance;
	      };
	
	      Connect.prototype.render = function render() {
	        var ref = withRef ? 'wrappedInstance' : null;
	        return _react2['default'].createElement(WrappedComponent, _extends({}, this.nextState, { ref: ref }));
	      };
	
	      return Connect;
	    })(_react.Component);
	
	    Connect.displayName = 'Connect(' + getDisplayName(WrappedComponent) + ')';
	    Connect.WrappedComponent = WrappedComponent;
	    Connect.contextTypes = {
	      store: _utilsStoreShape2['default']
	    };
	    Connect.propTypes = {
	      store: _utilsStoreShape2['default']
	    };
	
	    if (process.env.NODE_ENV !== 'production') {
	      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
	        if (this.version === version) {
	          return;
	        }
	
	        // We are hot reloading!
	        this.version = version;
	
	        // Update the state and bindings.
	        this.trySubscribe();
	        this.updateStateProps();
	        this.updateDispatchProps();
	        this.updateState();
	      };
	    }
	
	    return _hoistNonReactStatics2['default'](Connect, WrappedComponent);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 177 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports["default"] = shallowEqual;
	
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var hasOwn = Object.prototype.hasOwnProperty;
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	module.exports = exports["default"];

/***/ },
/* 178 */
166,
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrapActionCreators;
	
	var _redux = __webpack_require__(164);
	
	function wrapActionCreators(actionCreators) {
	  return function (dispatch) {
	    return _redux.bindActionCreators(actionCreators, dispatch);
	  };
	}
	
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports) {

	/**
	 * Copyright 2015, Yahoo! Inc.
	 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	 */
	'use strict';
	
	var REACT_STATICS = {
	    childContextTypes: true,
	    contextTypes: true,
	    defaultProps: true,
	    displayName: true,
	    getDefaultProps: true,
	    mixins: true,
	    propTypes: true,
	    type: true
	};
	
	var KNOWN_STATICS = {
	    name: true,
	    length: true,
	    prototype: true,
	    caller: true,
	    arguments: true,
	    arity: true
	};
	
	module.exports = function hoistNonReactStatics(targetComponent, sourceComponent) {
	    var keys = Object.getOwnPropertyNames(sourceComponent);
	    for (var i=0; i<keys.length; ++i) {
	        if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]]) {
	            targetComponent[keys[i]] = sourceComponent[keys[i]];
	        }
	    }
	
	    return targetComponent;
	};


/***/ },
/* 181 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	'use strict';
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var __DEV__ = process.env.NODE_ENV !== 'production';
	
	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (__DEV__) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        'Invariant Violation: ' +
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _redux = __webpack_require__(164);
	
	// Action types
	
	var _actions = __webpack_require__(183);
	
	// Action constants
	
	/*
		Reducers
	*/
	var disp = _actions.displayModes.RECORD;
	
	var display = function display(state, action) {
		if (state === undefined) state = disp;
		return action.type === _actions.SET_DISPLAY ? action.display : state;
	};
	var source = function source(state, action) {
		if (state === undefined) state = 0;
		return action.type === _actions.SET_SOURCE ? action.source : state;
	};
	var sources = function sources(state, action) {
		if (state === undefined) state = [];
		return action.type === _actions.SET_SOURCES ? action.sources : state;
	};
	var stream = function stream(state, action) {
		if (state === undefined) state = '';
		return action.type === _actions.SET_STREAM ? action.stream : state;
	};
	var recording = function recording(state, action) {
		if (state === undefined) state = false;
		return action.type === _actions.RECORD_VIDEO ? action.recording : state;
	};
	
	// function renderMode(state = renderModes.LIGHTER, action) {
	// 	if ( action.type !== SET_RENDER ) return state
	// 	return action.mode
	// }
	
	// function renderRange(state = renderRange, action) {
	// 	if ( action.type !== SET_RANGE ) return state
	// 	// return action...
	// }
	
	/*
		Combine reducers
	*/
	
	var app = (0, _redux.combineReducers)({
		source: source,
		sources: sources,
		stream: stream,
		recording: recording,
		display: display
		// playMode,
		// renderMode,
		// renderRange
	});
	
	exports['default'] = app;
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports) {

	/*
		action types
	*/
	
	// App display management
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	var SET_DISPLAY = 'SET_DISPLAY';
	
	exports.SET_DISPLAY = SET_DISPLAY;
	// Capture and transport actions
	var SET_SOURCE = 'SET_SOURCE';
	exports.SET_SOURCE = SET_SOURCE;
	var SET_SOURCES = 'SET_SOURCES';
	exports.SET_SOURCES = SET_SOURCES;
	var SET_STREAM = 'SET_STREAM';
	
	exports.SET_STREAM = SET_STREAM;
	var RECORD_VIDEO = 'RECORD_VIDEO';
	exports.RECORD_VIDEO = RECORD_VIDEO;
	var UPLOAD_VIDEO = 'UPLOAD_VIDEO';
	exports.UPLOAD_VIDEO = UPLOAD_VIDEO;
	var PLAY_VIDEO = 'PLAY_VIDEO';
	
	exports.PLAY_VIDEO = PLAY_VIDEO;
	// Render actions
	var SET_RANGE = 'SET_RANGE';
	exports.SET_RANGE = SET_RANGE;
	var SET_RENDER = 'SET_RENDER';
	exports.SET_RENDER = SET_RENDER;
	var START_RENDER = 'START_RENDER';
	
	exports.START_RENDER = START_RENDER;
	/*
		Action constants...
	*/
	
	var displayModes = {
		RECORD: 'RECORD',
		PLAYBACK: 'PLAYBACK',
		RENDER: 'RENDER'
	};
	
	exports.displayModes = displayModes;
	var playModes = {
		PLAY: 'PLAY',
		PAUSE: 'PAUSE',
		STOP: 'STOP'
	};
	
	exports.playModes = playModes;
	var renderModes = {
		LIGHTER: 'LIGHTER'
	};
	
	exports.renderModes = renderModes;
	var renderRange = {
		FROM: 0,
		TO: 1
	};
	
	exports.renderRange = renderRange;
	/*
		action creators
	*/
	
	// App display management
	var setDisplay = function setDisplay(display) {
		return { type: SET_DISPLAY, display: display };
	};
	
	exports.setDisplay = setDisplay;
	// Capture source management actions
	var setSource = function setSource(source) {
		return { type: SET_SOURCE, source: source };
	};
	exports.setSource = setSource;
	var setSources = function setSources(sources) {
		return { type: SET_SOURCES, sources: sources };
	};
	exports.setSources = setSources;
	var setStream = function setStream(stream) {
		return { type: SET_STREAM, stream: stream };
	};
	
	exports.setStream = setStream;
	// Capture and transport action creators
	var recordVideo = function recordVideo(recording) {
		return { type: RECORD_VIDEO, recording: recording };
	};
	exports.recordVideo = recordVideo;
	var uploadVideo = function uploadVideo(video) {
		return { type: UPLOAD_VIDEO, video: video };
	};
	exports.uploadVideo = uploadVideo;
	var playVideo = function playVideo(mode) {
		return { type: PLAY_VIDEO, mode: mode };
	};
	
	exports.playVideo = playVideo;
	// Render action creators
	var setRenderRange = function setRenderRange(mode, value) {
		return { type: SET_RANGE, mode: mode, value: value };
	};
	exports.setRenderRange = setRenderRange;
	var setRenderMode = function setRenderMode(mode) {
		return { type: SET_RENDER, mode: mode };
	};
	exports.setRenderMode = setRenderMode;
	var render = function render() {
		return { type: START_RENDER };
	};
	exports.render = render;

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(185)['default'];
	
	var _inherits = __webpack_require__(199)['default'];
	
	var _createClass = __webpack_require__(210)['default'];
	
	var _classCallCheck = __webpack_require__(213)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(173);
	
	// Actions
	
	var _actions = __webpack_require__(183);
	
	// Components
	
	var _Media = __webpack_require__(214);
	
	var _Media2 = _interopRequireDefault(_Media);
	
	var _controlsDropdown = __webpack_require__(215);
	
	var _controlsDropdown2 = _interopRequireDefault(_controlsDropdown);
	
	// Controllers
	
	var _controllersMedia = __webpack_require__(216);
	
	var _controllersMedia2 = _interopRequireDefault(_controllersMedia);
	
	// Action constants
	
	var App = (function (_React$Component) {
		_inherits(App, _React$Component);
	
		function App() {
			_classCallCheck(this, App);
	
			_get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
		}
	
		// Should probably select from the state...
	
		_createClass(App, [{
			key: 'record',
			value: function record(recording) {
				// Start/Stop recording in media manager
				_controllersMedia2['default'].record(!recording);
				this.props.dispatch((0, _actions.recordVideo)(!this.props.recording));
			}
		}, {
			key: 'render',
			value: function render() {
				var _this = this;
	
				var transport = undefined;
				var _props = this.props;
				var dispatch = _props.dispatch;
				var visibleTodos = _props.visibleTodos;
				var visibilityFilter = _props.visibilityFilter;
	
				console.log(this.props.display);
	
				switch (this.props.display) {
					case _actions.displayModes.RECORD:
						transport = _react2['default'].createElement(
							'div',
							{ className: 'btn-group center' },
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-' + (this.props.recording ? 'danger' : 'secondary') + '-outline', onClick: function (e) {
										return _this.record(_this.props.recording);
									} },
								'RECORD'
							),
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-secondary-outline', onClick: function (e) {
										return _controllersMedia2['default'].upload();
									} },
								'UPLOAD'
							)
						);
	
						break;
	
					case _actions.displayModes.PLAYBACK:
						transport = _react2['default'].createElement(
							'div',
							{ className: 'btn-group center' },
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-secondary-outline', onClick: function (e) {
										return _controllersMedia2['default'].upload();
									} },
								'<<'
							),
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-' + (this.props.recording ? 'danger' : 'secondary') + '-outline', onClick: function (e) {
										return _this.record(_this.props.recording);
									} },
								'RECORD'
							),
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-secondary-outline', onClick: function (e) {
										return _controllersMedia2['default'].upload();
									} },
								'>>'
							)
						);
	
						break;
	
					case _actions.displayModes.RENDER:
						transport = _react2['default'].createElement(
							'div',
							{ className: 'btn-group center' },
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-' + (this.props.recording ? 'danger' : 'secondary') + '-outline', onClick: function (e) {
										return _this.record(_this.props.recording);
									} },
								'RECORD'
							),
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-secondary-outline', onClick: function (e) {
										return _controllersMedia2['default'].upload();
									} },
								'UPLOAD'
							)
						);
	
						break;
				}
	
				// Return template
				return _react2['default'].createElement(
					'div',
					{ className: 'app flicker scanlines' },
					_react2['default'].createElement(_Media2['default'], {
						stream: this.props.stream,
						onMount: function (video) {
							return _controllersMedia2['default'].setElement(video);
						}
					}),
					_react2['default'].createElement(
						'div',
						{ className: 'controls container-fluid' },
						_react2['default'].createElement(
							'div',
							{ className: 'source' },
							_react2['default'].createElement(_controlsDropdown2['default'], {
								options: this.props.sources,
								selected: this.props.source,
								onSelect: function (i) {
									return dispatch((0, _actions.setSource)(i));
								}
							})
						),
						_react2['default'].createElement(
							'div',
							{ className: 'transport' },
							transport
						)
					)
				);
			}
		}]);
	
		return App;
	})(_react2['default'].Component);
	
	function select(state) {
		return state;
	}
	
	exports['default'] = (0, _reactRedux.connect)(select)(App);
	module.exports = exports['default'];

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$getOwnPropertyDescriptor = __webpack_require__(186)["default"];
	
	exports["default"] = function get(_x, _x2, _x3) {
	  var _again = true;
	
	  _function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;
	    desc = parent = getter = undefined;
	    _again = false;
	    if (object === null) object = Function.prototype;
	
	    var desc = _Object$getOwnPropertyDescriptor(object, property);
	
	    if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);
	
	      if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;
	        _x2 = property;
	        _x3 = receiver;
	        _again = true;
	        continue _function;
	      }
	    } else if ("value" in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;
	
	      if (getter === undefined) {
	        return undefined;
	      }
	
	      return getter.call(receiver);
	    }
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(187), __esModule: true };

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(188);
	__webpack_require__(189);
	module.exports = function getOwnPropertyDescriptor(it, key){
	  return $.getDesc(it, key);
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(190);
	
	__webpack_require__(194)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(191)
	  , defined = __webpack_require__(193);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(192);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 192 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 193 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	module.exports = function(KEY, exec){
	  var $def = __webpack_require__(195)
	    , fn   = (__webpack_require__(197).Object || {})[KEY] || Object[KEY]
	    , exp  = {};
	  exp[KEY] = exec(fn);
	  $def($def.S + $def.F * __webpack_require__(198)(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(196)
	  , core      = __webpack_require__(197)
	  , PROTOTYPE = 'prototype';
	var ctx = function(fn, that){
	  return function(){
	    return fn.apply(that, arguments);
	  };
	};
	var $def = function(type, name, source){
	  var key, own, out, exp
	    , isGlobal = type & $def.G
	    , isProto  = type & $def.P
	    , target   = isGlobal ? global : type & $def.S
	        ? global[name] : (global[name] || {})[PROTOTYPE]
	    , exports  = isGlobal ? core : core[name] || (core[name] = {});
	  if(isGlobal)source = name;
	  for(key in source){
	    // contains in native
	    own = !(type & $def.F) && target && key in target;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    if(isGlobal && typeof target[key] != 'function')exp = source[key];
	    // bind timers to global for call from export context
	    else if(type & $def.B && own)exp = ctx(out, global);
	    // wrap global constructors for prevent change them in library
	    else if(type & $def.W && target[key] == out)!function(C){
	      exp = function(param){
	        return this instanceof C ? new C(param) : C(param);
	      };
	      exp[PROTOTYPE] = C[PROTOTYPE];
	    }(out);
	    else exp = isProto && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export
	    exports[key] = exp;
	    if(isProto)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
	  }
	};
	// type bitmap
	$def.F = 1;  // forced
	$def.G = 2;  // global
	$def.S = 4;  // static
	$def.P = 8;  // proto
	$def.B = 16; // bind
	$def.W = 32; // wrap
	module.exports = $def;

/***/ },
/* 196 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 197 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.3'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$create = __webpack_require__(200)["default"];
	
	var _Object$setPrototypeOf = __webpack_require__(202)["default"];
	
	exports["default"] = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = _Object$create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _Object$setPrototypeOf ? _Object$setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	exports.__esModule = true;

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(201), __esModule: true };

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(188);
	module.exports = function create(P, D){
	  return $.create(P, D);
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(203), __esModule: true };

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(204);
	module.exports = __webpack_require__(197).Object.setPrototypeOf;

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $def = __webpack_require__(195);
	$def($def.S, 'Object', {setPrototypeOf: __webpack_require__(205).set});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(188).getDesc
	  , isObject = __webpack_require__(206)
	  , anObject = __webpack_require__(207);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(208)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(206);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(209);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Object$defineProperty = __webpack_require__(211)["default"];
	
	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	
	      _Object$defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();
	
	exports.__esModule = true;

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(212), __esModule: true };

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(188);
	module.exports = function defineProperty(it, key, desc){
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 213 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	exports.__esModule = true;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(185)['default'];
	
	var _inherits = __webpack_require__(199)['default'];
	
	var _createClass = __webpack_require__(210)['default'];
	
	var _classCallCheck = __webpack_require__(213)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var Media = (function (_React$Component) {
		_inherits(Media, _React$Component);
	
		function Media() {
			_classCallCheck(this, Media);
	
			_get(Object.getPrototypeOf(Media.prototype), 'constructor', this).apply(this, arguments);
		}
	
		_createClass(Media, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				this.setStream(nextProps.stream);
				return false;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var elm = _reactDom2['default'].findDOMNode(this);
	
				// Get elements
				this.vid = elm.getElementsByTagName('video')[0];
				this.img = elm.getElementsByTagName('img')[0];
	
				this.props.onMount(this.vid);
			}
		}, {
			key: 'setStream',
			value: function setStream(streamUrl) {
				this.vid.src = streamUrl;
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ className: 'media-preview' },
					_react2['default'].createElement('video', { className: 'media-preview-video', autoPlay: true, loop: true }),
					_react2['default'].createElement('img', { className: 'media-preview-image' })
				);
			}
		}]);
	
		return Media;
	})(_react2['default'].Component);
	
	exports['default'] = Media;
	module.exports = exports['default'];

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(185)['default'];
	
	var _inherits = __webpack_require__(199)['default'];
	
	var _createClass = __webpack_require__(210)['default'];
	
	var _classCallCheck = __webpack_require__(213)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var List = (function (_React$Component) {
		_inherits(List, _React$Component);
	
		function List() {
			_classCallCheck(this, List);
	
			_get(Object.getPrototypeOf(List.prototype), 'constructor', this).call(this);
	
			this.state = {
				open: false
			};
		}
	
		_createClass(List, [{
			key: 'open',
			value: function open(e) {
				this.setState({ open: !this.state.open });
			}
		}, {
			key: 'select',
			value: function select(i) {
				var _this = this;
	
				setTimeout(function () {
					return _this.props.onSelect(i, _this.props.options[i]);
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				var options = this.props.options.map(function (option, i) {
					return _react2['default'].createElement(
						'a',
						{
							key: i,
							className: 'dropdown-item ' + (_this2.props.selected === i ? 'active' : ''),
							onClick: function (e) {
								return _this2.select(i);
							}
						},
						option
					);
				});
	
				return _react2['default'].createElement(
					'div',
					{ className: 'dropdown ' + (this.state.open ? 'open' : ''), onClick: function (e) {
							return _this2.open(e);
						} },
					_react2['default'].createElement(
						'button',
						{ className: 'btn btn-sm btn-secondary-outline dropdown-toggle' },
						this.props.options[this.props.selected]
					),
					_react2['default'].createElement(
						'div',
						{ className: 'dropdown-menu' },
						options
					)
				);
			}
		}]);
	
		return List;
	})(_react2['default'].Component);
	
	exports['default'] = List;
	module.exports = exports['default'];

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(185)['default'];
	
	var _inherits = __webpack_require__(199)['default'];
	
	var _createClass = __webpack_require__(210)['default'];
	
	var _classCallCheck = __webpack_require__(213)['default'];
	
	var _Promise = __webpack_require__(217)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _recordrtc = __webpack_require__(258);
	
	var _recordrtc2 = _interopRequireDefault(_recordrtc);
	
	var _eventemitter3 = __webpack_require__(259);
	
	var _eventemitter32 = _interopRequireDefault(_eventemitter3);
	
	// Shim getUserMedia
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	window.URL = webkitURL || URL;
	
	// Create upload input
	var input = document.createElement('input');
	input.type = 'file';
	input.accept = 'video/*';
	
	var MediaManager = (function (_EventEmitter) {
		_inherits(MediaManager, _EventEmitter);
	
		function MediaManager() {
			_classCallCheck(this, MediaManager);
	
			_get(Object.getPrototypeOf(MediaManager.prototype), 'constructor', this).call(this);
	
			// Create a canvas context
			this.ctx = document.createElement('CANVAS').getContext('2d');
	
			// Video capture settings
			this.constraints = {
				audio: false,
				video: {
					optional: [{ sourceId: null }, { minWidth: 320 }, { minWidth: 640 }, { minWidth: 1024 }, { minWidth: 1280 }, { minWidth: 1920 }, { minWidth: 2560 }, { minWidth: 9999 }]
				}
			};
	
			// Get available video sources
			this.sources = [];
		}
	
		// Export a singleton instance of the media manager
	
		// Get available video sources
	
		_createClass(MediaManager, [{
			key: 'getSources',
			value: function getSources() {
				var _this = this;
	
				return new _Promise(function (resolve, reject) {
					// Request all media streaming sources
					MediaStreamTrack.getSources(function (sources) {
	
						// Filter video source only
						_this.sources = sources.filter(function (source) {
							return source.kind === 'video';
						});
	
						// Map labels for display
						_this.sourcesMap = _this.sources.map(function (source) {
							return source.label;
						});
	
						// Trigger `sources` event to update source list outside
						_this.emit('sources', _this.sourcesMap);
	
						// Resolve the promise with a list of video sources
						resolve(_this.sources);
					});
				});
			}
		}, {
			key: 'setElement',
			value: function setElement(video) {
				this.video = video;
			}
		}, {
			key: 'getSource',
			value: function getSource() {}
	
			// Get available video stream
		}, {
			key: 'getStream',
			value: function getStream() {
				var _this2 = this;
	
				return new _Promise(function (resolve, reject) {
					if (_this2.stream) {
						_this2.emit('stream', URL.createObjectURL(_this2.stream), true);
						return resolve(URL.createObjectURL(_this2.stream));
					}
	
					_this2.getSources().then(function (sources) {
						// TEMP: needs to match source selection, not first available
						_this2.constraints.video.optional[0].sourceId = _this2.sources[0];
	
						navigator.getUserMedia(_this2.constraints, function (stream) {
							_this2.stream = stream;
							_this2.streamUrl = URL.createObjectURL(_this2.stream);
	
							// Resolve promise
							resolve(_this2.streamUrl);
	
							// Emit a new streaming event with new source URL
							_this2.emit('stream', _this2.streamUrl, true);
						}, function (error) {
							return reject('bummer...');
						});
					})['catch'](function (e) {
						return reject(e);
					});
				});
			}
		}, {
			key: 'setSource',
			value: function setSource() {}
		}, {
			key: 'record',
			value: function record(rec) {
				var _this3 = this;
	
				// `rec` is a boolean for start/stop
	
				if (rec) {
					// Clear previous recordings
					this.recorder && this.recorder.clearRecordedData();
	
					// Initialize recorder with source video parameters
					this.recorder = new _recordrtc2['default'](this.stream, {
						type: 'video',
						quality: 1,
						numberOfAudioChannels: 0,
						video: {
							width: this.video.videoWidth,
							height: this.video.videoHeight
						},
						canvas: {
							width: this.video.videoWidth,
							height: this.video.videoHeight
						}
					});
	
					// Start new recording
					this.recorder.startRecording();
				} else {
					// Stop recording
					this.recorder.stopRecording(function (streamUrl) {
						return _this3.emit('stream', streamUrl);
					});
				}
			}
		}, {
			key: 'capture',
			value: function capture() {}
		}, {
			key: 'upload',
			value: function upload() {
				var _this4 = this;
	
				input.onchange = function (value) {
					return _this4.handleUpload(input.files[0]);
				};
				input.click();
			}
		}, {
			key: 'handleUpload',
			value: function handleUpload(file) {
				console.log(file);
				this.file = file;
				this.emit('stream', file.path); //URL.createObjectURL(file))
			}
		}]);
	
		return MediaManager;
	})(_eventemitter32['default']);
	
	exports['default'] = new MediaManager();
	module.exports = exports['default'];

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(218), __esModule: true };

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(236);
	__webpack_require__(240);
	module.exports = __webpack_require__(197).Promise;

/***/ },
/* 219 */
/***/ function(module, exports) {



/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(221)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(223)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(222)
	  , defined   = __webpack_require__(193);
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l
	      || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	        ? TO_STRING ? s.charAt(i) : a
	        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 222 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(224)
	  , $def            = __webpack_require__(195)
	  , $redef          = __webpack_require__(225)
	  , hide            = __webpack_require__(226)
	  , has             = __webpack_require__(229)
	  , SYMBOL_ITERATOR = __webpack_require__(230)('iterator')
	  , Iterators       = __webpack_require__(233)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(234)(Constructor, NAME, next);
	  var createMethod = function(kind){
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG      = NAME + ' Iterator'
	    , proto    = Base.prototype
	    , _native  = proto[SYMBOL_ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , _default = _native || createMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if(_native){
	    var IteratorPrototype = __webpack_require__(188).getProto(_default.call(new Base));
	    // Set @@toStringTag to native iterators
	    __webpack_require__(235)(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, SYMBOL_ITERATOR, returnThis);
	  }
	  // Define iterator
	  if(!LIBRARY || FORCE)hide(proto, SYMBOL_ITERATOR, _default);
	  // Plug for library
	  Iterators[NAME] = _default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEFAULT == VALUES ? _default : createMethod(VALUES),
	      keys:    IS_SET            ? _default : createMethod(KEYS),
	      entries: DEFAULT != VALUES ? _default : createMethod('entries')
	    };
	    if(FORCE)for(key in methods){
	      if(!(key in proto))$redef(proto, key, methods[key]);
	    } else $def($def.P + $def.F * BUGGY, NAME, methods);
	  }
	};

/***/ },
/* 224 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(226);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(188)
	  , createDesc = __webpack_require__(227);
	module.exports = __webpack_require__(228) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 227 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(198)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 229 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(231)('wks')
	  , Symbol = __webpack_require__(196).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(232))('Symbol.' + name));
	};

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(196)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 233 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(188)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(226)(IteratorPrototype, __webpack_require__(230)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(227)(1,next)});
	  __webpack_require__(235)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(188).setDesc
	  , has = __webpack_require__(229)
	  , TAG = __webpack_require__(230)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(237);
	var Iterators = __webpack_require__(233);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(238)
	  , step       = __webpack_require__(239)
	  , Iterators  = __webpack_require__(233)
	  , toIObject  = __webpack_require__(190);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(223)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	setUnscope('keys');
	setUnscope('values');
	setUnscope('entries');

/***/ },
/* 238 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 239 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(188)
	  , LIBRARY    = __webpack_require__(224)
	  , global     = __webpack_require__(196)
	  , ctx        = __webpack_require__(208)
	  , classof    = __webpack_require__(241)
	  , $def       = __webpack_require__(195)
	  , isObject   = __webpack_require__(206)
	  , anObject   = __webpack_require__(207)
	  , aFunction  = __webpack_require__(209)
	  , strictNew  = __webpack_require__(242)
	  , forOf      = __webpack_require__(243)
	  , setProto   = __webpack_require__(205).set
	  , same       = __webpack_require__(248)
	  , species    = __webpack_require__(249)
	  , SPECIES    = __webpack_require__(230)('species')
	  , speciesConstructor = __webpack_require__(250)
	  , RECORD     = __webpack_require__(232)('record')
	  , asap       = __webpack_require__(251)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var useNative = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(228)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var isPromise = function(it){
	  return isObject(it) && (useNative ? classof(it) == 'Promise' : RECORD in it);
	};
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(react){
	      var cb = ok ? react.ok : react.fail
	        , ret, then;
	      try {
	        if(cb){
	          if(!ok)record.h = true;
	          ret = cb === true ? value : cb(value);
	          if(ret === react.P){
	            react.rej(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(ret)){
	            then.call(ret, react.res, react.rej);
	          } else react.res(ret);
	        } else react.rej(value);
	      } catch(err){
	        react.rej(err);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise[RECORD]
	    , chain  = record.a || record.c
	    , i      = 0
	    , react;
	  if(record.h)return false;
	  while(chain.length > i){
	    react = chain[i++];
	    if(react.fail || !isUnhandled(react.P))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!useNative){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    this[RECORD] = record;
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(256)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var react = {
	        ok:   typeof onFulfilled == 'function' ? onFulfilled : true,
	        fail: typeof onRejected == 'function'  ? onRejected  : false
	      };
	      var promise = react.P = new (speciesConstructor(this, P))(function(res, rej){
	        react.res = res;
	        react.rej = rej;
	      });
	      aFunction(react.res);
	      aFunction(react.rej);
	      var record = this[RECORD];
	      record.c.push(react);
	      if(record.a)record.a.push(react);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	// export
	$def($def.G + $def.W + $def.F * !useNative, {Promise: P});
	__webpack_require__(235)(P, PROMISE);
	species(P);
	species(Wrapper = __webpack_require__(197)[PROMISE]);
	
	// statics
	$def($def.S + $def.F * !useNative, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    return new this(function(res, rej){ rej(r); });
	  }
	});
	$def($def.S + $def.F * (!useNative || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    return isPromise(x) && sameConstructor(x.constructor, this)
	      ? x : new this(function(res){ res(x); });
	  }
	});
	$def($def.S + $def.F * !(useNative && __webpack_require__(257)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C      = getConstructor(this)
	      , values = [];
	    return new C(function(res, rej){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        C.resolve(promise).then(function(value){
	          results[index] = value;
	          --remaining || res(results);
	        }, rej);
	      });
	      else res(results);
	    });
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C = getConstructor(this);
	    return new C(function(res, rej){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(res, rej);
	      });
	    });
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(192)
	  , TAG = __webpack_require__(230)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(208)
	  , call        = __webpack_require__(244)
	  , isArrayIter = __webpack_require__(245)
	  , anObject    = __webpack_require__(207)
	  , toLength    = __webpack_require__(246)
	  , getIterFn   = __webpack_require__(247);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(207);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(233)
	  , ITERATOR  = __webpack_require__(230)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(222)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(241)
	  , ITERATOR  = __webpack_require__(230)('iterator')
	  , Iterators = __webpack_require__(233);
	module.exports = __webpack_require__(197).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(188)
	  , SPECIES = __webpack_require__(230)('species');
	module.exports = function(C){
	  if(__webpack_require__(228) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(207)
	  , aFunction = __webpack_require__(209)
	  , SPECIES   = __webpack_require__(230)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(196)
	  , macrotask = __webpack_require__(252).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , isNode    = __webpack_require__(192)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    if(domain)domain.enter();
	    head.fn.call(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(208)
	  , invoke             = __webpack_require__(253)
	  , html               = __webpack_require__(254)
	  , cel                = __webpack_require__(255)
	  , global             = __webpack_require__(196)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(192)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 253 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(196).document && document.documentElement;

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(206)
	  , document = __webpack_require__(196).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(225);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(230)('iterator')
	  , SAFE_CLOSING    = false;
	try {
	  var riter = [7][SYMBOL_ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[SYMBOL_ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[SYMBOL_ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Last time updated at Thursday, October 22nd, 2015, 8:20:55 PM 
	
	// links:
	// Open-Sourced: https://github.com/muaz-khan/RecordRTC
	// https://cdn.WebRTC-Experiment.com/RecordRTC.js
	// https://www.WebRTC-Experiment.com/RecordRTC.js
	// npm install recordrtc
	// http://recordrtc.org/
	
	// updates?
	/*
	-. Added support for MediaRecorder API in Chrome. Currently requires: RecordRTC(stream, {recorderType: MediaStreamRecorder})
	-. mimeType, bitsPerSecond, audioBitsPerSecond, videoBitsPerSecond added.
	-. CanvasRecorder.js updated to support Firefox. (experimental)
	-. Now you can reuse single RecordRTC object i.e. stop/start/stop/start/ and so on.
	-. GifRecorder.js can now record HTMLCanvasElement|CanvasRenderingContext2D as well.
	-. added: frameInterval:20 for WhammyRecorder.js
	-. chrome issue  audio plus 720p-video recording can be fixed by setting bufferSize:16384
	-. fixed Firefox save-as dialog i.e. recordRTC.save('filen-name')
	-. "indexedDB" bug fixed for Firefox.
	-. numberOfAudioChannels:1 can be passed to reduce WAV size in Chrome.
	-. StereoRecorder.js is removed. It was redundant. Now RecordRTC is directly using: StereoAudioRecorder.js
	-. mergeProps is removed. It was redundant.
	-. reformatProps is removed. Now plz pass exact frameRate/sampleRate instead of frame-rate/sample-rate
	-. Firefox supports remote-audio-recording since v28 - RecordRTC(remoteStream, { recorderType: StereoAudioRecorder });
	-. added 3 methods: initRecorder, setRecordingDuration and clearRecordedData
	-. Microsoft Edge support added (only-audio-yet).
	-. You can pass "recorderType" - RecordRTC(stream, { recorderType: StereoAudioRecorder });
	-. If MediaStream is suddenly stopped in Firefox.
	-. Added "disableLogs"         - RecordRTC(stream, { disableLogs: true });
	-. You can pass "bufferSize:0" - RecordRTC(stream, { bufferSize: 0 });
	-. You can set "leftChannel"   - RecordRTC(stream, { leftChannel: true });
	-. Added functionality for analyse black frames and cut them - pull#293
	-. if you're recording GIF, you must link: https://cdn.webrtc-experiment.com/gif-recorder.js
	-. You can set "frameInterval" for video - RecordRTC(stream, { type: 'video', frameInterval: 100 });
	*/
	
	//------------------------------------
	
	// Browsers Support::
	// Chrome (all versions) [ audio/video separately ]
	// Firefox ( >= 29 ) [ audio/video in single webm/mp4 container or only audio in ogg ]
	// Opera (all versions) [ same as chrome ]
	// Android (Chrome) [ only video ]
	// Android (Opera) [ only video ]
	// Android (Firefox) [ only video ]
	// Microsoft Edge (Only Audio & Gif)
	
	//------------------------------------
	// Muaz Khan     - www.MuazKhan.com
	// MIT License   - www.WebRTC-Experiment.com/licence
	//------------------------------------
	// Note: RecordRTC.js is using 3 other libraries; you need to accept their licences as well.
	//------------------------------------
	// 1. RecordRTC.js
	// 2. MRecordRTC.js
	// 3. Cross-Browser-Declarations.js
	// 4. Storage.js
	// 5. MediaStreamRecorder.js
	// 6. StereoAudioRecorder.js
	// 7. CanvasRecorder.js
	// 8. WhammyRecorder.js
	// 9. Whammy.js
	// 10. DiskStorage.js
	// 11. GifRecorder.js
	//------------------------------------
	
	'use strict';
	
	// ____________
	// RecordRTC.js
	
	/**
	 * {@link https://github.com/muaz-khan/RecordRTC|RecordRTC} is a JavaScript-based media-recording library for modern web-browsers (supporting WebRTC getUserMedia API). It is optimized for different devices and browsers to bring all client-side (pluginfree) recording solutions in single place.
	 * @summary JavaScript audio/video recording library runs top over WebRTC getUserMedia API.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef RecordRTC
	 * @class
	 * @example
	 * var recordRTC = RecordRTC(mediaStream, {
	 *     type: 'video' // audio or video or gif or canvas
	 * });
	 *
	 * // or, you can even use keyword "new"
	 * var recordRTC = new RecordRTC(mediaStream[, config]);
	 * @see For further information:
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
	 */
	
	function RecordRTC(mediaStream, config) {
	    if (!mediaStream) {
	        throw 'MediaStream is mandatory.';
	    }
	
	    config = new RecordRTCConfiguration(mediaStream, config);
	
	    // a reference to user's recordRTC object
	    var self = this;
	
	    function startRecording() {
	        if (!config.disableLogs) {
	            console.debug('started recording ' + config.type + ' stream.');
	        }
	
	        if (mediaRecorder) {
	            mediaRecorder.clearRecordedData();
	            mediaRecorder.resume();
	
	            if (self.recordingDuration) {
	                handleRecordingDuration();
	            }
	            return self;
	        }
	
	        initRecorder(function() {
	            if (self.recordingDuration) {
	                handleRecordingDuration();
	            }
	        });
	
	        return self;
	    }
	
	    function initRecorder(initCallback) {
	        if (!config.disableLogs) {
	            console.debug('initializing ' + config.type + ' stream recorder.');
	        }
	
	        if (initCallback) {
	            config.initCallback = function() {
	                initCallback();
	                initCallback = config.initCallback = null; // recordRTC.initRecorder should be call-backed once.
	            };
	        }
	
	        var Recorder = new GetRecorderType(mediaStream, config);
	
	        mediaRecorder = new Recorder(mediaStream, config);
	        mediaRecorder.record();
	    }
	
	    function stopRecording(callback) {
	        if (!mediaRecorder) {
	            return console.warn(WARNING);
	        }
	
	        /*jshint validthis:true */
	        var recordRTC = this;
	
	        if (!config.disableLogs) {
	            console.warn('Stopped recording ' + config.type + ' stream.');
	        }
	
	        if (config.type !== 'gif') {
	            mediaRecorder.stop(_callback);
	        } else {
	            mediaRecorder.stop();
	            _callback();
	        }
	
	        function _callback() {
	            for (var item in mediaRecorder) {
	                if (self) {
	                    self[item] = mediaRecorder[item];
	                }
	
	                if (recordRTC) {
	                    recordRTC[item] = mediaRecorder[item];
	                }
	            }
	
	            var blob = mediaRecorder.blob;
	            if (callback) {
	                var url = URL.createObjectURL(blob);
	                callback(url);
	            }
	
	            if (blob && !config.disableLogs) {
	                console.debug(blob.type, '->', bytesToSize(blob.size));
	            }
	
	            if (!config.autoWriteToDisk) {
	                return;
	            }
	
	            getDataURL(function(dataURL) {
	                var parameter = {};
	                parameter[config.type + 'Blob'] = dataURL;
	                DiskStorage.Store(parameter);
	            });
	        }
	    }
	
	    function pauseRecording() {
	        if (!mediaRecorder) {
	            return console.warn(WARNING);
	        }
	
	        mediaRecorder.pause();
	
	        if (!config.disableLogs) {
	            console.debug('Paused recording.');
	        }
	    }
	
	    function resumeRecording() {
	        if (!mediaRecorder) {
	            return console.warn(WARNING);
	        }
	
	        // not all libs yet having  this method
	        mediaRecorder.resume();
	
	        if (!config.disableLogs) {
	            console.debug('Resumed recording.');
	        }
	    }
	
	    function getDataURL(callback, _mediaRecorder) {
	        if (!callback) {
	            throw 'Pass a callback function over getDataURL.';
	        }
	
	        var blob = _mediaRecorder ? _mediaRecorder.blob : mediaRecorder.blob;
	
	        if (!blob) {
	            if (!config.disableLogs) {
	                console.warn('Blob encoder did not yet finished its job.');
	            }
	
	            setTimeout(function() {
	                getDataURL(callback, _mediaRecorder);
	            }, 1000);
	            return;
	        }
	
	        if (typeof Worker !== 'undefined') {
	            var webWorker = processInWebWorker(function readFile(_blob) {
	                postMessage(new FileReaderSync().readAsDataURL(_blob));
	            });
	
	            webWorker.onmessage = function(event) {
	                callback(event.data);
	            };
	
	            webWorker.postMessage(blob);
	        } else {
	            var reader = new FileReader();
	            reader.readAsDataURL(blob);
	            reader.onload = function(event) {
	                callback(event.target.result);
	            };
	        }
	
	        function processInWebWorker(_function) {
	            var blob = URL.createObjectURL(new Blob([_function.toString(),
	                'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
	            ], {
	                type: 'application/javascript'
	            }));
	
	            var worker = new Worker(blob);
	            URL.revokeObjectURL(blob);
	            return worker;
	        }
	    }
	
	    function handleRecordingDuration() {
	        setTimeout(function() {
	            stopRecording(self.onRecordingStopped);
	        }, self.recordingDuration);
	    }
	
	    var WARNING = 'It seems that "startRecording" is not invoked for ' + config.type + ' recorder.';
	
	    var mediaRecorder;
	
	    var returnObject = {
	        /**
	         * This method starts recording. It doesn't take any argument.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.startRecording();
	         */
	        startRecording: startRecording,
	
	        /**
	         * This method stops recording. It takes single "callback" argument. It is suggested to get blob or URI in the callback to make sure all encoders finished their jobs.
	         * @param {function} callback - This callback function is invoked after completion of all encoding jobs.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function(videoURL) {
	         *     video.src = videoURL;
	         *     recordRTC.blob; recordRTC.buffer;
	         * });
	         */
	        stopRecording: stopRecording,
	
	        /**
	         * This method pauses the recording process.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.pauseRecording();
	         */
	        pauseRecording: pauseRecording,
	
	        /**
	         * This method resumes the recording process.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.resumeRecording();
	         */
	        resumeRecording: resumeRecording,
	
	        /**
	         * This method initializes the recording process.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.initRecorder();
	         */
	        initRecorder: initRecorder,
	
	        /**
	         * This method initializes the recording process.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.initRecorder();
	         */
	        setRecordingDuration: function(milliseconds, callback) {
	            if (typeof milliseconds === 'undefined') {
	                throw 'milliseconds is required.';
	            }
	
	            if (typeof milliseconds !== 'number') {
	                throw 'milliseconds must be a number.';
	            }
	
	            self.recordingDuration = milliseconds;
	            self.onRecordingStopped = callback || function() {};
	
	            return {
	                onRecordingStopped: function(callback) {
	                    self.onRecordingStopped = callback;
	                }
	            };
	        },
	
	        /**
	         * This method can be used to clear/reset all the recorded data.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.clearRecordedData();
	         */
	        clearRecordedData: function() {
	            if (!mediaRecorder) {
	                return console.warn(WARNING);
	            }
	
	            mediaRecorder.clearRecordedData();
	
	            if (!config.disableLogs) {
	                console.debug('Cleared old recorded data.');
	            }
	        },
	
	        /**
	         * It is equivalent to <code class="str">"recordRTC.blob"</code> property.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     var blob = recordRTC.getBlob();
	         *
	         *     // equivalent to: recordRTC.blob property
	         *     var blob = recordRTC.blob;
	         * });
	         */
	        getBlob: function() {
	            if (!mediaRecorder) {
	                return console.warn(WARNING);
	            }
	
	            return mediaRecorder.blob;
	        },
	
	        /**
	         * This method returns DataURL. It takes single "callback" argument.
	         * @param {function} callback - DataURL is passed back over this callback.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     recordRTC.getDataURL(function(dataURL) {
	         *         video.src = dataURL;
	         *     });
	         * });
	         */
	        getDataURL: getDataURL,
	
	        /**
	         * This method returns Virutal/Blob URL. It doesn't take any argument.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     video.src = recordRTC.toURL();
	         * });
	         */
	        toURL: function() {
	            if (!mediaRecorder) {
	                return console.warn(WARNING);
	            }
	
	            return URL.createObjectURL(mediaRecorder.blob);
	        },
	
	        /**
	         * This method saves blob/file into disk (by inovking save-as dialog). It takes single (optional) argument i.e. FileName
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     recordRTC.save('file-name');
	         * });
	         */
	        save: function(fileName) {
	            if (!mediaRecorder) {
	                return console.warn(WARNING);
	            }
	
	            invokeSaveAsDialog(mediaRecorder.blob, fileName);
	        },
	
	        /**
	         * This method gets blob from indexed-DB storage. It takes single "callback" argument.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.getFromDisk(function(dataURL) {
	         *     video.src = dataURL;
	         * });
	         */
	        getFromDisk: function(callback) {
	            if (!mediaRecorder) {
	                return console.warn(WARNING);
	            }
	
	            RecordRTC.getFromDisk(config.type, callback);
	        },
	
	        /**
	         * This method appends prepends array of webp images to the recorded video-blob. It takes an "array" object.
	         * @type {Array.<Array>}
	         * @param {Array} arrayOfWebPImages - Array of webp images.
	         * @method
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * var arrayOfWebPImages = [];
	         * arrayOfWebPImages.push({
	         *     duration: index,
	         *     image: 'data:image/webp;base64,...'
	         * });
	         * recordRTC.setAdvertisementArray(arrayOfWebPImages);
	         */
	        setAdvertisementArray: function(arrayOfWebPImages) {
	            config.advertisement = [];
	
	            var length = arrayOfWebPImages.length;
	            for (var i = 0; i < length; i++) {
	                config.advertisement.push({
	                    duration: i,
	                    image: arrayOfWebPImages[i]
	                });
	            }
	        },
	
	        /**
	         * It is equivalent to <code class="str">"recordRTC.getBlob()"</code> method.
	         * @property {Blob} blob - Recorded Blob can be accessed using this property.
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     var blob = recordRTC.blob;
	         *
	         *     // equivalent to: recordRTC.getBlob() method
	         *     var blob = recordRTC.getBlob();
	         * });
	         */
	        blob: null,
	
	        /**
	         * @todo Add descriptions.
	         * @property {number} bufferSize - Either audio device's default buffer-size, or your custom value.
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     var bufferSize = recordRTC.bufferSize;
	         * });
	         */
	        bufferSize: 0,
	
	        /**
	         * @todo Add descriptions.
	         * @property {number} sampleRate - Audio device's default sample rates.
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     var sampleRate = recordRTC.sampleRate;
	         * });
	         */
	        sampleRate: 0,
	
	        /**
	         * @todo Add descriptions.
	         * @property {ArrayBuffer} buffer - Audio ArrayBuffer, supported only in Chrome.
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     var buffer = recordRTC.buffer;
	         * });
	         */
	        buffer: null,
	
	        /**
	         * @todo Add descriptions.
	         * @property {DataView} view - Audio DataView, supported only in Chrome.
	         * @memberof RecordRTC
	         * @instance
	         * @example
	         * recordRTC.stopRecording(function() {
	         *     var dataView = recordRTC.view;
	         * });
	         */
	        view: null
	    };
	
	    if (!this) {
	        self = returnObject;
	        return returnObject;
	    }
	
	    // if someone wanna use RecordRTC with "new" keyword.
	    for (var prop in returnObject) {
	        this[prop] = returnObject[prop];
	    }
	
	    self = this;
	
	    return returnObject;
	}
	
	/**
	 * This method can be used to get all recorded blobs from IndexedDB storage.
	 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
	 * @param {function} callback - Callback function to get all stored blobs.
	 * @method
	 * @memberof RecordRTC
	 * @example
	 * RecordRTC.getFromDisk('all', function(dataURL, type){
	 *     if(type === 'audio') { }
	 *     if(type === 'video') { }
	 *     if(type === 'gif')   { }
	 * });
	 */
	RecordRTC.getFromDisk = function(type, callback) {
	    if (!callback) {
	        throw 'callback is mandatory.';
	    }
	
	    console.log('Getting recorded ' + (type === 'all' ? 'blobs' : type + ' blob ') + ' from disk!');
	    DiskStorage.Fetch(function(dataURL, _type) {
	        if (type !== 'all' && _type === type + 'Blob' && callback) {
	            callback(dataURL);
	        }
	
	        if (type === 'all' && callback) {
	            callback(dataURL, _type.replace('Blob', ''));
	        }
	    });
	};
	
	/**
	 * This method can be used to store recorded blobs into IndexedDB storage.
	 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
	 * @method
	 * @memberof RecordRTC
	 * @example
	 * RecordRTC.writeToDisk({
	 *     audio: audioBlob,
	 *     video: videoBlob,
	 *     gif  : gifBlob
	 * });
	 */
	RecordRTC.writeToDisk = function(options) {
	    console.log('Writing recorded blob(s) to disk!');
	    options = options || {};
	    if (options.audio && options.video && options.gif) {
	        options.audio.getDataURL(function(audioDataURL) {
	            options.video.getDataURL(function(videoDataURL) {
	                options.gif.getDataURL(function(gifDataURL) {
	                    DiskStorage.Store({
	                        audioBlob: audioDataURL,
	                        videoBlob: videoDataURL,
	                        gifBlob: gifDataURL
	                    });
	                });
	            });
	        });
	    } else if (options.audio && options.video) {
	        options.audio.getDataURL(function(audioDataURL) {
	            options.video.getDataURL(function(videoDataURL) {
	                DiskStorage.Store({
	                    audioBlob: audioDataURL,
	                    videoBlob: videoDataURL
	                });
	            });
	        });
	    } else if (options.audio && options.gif) {
	        options.audio.getDataURL(function(audioDataURL) {
	            options.gif.getDataURL(function(gifDataURL) {
	                DiskStorage.Store({
	                    audioBlob: audioDataURL,
	                    gifBlob: gifDataURL
	                });
	            });
	        });
	    } else if (options.video && options.gif) {
	        options.video.getDataURL(function(videoDataURL) {
	            options.gif.getDataURL(function(gifDataURL) {
	                DiskStorage.Store({
	                    videoBlob: videoDataURL,
	                    gifBlob: gifDataURL
	                });
	            });
	        });
	    } else if (options.audio) {
	        options.audio.getDataURL(function(audioDataURL) {
	            DiskStorage.Store({
	                audioBlob: audioDataURL
	            });
	        });
	    } else if (options.video) {
	        options.video.getDataURL(function(videoDataURL) {
	            DiskStorage.Store({
	                videoBlob: videoDataURL
	            });
	        });
	    } else if (options.gif) {
	        options.gif.getDataURL(function(gifDataURL) {
	            DiskStorage.Store({
	                gifBlob: gifDataURL
	            });
	        });
	    }
	};
	
	if (true /* && !!module.exports*/ ) {
	    module.exports = RecordRTC;
	}
	
	if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return RecordRTC;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	// __________________________
	// RecordRTC-Configuration.js
	
	/**
	 * {@link RecordRTCConfiguration} is an inner/private helper for {@link RecordRTC}.
	 * @summary It configures the 2nd parameter passed over {@link RecordRTC} and returns a valid "config" object.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef RecordRTCConfiguration
	 * @class
	 * @example
	 * var options = RecordRTCConfiguration(mediaStream, options);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
	 */
	
	function RecordRTCConfiguration(mediaStream, config) {
	    if (config.recorderType && !config.type) {
	        if (config.recorderType === WhammyRecorder || config.recorderType === CanvasRecorder) {
	            config.type = 'video';
	        } else if (config.recorderType === GifRecorder) {
	            config.type = 'gif';
	        } else if (config.recorderType === StereoAudioRecorder) {
	            config.type = 'audio';
	        } else if (config.recorderType === MediaStreamRecorder) {
	            if (mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
	                config.type = 'video';
	            } else if (mediaStream.getAudioTracks().length && !mediaStream.getVideoTracks().length) {
	                config.type = 'audio';
	            } else if (!mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
	                config.type = 'audio';
	            } else {
	                // config.type = 'UnKnown';
	            }
	        }
	    }
	
	    if (typeof MediaStreamRecorder !== 'undefined' && typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype) {
	        if (!config.mimeType) {
	            config.mimeType = 'video/webm';
	        }
	
	        if (!config.type) {
	            config.type = config.mimeType.split('/')[0];
	        }
	
	        if (!config.bitsPerSecond) {
	            config.bitsPerSecond = 128000;
	        }
	    }
	
	    // consider default type=audio
	    if (!config.type) {
	        if (config.mimeType) {
	            config.type = config.mimeType.split('/')[0];
	        }
	        if (!config.type) {
	            config.type = 'audio';
	        }
	    }
	
	    return config;
	}
	
	// __________________
	// GetRecorderType.js
	
	/**
	 * {@link GetRecorderType} is an inner/private helper for {@link RecordRTC}.
	 * @summary It returns best recorder-type available for your browser.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef GetRecorderType
	 * @class
	 * @example
	 * var RecorderType = GetRecorderType(options);
	 * var recorder = new RecorderType(options);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {type:"video", disableLogs: true, numberOfAudioChannels: 1, bufferSize: 0, sampleRate: 0, video: HTMLVideoElement, etc.}
	 */
	
	function GetRecorderType(mediaStream, config) {
	    var recorder;
	
	    // StereoAudioRecorder can work with all three: Edge, Firefox and Chrome
	    // todo: detect if it is Edge, then auto use: StereoAudioRecorder
	    if (isChrome || isEdge || isOpera) {
	        // Media Stream Recording API has not been implemented in chrome yet;
	        // That's why using WebAudio API to record stereo audio in WAV format
	        recorder = StereoAudioRecorder;
	    }
	
	    if (typeof MediaRecorder !== 'undefined' && 'requestData' in MediaRecorder.prototype && !isChrome) {
	        recorder = MediaStreamRecorder;
	    }
	
	    // video recorder (in WebM format)
	    if (config.type === 'video' && (isChrome || isOpera)) {
	        recorder = WhammyRecorder;
	    }
	
	    // video recorder (in Gif format)
	    if (config.type === 'gif') {
	        recorder = GifRecorder;
	    }
	
	    // html2canvas recording!
	    if (config.type === 'canvas') {
	        recorder = CanvasRecorder;
	    }
	
	    // todo: enable below block when MediaRecorder in Chrome gets out of flags; and it also supports audio recording.
	    if (false) {
	        if (mediaStream.getVideoTracks().length) {
	            recorder = MediaStreamRecorder;
	            if (!config.disableLogs) {
	                console.debug('Using MediaRecorder API in chrome!');
	            }
	        }
	    }
	
	    if (config.recorderType) {
	        recorder = config.recorderType;
	    }
	
	    return recorder;
	}
	
	// _____________
	// MRecordRTC.js
	
	/**
	 * MRecordRTC runs top over {@link RecordRTC} to bring multiple recordings in single place, by providing simple API.
	 * @summary MRecordRTC stands for "Multiple-RecordRTC".
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef MRecordRTC
	 * @class
	 * @example
	 * var recorder = new MRecordRTC();
	 * recorder.addStream(MediaStream);
	 * recorder.mediaType = {
	 *     audio: true,
	 *     video: true,
	 *     gif: true
	 * };
	 * recorder.startRecording();
	 * @see For further information:
	 * @see {@link https://github.com/muaz-khan/RecordRTC/tree/master/MRecordRTC|MRecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 */
	
	function MRecordRTC(mediaStream) {
	
	    /**
	     * This method attaches MediaStream object to {@link MRecordRTC}.
	     * @param {MediaStream} mediaStream - A MediaStream object, either fetched using getUserMedia API, or generated using captureStreamUntilEnded or WebAudio API.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.addStream(MediaStream);
	     */
	    this.addStream = function(_mediaStream) {
	        if (_mediaStream) {
	            mediaStream = _mediaStream;
	        }
	    };
	
	    /**
	     * This property can be used to set recording type e.g. audio, or video, or gif, or canvas.
	     * @property {object} mediaType - {audio: true, video: true, gif: true}
	     * @memberof MRecordRTC
	     * @example
	     * var recorder = new MRecordRTC();
	     * recorder.mediaType = {
	     *     audio: true,
	     *     video: true,
	     *     gif  : true
	     * };
	     */
	    this.mediaType = {
	        audio: true,
	        video: true
	    };
	
	    /**
	     * This method starts recording.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.startRecording();
	     */
	    this.startRecording = function() {
	        if (!isChrome && mediaStream && mediaStream.getAudioTracks && mediaStream.getAudioTracks().length && mediaStream.getVideoTracks().length) {
	            // Firefox is supporting both audio/video in single blob
	            this.mediaType.audio = false;
	        }
	
	        if (this.mediaType.audio) {
	            this.audioRecorder = new RecordRTC(mediaStream, {
	                type: 'audio',
	                bufferSize: this.bufferSize,
	                sampleRate: this.sampleRate
	            });
	            this.audioRecorder.startRecording();
	        }
	
	        if (this.mediaType.video) {
	            this.videoRecorder = new RecordRTC(mediaStream, {
	                type: 'video',
	                video: this.video,
	                canvas: this.canvas
	            });
	            this.videoRecorder.startRecording();
	        }
	
	        if (this.mediaType.gif) {
	            this.gifRecorder = new RecordRTC(mediaStream, {
	                type: 'gif',
	                frameRate: this.frameRate || 200,
	                quality: this.quality || 10
	            });
	            this.gifRecorder.startRecording();
	        }
	    };
	
	    /**
	     * This method stop recording.
	     * @param {function} callback - Callback function is invoked when all encoders finish their jobs.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.stopRecording(function(recording){
	     *     var audioBlob = recording.audio;
	     *     var videoBlob = recording.video;
	     *     var gifBlob   = recording.gif;
	     * });
	     */
	    this.stopRecording = function(callback) {
	        callback = callback || function() {};
	
	        if (this.audioRecorder) {
	            this.audioRecorder.stopRecording(function(blobURL) {
	                callback(blobURL, 'audio');
	            });
	        }
	
	        if (this.videoRecorder) {
	            this.videoRecorder.stopRecording(function(blobURL) {
	                callback(blobURL, 'video');
	            });
	        }
	
	        if (this.gifRecorder) {
	            this.gifRecorder.stopRecording(function(blobURL) {
	                callback(blobURL, 'gif');
	            });
	        }
	    };
	
	    /**
	     * This method can be used to manually get all recorded blobs.
	     * @param {function} callback - All recorded blobs are passed back to "callback" function.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.getBlob(function(recording){
	     *     var audioBlob = recording.audio;
	     *     var videoBlob = recording.video;
	     *     var gifBlob   = recording.gif;
	     * });
	     * // or
	     * var audioBlob = recorder.getBlob().audio;
	     * var videoBlob = recorder.getBlob().video;
	     */
	    this.getBlob = function(callback) {
	        var output = {};
	
	        if (this.audioRecorder) {
	            output.audio = this.audioRecorder.getBlob();
	        }
	
	        if (this.videoRecorder) {
	            output.video = this.videoRecorder.getBlob();
	        }
	
	        if (this.gifRecorder) {
	            output.gif = this.gifRecorder.getBlob();
	        }
	
	        if (callback) {
	            callback(output);
	        }
	
	        return output;
	    };
	
	    /**
	     * This method can be used to manually get all recorded blobs' DataURLs.
	     * @param {function} callback - All recorded blobs' DataURLs are passed back to "callback" function.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.getDataURL(function(recording){
	     *     var audioDataURL = recording.audio;
	     *     var videoDataURL = recording.video;
	     *     var gifDataURL   = recording.gif;
	     * });
	     */
	    this.getDataURL = function(callback) {
	        this.getBlob(function(blob) {
	            getDataURL(blob.audio, function(_audioDataURL) {
	                getDataURL(blob.video, function(_videoDataURL) {
	                    callback({
	                        audio: _audioDataURL,
	                        video: _videoDataURL
	                    });
	                });
	            });
	        });
	
	        function getDataURL(blob, callback00) {
	            if (typeof Worker !== 'undefined') {
	                var webWorker = processInWebWorker(function readFile(_blob) {
	                    postMessage(new FileReaderSync().readAsDataURL(_blob));
	                });
	
	                webWorker.onmessage = function(event) {
	                    callback00(event.data);
	                };
	
	                webWorker.postMessage(blob);
	            } else {
	                var reader = new FileReader();
	                reader.readAsDataURL(blob);
	                reader.onload = function(event) {
	                    callback00(event.target.result);
	                };
	            }
	        }
	
	        function processInWebWorker(_function) {
	            var blob = URL.createObjectURL(new Blob([_function.toString(),
	                'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
	            ], {
	                type: 'application/javascript'
	            }));
	
	            var worker = new Worker(blob);
	            var url;
	            if (typeof URL !== 'undefined') {
	                url = URL;
	            } else if (typeof webkitURL !== 'undefined') {
	                url = webkitURL;
	            } else {
	                throw 'Neither URL nor webkitURL detected.';
	            }
	            url.revokeObjectURL(blob);
	            return worker;
	        }
	    };
	
	    /**
	     * This method can be used to ask {@link MRecordRTC} to write all recorded blobs into IndexedDB storage.
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.writeToDisk();
	     */
	    this.writeToDisk = function() {
	        RecordRTC.writeToDisk({
	            audio: this.audioRecorder,
	            video: this.videoRecorder,
	            gif: this.gifRecorder
	        });
	    };
	
	    /**
	     * This method can be used to invoke save-as dialog for all recorded blobs.
	     * @param {object} args - {audio: 'audio-name', video: 'video-name', gif: 'gif-name'}
	     * @method
	     * @memberof MRecordRTC
	     * @example
	     * recorder.save({
	     *     audio: 'audio-file-name',
	     *     video: 'video-file-name',
	     *     gif  : 'gif-file-name'
	     * });
	     */
	    this.save = function(args) {
	        args = args || {
	            audio: true,
	            video: true,
	            gif: true
	        };
	
	        if (!!args.audio && this.audioRecorder) {
	            this.audioRecorder.save(typeof args.audio === 'string' ? args.audio : '');
	        }
	
	        if (!!args.video && this.videoRecorder) {
	            this.videoRecorder.save(typeof args.video === 'string' ? args.video : '');
	        }
	        if (!!args.gif && this.gifRecorder) {
	            this.gifRecorder.save(typeof args.gif === 'string' ? args.gif : '');
	        }
	    };
	}
	
	/**
	 * This method can be used to get all recorded blobs from IndexedDB storage.
	 * @param {string} type - 'all' or 'audio' or 'video' or 'gif'
	 * @param {function} callback - Callback function to get all stored blobs.
	 * @method
	 * @memberof MRecordRTC
	 * @example
	 * MRecordRTC.getFromDisk('all', function(dataURL, type){
	 *     if(type === 'audio') { }
	 *     if(type === 'video') { }
	 *     if(type === 'gif')   { }
	 * });
	 */
	MRecordRTC.getFromDisk = RecordRTC.getFromDisk;
	
	/**
	 * This method can be used to store recorded blobs into IndexedDB storage.
	 * @param {object} options - {audio: Blob, video: Blob, gif: Blob}
	 * @method
	 * @memberof MRecordRTC
	 * @example
	 * MRecordRTC.writeToDisk({
	 *     audio: audioBlob,
	 *     video: videoBlob,
	 *     gif  : gifBlob
	 * });
	 */
	MRecordRTC.writeToDisk = RecordRTC.writeToDisk;
	
	// _____________________________
	// Cross-Browser-Declarations.js
	
	// animation-frame used in WebM recording
	
	/*jshint -W079 */
	var requestAnimationFrame = window.requestAnimationFrame;
	if (typeof requestAnimationFrame === 'undefined') {
	    if (typeof webkitRequestAnimationFrame !== 'undefined') {
	        /*global requestAnimationFrame:true */
	        requestAnimationFrame = webkitRequestAnimationFrame;
	    }
	
	    if (typeof mozRequestAnimationFrame !== 'undefined') {
	        /*global requestAnimationFrame:true */
	        requestAnimationFrame = mozRequestAnimationFrame;
	    }
	}
	
	/*jshint -W079 */
	var cancelAnimationFrame = window.cancelAnimationFrame;
	if (typeof cancelAnimationFrame === 'undefined') {
	    if (typeof webkitCancelAnimationFrame !== 'undefined') {
	        /*global cancelAnimationFrame:true */
	        cancelAnimationFrame = webkitCancelAnimationFrame;
	    }
	
	    if (typeof mozCancelAnimationFrame !== 'undefined') {
	        /*global cancelAnimationFrame:true */
	        cancelAnimationFrame = mozCancelAnimationFrame;
	    }
	}
	
	// WebAudio API representer
	var AudioContext = window.AudioContext;
	
	if (typeof AudioContext === 'undefined') {
	    if (typeof webkitAudioContext !== 'undefined') {
	        /*global AudioContext:true */
	        AudioContext = webkitAudioContext;
	    }
	
	    if (typeof mozAudioContext !== 'undefined') {
	        /*global AudioContext:true */
	        AudioContext = mozAudioContext;
	    }
	}
	
	/*jshint -W079 */
	var URL = window.URL;
	
	if (typeof URL === 'undefined' && typeof webkitURL !== 'undefined') {
	    /*global URL:true */
	    URL = webkitURL;
	}
	
	/*global navigator:true */
	var navigator = window.navigator;
	
	if (typeof navigator !== 'undefined') {
	    if (typeof navigator.webkitGetUserMedia !== 'undefined') {
	        navigator.getUserMedia = navigator.webkitGetUserMedia;
	    }
	
	    if (typeof navigator.mozGetUserMedia !== 'undefined') {
	        navigator.getUserMedia = navigator.mozGetUserMedia;
	    }
	} else {
	    navigator = {
	        getUserMedia: function() {}
	    };
	}
	
	var isEdge = navigator.userAgent.indexOf('Edge') !== -1 && (!!navigator.msSaveBlob || !!navigator.msSaveOrOpenBlob);
	var isOpera = !!window.opera || navigator.userAgent.indexOf('OPR/') !== -1;
	var isChrome = !isOpera && !isEdge && !!navigator.webkitGetUserMedia;
	
	var MediaStream = window.MediaStream;
	
	if (typeof MediaStream === 'undefined' && typeof webkitMediaStream !== 'undefined') {
	    MediaStream = webkitMediaStream;
	}
	
	/*global MediaStream:true */
	if (!('stop' in MediaStream.prototype)) {
	    MediaStream.prototype.stop = function() {
	        this.getAudioTracks().forEach(function(track) {
	            track.stop();
	        });
	
	        this.getVideoTracks().forEach(function(track) {
	            track.stop();
	        });
	    };
	}
	
	// if (typeof location !== 'undefined') {
	//     if (location.href.indexOf('file:') === 0) {
	//         console.error('Please load this HTML file on HTTP or HTTPS.');
	//     }
	// }
	
	// below function via: http://goo.gl/B3ae8c
	/**
	 * @param {number} bytes - Pass bytes and get formafted string.
	 * @returns {string} - formafted string
	 * @example
	 * bytesToSize(1024*1024*5) === '5 GB'
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	function bytesToSize(bytes) {
	    var k = 1000;
	    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	    if (bytes === 0) {
	        return '0 Bytes';
	    }
	    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(k)), 10);
	    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
	}
	
	/**
	 * @param {Blob} file - File or Blob object. This parameter is required.
	 * @param {string} fileName - Optional file name e.g. "Recorded-Video.webm"
	 * @example
	 * invokeSaveAsDialog(blob or file, [optional] fileName);
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	function invokeSaveAsDialog(file, fileName) {
	    if (!file) {
	        throw 'Blob object is required.';
	    }
	
	    if (!file.type) {
	        file.type = 'video/webm';
	    }
	
	    var fileExtension = file.type.split('/')[1];
	
	    if (fileName && fileName.indexOf('.') !== -1) {
	        var splitted = fileName.split('.');
	        fileName = splitted[0];
	        fileExtension = splitted[1];
	    }
	
	    var fileFullName = (fileName || (Math.round(Math.random() * 9999999999) + 888888888)) + '.' + fileExtension;
	
	    if (typeof navigator.msSaveOrOpenBlob !== 'undefined') {
	        return navigator.msSaveOrOpenBlob(file, fileFullName);
	    } else if (typeof navigator.msSaveBlob !== 'undefined') {
	        return navigator.msSaveBlob(file, fileFullName);
	    }
	
	    var hyperlink = document.createElement('a');
	    hyperlink.href = URL.createObjectURL(file);
	    hyperlink.target = '_blank';
	    hyperlink.download = fileFullName;
	
	    if (!!navigator.mozGetUserMedia) {
	        hyperlink.onclick = function() {
	            (document.body || document.documentElement).removeChild(hyperlink);
	        };
	        (document.body || document.documentElement).appendChild(hyperlink);
	    }
	
	    var evt = new MouseEvent('click', {
	        view: window,
	        bubbles: true,
	        cancelable: true
	    });
	
	    hyperlink.dispatchEvent(evt);
	
	    if (!navigator.mozGetUserMedia) {
	        URL.revokeObjectURL(hyperlink.href);
	    }
	}
	
	// __________ (used to handle stuff like http://goo.gl/xmE5eg) issue #129
	// Storage.js
	
	/**
	 * Storage is a standalone object used by {@link RecordRTC} to store reusable objects e.g. "new AudioContext".
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @example
	 * Storage.AudioContext === webkitAudioContext
	 * @property {webkitAudioContext} AudioContext - Keeps a reference to AudioContext object.
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	
	var Storage = {};
	
	if (typeof AudioContext !== 'undefined') {
	    Storage.AudioContext = AudioContext;
	} else if (typeof webkitAudioContext !== 'undefined') {
	    Storage.AudioContext = webkitAudioContext;
	}
	
	// ______________________
	// MediaStreamRecorder.js
	
	// todo: need to show alert boxes for incompatible cases
	// encoder only supports 48k/16k mono audio channel
	
	/*
	 * Implementation of https://dvcs.w3.org/hg/dap/raw-file/default/media-stream-capture/MediaRecorder.html
	 * The MediaRecorder accepts a mediaStream as input source passed from UA. When recorder starts,
	 * a MediaEncoder will be created and accept the mediaStream as input source.
	 * Encoder will get the raw data by track data changes, encode it by selected MIME Type, then store the encoded in EncodedBufferCache object.
	 * The encoded data will be extracted on every timeslice passed from Start function call or by RequestData function.
	 * Thread model:
	 * When the recorder starts, it creates a "Media Encoder" thread to read data from MediaEncoder object and store buffer in EncodedBufferCache object.
	 * Also extract the encoded data and create blobs on every timeslice passed from start function or RequestData function called by UA.
	 */
	
	/**
	 * MediaStreamRecorder is an abstraction layer for "MediaRecorder API". It is used by {@link RecordRTC} to record MediaStream(s) in Firefox.
	 * @summary Runs top over MediaRecorder API.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef MediaStreamRecorder
	 * @class
	 * @example
	 * var options = {
	 *     mimeType: 'video/mp4', // audio/ogg or video/webm
	 *     audioBitsPerSecond : 128000,
	 *     videoBitsPerSecond : 2500000,
	 *     bitsPerSecond: 2500000  // if this is provided, skip above two
	 * }
	 * var recorder = new MediaStreamRecorder(MediaStream, options);
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 *
	 *     // or
	 *     var blob = recorder.blob;
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {disableLogs:true, initCallback: function, mimeType: "video/webm", onAudioProcessStarted: function}
	 */
	
	function MediaStreamRecorder(mediaStream, config) {
	    config = config || {
	        bitsPerSecond: 128000,
	        mimeType: 'video/webm'
	    };
	
	    // if user chosen only audio option; and he tried to pass MediaStream with
	    // both audio and video tracks;
	    // using a dirty workaround to generate audio-only stream so that we can get audio/ogg output.
	    if (!isChrome && config.type && config.type === 'audio') {
	        if (mediaStream.getVideoTracks && mediaStream.getVideoTracks().length) {
	            var context = new AudioContext();
	            var mediaStreamSource = context.createMediaStreamSource(mediaStream);
	
	            var destination = context.createMediaStreamDestination();
	            mediaStreamSource.connect(destination);
	
	            mediaStream = destination.stream;
	        }
	
	        if (!config.mimeType || config.mimeType.indexOf('audio') === -1) {
	            config.mimeType = 'audio/ogg';
	        }
	    }
	
	    var recordedBuffers = [];
	
	    /**
	     * This method records MediaStream.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        var recorderHints = config;
	
	        if (isChrome) {
	            if (!recorderHints || typeof recorderHints !== 'string') {
	                recorderHints = 'video/vp8';
	
	                // chrome currently supports only video recording
	                mediaStream = new MediaStream(mediaStream.getVideoTracks());
	            }
	        }
	
	        if (!config.disableLogs) {
	            console.log('Passing following config over MediaRecorder API.', recorderHints);
	        }
	
	        if (mediaRecorder) {
	            // mandatory to make sure Firefox doesn't fails to record streams 3-4 times without reloading the page.
	            mediaRecorder = null;
	        }
	
	        // http://dxr.mozilla.org/mozilla-central/source/content/media/MediaRecorder.cpp
	        // https://wiki.mozilla.org/Gecko:MediaRecorder
	        // https://dvcs.w3.org/hg/dap/raw-file/default/media-stream-capture/MediaRecorder.html
	
	        // starting a recording session; which will initiate "Reading Thread"
	        // "Reading Thread" are used to prevent main-thread blocking scenarios
	        mediaRecorder = new MediaRecorder(mediaStream, recorderHints);
	
	        if ('canRecordMimeType' in mediaRecorder && mediaRecorder.canRecordMimeType(config.mimeType) === false) {
	            if (!config.disableLogs) {
	                console.warn('MediaRecorder API seems unable to record mimeType:', config.mimeType);
	            }
	        }
	
	        // i.e. stop recording when <video> is paused by the user; and auto restart recording 
	        // when video is resumed. E.g. yourStream.getVideoTracks()[0].muted = true; // it will auto-stop recording.
	        mediaRecorder.ignoreMutedMedia = config.ignoreMutedMedia || false;
	
	        // Dispatching OnDataAvailable Handler
	        mediaRecorder.ondataavailable = function(e) {
	            if (this.dontFireOnDataAvailableEvent) {
	                return;
	            }
	
	            if (isChrome && e.data && !('size' in e.data)) {
	                e.data.size = e.data.length || e.data.byteLength || 0;
	            }
	
	            if (e.data && e.data.size) {
	                recordedBuffers.push(e.data);
	            }
	        };
	
	        mediaRecorder.onerror = function(error) {
	            if (!config.disableLogs) {
	                if (error.name === 'InvalidState') {
	                    console.error('The MediaRecorder is not in a state in which the proposed operation is allowed to be executed.');
	                } else if (error.name === 'OutOfMemory') {
	                    console.error('The UA has exhaused the available memory. User agents SHOULD provide as much additional information as possible in the message attribute.');
	                } else if (error.name === 'IllegalStreamModification') {
	                    console.error('A modification to the stream has occurred that makes it impossible to continue recording. An example would be the addition of a Track while recording is occurring. User agents SHOULD provide as much additional information as possible in the message attribute.');
	                } else if (error.name === 'OtherRecordingError') {
	                    console.error('Used for an fatal error other than those listed above. User agents SHOULD provide as much additional information as possible in the message attribute.');
	                } else if (error.name === 'GenericError') {
	                    console.error('The UA cannot provide the codec or recording option that has been requested.', error);
	                } else {
	                    console.error('MediaRecorder Error', error);
	                }
	            }
	
	            // When the stream is "ended" set recording to 'inactive' 
	            // and stop gathering data. Callers should not rely on 
	            // exactness of the timeSlice value, especially 
	            // if the timeSlice value is small. Callers should 
	            // consider timeSlice as a minimum value
	
	            if (mediaRecorder.state !== 'inactive' && mediaRecorder.state !== 'stopped') {
	                mediaRecorder.stop();
	            }
	            // self.record(0);
	        };
	
	        // void start(optional long mTimeSlice)
	        // The interval of passing encoded data from EncodedBufferCache to onDataAvailable
	        // handler. "mTimeSlice < 0" means Session object does not push encoded data to
	        // onDataAvailable, instead, it passive wait the client side pull encoded data
	        // by calling requestData API.
	        mediaRecorder.start(1);
	
	        // Start recording. If timeSlice has been provided, mediaRecorder will
	        // raise a dataavailable event containing the Blob of collected data on every timeSlice milliseconds.
	        // If timeSlice isn't provided, UA should call the RequestData to obtain the Blob data, also set the mTimeSlice to zero.
	
	        if (config.onAudioProcessStarted) {
	            config.onAudioProcessStarted();
	        }
	
	        if (config.initCallback) {
	            config.initCallback();
	        }
	    };
	
	    /**
	     * This method stops recording MediaStream.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        if (!mediaRecorder) {
	            return;
	        }
	
	        this.recordingCallback = callback || function() {};
	
	        // mediaRecorder.state === 'recording' means that media recorder is associated with "session"
	        // mediaRecorder.state === 'stopped' means that media recorder is detached from the "session" ... in this case; "session" will also be deleted.
	
	        if (mediaRecorder.state === 'recording') {
	            // "stop" method auto invokes "requestData"!
	            mediaRecorder.requestData();
	            mediaRecorder.stop();
	        }
	
	        if (recordedBuffers.length) {
	            this.onRecordingFinished();
	        }
	    };
	
	    this.onRecordingFinished = function() {
	        /**
	         * @property {Blob} blob - Recorded frames in video/webm blob.
	         * @memberof MediaStreamRecorder
	         * @example
	         * recorder.stop(function() {
	         *     var blob = recorder.blob;
	         * });
	         */
	        this.blob = new Blob(recordedBuffers, {
	            type: config.mimeType || 'video/webm'
	        });
	
	        this.recordingCallback();
	
	        recordedBuffers = [];
	    };
	
	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        if (!mediaRecorder) {
	            return;
	        }
	
	        if (mediaRecorder.state === 'recording') {
	            mediaRecorder.pause();
	        }
	    };
	
	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        if (this.dontFireOnDataAvailableEvent) {
	            this.dontFireOnDataAvailableEvent = false;
	            this.record();
	            return;
	        }
	
	        if (!mediaRecorder) {
	            return;
	        }
	
	        if (mediaRecorder.state === 'paused') {
	            mediaRecorder.resume();
	        }
	    };
	
	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof MediaStreamRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        if (!mediaRecorder) {
	            return;
	        }
	
	        this.pause();
	
	        this.dontFireOnDataAvailableEvent = true;
	        this.stop();
	    };
	
	    // Reference to "MediaRecorder" object
	    var mediaRecorder;
	
	    function isMediaStreamActive() {
	        if ('active' in mediaStream) {
	            if (!mediaStream.active) {
	                return false;
	            }
	        } else if ('ended' in mediaStream) { // old hack
	            if (mediaStream.ended) {
	                return false;
	            }
	        }
	    }
	
	    var self = this;
	
	    // this method checks if media stream is stopped
	    // or any track is ended.
	    (function looper() {
	        if (!mediaRecorder) {
	            return;
	        }
	
	        if (isMediaStreamActive() === false) {
	            self.stop();
	            return;
	        }
	
	        setTimeout(looper, 1000); // check every second
	    })();
	}
	
	// source code from: http://typedarray.org/wp-content/projects/WebAudioRecorder/script.js
	// https://github.com/mattdiamond/Recorderjs#license-mit
	// ______________________
	// StereoAudioRecorder.js
	
	/**
	 * StereoAudioRecorder is a standalone class used by {@link RecordRTC} to bring "stereo" audio-recording in chrome.
	 * @summary JavaScript standalone object for stereo audio recording.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef StereoAudioRecorder
	 * @class
	 * @example
	 * var recorder = new StereoAudioRecorder(MediaStream, {
	 *     sampleRate: 44100,
	 *     bufferSize: 4096
	 * });
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {sampleRate: 44100, bufferSize: 4096, numberOfAudioChannels: 1, etc.}
	 */
	
	function StereoAudioRecorder(mediaStream, config) {
	    if (!mediaStream.getAudioTracks().length) {
	        throw 'Your stream has no audio tracks.';
	    }
	
	    config = config || {};
	
	    var self = this;
	
	    // variables
	    var leftchannel = [];
	    var rightchannel = [];
	    var recording = false;
	    var recordingLength = 0;
	    var jsAudioNode;
	
	    var numberOfAudioChannels = 2;
	
	    // backward compatibility
	    if (config.leftChannel === true) {
	        numberOfAudioChannels = 1;
	    }
	
	    if (config.numberOfAudioChannels === 1) {
	        numberOfAudioChannels = 1;
	    }
	
	    if (!config.disableLogs) {
	        console.debug('StereoAudioRecorder is set to record number of channels: ', numberOfAudioChannels);
	    }
	
	    function isMediaStreamActive() {
	        if ('active' in mediaStream) {
	            if (!mediaStream.active) {
	                return false;
	            }
	        } else if ('ended' in mediaStream) { // old hack
	            if (mediaStream.ended) {
	                return false;
	            }
	        }
	    }
	
	    /**
	     * This method records MediaStream.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        if (isMediaStreamActive() === false) {
	            throw 'Please make sure MediaStream is active.';
	        }
	
	        // reset the buffers for the new recording
	        leftchannel.length = rightchannel.length = 0;
	        recordingLength = 0;
	
	        if (audioInput) {
	            audioInput.connect(jsAudioNode);
	        }
	
	        // to prevent self audio to be connected with speakers
	        // jsAudioNode.connect(context.destination);
	
	        isAudioProcessStarted = isPaused = false;
	        recording = true;
	    };
	
	    function mergeLeftRightBuffers(config, callback) {
	        function mergeAudioBuffers(config, cb) {
	            var numberOfAudioChannels = config.numberOfAudioChannels;
	
	            // todo: "slice(0)" --- is it causes loop? Should be removed?
	            var leftBuffers = config.leftBuffers.slice(0);
	            var rightBuffers = config.rightBuffers.slice(0);
	            var sampleRate = config.sampleRate;
	            var internalInterleavedLength = config.internalInterleavedLength;
	
	            if (numberOfAudioChannels === 2) {
	                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
	                rightBuffers = mergeBuffers(rightBuffers, internalInterleavedLength);
	            }
	
	            if (numberOfAudioChannels === 1) {
	                leftBuffers = mergeBuffers(leftBuffers, internalInterleavedLength);
	            }
	
	            function mergeBuffers(channelBuffer, rLength) {
	                var result = new Float64Array(rLength);
	                var offset = 0;
	                var lng = channelBuffer.length;
	
	                for (var i = 0; i < lng; i++) {
	                    var buffer = channelBuffer[i];
	                    result.set(buffer, offset);
	                    offset += buffer.length;
	                }
	
	                return result;
	            }
	
	            function interleave(leftChannel, rightChannel) {
	                var length = leftChannel.length + rightChannel.length;
	
	                var result = new Float64Array(length);
	
	                var inputIndex = 0;
	
	                for (var index = 0; index < length;) {
	                    result[index++] = leftChannel[inputIndex];
	                    result[index++] = rightChannel[inputIndex];
	                    inputIndex++;
	                }
	                return result;
	            }
	
	            function writeUTFBytes(view, offset, string) {
	                var lng = string.length;
	                for (var i = 0; i < lng; i++) {
	                    view.setUint8(offset + i, string.charCodeAt(i));
	                }
	            }
	
	            // interleave both channels together
	            var interleaved;
	
	            if (numberOfAudioChannels === 2) {
	                interleaved = interleave(leftBuffers, rightBuffers);
	            }
	
	            if (numberOfAudioChannels === 1) {
	                interleaved = leftBuffers;
	            }
	
	            var interleavedLength = interleaved.length;
	
	            // create wav file
	            var resultingBufferLength = 44 + interleavedLength * 2;
	
	            var buffer = new ArrayBuffer(resultingBufferLength);
	
	            var view = new DataView(buffer);
	
	            // RIFF chunk descriptor/identifier 
	            writeUTFBytes(view, 0, 'RIFF');
	
	            // RIFF chunk length
	            view.setUint32(4, 44 + interleavedLength * 2, true);
	
	            // RIFF type 
	            writeUTFBytes(view, 8, 'WAVE');
	
	            // format chunk identifier 
	            // FMT sub-chunk
	            writeUTFBytes(view, 12, 'fmt ');
	
	            // format chunk length 
	            view.setUint32(16, 16, true);
	
	            // sample format (raw)
	            view.setUint16(20, 1, true);
	
	            // stereo (2 channels)
	            view.setUint16(22, numberOfAudioChannels, true);
	
	            // sample rate 
	            view.setUint32(24, sampleRate, true);
	
	            // byte rate (sample rate * block align)
	            view.setUint32(28, sampleRate * 4, true);
	
	            // block align (channel count * bytes per sample) 
	            view.setUint16(32, numberOfAudioChannels * 2, true);
	
	            // bits per sample 
	            view.setUint16(34, 16, true);
	
	            // data sub-chunk
	            // data chunk identifier 
	            writeUTFBytes(view, 36, 'data');
	
	            // data chunk length 
	            view.setUint32(40, interleavedLength * 2, true);
	
	            // write the PCM samples
	            var lng = interleavedLength;
	            var index = 44;
	            var volume = 1;
	            for (var i = 0; i < lng; i++) {
	                view.setInt16(index, interleaved[i] * (0x7FFF * volume), true);
	                index += 2;
	            }
	
	            if (cb) {
	                return cb({
	                    buffer: buffer,
	                    view: view
	                });
	            }
	
	            postMessage({
	                buffer: buffer,
	                view: view
	            });
	        }
	
	        if (!isChrome) {
	            // its Microsoft Edge
	            mergeAudioBuffers(config, function(data) {
	                callback(data.buffer, data.view);
	            });
	            return;
	        }
	
	
	        var webWorker = processInWebWorker(mergeAudioBuffers);
	
	        webWorker.onmessage = function(event) {
	            callback(event.data.buffer, event.data.view);
	
	            // release memory
	            URL.revokeObjectURL(webWorker.workerURL);
	        };
	
	        webWorker.postMessage(config);
	    }
	
	    function processInWebWorker(_function) {
	        var workerURL = URL.createObjectURL(new Blob([_function.toString(),
	            ';this.onmessage =  function (e) {' + _function.name + '(e.data);}'
	        ], {
	            type: 'application/javascript'
	        }));
	
	        var worker = new Worker(workerURL);
	        worker.workerURL = workerURL;
	        return worker;
	    }
	
	    /**
	     * This method stops recording MediaStream.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        // stop recording
	        recording = false;
	
	        // to make sure onaudioprocess stops firing
	        // audioInput.disconnect();
	
	        mergeLeftRightBuffers({
	            sampleRate: sampleRate,
	            numberOfAudioChannels: numberOfAudioChannels,
	            internalInterleavedLength: recordingLength,
	            leftBuffers: leftchannel,
	            rightBuffers: numberOfAudioChannels === 1 ? [] : rightchannel
	        }, function(buffer, view) {
	            /**
	             * @property {Blob} blob - The recorded blob object.
	             * @memberof StereoAudioRecorder
	             * @example
	             * recorder.stop(function(){
	             *     var blob = recorder.blob;
	             * });
	             */
	            self.blob = new Blob([view], {
	                type: 'audio/wav'
	            });
	
	            /**
	             * @property {ArrayBuffer} buffer - The recorded buffer object.
	             * @memberof StereoAudioRecorder
	             * @example
	             * recorder.stop(function(){
	             *     var buffer = recorder.buffer;
	             * });
	             */
	            self.buffer = new ArrayBuffer(view);
	
	            /**
	             * @property {DataView} view - The recorded data-view object.
	             * @memberof StereoAudioRecorder
	             * @example
	             * recorder.stop(function(){
	             *     var view = recorder.view;
	             * });
	             */
	            self.view = view;
	
	            self.sampleRate = sampleRate;
	            self.bufferSize = bufferSize;
	
	            // recorded audio length
	            self.length = recordingLength;
	
	            if (callback) {
	                callback();
	            }
	
	            isAudioProcessStarted = false;
	        });
	    };
	
	    if (!Storage.AudioContextConstructor) {
	        Storage.AudioContextConstructor = new Storage.AudioContext();
	    }
	
	    var context = Storage.AudioContextConstructor;
	
	    // creates an audio node from the microphone incoming stream
	    var audioInput = context.createMediaStreamSource(mediaStream);
	
	    var legalBufferValues = [0, 256, 512, 1024, 2048, 4096, 8192, 16384];
	
	    /**
	     * From the spec: This value controls how frequently the audioprocess event is
	     * dispatched and how many sample-frames need to be processed each call.
	     * Lower values for buffer size will result in a lower (better) latency.
	     * Higher values will be necessary to avoid audio breakup and glitches
	     * The size of the buffer (in sample-frames) which needs to
	     * be processed each time onprocessaudio is called.
	     * Legal values are (256, 512, 1024, 2048, 4096, 8192, 16384).
	     * @property {number} bufferSize - Buffer-size for how frequently the audioprocess event is dispatched.
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder = new StereoAudioRecorder(mediaStream, {
	     *     bufferSize: 4096
	     * });
	     */
	
	    // "0" means, let chrome decide the most accurate buffer-size for current platform.
	    var bufferSize = typeof config.bufferSize === 'undefined' ? 4096 : config.bufferSize;
	
	    if (legalBufferValues.indexOf(bufferSize) === -1) {
	        if (!config.disableLogs) {
	            console.warn('Legal values for buffer-size are ' + JSON.stringify(legalBufferValues, null, '\t'));
	        }
	    }
	
	    if (context.createJavaScriptNode) {
	        jsAudioNode = context.createJavaScriptNode(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
	    } else if (context.createScriptProcessor) {
	        jsAudioNode = context.createScriptProcessor(bufferSize, numberOfAudioChannels, numberOfAudioChannels);
	    } else {
	        throw 'WebAudio API has no support on this browser.';
	    }
	
	    // connect the stream to the gain node
	    audioInput.connect(jsAudioNode);
	
	    if (!config.bufferSize) {
	        bufferSize = jsAudioNode.bufferSize; // device buffer-size
	    }
	
	    /**
	     * The sample rate (in sample-frames per second) at which the
	     * AudioContext handles audio. It is assumed that all AudioNodes
	     * in the context run at this rate. In making this assumption,
	     * sample-rate converters or "varispeed" processors are not supported
	     * in real-time processing.
	     * The sampleRate parameter describes the sample-rate of the
	     * linear PCM audio data in the buffer in sample-frames per second.
	     * An implementation must support sample-rates in at least
	     * the range 22050 to 96000.
	     * @property {number} sampleRate - Buffer-size for how frequently the audioprocess event is dispatched.
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder = new StereoAudioRecorder(mediaStream, {
	     *     sampleRate: 44100
	     * });
	     */
	    var sampleRate = typeof config.sampleRate !== 'undefined' ? config.sampleRate : context.sampleRate || 44100;
	
	    if (sampleRate < 22050 || sampleRate > 96000) {
	        // Ref: http://stackoverflow.com/a/26303918/552182
	        if (!config.disableLogs) {
	            console.warn('sample-rate must be under range 22050 and 96000.');
	        }
	    }
	
	    if (!config.disableLogs) {
	        console.log('sample-rate', sampleRate);
	        console.log('buffer-size', bufferSize);
	    }
	
	    var isPaused = false;
	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPaused = true;
	    };
	
	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        if (isMediaStreamActive() === false) {
	            throw 'Please make sure MediaStream is active.';
	        }
	
	        if (!recording) {
	            if (!config.disableLogs) {
	                console.info('Seems recording has been restarted.');
	            }
	            this.record();
	            return;
	        }
	
	        isPaused = false;
	    };
	
	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof StereoAudioRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        this.pause();
	
	        leftchannel.length = rightchannel.length = 0;
	        recordingLength = 0;
	    };
	
	    var isAudioProcessStarted = false;
	
	    function onAudioProcessDataAvailable(e) {
	        if (isPaused) {
	            return;
	        }
	
	        if (isMediaStreamActive() === false) {
	            if (!config.disableLogs) {
	                console.error('MediaStream seems stopped.');
	            }
	            jsAudioNode.disconnect();
	            recording = false;
	        }
	
	        if (!recording) {
	            audioInput.disconnect();
	            return;
	        }
	
	        /**
	         * This method is called on "onaudioprocess" event's first invocation.
	         * @method {function} onAudioProcessStarted
	         * @memberof StereoAudioRecorder
	         * @example
	         * recorder.onAudioProcessStarted: function() { };
	         */
	        if (!isAudioProcessStarted) {
	            isAudioProcessStarted = true;
	            if (config.onAudioProcessStarted) {
	                config.onAudioProcessStarted();
	            }
	
	            if (config.initCallback) {
	                config.initCallback();
	            }
	        }
	
	        var left = e.inputBuffer.getChannelData(0);
	
	        // we clone the samples
	        leftchannel.push(new Float32Array(left));
	
	        if (numberOfAudioChannels === 2) {
	            var right = e.inputBuffer.getChannelData(1);
	            rightchannel.push(new Float32Array(right));
	        }
	
	        recordingLength += bufferSize;
	    }
	
	    jsAudioNode.onaudioprocess = onAudioProcessDataAvailable;
	
	    // to prevent self audio to be connected with speakers
	    jsAudioNode.connect(context.destination);
	}
	
	// _________________
	// CanvasRecorder.js
	
	/**
	 * CanvasRecorder is a standalone class used by {@link RecordRTC} to bring HTML5-Canvas recording into video WebM. It uses HTML2Canvas library and runs top over {@link Whammy}.
	 * @summary HTML2Canvas recording into video WebM.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef CanvasRecorder
	 * @class
	 * @example
	 * var recorder = new CanvasRecorder(htmlElement, { disableLogs: true });
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {HTMLElement} htmlElement - querySelector/getElementById/getElementsByTagName[0]/etc.
	 * @param {object} config - {disableLogs:true, initCallback: function}
	 */
	
	function CanvasRecorder(htmlElement, config) {
	    if (typeof html2canvas === 'undefined') {
	        throw 'Please link: //cdn.webrtc-experiment.com/screenshot.js';
	    }
	
	    config = config || {};
	
	    // via DetectRTC.js
	    var isCanvasSupportsStreamCapturing = false;
	    ['captureStream', 'mozCaptureStream', 'webkitCaptureStream'].forEach(function(item) {
	        if (item in document.createElement('canvas')) {
	            isCanvasSupportsStreamCapturing = true;
	        }
	    });
	
	    var globalCanvas, globalContext, mediaStreamRecorder;
	
	    if (isCanvasSupportsStreamCapturing) {
	        if (!config.disableLogs) {
	            console.debug('Your browser supports both MediRecorder API and canvas.captureStream!');
	        }
	
	        globalCanvas = document.createElement('canvas');
	
	        globalCanvas.width = htmlElement.clientWidth || window.innerWidth;
	        globalCanvas.height = htmlElement.clientHeight || window.innerHeight;
	
	        globalCanvas.style = 'top: -9999999; left: -99999999; visibility:hidden; position:absoluted; display: none;';
	        (document.body || document.documentElement).appendChild(globalCanvas);
	
	        globalContext = globalCanvas.getContext('2d');
	    } else if (!!navigator.mozGetUserMedia) {
	        if (!config.disableLogs) {
	            alert('Canvas recording is NOT supported in Firefox.');
	        }
	    }
	
	    var isRecording;
	
	    /**
	     * This method records Canvas.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        if (isCanvasSupportsStreamCapturing) {
	            // CanvasCaptureMediaStream
	            var canvasMediaStream;
	            if ('captureStream' in globalCanvas) {
	                canvasMediaStream = globalCanvas.captureStream(25); // 25 FPS
	            } else if ('mozCaptureStream' in globalCanvas) {
	                canvasMediaStream = globalCanvas.captureStream(25);
	            } else if ('webkitCaptureStream' in globalCanvas) {
	                canvasMediaStream = globalCanvas.captureStream(25);
	            }
	
	            if (!canvasMediaStream) {
	                throw 'captureStream API are NOT available.';
	            }
	
	            // Note: Sep, 2015 status is that, MediaRecorder API can't record CanvasCaptureMediaStream object.
	            mediaStreamRecorder = new MediaStreamRecorder(canvasMediaStream, {
	                mimeType: 'video/webm'
	            });
	            mediaStreamRecorder.record();
	        }
	
	        isRecording = true;
	        whammy.frames = [];
	        drawCanvasFrame();
	
	        if (config.initCallback) {
	            config.initCallback();
	        }
	    };
	
	    /**
	     * This method stops recording Canvas.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        isRecording = false;
	
	        if (isCanvasSupportsStreamCapturing && mediaStreamRecorder) {
	            var slef = this;
	            mediaStreamRecorder.stop(function() {
	                for (var prop in mediaStreamRecorder) {
	                    self[prop] = mediaStreamRecorder[prop];
	                }
	                if (callback) {
	                    callback(that.blob);
	                }
	            });
	            return;
	        }
	
	        var that = this;
	
	        /**
	         * @property {Blob} blob - Recorded frames in video/webm blob.
	         * @memberof CanvasRecorder
	         * @example
	         * recorder.stop(function() {
	         *     var blob = recorder.blob;
	         * });
	         */
	        whammy.compile(function(blob) {
	            that.blob = blob;
	
	            if (that.blob.forEach) {
	                that.blob = new Blob([], {
	                    type: 'video/webm'
	                });
	            }
	
	            if (callback) {
	                callback(that.blob);
	            }
	
	            whammy.frames = [];
	        });
	    };
	
	    var isPausedRecording = false;
	
	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPausedRecording = true;
	    };
	
	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        isPausedRecording = false;
	    };
	
	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof CanvasRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        this.pause();
	        whammy.frames = [];
	    };
	
	    function drawCanvasFrame() {
	        if (isPausedRecording) {
	            lastTime = new Date().getTime();
	            return setTimeout(drawCanvasFrame, 100);
	        }
	
	        html2canvas(htmlElement, {
	            onrendered: function(canvas) {
	                if (isCanvasSupportsStreamCapturing) {
	                    var image = document.createElement('img');
	                    image.src = canvas.toDataURL('image/png');
	                    image.onload = function() {
	                        globalContext.drawImage(image, 0, 0, image.clientWidth, image.clientHeight);
	                        (document.body || document.documentElement).removeChild(image);
	                    };
	                    image.style.opacity = 0;
	                    (document.body || document.documentElement).appendChild(image);
	                } else {
	                    var duration = new Date().getTime() - lastTime;
	                    if (!duration) {
	                        return drawCanvasFrame();
	                    }
	
	                    // via #206, by Jack i.e. @Seymourr
	                    lastTime = new Date().getTime();
	
	                    whammy.frames.push({
	                        duration: duration,
	                        image: canvas.toDataURL('image/webp')
	                    });
	                }
	
	                if (isRecording) {
	                    setTimeout(drawCanvasFrame, 0);
	                }
	            }
	        });
	    }
	
	    var lastTime = new Date().getTime();
	
	    var whammy = new Whammy.Video(100);
	}
	
	// _________________
	// WhammyRecorder.js
	
	/**
	 * WhammyRecorder is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It runs top over {@link Whammy}.
	 * @summary Video recording feature in Chrome.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef WhammyRecorder
	 * @class
	 * @example
	 * var recorder = new WhammyRecorder(mediaStream);
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     video.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object fetched using getUserMedia API or generated using captureStreamUntilEnded or WebAudio API.
	 * @param {object} config - {disableLogs: true, initCallback: function, video: HTMLVideoElement, etc.}
	 */
	
	function WhammyRecorder(mediaStream, config) {
	
	    config = config || {};
	
	    if (!config.frameInterval) {
	        config.frameInterval = 10;
	    }
	
	    if (!config.disableLogs) {
	        console.log('Using frames-interval:', config.frameInterval);
	    }
	
	    /**
	     * This method records video.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        if (!config.width) {
	            config.width = 320;
	        }
	
	        if (!config.height) {
	            config.height = 240;
	        }
	
	        if (!config.video) {
	            config.video = {
	                width: config.width,
	                height: config.height
	            };
	        }
	
	        if (!config.canvas) {
	            config.canvas = {
	                width: config.width,
	                height: config.height
	            };
	        }
	
	        canvas.width = config.canvas.width;
	        canvas.height = config.canvas.height;
	
	        context = canvas.getContext('2d');
	
	        // setting defaults
	        if (config.video && config.video instanceof HTMLVideoElement) {
	            video = config.video.cloneNode();
	
	            if (config.initCallback) {
	                config.initCallback();
	            }
	        } else {
	            video = document.createElement('video');
	
	            if (typeof video.srcObject !== 'undefined') {
	                video.srcObject = mediaStream;
	            } else {
	                video.src = URL.createObjectURL(mediaStream);
	            }
	
	            video.onloadedmetadata = function() { // "onloadedmetadata" may NOT work in FF?
	                if (config.initCallback) {
	                    config.initCallback();
	                }
	            };
	
	            video.width = config.video.width;
	            video.height = config.video.height;
	        }
	
	        video.muted = true;
	        video.play();
	
	        lastTime = new Date().getTime();
	        whammy = new Whammy.Video();
	
	        if (!config.disableLogs) {
	            console.log('canvas resolutions', canvas.width, '*', canvas.height);
	            console.log('video width/height', video.width || canvas.width, '*', video.height || canvas.height);
	        }
	
	        drawFrames(config.frameInterval);
	    };
	
	    /**
	     * Draw and push frames to Whammy
	     * @param {integer} frameInterval - set minimum interval (in milliseconds) between each time we push a frame to Whammy
	     */
	    function drawFrames(frameInterval) {
	        frameInterval = typeof frameInterval !== 'undefined' ? frameInterval : 10;
	
	        var duration = new Date().getTime() - lastTime;
	        if (!duration) {
	            return setTimeout(drawFrames, frameInterval, frameInterval);
	        }
	
	        if (isPausedRecording) {
	            lastTime = new Date().getTime();
	            return setTimeout(drawFrames, 100);
	        }
	
	        // via #206, by Jack i.e. @Seymourr
	        lastTime = new Date().getTime();
	
	        if (video.paused) {
	            // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
	            // Tweak for Android Chrome
	            video.play();
	        }
	
	        context.drawImage(video, 0, 0, canvas.width, canvas.height);
	        whammy.frames.push({
	            duration: duration,
	            image: canvas.toDataURL('image/webp')
	        });
	
	        if (!isStopDrawing) {
	            setTimeout(drawFrames, frameInterval, frameInterval);
	        }
	    }
	
	    /**
	     * remove black frames from the beginning to the specified frame
	     * @param {Array} _frames - array of frames to be checked
	     * @param {number} _framesToCheck - number of frame until check will be executed (-1 - will drop all frames until frame not matched will be found)
	     * @param {number} _pixTolerance - 0 - very strict (only black pixel color) ; 1 - all
	     * @param {number} _frameTolerance - 0 - very strict (only black frame color) ; 1 - all
	     * @returns {Array} - array of frames
	     */
	    // pull#293 by @volodalexey
	    function dropBlackFrames(_frames, _framesToCheck, _pixTolerance, _frameTolerance) {
	        var localCanvas = document.createElement('canvas');
	        localCanvas.width = canvas.width;
	        localCanvas.height = canvas.height;
	        var context2d = localCanvas.getContext('2d');
	        var resultFrames = [];
	
	        var checkUntilNotBlack = _framesToCheck === -1;
	        var endCheckFrame = (_framesToCheck && _framesToCheck > 0 && _framesToCheck <= _frames.length) ?
	            _framesToCheck : _frames.length;
	        var sampleColor = {
	            r: 0,
	            g: 0,
	            b: 0
	        };
	        var maxColorDifference = Math.sqrt(
	            Math.pow(255, 2) +
	            Math.pow(255, 2) +
	            Math.pow(255, 2)
	        );
	        var pixTolerance = _pixTolerance && _pixTolerance >= 0 && _pixTolerance <= 1 ? _pixTolerance : 0;
	        var frameTolerance = _frameTolerance && _frameTolerance >= 0 && _frameTolerance <= 1 ? _frameTolerance : 0;
	        var doNotCheckNext = false;
	
	        for (var f = 0; f < endCheckFrame; f++) {
	            var matchPixCount, endPixCheck, maxPixCount;
	
	            if (!doNotCheckNext) {
	                var image = new Image();
	                image.src = _frames[f].image;
	                context2d.drawImage(image, 0, 0, canvas.width, canvas.height);
	                var imageData = context2d.getImageData(0, 0, canvas.width, canvas.height);
	                matchPixCount = 0;
	                endPixCheck = imageData.data.length;
	                maxPixCount = imageData.data.length / 4;
	
	                for (var pix = 0; pix < endPixCheck; pix += 4) {
	                    var currentColor = {
	                        r: imageData.data[pix],
	                        g: imageData.data[pix + 1],
	                        b: imageData.data[pix + 2]
	                    };
	                    var colorDifference = Math.sqrt(
	                        Math.pow(currentColor.r - sampleColor.r, 2) +
	                        Math.pow(currentColor.g - sampleColor.g, 2) +
	                        Math.pow(currentColor.b - sampleColor.b, 2)
	                    );
	                    // difference in color it is difference in color vectors (r1,g1,b1) <=> (r2,g2,b2)
	                    if (colorDifference <= maxColorDifference * pixTolerance) {
	                        matchPixCount++;
	                    }
	                }
	            }
	
	            if (!doNotCheckNext && maxPixCount - matchPixCount <= maxPixCount * frameTolerance) {
	                // console.log('removed black frame : ' + f + ' ; frame duration ' + _frames[f].duration);
	            } else {
	                // console.log('frame is passed : ' + f);
	                if (checkUntilNotBlack) {
	                    doNotCheckNext = true;
	                }
	                resultFrames.push(_frames[f]);
	            }
	        }
	
	        resultFrames = resultFrames.concat(_frames.slice(endCheckFrame));
	
	        if (resultFrames.length <= 0) {
	            // at least one last frame should be available for next manipulation
	            // if total duration of all frames will be < 1000 than ffmpeg doesn't work well...
	            resultFrames.push(_frames[_frames.length - 1]);
	        }
	
	        return resultFrames;
	    }
	
	    var isStopDrawing = false;
	
	    /**
	     * This method stops recording video.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     video.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function(callback) {
	        isStopDrawing = true;
	
	        var _this = this;
	        // analyse of all frames takes some time!
	        setTimeout(function() {
	            // e.g. dropBlackFrames(frames, 10, 1, 1) - will cut all 10 frames
	            // e.g. dropBlackFrames(frames, 10, 0.5, 0.5) - will analyse 10 frames
	            // e.g. dropBlackFrames(frames, 10) === dropBlackFrames(frames, 10, 0, 0) - will analyse 10 frames with strict black color
	            whammy.frames = dropBlackFrames(whammy.frames, -1);
	
	            // to display advertisement images!
	            if (config.advertisement && config.advertisement.length) {
	                whammy.frames = config.advertisement.concat(whammy.frames);
	            }
	
	            /**
	             * @property {Blob} blob - Recorded frames in video/webm blob.
	             * @memberof WhammyRecorder
	             * @example
	             * recorder.stop(function() {
	             *     var blob = recorder.blob;
	             * });
	             */
	            whammy.compile(function(blob) {
	                _this.blob = blob;
	
	                if (_this.blob.forEach) {
	                    _this.blob = new Blob([], {
	                        type: 'video/webm'
	                    });
	                }
	
	                if (callback) {
	                    callback(_this.blob);
	                }
	            });
	        }, 10);
	    };
	
	    var isPausedRecording = false;
	
	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPausedRecording = true;
	    };
	
	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        isPausedRecording = false;
	    };
	
	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof WhammyRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        this.pause();
	        whammy.frames = [];
	    };
	
	    var canvas = document.createElement('canvas');
	    var context = canvas.getContext('2d');
	
	    var video;
	    var lastTime;
	    var whammy;
	}
	
	// https://github.com/antimatter15/whammy/blob/master/LICENSE
	// _________
	// Whammy.js
	
	// todo: Firefox now supports webp for webm containers!
	// their MediaRecorder implementation works well!
	// should we provide an option to record via Whammy.js or MediaRecorder API is a better solution?
	
	/**
	 * Whammy is a standalone class used by {@link RecordRTC} to bring video recording in Chrome. It is written by {@link https://github.com/antimatter15|antimatter15}
	 * @summary A real time javascript webm encoder based on a canvas hack.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef Whammy
	 * @class
	 * @example
	 * var recorder = new Whammy().Video(15);
	 * recorder.add(context || canvas || dataURL);
	 * var output = recorder.compile();
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	
	var Whammy = (function() {
	    // a more abstract-ish API
	
	    function WhammyVideo(duration) {
	        this.frames = [];
	        this.duration = duration || 1;
	        this.quality = 0.8;
	    }
	
	    /**
	     * Pass Canvas or Context or image/webp(string) to {@link Whammy} encoder.
	     * @method
	     * @memberof Whammy
	     * @example
	     * recorder = new Whammy().Video(0.8, 100);
	     * recorder.add(canvas || context || 'image/webp');
	     * @param {string} frame - Canvas || Context || image/webp
	     * @param {number} duration - Stick a duration (in milliseconds)
	     */
	    WhammyVideo.prototype.add = function(frame, duration) {
	        if ('canvas' in frame) { //CanvasRenderingContext2D
	            frame = frame.canvas;
	        }
	
	        if ('toDataURL' in frame) {
	            frame = frame.toDataURL('image/webp', this.quality);
	        }
	
	        if (!(/^data:image\/webp;base64,/ig).test(frame)) {
	            throw 'Input must be formatted properly as a base64 encoded DataURI of type image/webp';
	        }
	        this.frames.push({
	            image: frame,
	            duration: duration || this.duration
	        });
	    };
	
	    function processInWebWorker(_function) {
	        var blob = URL.createObjectURL(new Blob([_function.toString(),
	            'this.onmessage =  function (e) {' + _function.name + '(e.data);}'
	        ], {
	            type: 'application/javascript'
	        }));
	
	        var worker = new Worker(blob);
	        URL.revokeObjectURL(blob);
	        return worker;
	    }
	
	    function whammyInWebWorker(frames) {
	        function ArrayToWebM(frames) {
	            var info = checkFrames(frames);
	            if (!info) {
	                return [];
	            }
	
	            var clusterMaxDuration = 30000;
	
	            var EBML = [{
	                'id': 0x1a45dfa3, // EBML
	                'data': [{
	                    'data': 1,
	                    'id': 0x4286 // EBMLVersion
	                }, {
	                    'data': 1,
	                    'id': 0x42f7 // EBMLReadVersion
	                }, {
	                    'data': 4,
	                    'id': 0x42f2 // EBMLMaxIDLength
	                }, {
	                    'data': 8,
	                    'id': 0x42f3 // EBMLMaxSizeLength
	                }, {
	                    'data': 'webm',
	                    'id': 0x4282 // DocType
	                }, {
	                    'data': 2,
	                    'id': 0x4287 // DocTypeVersion
	                }, {
	                    'data': 2,
	                    'id': 0x4285 // DocTypeReadVersion
	                }]
	            }, {
	                'id': 0x18538067, // Segment
	                'data': [{
	                    'id': 0x1549a966, // Info
	                    'data': [{
	                        'data': 1e6, //do things in millisecs (num of nanosecs for duration scale)
	                        'id': 0x2ad7b1 // TimecodeScale
	                    }, {
	                        'data': 'whammy',
	                        'id': 0x4d80 // MuxingApp
	                    }, {
	                        'data': 'whammy',
	                        'id': 0x5741 // WritingApp
	                    }, {
	                        'data': doubleToString(info.duration),
	                        'id': 0x4489 // Duration
	                    }]
	                }, {
	                    'id': 0x1654ae6b, // Tracks
	                    'data': [{
	                        'id': 0xae, // TrackEntry
	                        'data': [{
	                            'data': 1,
	                            'id': 0xd7 // TrackNumber
	                        }, {
	                            'data': 1,
	                            'id': 0x73c5 // TrackUID
	                        }, {
	                            'data': 0,
	                            'id': 0x9c // FlagLacing
	                        }, {
	                            'data': 'und',
	                            'id': 0x22b59c // Language
	                        }, {
	                            'data': 'V_VP8',
	                            'id': 0x86 // CodecID
	                        }, {
	                            'data': 'VP8',
	                            'id': 0x258688 // CodecName
	                        }, {
	                            'data': 1,
	                            'id': 0x83 // TrackType
	                        }, {
	                            'id': 0xe0, // Video
	                            'data': [{
	                                'data': info.width,
	                                'id': 0xb0 // PixelWidth
	                            }, {
	                                'data': info.height,
	                                'id': 0xba // PixelHeight
	                            }]
	                        }]
	                    }]
	                }]
	            }];
	
	            //Generate clusters (max duration)
	            var frameNumber = 0;
	            var clusterTimecode = 0;
	            while (frameNumber < frames.length) {
	
	                var clusterFrames = [];
	                var clusterDuration = 0;
	                do {
	                    clusterFrames.push(frames[frameNumber]);
	                    clusterDuration += frames[frameNumber].duration;
	                    frameNumber++;
	                } while (frameNumber < frames.length && clusterDuration < clusterMaxDuration);
	
	                var clusterCounter = 0;
	                var cluster = {
	                    'id': 0x1f43b675, // Cluster
	                    'data': getClusterData(clusterTimecode, clusterCounter, clusterFrames)
	                }; //Add cluster to segment
	                EBML[1].data.push(cluster);
	                clusterTimecode += clusterDuration;
	            }
	
	            return generateEBML(EBML);
	        }
	
	        function getClusterData(clusterTimecode, clusterCounter, clusterFrames) {
	            return [{
	                'data': clusterTimecode,
	                'id': 0xe7 // Timecode
	            }].concat(clusterFrames.map(function(webp) {
	                var block = makeSimpleBlock({
	                    discardable: 0,
	                    frame: webp.data.slice(4),
	                    invisible: 0,
	                    keyframe: 1,
	                    lacing: 0,
	                    trackNum: 1,
	                    timecode: Math.round(clusterCounter)
	                });
	                clusterCounter += webp.duration;
	                return {
	                    data: block,
	                    id: 0xa3
	                };
	            }));
	        }
	
	        // sums the lengths of all the frames and gets the duration
	
	        function checkFrames(frames) {
	            if (!frames[0]) {
	                postMessage({
	                    error: 'Something went wrong. Maybe WebP format is not supported in the current browser.'
	                });
	                return;
	            }
	
	            var width = frames[0].width,
	                height = frames[0].height,
	                duration = frames[0].duration;
	
	            for (var i = 1; i < frames.length; i++) {
	                duration += frames[i].duration;
	            }
	            return {
	                duration: duration,
	                width: width,
	                height: height
	            };
	        }
	
	        function numToBuffer(num) {
	            var parts = [];
	            while (num > 0) {
	                parts.push(num & 0xff);
	                num = num >> 8;
	            }
	            return new Uint8Array(parts.reverse());
	        }
	
	        function strToBuffer(str) {
	            return new Uint8Array(str.split('').map(function(e) {
	                return e.charCodeAt(0);
	            }));
	        }
	
	        function bitsToBuffer(bits) {
	            var data = [];
	            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
	            bits = pad + bits;
	            for (var i = 0; i < bits.length; i += 8) {
	                data.push(parseInt(bits.substr(i, 8), 2));
	            }
	            return new Uint8Array(data);
	        }
	
	        function generateEBML(json) {
	            var ebml = [];
	            for (var i = 0; i < json.length; i++) {
	                var data = json[i].data;
	
	                if (typeof data === 'object') {
	                    data = generateEBML(data);
	                }
	
	                if (typeof data === 'number') {
	                    data = bitsToBuffer(data.toString(2));
	                }
	
	                if (typeof data === 'string') {
	                    data = strToBuffer(data);
	                }
	
	                var len = data.size || data.byteLength || data.length;
	                var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
	                var sizeToString = len.toString(2);
	                var padded = (new Array((zeroes * 7 + 7 + 1) - sizeToString.length)).join('0') + sizeToString;
	                var size = (new Array(zeroes)).join('0') + '1' + padded;
	
	                ebml.push(numToBuffer(json[i].id));
	                ebml.push(bitsToBuffer(size));
	                ebml.push(data);
	            }
	
	            return new Blob(ebml, {
	                type: 'video/webm'
	            });
	        }
	
	        function toBinStrOld(bits) {
	            var data = '';
	            var pad = (bits.length % 8) ? (new Array(1 + 8 - (bits.length % 8))).join('0') : '';
	            bits = pad + bits;
	            for (var i = 0; i < bits.length; i += 8) {
	                data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
	            }
	            return data;
	        }
	
	        function makeSimpleBlock(data) {
	            var flags = 0;
	
	            if (data.keyframe) {
	                flags |= 128;
	            }
	
	            if (data.invisible) {
	                flags |= 8;
	            }
	
	            if (data.lacing) {
	                flags |= (data.lacing << 1);
	            }
	
	            if (data.discardable) {
	                flags |= 1;
	            }
	
	            if (data.trackNum > 127) {
	                throw 'TrackNumber > 127 not supported';
	            }
	
	            var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function(e) {
	                return String.fromCharCode(e);
	            }).join('') + data.frame;
	
	            return out;
	        }
	
	        function parseWebP(riff) {
	            var VP8 = riff.RIFF[0].WEBP[0];
	
	            var frameStart = VP8.indexOf('\x9d\x01\x2a'); // A VP8 keyframe starts with the 0x9d012a header
	            for (var i = 0, c = []; i < 4; i++) {
	                c[i] = VP8.charCodeAt(frameStart + 3 + i);
	            }
	
	            var width, height, tmp;
	
	            //the code below is literally copied verbatim from the bitstream spec
	            tmp = (c[1] << 8) | c[0];
	            width = tmp & 0x3FFF;
	            tmp = (c[3] << 8) | c[2];
	            height = tmp & 0x3FFF;
	            return {
	                width: width,
	                height: height,
	                data: VP8,
	                riff: riff
	            };
	        }
	
	        function getStrLength(string, offset) {
	            return parseInt(string.substr(offset + 4, 4).split('').map(function(i) {
	                var unpadded = i.charCodeAt(0).toString(2);
	                return (new Array(8 - unpadded.length + 1)).join('0') + unpadded;
	            }).join(''), 2);
	        }
	
	        function parseRIFF(string) {
	            var offset = 0;
	            var chunks = {};
	
	            while (offset < string.length) {
	                var id = string.substr(offset, 4);
	                var len = getStrLength(string, offset);
	                var data = string.substr(offset + 4 + 4, len);
	                offset += 4 + 4 + len;
	                chunks[id] = chunks[id] || [];
	
	                if (id === 'RIFF' || id === 'LIST') {
	                    chunks[id].push(parseRIFF(data));
	                } else {
	                    chunks[id].push(data);
	                }
	            }
	            return chunks;
	        }
	
	        function doubleToString(num) {
	            return [].slice.call(
	                new Uint8Array((new Float64Array([num])).buffer), 0).map(function(e) {
	                return String.fromCharCode(e);
	            }).reverse().join('');
	        }
	
	        var webm = new ArrayToWebM(frames.map(function(frame) {
	            var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
	            webp.duration = frame.duration;
	            return webp;
	        }));
	
	        if (!!navigator.mozGetUserMedia) {
	            return webm;
	        }
	
	        postMessage(webm);
	    }
	
	    /**
	     * Encodes frames in WebM container. It uses WebWorkinvoke to invoke 'ArrayToWebM' method.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof Whammy
	     * @example
	     * recorder = new Whammy().Video(0.8, 100);
	     * recorder.compile(function(blob) {
	     *    // blob.size - blob.type
	     * });
	     */
	    WhammyVideo.prototype.compile = function(callback) {
	        if (!!navigator.mozGetUserMedia) {
	            callback(whammyInWebWorker(this.frames));
	            return;
	        }
	        var webWorker = processInWebWorker(whammyInWebWorker);
	
	        webWorker.onmessage = function(event) {
	            if (event.data.error) {
	                console.error(event.data.error);
	                return;
	            }
	            callback(event.data);
	        };
	
	        webWorker.postMessage(this.frames);
	    };
	
	    return {
	        /**
	         * A more abstract-ish API.
	         * @method
	         * @memberof Whammy
	         * @example
	         * recorder = new Whammy().Video(0.8, 100);
	         * @param {?number} speed - 0.8
	         * @param {?number} quality - 100
	         */
	        Video: WhammyVideo
	    };
	})();
	
	// ______________ (indexed-db)
	// DiskStorage.js
	
	/**
	 * DiskStorage is a standalone object used by {@link RecordRTC} to store recorded blobs in IndexedDB storage.
	 * @summary Writing blobs into IndexedDB.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @example
	 * DiskStorage.Store({
	 *     audioBlob: yourAudioBlob,
	 *     videoBlob: yourVideoBlob,
	 *     gifBlob  : yourGifBlob
	 * });
	 * DiskStorage.Fetch(function(dataURL, type) {
	 *     if(type === 'audioBlob') { }
	 *     if(type === 'videoBlob') { }
	 *     if(type === 'gifBlob')   { }
	 * });
	 * // DiskStorage.dataStoreName = 'recordRTC';
	 * // DiskStorage.onError = function(error) { };
	 * @property {function} init - This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
	 * @property {function} Fetch - This method fetches stored blobs from IndexedDB.
	 * @property {function} Store - This method stores blobs in IndexedDB.
	 * @property {function} onError - This function is invoked for any known/unknown error.
	 * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 */
	
	
	var DiskStorage = {
	    /**
	     * This method must be called once to initialize IndexedDB ObjectStore. Though, it is auto-used internally.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.init();
	     */
	    init: function() {
	        var self = this;
	
	        if (typeof indexedDB === 'undefined' || typeof indexedDB.open === 'undefined') {
	            console.error('IndexedDB API are not available in this browser.');
	            return;
	        }
	
	        if (typeof webkitIndexedDB !== 'undefined') {
	            indexedDB = webkitIndexedDB;
	        }
	
	        if (typeof mozIndexedDB !== 'undefined') {
	            indexedDB = mozIndexedDB;
	        }
	
	        if (typeof OIndexedDB !== 'undefined') {
	            indexedDB = OIndexedDB;
	        }
	
	        if (typeof msIndexedDB !== 'undefined') {
	            indexedDB = msIndexedDB;
	        }
	
	        var dbVersion = 1;
	        var dbName = this.dbName || location.href.replace(/\/|:|#|%|\.|\[|\]/g, ''),
	            db;
	        var request = indexedDB.open(dbName, dbVersion);
	
	        function createObjectStore(dataBase) {
	            dataBase.createObjectStore(self.dataStoreName);
	        }
	
	        function putInDB() {
	            var transaction = db.transaction([self.dataStoreName], 'readwrite');
	
	            if (self.videoBlob) {
	                transaction.objectStore(self.dataStoreName).put(self.videoBlob, 'videoBlob');
	            }
	
	            if (self.gifBlob) {
	                transaction.objectStore(self.dataStoreName).put(self.gifBlob, 'gifBlob');
	            }
	
	            if (self.audioBlob) {
	                transaction.objectStore(self.dataStoreName).put(self.audioBlob, 'audioBlob');
	            }
	
	            function getFromStore(portionName) {
	                transaction.objectStore(self.dataStoreName).get(portionName).onsuccess = function(event) {
	                    if (self.callback) {
	                        self.callback(event.target.result, portionName);
	                    }
	                };
	            }
	
	            getFromStore('audioBlob');
	            getFromStore('videoBlob');
	            getFromStore('gifBlob');
	        }
	
	        request.onerror = self.onError;
	
	        request.onsuccess = function() {
	            db = request.result;
	            db.onerror = self.onError;
	
	            if (db.setVersion) {
	                if (db.version !== dbVersion) {
	                    var setVersion = db.setVersion(dbVersion);
	                    setVersion.onsuccess = function() {
	                        createObjectStore(db);
	                        putInDB();
	                    };
	                } else {
	                    putInDB();
	                }
	            } else {
	                putInDB();
	            }
	        };
	        request.onupgradeneeded = function(event) {
	            createObjectStore(event.target.result);
	        };
	    },
	    /**
	     * This method fetches stored blobs from IndexedDB.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.Fetch(function(dataURL, type) {
	     *     if(type === 'audioBlob') { }
	     *     if(type === 'videoBlob') { }
	     *     if(type === 'gifBlob')   { }
	     * });
	     */
	    Fetch: function(callback) {
	        this.callback = callback;
	        this.init();
	
	        return this;
	    },
	    /**
	     * This method stores blobs in IndexedDB.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.Store({
	     *     audioBlob: yourAudioBlob,
	     *     videoBlob: yourVideoBlob,
	     *     gifBlob  : yourGifBlob
	     * });
	     */
	    Store: function(config) {
	        this.audioBlob = config.audioBlob;
	        this.videoBlob = config.videoBlob;
	        this.gifBlob = config.gifBlob;
	
	        this.init();
	
	        return this;
	    },
	    /**
	     * This function is invoked for any known/unknown error.
	     * @method
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.onError = function(error){
	     *     alerot( JSON.stringify(error) );
	     * };
	     */
	    onError: function(error) {
	        console.error(JSON.stringify(error, null, '\t'));
	    },
	
	    /**
	     * @property {string} dataStoreName - Name of the ObjectStore created in IndexedDB storage.
	     * @memberof DiskStorage
	     * @internal
	     * @example
	     * DiskStorage.dataStoreName = 'recordRTC';
	     */
	    dataStoreName: 'recordRTC',
	    dbName: null
	};
	
	// ______________
	// GifRecorder.js
	
	/**
	 * GifRecorder is standalone calss used by {@link RecordRTC} to record video or canvas into animated gif.
	 * @license {@link https://github.com/muaz-khan/RecordRTC#license|MIT}
	 * @author {@link http://www.MuazKhan.com|Muaz Khan}
	 * @typedef GifRecorder
	 * @class
	 * @example
	 * var recorder = new GifRecorder(mediaStream || canvas || context, { width: 1280, height: 720, frameRate: 200, quality: 10 });
	 * recorder.record();
	 * recorder.stop(function(blob) {
	 *     img.src = URL.createObjectURL(blob);
	 * });
	 * @see {@link https://github.com/muaz-khan/RecordRTC|RecordRTC Source Code}
	 * @param {MediaStream} mediaStream - MediaStream object or HTMLCanvasElement or CanvasRenderingContext2D.
	 * @param {object} config - {disableLogs:true, initCallback: function, width: 320, height: 240, frameRate: 200, quality: 10}
	 */
	
	function GifRecorder(mediaStream, config) {
	    if (typeof GIFEncoder === 'undefined') {
	        throw 'Please link: https://cdn.webrtc-experiment.com/gif-recorder.js';
	    }
	
	    config = config || {};
	
	    var isHTMLObject = mediaStream instanceof CanvasRenderingContext2D || mediaStream instanceof HTMLCanvasElement;
	
	    /**
	     * This method records MediaStream.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.record();
	     */
	    this.record = function() {
	        if (!isHTMLObject) {
	            if (!config.width) {
	                config.width = video.offsetWidth || 320;
	            }
	
	            if (!this.height) {
	                config.height = video.offsetHeight || 240;
	            }
	
	            if (!config.video) {
	                config.video = {
	                    width: config.width,
	                    height: config.height
	                };
	            }
	
	            if (!config.canvas) {
	                config.canvas = {
	                    width: config.width,
	                    height: config.height
	                };
	            }
	
	            canvas.width = config.canvas.width;
	            canvas.height = config.canvas.height;
	
	            video.width = config.video.width;
	            video.height = config.video.height;
	        }
	
	        // external library to record as GIF images
	        gifEncoder = new GIFEncoder();
	
	        // void setRepeat(int iter) 
	        // Sets the number of times the set of GIF frames should be played. 
	        // Default is 1; 0 means play indefinitely.
	        gifEncoder.setRepeat(0);
	
	        // void setFrameRate(Number fps) 
	        // Sets frame rate in frames per second. 
	        // Equivalent to setDelay(1000/fps).
	        // Using "setDelay" instead of "setFrameRate"
	        gifEncoder.setDelay(config.frameRate || 200);
	
	        // void setQuality(int quality) 
	        // Sets quality of color quantization (conversion of images to the 
	        // maximum 256 colors allowed by the GIF specification). 
	        // Lower values (minimum = 1) produce better colors, 
	        // but slow processing significantly. 10 is the default, 
	        // and produces good color mapping at reasonable speeds. 
	        // Values greater than 20 do not yield significant improvements in speed.
	        gifEncoder.setQuality(config.quality || 10);
	
	        // Boolean start() 
	        // This writes the GIF Header and returns false if it fails.
	        gifEncoder.start();
	
	        startTime = Date.now();
	
	        var self = this;
	
	        function drawVideoFrame(time) {
	            if (isPausedRecording) {
	                return setTimeout(function() {
	                    drawVideoFrame(time);
	                }, 100);
	            }
	
	            lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
	
	            if (typeof lastFrameTime === undefined) {
	                lastFrameTime = time;
	            }
	
	            // ~10 fps
	            if (time - lastFrameTime < 90) {
	                return;
	            }
	
	            if (!isHTMLObject && video.paused) {
	                // via: https://github.com/muaz-khan/WebRTC-Experiment/pull/316
	                // Tweak for Android Chrome
	                video.play();
	            }
	
	            context.drawImage(video, 0, 0, canvas.width, canvas.height);
	
	            if (config.onGifPreview) {
	                config.onGifPreview(canvas.toDataURL('image/png'));
	            }
	
	            gifEncoder.addFrame(context);
	            lastFrameTime = time;
	        }
	
	        lastAnimationFrame = requestAnimationFrame(drawVideoFrame);
	
	        if (config.initCallback) {
	            config.initCallback();
	        }
	    };
	
	    /**
	     * This method stops recording MediaStream.
	     * @param {function} callback - Callback function, that is used to pass recorded blob back to the callee.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.stop(function(blob) {
	     *     img.src = URL.createObjectURL(blob);
	     * });
	     */
	    this.stop = function() {
	        if (lastAnimationFrame) {
	            cancelAnimationFrame(lastAnimationFrame);
	        }
	
	        endTime = Date.now();
	
	        /**
	         * @property {Blob} blob - The recorded blob object.
	         * @memberof GifRecorder
	         * @example
	         * recorder.stop(function(){
	         *     var blob = recorder.blob;
	         * });
	         */
	        this.blob = new Blob([new Uint8Array(gifEncoder.stream().bin)], {
	            type: 'image/gif'
	        });
	
	        // bug: find a way to clear old recorded blobs
	        gifEncoder.stream().bin = [];
	    };
	
	    var isPausedRecording = false;
	
	    /**
	     * This method pauses the recording process.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.pause();
	     */
	    this.pause = function() {
	        isPausedRecording = true;
	    };
	
	    /**
	     * This method resumes the recording process.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.resume();
	     */
	    this.resume = function() {
	        isPausedRecording = false;
	    };
	
	    /**
	     * This method resets currently recorded data.
	     * @method
	     * @memberof GifRecorder
	     * @example
	     * recorder.clearRecordedData();
	     */
	    this.clearRecordedData = function() {
	        if (!gifEncoder) {
	            return;
	        }
	
	        this.pause();
	
	        gifEncoder.stream().bin = [];
	    };
	
	    var canvas = document.createElement('canvas');
	    var context = canvas.getContext('2d');
	
	    if (isHTMLObject) {
	        if (mediaStream instanceof CanvasRenderingContext2D) {
	            context = mediaStream;
	        } else if (mediaStream instanceof HTMLCanvasElement) {
	            context = mediaStream.getContext('2d');
	        }
	    }
	
	    if (!isHTMLObject) {
	        var video = document.createElement('video');
	        video.muted = true;
	        video.autoplay = true;
	
	        if (typeof video.srcObject !== 'undefined') {
	            video.srcObject = mediaStream;
	        } else {
	            video.src = URL.createObjectURL(mediaStream);
	        }
	
	        video.play();
	    }
	
	    var lastAnimationFrame = null;
	    var startTime, endTime, lastFrameTime;
	
	    var gifEncoder;
	}


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//
	var prefix = typeof Object.create !== 'function' ? '~' : false;
	
	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}
	
	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() { /* Nothing to set */ }
	
	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;
	
	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event
	    , available = this._events && this._events[evt];
	
	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];
	
	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }
	
	  return ee;
	};
	
	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return false;
	
	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;
	
	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
	
	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }
	
	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }
	
	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;
	
	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
	
	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }
	
	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }
	
	  return true;
	};
	
	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true)
	    , evt = prefix ? prefix + event : event;
	
	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;
	  else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);
	    else this._events[evt] = [
	      this._events[evt], listener
	    ];
	  }
	
	  return this;
	};
	
	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;
	
	  if (!this._events || !this._events[evt]) return this;
	
	  var listeners = this._events[evt]
	    , events = [];
	
	  if (fn) {
	    if (listeners.fn) {
	      if (
	           listeners.fn !== fn
	        || (once && !listeners.once)
	        || (context && listeners.context !== context)
	      ) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (
	             listeners[i].fn !== fn
	          || (once && !listeners[i].once)
	          || (context && listeners[i].context !== context)
	        ) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }
	
	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }
	
	  return this;
	};
	
	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;
	
	  if (event) delete this._events[prefix ? prefix + event : event];
	  else this._events = prefix ? {} : Object.create(null);
	
	  return this;
	};
	
	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;
	
	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};
	
	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;
	
	//
	// Expose the module.
	//
	if (true) {
	  module.exports = EventEmitter;
	}


/***/ }
]);
//# sourceMappingURL=index.js.map