import styled from "styled-components";

export const SectionName = styled.div`
	padding: 15px 0 5px 30px;
	span {
		font-family: PremierSans-Bold, Arial, Helvetica Neue, Helvetica, sans-serif;
		color: #e5e5e4;
		font-weight: 600;
	}
`;

export const FixturesMatchesContainer = styled.div`
	padding: 10px 0;
`;

export const LeagueSelector = styled.div`
	align-items: center;
	margin: 0.5rem 0;
	display: flex;
	position: relative;
	flex-shrink: 0;
	span {
		font-family: PremierSans-Bold, Arial, Helvetica Neue, Helvetica, sans-serif;
		color: #e5e5e4;
		font-weight: 600;
		display: grid;
		flex: 90%;
		place-items: left;
	}
	/* img {
		filter: invert(77%) sepia(50%) saturate(50%) hue-rotate(155deg)
			brightness(130%) contrast(150%);
	} */
`;

export const IconDiv = styled.div``;

export const IconImg = styled.img`
	flex: 10%;
	max-width: 35px;
	place-items: center;
	margin-right: 10px;
`;
