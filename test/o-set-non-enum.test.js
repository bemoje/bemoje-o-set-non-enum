import oSetNonEnum from '../src/o-set-non-enum'

describe('oSetNonEnum', () => {
	test('defaults', () => {
		const o = {}
		oSetNonEnum(o, 'key', 3)
		const descriptor = Object.getOwnPropertyDescriptor(o, 'key')
		expect(descriptor).toStrictEqual({
			value: 3,
			writable: true,
			enumerable: false,
			configurable: false,
		})
	})

	test('defaults, not writable', () => {
		const o = {}
		oSetNonEnum(o, 'key', 3, false)
		const descriptor = Object.getOwnPropertyDescriptor(o, 'key')
		expect(descriptor).toStrictEqual({
			value: 3,
			writable: false,
			enumerable: false,
			configurable: false,
		})
	})

	test('defaults, configurable', () => {
		const o = {}
		oSetNonEnum(o, 'key', 3, true, true)
		const descriptor = Object.getOwnPropertyDescriptor(o, 'key')
		expect(descriptor).toStrictEqual({
			value: 3,
			writable: true,
			enumerable: false,
			configurable: true,
		})
	})
})
