import React from 'react';

import { Sheep } from './business/sheep';
import { FieldManagement } from './business/field-management';
import FieldStats from './components/field-stats';
import { FieldControls } from './components/field-controls';
import FieldTwoD from './components/field-twod';
import { FieldContext } from './context';

export class Root extends React.Component<{},{population: Array<Sheep>}> {

	constructor(props: {}) {
		super(props);
		this.state = {
			population: []
		}
	}

	render() {
		return (<main className="m-5">
			<h1>Field of Sheep</h1>
			<FieldContext.Provider
				value={{
					population: this.state.population,
					countSheep: () => FieldManagement.countSheep(this.state.population),
					countBrandedSheep: () => FieldManagement.countBrandedSheep(this.state.population),
					addSheepToField: FieldManagement.addSheepToField,
					brandOneRandomSheep: () => FieldManagement.brandOneRandomSheep(this.state.population),
					encourageBreeding: FieldManagement.configureEncourageBreeding(
						this.state.population,
						0.5
					)
				}}
			>
				<div className="row">
					<section className="col-12 col-md-6 p-5">
						<FieldTwoD />
					</section>
					<aside className="col-12 col-md-6">
						<FieldStats />
						<FieldControls setPopulation={(groupOfSheep: Array<Sheep>) => this.setState(() => ({population: groupOfSheep}))} />
					</aside>
				</div>
			</FieldContext.Provider>
		</main>);
	}
}
