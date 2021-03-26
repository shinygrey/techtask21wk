import { Sheep } from './sheep';

export interface FieldOfSheep {
	population: Array<Sheep>;
	countSheep: (p: Array<Sheep>) => number;
	countBrandedSheep: (p: Array<Sheep>) => number;
	addSheepToField: (name: string, isFemale: boolean, p: Array<Sheep>) => Array<Sheep>;
	brandOneRandomSheep: (p: Array<Sheep>) => Array<Sheep>;
	encourageBreeding: (p: Array<Sheep>) => Array<Sheep>;
};
