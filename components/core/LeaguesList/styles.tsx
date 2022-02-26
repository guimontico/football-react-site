import styled from "styled-components";
import { Checkbox, Paper } from "@mui/material";

export const LeaguesContainer = styled.div`
	padding: 10px 15px;
`;

export const SportTitle = styled.div`
	padding: 1rem 0 0 0;
	color: #2e86de;
	text-decoration: none;
	font-weight: 800;
	font-size: 1.7rem;
`;

export const LeagueFilter = styled.div`
	margin-top: 15px;
	span {
		color: #a7abad;
	}
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

export const IconDiv = styled.img`
	flex: 10%;
	max-width: 35px;
	display: grid;
	place-items: left;
	margin-right: 10px;
`;

export const CheckboxLeague = styled(Checkbox)`
	padding: 3px 0 !important;
	flex: 10% !important;
	display: grid !important;
	place-items: right !important;
`;
