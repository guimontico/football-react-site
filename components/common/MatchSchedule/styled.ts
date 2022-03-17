import { Card } from "@mui/material";
import styled from "styled-components";

export const Section = styled.section`
	margin: 0 0 15px 0;
	min-height: auto;
`;

export const Teams = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const TeamInfo = styled.div`
	display: flex;
	justify-content: center;
	min-width: 150px;
	padding-bottom: 0 !important;
`;

export const TeamsHeader = styled.div`
	text-align: center;
	padding-bottom: 5px;
	#homeTeamLogo {
		padding-right: 1px;
		object-position: 0%;
		object-fit: cover;
		width: 30px;
	}
	#awayTeamLogo {
		padding-left: 1px;
		object-position: 100%;
		object-fit: cover;
		width: 30px;
	}
`;

export const TeamsContent = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
	span {
		font-family: Open Sans, sans-serif;
		font-weight: 600;
		color: #2a2a2f;
	}
`;

export const ConfrontDate = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	padding: 0 7px;
	align-items: center;
	span {
		font-size: 1rem;
		font-weight: 800;
		color: #2a2a2f;
	}
`;
