import React from 'react';
import cardCover from './assets/cardCover.jpg';
import { CardProps } from '../../interfaces';
import {
	Label,
	StyledArrow,
	StyledButton,
	StyledCard,
	StyledCardDescription,
	StyledCardTitle,
	StyledImageContainer,
	StyledPrice,
} from './Card-styles';
import arrow from './assets/arrow.svg';

export const Card: React.FC<CardProps> = (props) => {
	return (
		<StyledCard
			onClick={() => props.handleCardClick?.(props)}
			borderColor={props.selectedCard ? props.borderColor : 'transparent'}
		>
			<StyledImageContainer>
				<Label>{`${props.size} Yards`}</Label>
			</StyledImageContainer>

			<StyledCardTitle>{`${props.size} Yard Skip`}</StyledCardTitle>
			<StyledCardDescription>{`${props.hire_period_days} day hire period`}</StyledCardDescription>
			<StyledPrice>
				{`${props.price_before_vat} $`}
				<StyledCardDescription>per week</StyledCardDescription>
			</StyledPrice>
			<StyledButton onClick={props.handleButtonClick}>
				Select This Skip
			</StyledButton>
		</StyledCard>
	);
};
