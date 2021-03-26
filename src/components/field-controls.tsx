import React, { useContext, useState } from 'react';

import { FieldContext } from '../context';
import { Sheep } from '../business/sheep';

interface props {
	setPopulation: (groupOfSheep: Array<Sheep>) => void
}

export const FieldControls: React.FC<props> = ({setPopulation}) => {

	const { population, addSheepToField, brandOneRandomSheep, encourageBreeding } = useContext(FieldContext);
	const [name,setName] = useState('');
	const [isFemale,setIsFemale] = useState(false);

	return(<aside>
		<div className="btn-group" role="group">
			<button
				type="button"
				className="btn btn-dark m-3"
				onClick={() => {
					const newPop = brandOneRandomSheep(population);
					setPopulation(newPop);
				}}
			>
				Brand a Sheep
			</button>
			<button
				type="button"
				className="btn btn-dark m-3"
				onClick={()=> {
					const newPop = encourageBreeding(population);
					setPopulation(newPop);
				}}
			>
				Attempt to breed
			</button>
		</div>
		<form action="" method="get" className="">
			<h2 className="h4">Add Sheep</h2>
				<label>Enter Sheep name:
					<input
						value={name}
						type="text"
						name="name"
						className="ml-3"
						onChange={e => {setName(e.target.value)}}
						required={true}
					/>
				</label>
				<select className="m-2" aria-label="Sex of Sheep"
					value={isFemale.toString()}
					onChange={(event) => {setIsFemale(event.target.value === 'true')}}>
					<option value="false">Male</option>
					<option value="true">Female</option>
				</select>
				<button
					type="submit"
					className="btn btn-dark m-3"
					onClick={e => {
						e.preventDefault();
						const newPop = addSheepToField(name, isFemale, population);
						setPopulation(newPop);
					}}
				>
					Add New Sheep
				</button>
		</form>
	</aside>);
}
