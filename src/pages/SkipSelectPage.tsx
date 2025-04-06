import React, { useState } from 'react';
import { Card } from '../componets/Card/Card';
import { CardProps, SkipSelectPageProps } from '../interfaces';
import { StyledContainer, StyledContent } from './SkipSelectPage-styles';

export const SkipSelectPage: React.FC<SkipSelectPageProps> = ({ cards }) => {
	const [selectedCard, setSelectedCard] = useState<CardProps | null>(null);
	const [borderColor, setBorderColor] = useState('transparent');
	const [buttonText, setButtonText] = useState('Select This Skip');
	const [showButton, setShowButton] = useState(true);

	const handleCardClick = (card: CardProps) => {
		setSelectedCard(card);
		setBorderColor('blue');
		setButtonText('Selected');
	};

	const handleButtonClick = () => {
		console.log('Button clicked!');
	};

	return (
		<StyledContainer>
			<StyledContent>
				<h1>Choose Your Skip Size</h1>
				<p>Select the skip size that best suits your needs</p>
			</StyledContent>

			{cards?.map((card, index) => {
				return (
					<Card
						key={index}
						size={card?.size}
						hire_period_days={card?.hire_period_days}
						price_before_vat={card?.price_before_vat}
						handleButtonClick={handleButtonClick}
						handleCardClick={() => handleCardClick(card)}
						borderColor={borderColor}
						selectedCard={selectedCard?.size === card.size}
					/>
				);
			})}
		</StyledContainer>
	);
};
