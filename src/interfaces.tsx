export interface CardProps {
	size?: number | null;
	hire_period_days?: number | null;
	transport_cost?: number | null;
	per_tonne_cost?: number | null;
	price_before_vat?: number | null;
	vat?: number | null;
	postcode?: string | null;
	area?: string | null;
	area_id?: number | null;
	forbidden?: boolean;
	created_at?: string;
	updated_at?: string;
	allowed_on_road?: boolean;
	allows_heavy_waste?: boolean;
	label?: string;
	title?: string;
	description?: string;
	buttonText?: string;
	handleCardClick?: (card: CardProps) => void;
	handleButtonClick?: () => void;
	borderColor?: string;
	selectedCard?: boolean;
}

export interface SkipSelectPageProps {
	title?: string;
	description?: string;
	cards: CardProps[];
}
