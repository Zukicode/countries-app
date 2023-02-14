import styled from 'styled-components';

export const Wrapper = styled.section`
	width: 100%;
	padding: 2rem 0;

	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;

	//Tablet
	@media (min-width: 767px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 3rem;
		padding: 2.5rem 0;
	}

	//Desktop
	@media (min-width: 1024px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 4rem;
	}
`;
