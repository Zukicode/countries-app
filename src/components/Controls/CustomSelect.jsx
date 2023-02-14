import React from 'react';
import Select from 'react-select';

//Style
import styled from 'styled-components';

export const CustomSelect = styled(Select).attrs({
	styles: {
		control: provided => ({
			...provided,
			background: 'var(--colors-base-ui)',
			color: 'var(--colors-text)',
			borderRadius: 'var(--radius)',
			padding: '0.25rem',
			border: 'none',
			boxShadow: 'var(--shadow)',
			height: '50px',
		}),
		option: (provided, state) => ({
			...provided,
			cursor: 'pointer',
			color: 'var(--colors-text)',
			backgroundColor: state.isSelected
				? 'var(--colors-bg)'
				: 'var(--colors-base-ui)',
		}),
	},
})`
	width: 200px;
	border-radius: var(--radius);
	font-family: var(--family);
	border: none;

	& > * {
		box-shadow: var(--shadow);
	}

	& * {
		color: var(--colors-text) !important;
	}

	& input {
		padding-left: 0.25rem;
	}

	& > div[id] {
		background: var(--colors-base-ui);
	}
`;
