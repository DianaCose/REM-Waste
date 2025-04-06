import { styled } from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 20px;
	background-color: rgb(18 18 18);
`;

export const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-align: center;
	margin-bottom: 20px;

	h1 {
		font-size: 30px;
		color: white;
		margin-bottom: 10px;
	}

	p {
		font-size: 18px;
		color: rgb(156 163 175);
	}
`;
