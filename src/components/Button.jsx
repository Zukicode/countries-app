import React from 'react';

//Style
import styled from 'styled-components';

export const Button = styled.button`
	padding: 0 1rem;
	background-color: var(--colors-base-ui);
	box-shadow: var(--shadow);
	line-height: 2.5;
	border-radius: var(--radius);

	border: none;
	display: flex;
	align-items: center;
	gap: 0.75rem;
	cursor: pointer;
	color: var(--colors-text);
	font-weight: var(--fw-bold);
`;
