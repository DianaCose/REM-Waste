import styled from 'styled-components';
import cardCover from './assets/cardCover.jpg';
import arrow from './assets/arrow.svg';

interface StyledCardProps {
	borderColor?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	border-radius: 5px;
	padding: 20px;
	margin: 10px;
	background-color: rgb(28 28 28);
	color: white;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

	cursor: pointer;
	border: 2px solid ${({ borderColor }) => borderColor || 'transparent'};
`;

export const StyledImageContainer = styled.div`
	width: 100%;
	min-width: 400px;
	height: auto;
	min-height: 200px;
	border-radius: 5px;
	background-image: url(${cardCover});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const Label = styled.div`
	font-size: 16px;
	margin: 5px 0;
	position: relative;
	z-index: 2;
	top: 10px;
	left: 10px;
	background-color: blue;
	color: white;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	border-radius: 50px;
	padding: 5px 10px;
`;

export const StyledCardTitle = styled.h2`
	font-size: 24px;
	margin: 10px 0 0 0;
`;

export const StyledCardDescription = styled.p`
	font-size: 16px;
	color: rgb(156 163 175);
	margin-top: 5px;
`;

export const StyledPrice = styled.div`
	font-size: 24px;
	color: blue;
	font-weight: bold;
	display: flex;
	gap: 5px;
	justify-content: center;
`;

export const StyledButton = styled.button`
	background-color: rgb(42 42 42);
	color: white;
	padding: 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	margin-top: 10px;
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	color: white;

	&:hover {
		background-color: rgb(58 58 58);
	}
`;

export const StyledArrow = styled.svg`
	width: 20px;
	height: 20px;
	margin-left: 10px;
	fill: white;
`;
