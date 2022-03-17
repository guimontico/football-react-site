import { Box } from "@mui/material";
import BoxMatchWinner from "../../common/BoxMatchWinner";
import MatchSchedule from "../../common/MatchSchedule";
import TeamWidget from "../../common/TeamWidget";
import { TeamsContainer } from "./styles";
import { odds, teamHome, teamAway } from "./TeamsAnalyticsData";

const oddsGame = odds;
const teamHomeGame = teamHome;
const teamAwayGame = teamAway;

const TeamsAnalytics = () => {
	return (
		<>
			<TeamsContainer>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "flex-start",
						width: "26vw",
						height: "100vh",
						background: "#394046",
						borderRadius: 6,
						p: 2,
					}}
				>
					<TeamWidget />
					{/* <MatchSchedule
						homeTeam={teamHomeGame}
						awayTeam={teamAwayGame}
					></MatchSchedule> */}
					{/* <BoxMatchWinner
						homeTeam={teamHomeGame}
						awayTeam={teamAwayGame}
						odds={oddsGame}
					></BoxMatchWinner> */}
				</Box>
			</TeamsContainer>
		</>
	);
};

export default TeamsAnalytics;
