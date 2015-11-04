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
	
	var _controllersMedia = __webpack_require__(219);
	
	var _controllersMedia2 = _interopRequireDefault(_controllersMedia);
	
	// Actions
	
	var _actions = __webpack_require__(183);
	
	// Action Constants
	
	// Initialize redux store
	var store = (0, _redux.createStore)(_reducers2['default']);
	
	/*
		Bind media manager events
	*/
	
	// New video sources
	_controllersMedia2['default'].on('sources', function (sources) {
		store.dispatch((0, _actions.setSources)(sources));
	});
	
	// New video streams
	_controllersMedia2['default'].on('stream', function (stream, live) {
		// Set new stream
		store.dispatch((0, _actions.setStream)(stream));
	
		// Check if new stream is live feed stream or recording
		store.dispatch((0, _actions.setDisplay)(live ? _actions.displayModes.RECORD : _actions.displayModes.PLAYBACK));
	});
	
	// New video streams
	_controllersMedia2['default'].on('progress', function (progress) {
		store.dispatch((0, _actions.setDisplay)(_actions.displayModes.PROGRESS));
		store.dispatch((0, _actions.setProgress)(progress));
	});
	
	// New capture preview
	_controllersMedia2['default'].on('preview', function (previewUrl) {
		// Update the preview URL
		store.dispatch((0, _actions.setPreview)(previewUrl));
	
		// Set the display to playback preview mode
		store.dispatch((0, _actions.setDisplay)(_actions.displayModes.PREVIEW));
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
	var disp = _actions.displayModes.SPLASH;
	var pl = _actions.playModes.PLAY;
	
	var display = function display(state, action) {
		if (state === undefined) state = disp;
		return action.type !== _actions.SET_DISPLAY ? state : action.display;
	};
	var preview = function preview(state, action) {
		if (state === undefined) state = '';
		return action.type !== _actions.SET_PREVIEW ? state : action.preview;
	};
	var progress = function progress(state, action) {
		if (state === undefined) state = 0.0;
		return action.type !== _actions.SET_PROGRESS ? state : action.progress;
	};
	var position = function position(state, action) {
		if (state === undefined) state = { pos: 0 };
		return action.type !== _actions.SET_POSITION ? state : action;
	};
	var source = function source(state, action) {
		if (state === undefined) state = 0;
		return action.type !== _actions.SET_SOURCE ? state : action.source;
	};
	var sources = function sources(state, action) {
		if (state === undefined) state = [];
		return action.type !== _actions.SET_SOURCES ? state : action.sources;
	};
	var stream = function stream(state, action) {
		if (state === undefined) state = '';
		return action.type !== _actions.SET_STREAM ? state : action.stream;
	};
	var recording = function recording(state, action) {
		if (state === undefined) state = false;
		return action.type !== _actions.RECORD_VIDEO ? state : action.recording;
	};
	var play = function play(state, action) {
		if (state === undefined) state = pl;
		return action.type !== _actions.SET_PLAY_MODE ? state : action.mode;
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
		preview: preview,
		progress: progress,
		recording: recording,
		display: display,
		position: position,
		play: play
	});
	
	// renderMode,
	// renderRange
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
	var SET_PREVIEW = 'SET_PREVIEW';
	exports.SET_PREVIEW = SET_PREVIEW;
	var SET_PROGRESS = 'SET_PROGRESS';
	
	exports.SET_PROGRESS = SET_PROGRESS;
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
	var SET_POSITION = 'SET_POSITION';
	exports.SET_POSITION = SET_POSITION;
	var SET_PLAY_MODE = 'SET_PLAY_MODE';
	
	exports.SET_PLAY_MODE = SET_PLAY_MODE;
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
		SPLASH: 'SPLASH',
		RECORD: 'RECORD',
		PLAYBACK: 'PLAYBACK',
		RENDER: 'RENDER',
		PROGRESS: 'PROGRESS',
		PREVIEW: 'PREVIEW'
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
	var positionSources = {
		MEDIA: false,
		SEEK: true
	};
	
	exports.positionSources = positionSources;
	/*
		action creators
	*/
	
	// App display management
	var setDisplay = function setDisplay(display) {
		return { type: SET_DISPLAY, display: display };
	};
	exports.setDisplay = setDisplay;
	var setPreview = function setPreview(preview) {
		return { type: SET_PREVIEW, preview: preview };
	};
	exports.setPreview = setPreview;
	var setProgress = function setProgress(progress) {
		return { type: SET_PROGRESS, progress: progress };
	};
	
	exports.setProgress = setProgress;
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
	var setPosition = function setPosition(pos, src) {
		return { type: SET_POSITION, pos: pos, src: src };
	};
	exports.setPosition = setPosition;
	var setPlayMode = function setPlayMode(mode) {
		return { type: SET_PLAY_MODE, mode: mode };
	};
	
	exports.setPlayMode = setPlayMode;
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
	
	// Action constants
	
	// Components
	
	var _Media = __webpack_require__(214);
	
	var _Media2 = _interopRequireDefault(_Media);
	
	var _controlsDropdown = __webpack_require__(215);
	
	var _controlsDropdown2 = _interopRequireDefault(_controlsDropdown);
	
	var _controlsRange = __webpack_require__(216);
	
	var _controlsRange2 = _interopRequireDefault(_controlsRange);
	
	// Controllers
	
	var _controllersMedia = __webpack_require__(219);
	
	var _controllersMedia2 = _interopRequireDefault(_controllersMedia);
	
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
			key: 'retry',
			value: function retry() {
				this.props.dispatch((0, _actions.setDisplay)(_actions.displayModes.RECORD));
				_controllersMedia2['default'].getStream();
			}
		}, {
			key: 'renderImage',
			value: function renderImage() {
				this.props.dispatch((0, _actions.setDisplay)(_actions.displayModes.PROGRESS));
				_controllersMedia2['default'].render();
			}
		}, {
			key: 'render',
			value: function render() {
				var _this = this;
	
				var top = undefined,
				    bottom = undefined;
				var _props = this.props;
				var dispatch = _props.dispatch;
				var visibleTodos = _props.visibleTodos;
				var visibilityFilter = _props.visibilityFilter;
	
				switch (this.props.display) {
					case _actions.displayModes.SPLASH:
						bottom = _react2['default'].createElement(
							'div',
							{ className: 'splash cover' },
							_react2['default'].createElement(
								'div',
								{ className: 'splash-inner' },
								'LightPaint v1.0'
							)
						);
	
						break;
	
					case _actions.displayModes.RECORD:
						top = _react2['default'].createElement(_controlsDropdown2['default'], {
							options: this.props.sources,
							selected: this.props.source,
							onSelect: function (i) {
								return dispatch((0, _actions.setSource)(i));
							}
						});
	
						bottom = _react2['default'].createElement(
							'div',
							{ className: 'center full-width' },
							_react2['default'].createElement(
								'div',
								{ className: 'btn-group' },
								_react2['default'].createElement(
									'button',
									{ type: 'button', className: 'btn btn-sm btn-' + (this.props.recording ? 'danger' : 'secondary') + '-outline', onClick: function (e) {
											return _this.record(_this.props.recording);
										} },
									'Record'
								),
								_react2['default'].createElement(
									'button',
									{ type: 'button', className: 'btn btn-sm btn-secondary-outline', onClick: function (e) {
											return _controllersMedia2['default'].upload();
										} },
									'Upload'
								)
							)
						);
	
						break;
	
					case _actions.displayModes.PLAYBACK:
						top = _react2['default'].createElement(
							'div',
							{ className: 'btn-group' },
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-secondary-outline', onClick: function (e) {
										return _this.retry();
									} },
								'BACK'
							)
						);
	
						bottom = _react2['default'].createElement(
							'div',
							{ className: 'center full-width' },
							_react2['default'].createElement(_controlsRange2['default'], { className: 'control-range full-width',
								position: this.props.position.pos,
								onChange: function (position) {
									return dispatch((0, _actions.setPosition)(position, true));
								},
								onSeek: function (seeking) {
									return dispatch((0, _actions.setPlayMode)(seeking ? _actions.playModes.PAUSE : _actions.playModes.PLAY));
								} }),
							_react2['default'].createElement(
								'div',
								{ className: 'btn-group center' },
								_react2['default'].createElement(
									'button',
									{ type: 'button', className: 'btn btn-sm btn-' + (this.props.recording ? 'danger' : 'secondary') + '-outline', onClick: function (e) {
											return _this.renderImage();
										} },
									'RENDER'
								)
							)
						);
	
						break;
	
					case _actions.displayModes.RENDER:
						bottom = _react2['default'].createElement(
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
	
					case _actions.displayModes.PROGRESS:
						bottom = _react2['default'].createElement(
							'div',
							{ className: 'splash' },
							_react2['default'].createElement(
								'div',
								{ className: 'splash-inner' },
								_react2['default'].createElement(
									'progress',
									{ className: 'progress progress-info', value: String(Math.round(this.props.progress * 100)), max: '100' },
									'25%'
								)
							)
						);
	
						break;
	
					case _actions.displayModes.PREVIEW:
						top = _react2['default'].createElement(
							'div',
							{ className: 'btn-group' },
							_react2['default'].createElement(
								'button',
								{ type: 'button', className: 'btn btn-sm btn-secondary-outline', onClick: function (e) {
										return _this.retry();
									} },
								'BACK'
							)
						);
	
						bottom = _react2['default'].createElement(
							'div',
							{ className: 'btn-group center' },
							_react2['default'].createElement(
								'a',
								{ type: 'button', className: 'btn btn-sm btn-secondary-outline', href: this.props.preview, download: true },
								'SAVE'
							)
						);
	
						break;
				}
	
				// Return template
				return _react2['default'].createElement(
					'div',
					{ className: 'app flicker scanlines' },
					_react2['default'].createElement(_Media2['default'], {
						position: this.props.position,
						stream: this.props.stream,
						play: this.props.play === _actions.playModes.PLAY,
						preview: this.props.preview,
						playback: this.props.display === _actions.displayModes.PLAYBACK,
						onMount: function (video) {
							return _controllersMedia2['default'].setElement(video);
						},
						onUpdate: function (pos) {
							return dispatch((0, _actions.setPosition)(pos, _actions.positionSources.MEDIA));
						}
					}),
					_react2['default'].createElement(
						'div',
						{ className: 'controls container-fluid' },
						_react2['default'].createElement(
							'div',
							{ className: 'source' },
							top
						),
						_react2['default'].createElement(
							'div',
							{ className: 'transport' },
							bottom
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
				// Update video source
				if (this.props.stream !== nextProps.stream) this.vid.src = nextProps.stream;
	
				// Update capture preview
				if (this.props.preview !== nextProps.preview) this.preview.src = nextProps.preview;
	
				// Update current video position
				if (this.props.position.src) this.vid.currentTime = this.props.position.pos / 1000 * this.vid.duration;
	
				if (this.props.play !== nextProps.play) nextProps.play ? this.vid.play() : this.vid.pause();
	
				// Update render
				// TODO!
	
				return false;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _this = this;
	
				var elm = _reactDom2['default'].findDOMNode(this);
	
				// Get elements
				this.vid = elm.getElementsByTagName('video')[0];
				this.preview = elm.getElementsByTagName('img')[0];
				this.render = elm.getElementsByTagName('img')[1];
	
				// Assign the video element to the media manager
				// Ugly, I know...
				this.props.onMount(this.vid);
	
				// Handle time update events (the video is moving)
				this.vid.ontimeupdate = function (e) {
					return _this.timeUpdate(e);
				};
			}
		}, {
			key: 'timeUpdate',
			value: function timeUpdate(e) {
				if (this.props.playback && this.props.play) this.props.onUpdate(1000.0 / this.vid.duration * this.vid.currentTime);
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2['default'].createElement(
					'div',
					{ className: 'media-preview' },
					_react2['default'].createElement('video', { className: 'media-preview-video', autoPlay: true, loop: true }),
					_react2['default'].createElement('img', { className: 'media-preview-capture' }),
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
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	__webpack_require__(217);
	
	var _react = __webpack_require__(8);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(163);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var Range = (function (_React$Component) {
		_inherits(Range, _React$Component);
	
		function Range() {
			_classCallCheck(this, Range);
	
			_get(Object.getPrototypeOf(Range.prototype), 'constructor', this).call(this);
	
			this.state = {
				click: false
			};
		}
	
		_createClass(Range, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				if (!this.state.click) this.elm.value = nextProps.position;
				return false;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.elm = _reactDom2['default'].findDOMNode(this).getElementsByTagName('input')[0];
			}
		}, {
			key: 'seek',
			value: function seek(e) {
				var p = parseFloat(e.target.value);
	
				if (isNaN(p)) return;
	
				this.props.onChange(e.target.value);
			}
		}, {
			key: 'click',
			value: function click(isDown) {
				this.setState({ click: isDown });
				this.props.onSeek(isDown);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this = this;
	
				return _react2['default'].createElement(
					'div',
					{ className: 'control-range' },
					_react2['default'].createElement('input', { type: 'range', min: 0.0, max: 1000.0, step: 0.1,
						defaultValue: this.props.position,
						onChange: function (e) {
							return _this.seek(e);
						},
						onMouseDown: function (e) {
							return _this.click(true);
						},
						onMouseUp: function (e) {
							return _this.click(false);
						}
					})
				);
			}
		}]);
	
		return Range;
	})(_react2['default'].Component);
	
	exports['default'] = Range;
	module.exports = exports['default'];

/***/ },
/* 217 */
3,
/* 218 */,
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = __webpack_require__(185)['default'];
	
	var _inherits = __webpack_require__(199)['default'];
	
	var _createClass = __webpack_require__(210)['default'];
	
	var _classCallCheck = __webpack_require__(213)['default'];
	
	var _Promise = __webpack_require__(220)['default'];
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _gifJsDistGif = __webpack_require__(261);
	
	var _eventemitter3 = __webpack_require__(262);
	
	var _eventemitter32 = _interopRequireDefault(_eventemitter3);
	
	var _capture = __webpack_require__(263);
	
	var _capture2 = _interopRequireDefault(_capture);
	
	// import fs 		 from 'fs'
	
	// Shim getUserMedia
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	window.URL = URL || webkitURL;
	
	// Create upload input
	var input = document.createElement('input');
	input.type = 'file';
	input.accept = 'video/*';
	
	var FRAME_RATE = 25,
	    QUALITY = 0.01;
	
	var MediaManager = (function (_Emitter) {
		_inherits(MediaManager, _Emitter);
	
		function MediaManager() {
			_classCallCheck(this, MediaManager);
	
			_get(Object.getPrototypeOf(MediaManager.prototype), 'constructor', this).call(this);
	
			// Create a canvas context
			this.ctx = document.createElement('CANVAS').getContext('2d');
			this.rctx = document.createElement('CANVAS').getContext('2d');
	
			// Video capture settings
			this.constraints = {
				audio: false,
				video: {
					optional: [{ sourceId: null }, { minWidth: 320 }, { minWidth: 640 }, { minWidth: 1024 }, { minWidth: 1280 }, { minWidth: 1920 }, { minWidth: 2560 }, { minWidth: 9999 }]
				}
			};
	
			// Get available video sources
			this.sources = [];
	
			// Captured frames
			this.frames = null;
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
					// Clear the frame capture
					this.frames = [];
	
					// Update canvas dimensions
					this.ctx.canvas.width = this.video.videoWidth;
					this.rctx.canvas.width = this.video.videoWidth;
					this.ctx.canvas.height = this.video.videoHeight;
					this.rctx.canvas.height = this.video.videoHeight;
	
					this.interval = setInterval(function (ts) {
						// Draw video to canvas
						_this3.ctx.drawImage(_this3.video, 0, 0, _this3.video.videoWidth, _this3.video.videoHeight, 0, 0, _this3.ctx.canvas.width, _this3.ctx.canvas.height);
	
						// Capture a frame
						_this3.frames.push(_this3.ctx.getImageData(0, 0, _this3.video.videoWidth, _this3.video.videoHeight));
					}, FRAME_RATE);
				} else {
					// Stop adding frames
					clearInterval(this.interval);
	
					// Render from image sequence and emit a new stream
					(0, _capture2['default'])(this.frames, this.ctx, FRAME_RATE, function (done, data) {
						done ? _this3.emit('stream', URL.createObjectURL(data)) : _this3.emit('progress', data);
					});
				}
			}
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
				this.frames = undefined;
				this.file = file;
				this.emit('stream', file.path);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this5 = this;
	
				// Update canvas dimensions
				this.ctx.canvas.width = this.video.videoWidth;
				this.rctx.canvas.width = this.video.videoWidth;
				this.ctx.canvas.height = this.video.videoHeight;
				this.rctx.canvas.height = this.video.videoHeight;
	
				// Prep canvas for a clean render
				this.rctx.clearRect(0, 0, this.rctx.canvas.width, this.rctx.canvas.height);
				this.rctx.rect(0, 0, this.rctx.canvas.width, this.rctx.canvas.height);
				this.rctx.fillStyle = 'black';
				this.rctx.fill();
				this.ctx.globalCompositeOperation = 'lighten';
	
				// Render frame capture
				if (this.frames && frames.length) {
					this.frames.forEach(function (frame, i) {
						_this5.emit('progress', i / frames.length);
						_this5.renderFrame(frame);
					});
				}
	
				// Render video stream
				else {
						this.video.pause();
						// this.video.playbackRate = 0.5
						this.video.currentTime = 0;
						this.video.loop = false;
	
						this.timeUpdateHandler = this.renderFrame.bind(this);
						this.video.addEventListener('canplay', this.timeUpdateHandler);
	
						requestAnimationFrame(function (ts) {
							return _this5.renderFrame();
						});
					}
			}
		}, {
			key: 'renderFrame',
			value: function renderFrame() {
				var _this6 = this;
	
				this.emit('progress', this.video.currentTime / this.video.duration);
	
				if (this.video.currentTime >= this.video.duration) return this.finishRender();
	
				requestAnimationFrame(function (ts) {
					_this6.ctx.drawImage(_this6.video, 0, 0, _this6.video.videoWidth, _this6.video.videoHeight);
					_this6.rctx.putImageData(_this6.ctx.getImageData(0, 0, _this6.video.videoWidth, _this6.video.videoHeight), 0, 0, 0, 0, _this6.video.videoWidth, _this6.video.videoHeight);
	
					_this6.video.currentTime += 1 / (FRAME_RATE + 1);
	
					if (_this6.video.currentTime >= _this6.video.duration) return _this6.finishRender();
				});
			}
		}, {
			key: 'finishRender',
			value: function finishRender() {
				// Unassign onplay handler
				this.ctx.globalCompositeOperation = 'source-over';
				this.video.onplay = undefined;
				this.video.loop = true;
				this.video.removeEventListener('canplay', this.timeUpdateHandler);
				this.emit('preview', this.rctx.canvas.toDataURL());
			}
		}]);
	
		return MediaManager;
	})(_eventemitter32['default']);
	
	exports['default'] = new MediaManager();
	module.exports = exports['default'];

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(221), __esModule: true };

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(222);
	__webpack_require__(223);
	__webpack_require__(239);
	__webpack_require__(243);
	module.exports = __webpack_require__(197).Promise;

