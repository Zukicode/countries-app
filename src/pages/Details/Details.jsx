import React, { useState, useEffect } from 'react';

//Icons
import { IoArrowBack } from 'react-icons/io5';

//Work With API
import axios from 'axios';
import { searchByCountry } from './../../config.js';

//For Router
import { useParams, useNavigate } from 'react-router-dom';

//Component
import { Button } from '../../components/Button.jsx';
import { Info } from '../../components/Info/Info.jsx';

const Details = () => {
	const { name } = useParams();
	const navigate = useNavigate();
	const [country, setCountry] = useState(null);

	useEffect(() => {
		axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]));
	}, [name]);

	//GO BACK
	const goBack = () => navigate(-1);

	return (
		<div>
			<Button onClick={goBack}>
				<IoArrowBack /> BACK
			</Button>
			{country && <Info navigate={navigate} {...country} />}
		</div>
	);
};

export default Details;
