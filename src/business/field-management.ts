import { Sheep } from './sheep';

export abstract class FieldManagement {

	static countSheep(groupOfSheep: Array<Sheep>): number{
		return groupOfSheep.length;
	}

	static getRandomSheep(groupOfSheep: Array<Sheep>): Sheep {
		const i = Math.floor(Math.random() * groupOfSheep.length);
		return groupOfSheep[i];
	}

	static countBrandedSheep(population: Array<Sheep>): number {
		const brandedSheep = population.filter(sheep => sheep.isBranded);
		return brandedSheep.length;
	}

	static addSheepToField (
		name: string,
		isFemale: boolean,
		population: Array<Sheep>
	) {
		const sheep = new Sheep(name, isFemale);
		return population.concat([sheep]);
	}

	static brandOneRandomSheep (population: Array<Sheep>) {
		const brandedSheep = population.filter(sheep => sheep.isBranded);
		const unbrandedSheep = population.filter(sheep => !sheep.isBranded);
		if(unbrandedSheep.length > 0){
			const i = Math.floor(Math.random() * unbrandedSheep.length);
			unbrandedSheep[i].isBranded = true;
			return brandedSheep.concat(unbrandedSheep);
		}else{
			return population;
		}
	};

	static configureEncourageBreeding (population: Array<Sheep>, probabilityOfBreeding: number) {
		return () => {
			if(probabilityOfBreeding > 1 || probabilityOfBreeding < 0){
				throw new Error('breeding probability must be between 0 and 1');
			}else if(population.length < 2){
				return population;
			}
			const males = population.filter(sheep => !sheep.isFemale);
			const females = population.filter(sheep => sheep.isFemale);
			/* Math.random is 0 inclusive and 1 exclusive */
			const breedSuccess = Math.random() < probabilityOfBreeding;
			if(males.length < 1 || females.length < 1 || !breedSuccess){
				return population;
			}
			const chosenMale = this.getRandomSheep(males);
			const chosenFemale = this.getRandomSheep(females);
			if(!chosenMale.isBranded && !chosenFemale.isBranded){
				const name = `sheep${population.length + 1}`;
				const sheep = new Sheep(name, Math.random() < 0.5);
				return population.concat([sheep]);
			}else{
				return population;
			}
		}
	};
}
