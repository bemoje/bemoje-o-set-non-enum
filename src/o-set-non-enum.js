import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Adds a non-enumerable property on an object
 * @param {object} o - The object on which to set a property value
 * @param {string} key - The property key name
 * @param {string} value - The property value
 * @param {boolean} [writable=true] - Whether or not the property should be writable.
 * @param {boolean} [configurable=false] - whether or not the property should be configurable
 * @returns {void}
 */
export default function oSetNonEnum(
	o,
	key,
	value,
	writable = true,
	configurable = false,
) {
	assertArgs(o, key)
	assertType(String, key)

	Object.defineProperty(o, key, {
		enumerable: false,
		writable,
		configurable,
		value,
	})
}
