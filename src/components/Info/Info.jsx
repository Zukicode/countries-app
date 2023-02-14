import React, { useEffect, useState } from 'react';
import axios from 'axios';

//Style
import {
	Wrapper,
	InfoImage,
	InfoTitle,
	ListGroup,
	List,
	ListItem,
	Meta,
	TagGroup,
	Tag,
} from './info-styled.js';
import { filterByCode } from '../../config.js';

export const Info = props => {
	const {
		name,
		nativeName,
		flag,
		capital,
		population,
		region,
		subregion,
		topLevelDomain,
		currencies = [],
		languages = [],
		borders = [],
		navigate,
	} = props;

	const [neighbors, setNeighbors] = useState([]);

	useEffect(() => {
		if (borders.length)
			axios
				.get(filterByCode(borders))
				.then(({ data }) => setNeighbors(data.map(c => c.name)));
	}, borders);

	return (
		<Wrapper>
			<InfoImage src={flag} alt={name} />
			<div>
				<InfoTitle>{name}</InfoTitle>

				<ListGroup>
					<List>
						<ListItem>
							<b>Native Name:</b> {nativeName}
						</ListItem>
						<ListItem>
							<b>Population:</b> {population}
						</ListItem>
						<ListItem>
							<b>Region:</b> {region}
						</ListItem>
						<ListItem>
							<b>Sub Region:</b> {subregion}
						</ListItem>
						<ListItem>
							<b>Capital:</b> {capital}
						</ListItem>
					</List>
					<List>
						<ListItem>
							<b>To Level Domain:</b>{' '}
							{topLevelDomain.map(d => (
								<span key={d}>{d}</span>
							))}
						</ListItem>

						<ListItem>
							<b>Currency:</b>{' '}
							{currencies.map(c => (
								<span key={c.code}>{c.name} </span>
							))}
						</ListItem>

						<ListItem>
							<b>Languages:</b>{' '}
							{languages.map(l => (
								<span key={l.name}>{l.name}</span>
							))}
						</ListItem>
					</List>
				</ListGroup>

				<Meta>
					<b>Border Countries:</b>
					{borders.length === 0 ? (
						<span>There is no border countries!</span>
					) : (
						<TagGroup>
							{neighbors.map(c => (
								<Tag onClick={() => navigate(`/country/${c}`)} key={c}>
									{c}
								</Tag>
							))}
						</TagGroup>
					)}
				</Meta>
			</div>
		</Wrapper>
	);
};
