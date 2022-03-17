import { CardContent, Divider } from "@mui/material";
import { Bet } from "../../../models/SoccerBets";
import {
	Section,
	Teams,
	TeamsHeader,
	TeamsContent,
	TeamInfo,
	ConfrontDate,
} from "./styled";

interface Props {
	homeTeam: any;
	awayTeam: any;
}

const MatchSchedule: React.FC<Props> = ({ homeTeam, awayTeam }) => {
	return (
		<Section>
			<Teams>
				<TeamInfo>
					<CardContent>
						<TeamsHeader>
							<img src={homeTeam.logo} height={50} />
						</TeamsHeader>
						<TeamsContent>
							<span>{homeTeam.name}</span>
						</TeamsContent>
					</CardContent>
				</TeamInfo>
				<ConfrontDate>
					<span>
						SAT. AUG. 21
						<br />
						2:30
					</span>
				</ConfrontDate>
				<TeamInfo id="awayCard">
					<CardContent>
						<TeamsHeader>
							<img src={awayTeam.logo} height={50} />
						</TeamsHeader>
						<TeamsContent>
							<span>{awayTeam.name}</span>
						</TeamsContent>
					</CardContent>
				</TeamInfo>
			</Teams>
		</Section>
	);
};

export default MatchSchedule;
