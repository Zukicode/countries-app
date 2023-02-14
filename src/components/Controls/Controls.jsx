import React, { useState, useEffect } from 'react';

//Style
import { Wrapper } from './controls-styled.js';

//Components
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const options = [
	{
		value: 'Africa',
		label: 'Africa',
	},
	{
		value: 'America',
		label: 'America',
	},
	{
		value: 'Asia',
		label: 'Asia',
	},
	{
		value: 'Europe',
		label: 'Europe',
	},
	{
		value: 'Oceania',
		label: 'Oceania',
	},
];

export const Controls = ({ onSearch }) => {
	const [search, setSearch] = useState('');
	const [region, setRegion] = useState('');

	useEffect(() => {
		const regionValue = region?.value || '';
		onSearch(search, regionValue);

		// eslint-disable-next-line
	}, [search, region]);

	return (
		<Wrapper>
			<Search search={search} setSearch={setSearch} />
			<CustomSelect
				options={options}
				placeholder='Filter by Region'
				isClearable
				isSearchable={false}
				value={region}
				onChange={setRegion}
			/>
		</Wrapper>
	);
};
