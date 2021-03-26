const { FieldManagement } = require('./field-management');

describe('field 1', () => {

	class Sheep {
		readonly name: string;
		isBranded: boolean;
		readonly isFemale: boolean;
	
		constructor(name: string, isFemale: boolean) {
			this.name = name;
			this.isBranded = false;
			this.isFemale = isFemale;
		}
	}

	const sheepNames = ['foo','bar','baz','qux','quux','quuz','corge','grault','garply','waldo'];

	it('should breed to create 1 new sheep', () => {
		const mockPop = sheepNames.map((name,i) => {
			return new Sheep(name, i % 2 === 0);
		});
		const encourageBreeding = FieldManagement.configureEncourageBreeding(mockPop, 1);
		const newPop = encourageBreeding(mockPop);
		expect(mockPop.length).toBe(10);
		expect(newPop.length).toBe(11);
	});

	it('should breed to create 0 new sheep if empty', () => {
		const mockPop: Array<Sheep> = [];
		const encourageBreeding = FieldManagement.configureEncourageBreeding(mockPop, 1);
		const newPop = encourageBreeding(mockPop);
		expect(mockPop.length).toBe(0);
		expect(newPop.length).toBe(0);
	});

	it('should breed to create 0 new sheep if no eligible pairs', () => {
		const mockPop = sheepNames.map((name,i) => {
			if(i % 2 === 0){
				return new Sheep(name, true);
			}else{
				const sheep = new Sheep(name, false);
				sheep.isBranded = true;
				return sheep;
			}
		});

		const encourageBreeding = FieldManagement.configureEncourageBreeding(mockPop, 1);
		const newPop = encourageBreeding(mockPop);
		expect(mockPop.length).toBe(10);
		expect(newPop.length).toBe(10);
	});

	it('should add 1 named sheep', () => {
		const emptyField: Array<Sheep> = [];
		const newPop = FieldManagement.addSheepToField('foo',false, emptyField);
		expect(FieldManagement.countSheep(newPop)).toBe(1);
	});

	it('should brand a random sheep', () => {
		const mockPop = sheepNames.map((name,i) => {
			return new Sheep(name, i % 2 === 0);
		});
		FieldManagement.brandOneRandomSheep(mockPop);
		expect(FieldManagement.countBrandedSheep(mockPop)).toBe(1);
	});
});
