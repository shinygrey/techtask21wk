export class Sheep {
	readonly name: string;
	isBranded: boolean;
	readonly isFemale: boolean;

	constructor(name: string, isFemale: boolean) {
		this.name = name;
		this.isBranded = false;
		this.isFemale = isFemale;
	}

	checkSex() {
		if(!this.isFemale){
			return 'Male';
		}else{
			return 'Female';
		}
	}

	brand() {
		this.isBranded = true;
	}
}