/***/ },
/* 222 */
/***/ function(module, exports) {



/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(224)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(226)(String, 'String', function(iterated){
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
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	// true  -> String#at
	// false -> String#codePointAt
	var toInteger = __webpack_require__(225)
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
/* 225 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY         = __webpack_require__(227)
	  , $def            = __webpack_require__(195)
	  , $redef          = __webpack_require__(228)
	  , hide            = __webpack_require__(229)
	  , has             = __webpack_require__(232)
	  , SYMBOL_ITERATOR = __webpack_require__(233)('iterator')
	  , Iterators       = __webpack_require__(236)
	  , BUGGY           = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR     = '@@iterator'
	  , KEYS            = 'keys'
	  , VALUES          = 'values';
	var returnThis = function(){ return this; };
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCE){
	  __webpack_require__(237)(Constructor, NAME, next);
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
	    __webpack_require__(238)(IteratorPrototype, TAG, true);
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
/* 227 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(229);

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(188)
	  , createDesc = __webpack_require__(230);
	module.exports = __webpack_require__(231) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 230 */
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
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(198)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 232 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(234)('wks')
	  , Symbol = __webpack_require__(196).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || __webpack_require__(235))('Symbol.' + name));
	};

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(196)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 235 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 236 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $ = __webpack_require__(188)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(229)(IteratorPrototype, __webpack_require__(233)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: __webpack_require__(230)(1,next)});
	  __webpack_require__(238)(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(188).setDesc
	  , has = __webpack_require__(232)
	  , TAG = __webpack_require__(233)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(240);
	var Iterators = __webpack_require__(236);
	Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var setUnscope = __webpack_require__(241)
	  , step       = __webpack_require__(242)
	  , Iterators  = __webpack_require__(236)
	  , toIObject  = __webpack_require__(190);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	__webpack_require__(226)(Array, 'Array', function(iterated, kind){
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
/* 241 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 242 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(188)
	  , LIBRARY    = __webpack_require__(227)
	  , global     = __webpack_require__(196)
	  , ctx        = __webpack_require__(208)
	  , classof    = __webpack_require__(244)
	  , $def       = __webpack_require__(195)
	  , isObject   = __webpack_require__(206)
	  , anObject   = __webpack_require__(207)
	  , aFunction  = __webpack_require__(209)
	  , strictNew  = __webpack_require__(245)
	  , forOf      = __webpack_require__(246)
	  , setProto   = __webpack_require__(205).set
	  , same       = __webpack_require__(251)
	  , species    = __webpack_require__(252)
	  , SPECIES    = __webpack_require__(233)('species')
	  , speciesConstructor = __webpack_require__(253)
	  , RECORD     = __webpack_require__(235)('record')
	  , asap       = __webpack_require__(254)
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
	    if(works && __webpack_require__(231)){
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
	  __webpack_require__(259)(P.prototype, {
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
	__webpack_require__(238)(P, PROMISE);
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
	$def($def.S + $def.F * !(useNative && __webpack_require__(260)(function(iter){
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
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(192)
	  , TAG = __webpack_require__(233)('toStringTag')
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
/* 245 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(208)
	  , call        = __webpack_require__(247)
	  , isArrayIter = __webpack_require__(248)
	  , anObject    = __webpack_require__(207)
	  , toLength    = __webpack_require__(249)
	  , getIterFn   = __webpack_require__(250);
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
/* 247 */
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
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators = __webpack_require__(236)
	  , ITERATOR  = __webpack_require__(233)('iterator');
	module.exports = function(it){
	  return (Iterators.Array || Array.prototype[ITERATOR]) === it;
	};

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(225)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(244)
	  , ITERATOR  = __webpack_require__(233)('iterator')
	  , Iterators = __webpack_require__(236);
	module.exports = __webpack_require__(197).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $       = __webpack_require__(188)
	  , SPECIES = __webpack_require__(233)('species');
	module.exports = function(C){
	  if(__webpack_require__(231) && !(SPECIES in C))$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(207)
	  , aFunction = __webpack_require__(209)
	  , SPECIES   = __webpack_require__(233)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(196)
	  , macrotask = __webpack_require__(255).set
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
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx                = __webpack_require__(208)
	  , invoke             = __webpack_require__(256)
	  , html               = __webpack_require__(257)
	  , cel                = __webpack_require__(258)
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
/* 256 */
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
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(196).document && document.documentElement;

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(206)
	  , document = __webpack_require__(196).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var $redef = __webpack_require__(228);
	module.exports = function(target, src){
	  for(var key in src)$redef(target, key, src[key]);
	  return target;
	};

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	var SYMBOL_ITERATOR = __webpack_require__(233)('iterator')
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
/* 261 */
/***/ function(module, exports) {

	(function(c){function a(b,d){if({}.hasOwnProperty.call(a.cache,b))return a.cache[b];var e=a.resolve(b);if(!e)throw new Error('Failed to resolve module '+b);var c={id:b,require:a,filename:b,exports:{},loaded:!1,parent:d,children:[]};d&&d.children.push(c);var f=b.slice(0,b.lastIndexOf('/')+1);return a.cache[b]=c.exports,e.call(c.exports,c,c.exports,f,b),c.loaded=!0,a.cache[b]=c.exports}a.modules={},a.cache={},a.resolve=function(b){return{}.hasOwnProperty.call(a.modules,b)?a.modules[b]:void 0},a.define=function(b,c){a.modules[b]=c};var b=function(a){return a='/',{title:'browser',version:'v0.10.26',browser:!0,env:{},argv:[],nextTick:c.setImmediate||function(a){setTimeout(a,0)},cwd:function(){return a},chdir:function(b){a=b}}}();a.define('/gif.coffee',function(d,m,l,k){function g(a,b){return{}.hasOwnProperty.call(a,b)}function j(d,b){for(var a=0,c=b.length;a<c;++a)if(a in b&&b[a]===d)return!0;return!1}function i(a,b){function d(){this.constructor=a}for(var c in b)g(b,c)&&(a[c]=b[c]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a}var h,c,f,b,e;f=a('events',d).EventEmitter,h=a('/browser.coffee',d),e=function(d){function a(d){var a,b;this.running=!1,this.options={},this.frames=[],this.freeWorkers=[],this.activeWorkers=[],this.setOptions(d);for(a in c)b=c[a],null!=this.options[a]?this.options[a]:this.options[a]=b}return i(a,d),c={workerScript:'gif.worker.js',workers:2,repeat:0,background:'#fff',quality:10,width:null,height:null,transparent:null},b={delay:500,copy:!1},a.prototype.setOption=function(a,b){return this.options[a]=b,null!=this._canvas&&(a==='width'||a==='height')?this._canvas[a]=b:void 0},a.prototype.setOptions=function(b){var a,c;return function(d){for(a in b){if(!g(b,a))continue;c=b[a],d.push(this.setOption(a,c))}return d}.call(this,[])},a.prototype.addFrame=function(a,d){var c,e;null==d&&(d={}),c={},c.transparent=this.options.transparent;for(e in b)c[e]=d[e]||b[e];if(null!=this.options.width||this.setOption('width',a.width),null!=this.options.height||this.setOption('height',a.height),'undefined'!==typeof ImageData&&null!=ImageData&&a instanceof ImageData)c.data=a.data;else if('undefined'!==typeof CanvasRenderingContext2D&&null!=CanvasRenderingContext2D&&a instanceof CanvasRenderingContext2D||'undefined'!==typeof WebGLRenderingContext&&null!=WebGLRenderingContext&&a instanceof WebGLRenderingContext)d.copy?c.data=this.getContextData(a):c.context=a;else if(null!=a.childNodes)d.copy?c.data=this.getImageData(a):c.image=a;else throw new Error('Invalid image');return this.frames.push(c)},a.prototype.render=function(){var d,a;if(this.running)throw new Error('Already running');if(!(null!=this.options.width&&null!=this.options.height))throw new Error('Width and height must be set prior to rendering');this.running=!0,this.nextFrame=0,this.finishedFrames=0,this.imageParts=function(c){for(var b=function(){var b;b=[];for(var a=0;0<=this.frames.length?a<this.frames.length:a>this.frames.length;0<=this.frames.length?++a:--a)b.push(a);return b}.apply(this,arguments),a=0,e=b.length;a<e;++a)d=b[a],c.push(null);return c}.call(this,[]),a=this.spawnWorkers();for(var c=function(){var c;c=[];for(var b=0;0<=a?b<a:b>a;0<=a?++b:--b)c.push(b);return c}.apply(this,arguments),b=0,e=c.length;b<e;++b)d=c[b],this.renderNextFrame();return this.emit('start'),this.emit('progress',0)},a.prototype.abort=function(){var a;while(!0){if(a=this.activeWorkers.shift(),!(null!=a))break;console.log('killing active worker'),a.terminate()}return this.running=!1,this.emit('abort')},a.prototype.spawnWorkers=function(){var a;return a=Math.min(this.options.workers,this.frames.length),function(){var c;c=[];for(var b=this.freeWorkers.length;this.freeWorkers.length<=a?b<a:b>a;this.freeWorkers.length<=a?++b:--b)c.push(b);return c}.apply(this,arguments).forEach(function(a){return function(c){var b;return console.log('spawning worker '+c),b=new Worker(a.options.workerScript),b.onmessage=function(a){return function(c){return a.activeWorkers.splice(a.activeWorkers.indexOf(b),1),a.freeWorkers.push(b),a.frameFinished(c.data)}}(a),a.freeWorkers.push(b)}}(this)),a},a.prototype.frameFinished=function(a){return console.log('frame '+a.index+' finished - '+this.activeWorkers.length+' active'),this.finishedFrames++,this.emit('progress',this.finishedFrames/this.frames.length),this.imageParts[a.index]=a,j(null,this.imageParts)?this.renderNextFrame():this.finishRendering()},a.prototype.finishRendering=function(){var e,a,k,m,b,d,h;b=0;for(var f=0,j=this.imageParts.length;f<j;++f)a=this.imageParts[f],b+=(a.data.length-1)*a.pageSize+a.cursor;b+=a.pageSize-a.cursor,console.log('rendering finished - filesize '+Math.round(b/1e3)+'kb'),e=new Uint8Array(b),d=0;for(var g=0,l=this.imageParts.length;g<l;++g){a=this.imageParts[g];for(var c=0,i=a.data.length;c<i;++c)h=a.data[c],k=c,e.set(h,d),k===a.data.length-1?d+=a.cursor:d+=a.pageSize}return m=new Blob([e],{type:'image/gif'}),this.emit('finished',m,e)},a.prototype.renderNextFrame=function(){var c,a,b;if(this.freeWorkers.length===0)throw new Error('No free workers');return this.nextFrame>=this.frames.length?void 0:(c=this.frames[this.nextFrame++],b=this.freeWorkers.shift(),a=this.getTask(c),console.log('starting frame '+(a.index+1)+' of '+this.frames.length),this.activeWorkers.push(b),b.postMessage(a))},a.prototype.getContextData=function(a){return a.getImageData(0,0,this.options.width,this.options.height).data},a.prototype.getImageData=function(b){var a;return null!=this._canvas||(this._canvas=document.createElement('canvas'),this._canvas.width=this.options.width,this._canvas.height=this.options.height),a=this._canvas.getContext('2d'),a.setFill=this.options.background,a.fillRect(0,0,this.options.width,this.options.height),a.drawImage(b,0,0),this.getContextData(a)},a.prototype.getTask=function(a){var c,b;if(c=this.frames.indexOf(a),b={index:c,last:c===this.frames.length-1,delay:a.delay,transparent:a.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,repeat:this.options.repeat,canTransfer:h.name==='chrome'},null!=a.data)b.data=a.data;else if(null!=a.context)b.data=this.getContextData(a.context);else if(null!=a.image)b.data=this.getImageData(a.image);else throw new Error('Invalid frame');return b},a}(f),d.exports=e}),a.define('/browser.coffee',function(f,g,h,i){var a,d,e,c,b;c=navigator.userAgent.toLowerCase(),e=navigator.platform.toLowerCase(),b=c.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,'unknown',0],d=b[1]==='ie'&&document.documentMode,a={name:b[1]==='version'?b[3]:b[1],version:d||parseFloat(b[1]==='opera'&&b[4]?b[4]:b[2]),platform:{name:c.match(/ip(?:ad|od|hone)/)?'ios':(c.match(/(?:webos|android)/)||e.match(/mac|win|linux/)||['other'])[0]}},a[a.name]=!0,a[a.name+parseInt(a.version,10)]=!0,a.platform[a.platform.name]=!0,f.exports=a}),a.define('events',function(f,e,g,h){b.EventEmitter||(b.EventEmitter=function(){});var a=e.EventEmitter=b.EventEmitter,c=typeof Array.isArray==='function'?Array.isArray:function(a){return Object.prototype.toString.call(a)==='[object Array]'},d=10;a.prototype.setMaxListeners=function(a){this._events||(this._events={}),this._events.maxListeners=a},a.prototype.emit=function(f){if(f==='error'&&(!(this._events&&this._events.error)||c(this._events.error)&&!this._events.error.length))throw arguments[1]instanceof Error?arguments[1]:new Error("Uncaught, unspecified 'error' event.");if(!this._events)return!1;var a=this._events[f];if(!a)return!1;if(!(typeof a=='function'))if(c(a)){var b=Array.prototype.slice.call(arguments,1),e=a.slice();for(var d=0,g=e.length;d<g;d++)e[d].apply(this,b);return!0}else return!1;switch(arguments.length){case 1:a.call(this);break;case 2:a.call(this,arguments[1]);break;case 3:a.call(this,arguments[1],arguments[2]);break;default:var b=Array.prototype.slice.call(arguments,1);a.apply(this,b)}return!0},a.prototype.addListener=function(a,b){if('function'!==typeof b)throw new Error('addListener only takes instances of Function');if(this._events||(this._events={}),this.emit('newListener',a,b),!this._events[a])this._events[a]=b;else if(c(this._events[a])){if(!this._events[a].warned){var e;this._events.maxListeners!==undefined?e=this._events.maxListeners:e=d,e&&e>0&&this._events[a].length>e&&(this._events[a].warned=!0,console.error('(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.',this._events[a].length),console.trace())}this._events[a].push(b)}else this._events[a]=[this._events[a],b];return this},a.prototype.on=a.prototype.addListener,a.prototype.once=function(b,c){var a=this;return a.on(b,function d(){a.removeListener(b,d),c.apply(this,arguments)}),this},a.prototype.removeListener=function(a,d){if('function'!==typeof d)throw new Error('removeListener only takes instances of Function');if(!(this._events&&this._events[a]))return this;var b=this._events[a];if(c(b)){var e=b.indexOf(d);if(e<0)return this;b.splice(e,1),b.length==0&&delete this._events[a]}else this._events[a]===d&&delete this._events[a];return this},a.prototype.removeAllListeners=function(a){return a&&this._events&&this._events[a]&&(this._events[a]=null),this},a.prototype.listeners=function(a){return this._events||(this._events={}),this._events[a]||(this._events[a]=[]),c(this._events[a])||(this._events[a]=[this._events[a]]),this._events[a]}}),c.GIF=a('/gif.coffee')}.call(this,this))
	//# sourceMappingURL=gif.js.map
	// gif.js 0.1.6 - https://github.com/jnordberg/gif.js


/***/ },
/* 262 */
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


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(2)['default'];
	
	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	
	var _whammy = __webpack_require__(264);
	
	var _whammy2 = _interopRequireDefault(_whammy);
	
	function parseWebP(riff) {
		var VP8 = riff.RIFF[0].WEBP[0];
	
		var frame_start = VP8.indexOf('\x9d\x01\x2a'); //A VP8 keyframe starts with the 0x9d012a header
		for (var i = 0, c = []; i < 4; i++) c[i] = VP8.charCodeAt(frame_start + 3 + i);
	
		var width, horizontal_scale, height, vertical_scale, tmp;
	
		//the code below is literally copied verbatim from the bitstream spec
		tmp = c[1] << 8 | c[0];
		width = tmp & 0x3FFF;
		horizontal_scale = tmp >> 14;
		tmp = c[3] << 8 | c[2];
		height = tmp & 0x3FFF;
		vertical_scale = tmp >> 14;
		return {
			width: width,
			height: height,
			data: VP8,
			riff: riff
		};
	}
	
	function parseRIFF(string) {
		var offset = 0;
		var chunks = {};
	
		while (offset < string.length) {
			var id = string.substr(offset, 4);
			chunks[id] = chunks[id] || [];
			if (id == 'RIFF' || id == 'LIST') {
				var len = parseInt(string.substr(offset + 4, 4).split('').map(function (i) {
					var unpadded = i.charCodeAt(0).toString(2);
					return new Array(8 - unpadded.length + 1).join('0') + unpadded;
				}).join(''), 2);
				var data = string.substr(offset + 4 + 4, len);
				offset += 4 + 4 + len;
				chunks[id].push(parseRIFF(data));
			} else if (id == 'WEBP') {
				// Use (offset + 8) to skip past "VP8 "/"VP8L"/"VP8X" field after "WEBP"
				chunks[id].push(string.substr(offset + 8));
				offset = string.length;
			} else {
				// Unknown chunk type; push entire payload
				chunks[id].push(string.substr(offset + 4));
				offset = string.length;
			}
		}
	
		return chunks;
	}
	
	exports['default'] = function (frames, ctx, fps, callback) {
		var doneFrames = [];
	
		function processFrame() {
			ctx.putImageData(frames[doneFrames.length], 0, 0);
	
			var webp = parseWebP(parseRIFF(atob(ctx.canvas.toDataURL('image/webp', 0.05).slice(23))));
			webp.duration = 1000 / fps;
	
			doneFrames.push(webp);
	
			if (doneFrames.length === frames.length) return returnFrames(doneFrames);
			callback(false, doneFrames.length / frames.length);
			requestAnimationFrame(processFrame);
		}
	
		function returnFrames(frames) {
			callback(true, _whammy2['default'].toWebM(frames));
		}
	
		requestAnimationFrame(processFrame);
	};
	
	module.exports = exports['default'];

/***/ },
/* 264 */
/***/ function(module, exports) {

	/*
		var vid = new Whammy.Video();
		vid.add(canvas or data url)
		vid.compile()
	*/
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	window.Whammy = (function () {
		// in this case, frames has a very specific meaning, which will be
		// detailed once i finish writing the code
	
		function toWebM(frames, outputAsArray) {
			var info = checkFrames(frames);
	
			//max duration by cluster in milliseconds
			var CLUSTER_MAX_DURATION = 30000;
	
			var EBML = [{
				"id": 0x1a45dfa3, // EBML
				"data": [{
					"data": 1,
					"id": 0x4286 // EBMLVersion
				}, {
					"data": 1,
					"id": 0x42f7 // EBMLReadVersion
				}, {
					"data": 4,
					"id": 0x42f2 // EBMLMaxIDLength
				}, {
					"data": 8,
					"id": 0x42f3 // EBMLMaxSizeLength
				}, {
					"data": "webm",
					"id": 0x4282 // DocType
				}, {
					"data": 2,
					"id": 0x4287 // DocTypeVersion
				}, {
					"data": 2,
					"id": 0x4285 // DocTypeReadVersion
				}]
			}, {
				"id": 0x18538067, // Segment
				"data": [{
					"id": 0x1549a966, // Info
					"data": [{
						"data": 1e6, //do things in millisecs (num of nanosecs for duration scale)
						"id": 0x2ad7b1 // TimecodeScale
					}, {
						"data": "whammy",
						"id": 0x4d80 // MuxingApp
					}, {
						"data": "whammy",
						"id": 0x5741 // WritingApp
					}, {
						"data": doubleToString(info.duration),
						"id": 0x4489 // Duration
					}]
				}, {
					"id": 0x1654ae6b, // Tracks
					"data": [{
						"id": 0xae, // TrackEntry
						"data": [{
							"data": 1,
							"id": 0xd7 // TrackNumber
						}, {
							"data": 1,
							"id": 0x73c5 // TrackUID
						}, {
							"data": 0,
							"id": 0x9c // FlagLacing
						}, {
							"data": "und",
							"id": 0x22b59c // Language
						}, {
							"data": "V_VP8",
							"id": 0x86 // CodecID
						}, {
							"data": "VP8",
							"id": 0x258688 // CodecName
						}, {
							"data": 1,
							"id": 0x83 // TrackType
						}, {
							"id": 0xe0, // Video
							"data": [{
								"data": info.width,
								"id": 0xb0 // PixelWidth
							}, {
								"data": info.height,
								"id": 0xba // PixelHeight
							}]
						}]
					}]
				}, {
					"id": 0x1c53bb6b, // Cues
					"data": [
						//cue insertion point
					]
				}
	
				//cluster insertion point
				]
			}];
	
			var segment = EBML[1];
			var cues = segment.data[2];
	
			//Generate clusters (max duration)
			var frameNumber = 0;
			var clusterTimecode = 0;
			while (frameNumber < frames.length) {
	
				var cuePoint = {
					"id": 0xbb, // CuePoint
					"data": [{
						"data": Math.round(clusterTimecode),
						"id": 0xb3 // CueTime
					}, {
						"id": 0xb7, // CueTrackPositions
						"data": [{
							"data": 1,
							"id": 0xf7 // CueTrack
						}, {
							"data": 0, // to be filled in when we know it
							"size": 8,
							"id": 0xf1 // CueClusterPosition
						}]
					}]
				};
	
				cues.data.push(cuePoint);
	
				var clusterFrames = [];
				var clusterDuration = 0;
				do {
					clusterFrames.push(frames[frameNumber]);
					clusterDuration += frames[frameNumber].duration;
					frameNumber++;
				} while (frameNumber < frames.length && clusterDuration < CLUSTER_MAX_DURATION);
	
				var clusterCounter = 0;
				var cluster = {
					"id": 0x1f43b675, // Cluster
					"data": [{
						"data": Math.round(clusterTimecode),
						"id": 0xe7 // Timecode
					}].concat(clusterFrames.map(function (webp) {
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
					}))
				};
	
				//Add cluster to segment
				segment.data.push(cluster);
				clusterTimecode += clusterDuration;
			}
	
			//First pass to compute cluster positions
			var position = 0;
			for (var i = 0; i < segment.data.length; i++) {
				if (i >= 3) {
					cues.data[i - 3].data[1].data[1].data = position;
				}
				var data = generateEBML([segment.data[i]], outputAsArray);
				position += data.size || data.byteLength || data.length;
				if (i != 2) {
					// not cues
					//Save results to avoid having to encode everything twice
					segment.data[i] = data;
				}
			}
	
			return generateEBML(EBML, outputAsArray);
		}
	
		// sums the lengths of all the frames and gets the duration, woo
	
		function checkFrames(frames) {
			var width = frames[0].width,
			    height = frames[0].height,
			    duration = frames[0].duration;
			for (var i = 1; i < frames.length; i++) {
				if (frames[i].width != width) throw "Frame " + (i + 1) + " has a different width";
				if (frames[i].height != height) throw "Frame " + (i + 1) + " has a different height";
				if (frames[i].duration < 0 || frames[i].duration > 0x7fff) throw "Frame " + (i + 1) + " has a weird duration (must be between 0 and 32767)";
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
	
		function numToFixedBuffer(num, size) {
			var parts = new Uint8Array(size);
			for (var i = size - 1; i >= 0; i--) {
				parts[i] = num & 0xff;
				num = num >> 8;
			}
			return parts;
		}
	
		function strToBuffer(str) {
			// return new Blob([str]);
	
			var arr = new Uint8Array(str.length);
			for (var i = 0; i < str.length; i++) {
				arr[i] = str.charCodeAt(i);
			}
			return arr;
			// this is slower
			// return new Uint8Array(str.split('').map(function(e){
			// 	return e.charCodeAt(0)
			// }))
		}
	
		//sorry this is ugly, and sort of hard to understand exactly why this was done
		// at all really, but the reason is that there's some code below that i dont really
		// feel like understanding, and this is easier than using my brain.
	
		function bitsToBuffer(bits) {
			var data = [];
			var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join('0') : '';
			bits = pad + bits;
			for (var i = 0; i < bits.length; i += 8) {
				data.push(parseInt(bits.substr(i, 8), 2));
			}
			return new Uint8Array(data);
		}
	
		function generateEBML(json, outputAsArray) {
			var ebml = [];
			for (var i = 0; i < json.length; i++) {
				if (!('id' in json[i])) {
					//already encoded blob or byteArray
					ebml.push(json[i]);
					continue;
				}
	
				var data = json[i].data;
				if (typeof data == 'object') data = generateEBML(data, outputAsArray);
				if (typeof data == 'number') data = 'size' in json[i] ? numToFixedBuffer(data, json[i].size) : bitsToBuffer(data.toString(2));
				if (typeof data == 'string') data = strToBuffer(data);
	
				if (data.length) {
					var z = z;
				}
	
				var len = data.size || data.byteLength || data.length;
				var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
				var size_str = len.toString(2);
				var padded = new Array(zeroes * 7 + 7 + 1 - size_str.length).join('0') + size_str;
				var size = new Array(zeroes).join('0') + '1' + padded;
	
				//i actually dont quite understand what went on up there, so I'm not really
				//going to fix this, i'm probably just going to write some hacky thing which
				//converts that string into a buffer-esque thing
	
				ebml.push(numToBuffer(json[i].id));
				ebml.push(bitsToBuffer(size));
				ebml.push(data);
			}
	
			//output as blob or byteArray
			if (outputAsArray) {
				//convert ebml to an array
				var buffer = toFlatArray(ebml);
				return new Uint8Array(buffer);
			} else {
				return new Blob(ebml, { type: "video/webm" });
			}
		}
	
		function toFlatArray(arr, outBuffer) {
			if (outBuffer == null) {
				outBuffer = [];
			}
			for (var i = 0; i < arr.length; i++) {
				if (typeof arr[i] == 'object') {
					//an array
					toFlatArray(arr[i], outBuffer);
				} else {
					//a simple element
					outBuffer.push(arr[i]);
				}
			}
			return outBuffer;
		}
	
		//OKAY, so the following two functions are the string-based old stuff, the reason they're
		//still sort of in here, is that they're actually faster than the new blob stuff because
		//getAsFile isn't widely implemented, or at least, it doesn't work in chrome, which is the
		// only browser which supports get as webp
	
		//Converting between a string of 0010101001's and binary back and forth is probably inefficient
		//TODO: get rid of this function
		function toBinStr_old(bits) {
			var data = '';
			var pad = bits.length % 8 ? new Array(1 + 8 - bits.length % 8).join('0') : '';
			bits = pad + bits;
			for (var i = 0; i < bits.length; i += 8) {
				data += String.fromCharCode(parseInt(bits.substr(i, 8), 2));
			}
			return data;
		}
	
		function generateEBML_old(json) {
			var ebml = '';
			for (var i = 0; i < json.length; i++) {
				var data = json[i].data;
				if (typeof data == 'object') data = generateEBML_old(data);
				if (typeof data == 'number') data = toBinStr_old(data.toString(2));
	
				var len = data.length;
				var zeroes = Math.ceil(Math.ceil(Math.log(len) / Math.log(2)) / 8);
				var size_str = len.toString(2);
				var padded = new Array(zeroes * 7 + 7 + 1 - size_str.length).join('0') + size_str;
				var size = new Array(zeroes).join('0') + '1' + padded;
	
				ebml += toBinStr_old(json[i].id.toString(2)) + toBinStr_old(size) + data;
			}
			return ebml;
		}
	
		//woot, a function that's actually written for this project!
		//this parses some json markup and makes it into that binary magic
		//which can then get shoved into the matroska comtainer (peaceably)
	
		function makeSimpleBlock(data) {
			var flags = 0;
			if (data.keyframe) flags |= 128;
			if (data.invisible) flags |= 8;
			if (data.lacing) flags |= data.lacing << 1;
			if (data.discardable) flags |= 1;
			if (data.trackNum > 127) {
				throw "TrackNumber > 127 not supported";
			}
			var out = [data.trackNum | 0x80, data.timecode >> 8, data.timecode & 0xff, flags].map(function (e) {
				return String.fromCharCode(e);
			}).join('') + data.frame;
	
			return out;
		}
	
		// here's something else taken verbatim from weppy, awesome rite?
	
		function parseWebP(riff) {
			var VP8 = riff.RIFF[0].WEBP[0];
	
			var frame_start = VP8.indexOf('\x9d\x01\x2a'); //A VP8 keyframe starts with the 0x9d012a header
			for (var i = 0, c = []; i < 4; i++) c[i] = VP8.charCodeAt(frame_start + 3 + i);
	
			var width, horizontal_scale, height, vertical_scale, tmp;
	
			//the code below is literally copied verbatim from the bitstream spec
			tmp = c[1] << 8 | c[0];
			width = tmp & 0x3FFF;
			horizontal_scale = tmp >> 14;
			tmp = c[3] << 8 | c[2];
			height = tmp & 0x3FFF;
			vertical_scale = tmp >> 14;
			return {
				width: width,
				height: height,
				data: VP8,
				riff: riff
			};
		}
	
		// i think i'm going off on a riff by pretending this is some known
		// idiom which i'm making a casual and brilliant pun about, but since
		// i can't find anything on google which conforms to this idiomatic
		// usage, I'm assuming this is just a consequence of some psychotic
		// break which makes me make up puns. well, enough riff-raff (aha a
		// rescue of sorts), this function was ripped wholesale from weppy
	
		function parseRIFF(string) {
			var offset = 0;
			var chunks = {};
	
			while (offset < string.length) {
				var id = string.substr(offset, 4);
				chunks[id] = chunks[id] || [];
				if (id == 'RIFF' || id == 'LIST') {
					var len = parseInt(string.substr(offset + 4, 4).split('').map(function (i) {
						var unpadded = i.charCodeAt(0).toString(2);
						return new Array(8 - unpadded.length + 1).join('0') + unpadded;
					}).join(''), 2);
					var data = string.substr(offset + 4 + 4, len);
					offset += 4 + 4 + len;
					chunks[id].push(parseRIFF(data));
				} else if (id == 'WEBP') {
					// Use (offset + 8) to skip past "VP8 "/"VP8L"/"VP8X" field after "WEBP"
					chunks[id].push(string.substr(offset + 8));
					offset = string.length;
				} else {
					// Unknown chunk type; push entire payload
					chunks[id].push(string.substr(offset + 4));
					offset = string.length;
				}
			}
			return chunks;
		}
	
		// here's a little utility function that acts as a utility for other functions
		// basically, the only purpose is for encoding "Duration", which is encoded as
		// a double (considerably more difficult to encode than an integer)
		function doubleToString(num) {
			return [].slice.call(new Uint8Array(new Float64Array([num]) //create a float64 array
			.buffer), //extract the array buffer
			0) // convert the Uint8Array into a regular array
			.map(function (e) {
				//since it's a regular array, we can now use map
				return String.fromCharCode(e); // encode all the bytes individually
			}).reverse() //correct the byte endianness (assume it's little endian for now)
			.join(''); // join the bytes in holy matrimony as a string
		}
	
		function WhammyVideo(speed, quality) {
			// a more abstract-ish API
			this.frames = [];
			this.duration = 1000 / speed;
			this.quality = quality || 0.8;
		}
	
		WhammyVideo.prototype.add = function (frame, duration) {
			if (typeof duration != 'undefined' && this.duration) throw "you can't pass a duration if the fps is set";
			if (typeof duration == 'undefined' && !this.duration) throw "if you don't have the fps set, you ned to have durations here.";
			if (frame.canvas) {
				//CanvasRenderingContext2D
				frame = frame.canvas;
			}
			if (frame.toDataURL) {
				frame = frame.toDataURL('image/webp', this.quality);
			} else if (typeof frame != "string") {
				throw "frame must be a a HTMLCanvasElement, a CanvasRenderingContext2D or a DataURI formatted string";
			}
			if (!/^data:image\/webp;base64,/ig.test(frame)) {
				throw "Input must be formatted properly as a base64 encoded DataURI of type image/webp";
			}
			this.frames.push({
				image: frame,
				duration: duration || this.duration
			});
		};
	
		WhammyVideo.prototype.compile = function (outputAsArray) {
			return new toWebM(this.frames.map(function (frame) {
				var webp = parseWebP(parseRIFF(atob(frame.image.slice(23))));
				webp.duration = frame.duration;
				return webp;
			}), outputAsArray);
		};
	
		return {
			Video: WhammyVideo,
			fromImageArray: function fromImageArray(images, fps, outputAsArray) {
				return toWebM(images.map(function (image) {
					var webp = parseWebP(parseRIFF(atob(image.slice(23))));
					webp.duration = 1000 / fps;
					return webp;
				}), outputAsArray);
			},
			toWebM: toWebM
			// expose methods of madness
		};
	})();
	
	exports["default"] = window.Whammy;
	module.exports = exports["default"];

/***/ }
]);
//# sourceMappingURL=index.js.map