import { StyledList } from './List.styles';
import { ListProps } from './List.types';

export const List = ({ children }: ListProps) => {
	return <StyledList>{children}</StyledList>;
};
