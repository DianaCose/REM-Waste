import { styled } from 'styled-components';

export const StyledContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding: 30px;
	background-color: rgb(28 28 28);
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 1000;
`;

export const StyledText = styled.p`
	color: white;
	font-size: 16px;
	font-weight: 400;
	font-size: 20px;
`;

export const StyledButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin-bottom: 20px;
`;

export const StyledButton = styled.button`
	background-color: rgb(43, 43, 43);
	color: white;
	border: 1px solid white;
	padding: 10px 20px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 500;
	border-radius: 5px;
	transition: background-color 0.3s, color 0.3s, border-color 0.3s;
	width: 100%;
	margin: 0 10px;

	&:hover {
		background-color: blue;
		color: white;
	}
`;
