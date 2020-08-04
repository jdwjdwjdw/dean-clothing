import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CollectionTitle = styled.h2`
	font-size: 35px;
	margin-bottom: 25px;
`;

export const CollectionItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	gap: 10px;

	& .collection-item {
		margin-bottom: 30px;
	}
`;
