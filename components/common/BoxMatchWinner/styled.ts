import { Card } from "@mui/material";
import styled from "styled-components";

export const Section = styled.section`
	margin: 0 0 15px 0;
	min-height: auto;
`;

export const Teams1x2 = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const Teams1x2Header = styled.div`
	text-align: center;
	padding-bottom: 5px;
	#homeTeamLogo {
		padding-right: 1px;
		object-position: 0%;
		object-fit: cover;
		width: 20px;
	}
	#awayTeamLogo {
		padding-left: 1px;
		object-position: 100%;
		object-fit: cover;
		width: 20px;
	}
`;

export const Teams1x2Content = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
	span {
		font-family: Open Sans, sans-serif;
		font-weight: 600;
		color: #2a2a2f;
	}
`;

export const Card1x2 = styled.div`
	min-width: 150px;
	padding-bottom: 0 !important;
`;
