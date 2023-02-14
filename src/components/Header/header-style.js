import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderEl = styled.header`
	box-shadow: var(--shadow);
	background-color: var(--colors-base-ui);
`;

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 0;
`;

export const Title = styled(Link).attrs({
	to: '/',
})`
	color: var(--colors-text);
	text-decoration: none;
	font-size: 18px;
	font-weight: var(--fw-bold);
`;

export const ThemeSwitcher = styled.div`
	cursor: pointer;
	color: var(--colors-text);
	font-size: var(--fs-sm);
	text-transform: capitalize;
	display: flex;
	align-items: center;
	gap: 6px;
`;
