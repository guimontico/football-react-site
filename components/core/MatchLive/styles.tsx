import styled, { keyframes } from "styled-components";
import { Checkbox, Paper } from "@mui/material";

const blinker = keyframes`
  	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

export const MatchLiveContainer = styled.div`
	padding: 10px 15px;
`;

export const HeaderDetails = styled.div`
	padding-bottom: 5px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 0px 0px;
	grid-template-areas:
		"a a c"
		"b b c";
`;

export const LeagueName = styled.div`
	grid-area: a;
	color: #e5e5e4;
`;

export const LeagueRound = styled.div`
	grid-area: b;
	color: #a7abad;
`;

export const LiveIndicator = styled.div`
	justify-self: right;
	.c {
		grid-area: c;
	}
	span {
		font-family: "Roboto", sans-serif;
		background: #ea2429;
		color: #fff;
		padding: 6px 7px;
		line-height: 1;
		border-radius: 6px;
		text-transform: uppercase;
		display: inline-block;
		vertical-align: middle;
		font-size: 12px;
		font-weight: bold;
		width: auto;
		svg {
			animation: ${blinker} 1s cubic-bezier(0.5, 0, 1, 1) infinite alternate;
			font-size: 10px;
			margin-right: 5px;
			vertical-align: baseline;
		}
	}
`;

export const ResultGame = styled.div`
	span {
		font-family: PremierSans-Bold, Arial, Helvetica Neue, Helvetica, sans-serif;
		color: #a7abad;
		font-weight: 600;
	}
`;

export const Score = styled.span`
	font-size: 35px;
	padding-top: 20px;
`;

export const Time = styled.span`
	text-align: center;
`;

export const TeamNames = styled.div`
	display: flex;
	justify-content: space-around;
	padding-bottom: 15px;
	span {
		font-family: PremierSans-Bold, Arial, Helvetica Neue, Helvetica, sans-serif;
		color: #a7abad;
		font-weight: 600;
	}
`;

export const MatchDetailsLink = styled.div`
	a {
		padding-top: 5px;
		display: flex;
		justify-content: space-around;
		color: #e5e5e4;
	}
`;

export const ButtonArea = styled.div`
	margin-bottom: 15px;
	display: flex;
	justify-content: space-evenly;
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

export const GameInfo = styled.div`
	padding-bottom: 15px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin: 0.5rem 0;
	position: relative;
	flex-shrink: 0;
	span {
		font-family: PremierSans-Bold, Arial, Helvetica Neue, Helvetica, sans-serif;
		color: #a7abad;
		font-weight: 600;
		display: grid;
		flex: 90%;
		place-items: left;
	}
`;

export const IconDiv = styled.img`
	flex: 10%;
	max-width: 85px;
	display: grid;
	place-items: left;
`;

export const CheckboxLeague = styled(Checkbox)`
	padding: 3px 0 !important;
	flex: 10% !important;
	display: grid !important;
	place-items: right !important;
`;
