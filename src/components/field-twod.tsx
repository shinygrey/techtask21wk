import React, { useContext } from 'react';

import { FieldContext } from '../context';
import { SheepTwoD } from './sheep-twod';

export default function FieldTwoD() {

	const { population } = useContext(FieldContext);

	return(<svg 
		version="1.1"
		viewBox="0 0 150 150"
		xmlns="http://www.w3.org/2000/svg"
	>
		<rect
			x="0" y="0" width="150" height="150"
			style={{
				fill:"forestgreen",
				stroke:"brown",
				strokeWidth:"5"
			}}
		/>
		{population.map((sheep,i) => (<SheepTwoD
			key={i}
			isFemale={sheep.isFemale}
			isBranded={sheep.isBranded}
		/>))}
	</svg>);
}
