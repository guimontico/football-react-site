import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";
import { fontFamily } from "../../../utils/font";

export const Odds = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const OddBox = styled(Box)`
	width: 20%;
	height: 20%;
	background: #495057;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px 24px;
	margin: 7px;
	span {
		font-family: ${fontFamily};
		font-weight: 500;
		color: #e5e5e4;
	}
`;

export const DividerParent = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const DividerLine = styled(Divider)`
	width: 70%;
	background: #a7abad;
	margin-bottom: 1px;
`;

export const GameContent = styled.div`
	display: flex;
`;

export const LeagueName = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0 0.5rem !important;
	position: relative;
`;

export const TeamsConfront = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	flex-shrink: 0;
	span {
		color: #e5e5e4;
	}
`;

export const ConfrontDate = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 0 7px;
	span {
		font-size: 0.8rem;
		font-weight: 800;
	}
`;

export const TeamsConfrontNameHome = styled.div`
	width: 125px;
	display: flex;
	margin: 0 1.5rem !important;
	justify-content: end;
	span {
		font-family: ${fontFamily};
		font-weight: 600;
		color: #e5e5e4;
	}
`;

export const TeamsConfrontNameAway = styled.div`
	width: 125px;
	display: flex;
	margin: 0 1.5rem !important;
	justify-content: start;
	span {
		font-family: ${fontFamily};
		font-weight: 600;
		color: #e5e5e4;
	}
`;

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

export const LeagueContent = styled.div`
	min-width: 10vw;
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
