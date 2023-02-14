import React from 'react';

//Icon
import { IoSearch } from 'react-icons/io5';

//Style
import { InputContainer, Input } from './controls-styled.js';

export const Search = ({ search, setSearch }) => {
	return (
		<InputContainer>
			<IoSearch />
			<Input value={search} onChange={e => setSearch(e.target.value)} />
		</InputContainer>
	);
};
