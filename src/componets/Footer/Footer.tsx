import {
	StyledContainer,
	StyledText,
	StyledButtonContainer,
	StyledButton,
} from './Footer-styles';

export const Footer = () => {
	return (
		<StyledContainer>
			<StyledText>$ 7 Days</StyledText>
			<StyledButtonContainer>
				<StyledButton>Back</StyledButton>
				<StyledButton>Continue</StyledButton>
			</StyledButtonContainer>
		</StyledContainer>
	);
};
