import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 767px) {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;

//Search
export const InputContainer = styled.label`
	background-color: var(--colors-base-ui);
	padding: 1rem 2rem;
	display: flex;
	align-items: center;

	border-radius: var(--radius);
	box-shadow: var(--shadow);
	width: 100%;
	margin-bottom: 1rem;

	@media (min-width: 767px) {
		margin-bottom: 0;
		width: 280px;
	}
`;

export const Input = styled.input.attrs({
	type: 'search',
	placeholder: 'Search for a country...',
})`
	margin-left: 2rem;
	border: none;
	outline: none;
	background-color: var(--colors-base-ui);
	font-family: var(--family);
	color: var(--colors-text);
`;
