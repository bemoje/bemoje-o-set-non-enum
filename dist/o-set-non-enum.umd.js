(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['o-set-non-enum'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Adds a non-enumerable property on an object
	 * @param {object} o - The object on which to set a property value
	 * @param {string} key - The property key name
	 * @param {string} value - The property value
	 * @param {boolean} [writable=true] - Whether or not the property should be writable.
	 * @param {boolean} [configurable=false] - whether or not the property should be configurable
	 * @returns {void}
	 */
	function oSetNonEnum(
		o,
		key,
		value,
		writable = true,
		configurable = false,
	) {
		assertArgs(o, key);
		assertType(String, key);

		Object.defineProperty(o, key, {
			enumerable: false,
			writable,
			configurable,
			value,
		});
	}

	return oSetNonEnum;

})));
