import React, { useContext, useState, useEffect } from 'react';

import { FieldContext } from '../context';

export default function FieldStats() {

	const [brandedSheep,setBrandedSheep] = useState<number>(0);
	const [maleSheep,setMaleSheep] = useState<number>(0);
	const { population, countSheep } = useContext(FieldContext);

	useEffect(() => {
		const branded = population.filter(sheep => sheep.isBranded);
		setBrandedSheep(branded.length);
		const males = population.filter(sheep => !sheep.isFemale);
		setMaleSheep(males.length);
	},[population])

	return(<table className="table">
		<tbody>
			<tr>
				<th scope="row">Population</th>
				<td>{countSheep(population)}</td>
			</tr>
			<tr>
				<th scope="row">Branded</th>
				<td>{brandedSheep}</td>
			</tr>
			<tr>
				<th scope="row">Males</th>
				<td>{maleSheep}</td>
			</tr>
			<tr>
				<th scope="row">Females</th>
				<td>{population.length - maleSheep}</td>
			</tr>
		</tbody>
	</table>);
}
