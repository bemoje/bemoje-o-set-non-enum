import oSetNonEnum from '../src/o-set-non-enum'

const o = {}

oSetNonEnum(o, 'key', 3)

Object.getOwnPropertyDescriptor(o, 'key')
/* => {
		value: 3,
		writable: true,
		enumerable: false,
		configurable: false,
	}
*/
