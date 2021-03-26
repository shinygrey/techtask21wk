import { createContext } from 'react';

import { FieldOfSheep } from './business/field-of-sheep';
import { Sheep } from './business/sheep';

const emptyField: FieldOfSheep = {
	population: [],
	countSheep: (p) => p.length,
	countBrandedSheep: (p) => p.length,
	addSheepToField: (name: string, isFemale: boolean, pop: Array<Sheep>) => pop.concat([new Sheep(name,isFemale)]),
	brandOneRandomSheep: (pop: Array<Sheep>) => pop,
	encourageBreeding: (pop: Array<Sheep>) => pop
}

export const FieldContext = createContext<FieldOfSheep>(emptyField);
