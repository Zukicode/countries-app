import styled from 'styled-components';

export const Wrapper = styled.article`
	border-radius: var(--radius);
	cursor: pointer;
	box-shadow: var(--shadow);
	background-color: var(--colors-base-ui);
	overflow: hidden;
`;

export const CardImage = styled.img`
	display: block;
	width: 100%;
	height: 150px;
	object-fit: cover;
	object-position: center;
	box-shadow: var(--shadow);
`;

export const CardBody = styled.div`
	padding: 1rem 1.5rem 3rem;
`;

export const CardTitle = styled.h3`
	font-size: var(--fs-md);
	font-weight: var(--fw-bold);
`;

export const CardList = styled.ul`
	list-style: none;
	padding: 1rem 0 0;
`;

export const CardListItem = styled.li`
	font-size: var(--fs-sm);
	font-weight: var(--fw-light);
	line-height: 1.5rem;
`;
