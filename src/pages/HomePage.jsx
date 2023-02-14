import React, { useState, useEffect } from 'react';

//For Router
import { useNavigate } from 'react-router-dom';

//Work With API
import axios from 'axios';
import { ALL_COUNTRIES } from '../config';

//Components
import { Controls } from '../components/Controls/Controls';
import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';

const HomePage = ({ countries, setCountries }) => {
	const [filteredCountries, setFilteredCountries] = useState(countries);
	const navigate = useNavigate();

	const handleSearch = (search, region) => {
		let data = [...countries];

		if (region) {
			data = data.filter(c => c.region.includes(region));
		}

		if (search) {
			data = data.filter(c =>
				c.name.toLowerCase().includes(search.toLowerCase())
			);
		}

		setFilteredCountries(data);
	};

	useEffect(() => {
		if (countries.length === 0)
			axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		handleSearch();
		// eslint-disable-next-line
	}, [countries]);

	return (
		<>
			<Controls onSearch={handleSearch} />
			<List>
				{filteredCountries.map(c => {
					const countryInfo = {
						name: c.name,
						img: c.flags.png,
						info: [
							{
								title: 'Population',
								description: c.population.toLocaleString(),
							},

							{
								title: 'Region',
								description: c.region,
							},

							{
								title: 'Capital',
								description: c.capital,
							},
						],
					};
					return (
						<Card
							onClick={() => navigate(`/country/${c.name}`)}
							key={c.name}
							{...countryInfo}
						/>
					);
				})}
			</List>
		</>
	);
};

export default HomePage;
