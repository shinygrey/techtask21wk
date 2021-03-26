const { Sheep } = require('./sheep');

it('should create a sheep named foo', () => {
	const foo = new Sheep('foo');
	expect(foo.name).toBe('foo');
	expect(foo.isBranded).toBeFalsy();
});

it('should brand a sheep', () => {
	const foo = new Sheep('foo');
	foo.brand();
	expect(foo.isBranded).toBeTruthy();
});
