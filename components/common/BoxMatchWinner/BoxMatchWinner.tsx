import { CardContent, Divider } from "@mui/material";
import { Bet } from "../../../models/SoccerBets";
import {
	Section,
	Teams1x2,
	Teams1x2Header,
	Teams1x2Content,
	Card1x2,
} from "./styled";

interface Props {
	homeTeam: any;
	awayTeam: any;
	odds: Bet;
}

const BoxMatchWinner: React.FC<Props> = ({ homeTeam, awayTeam, odds }) => {
	return (
		<Section>
			<Teams1x2>
				<Card1x2>
					<CardContent>
						<Teams1x2Header>
							<img src={homeTeam.logo} height={35} />
						</Teams1x2Header>
						<Divider style={{ background: "#fff" }} />
						<Teams1x2Content>
							<span>{homeTeam.name}</span>
							<span>{odds.values[0].odd}</span>
						</Teams1x2Content>
					</CardContent>
				</Card1x2>
				<Card1x2>
					<CardContent>
						<Teams1x2Header>
							<img id="homeTeamLogo" src={homeTeam.logo} height={35} />
							<img id="awayTeamLogo" src={awayTeam.logo} height={35} />
						</Teams1x2Header>
						<Divider style={{ background: "#fff" }} />
						<Teams1x2Content>
							<span>Draw</span>
							<span>{odds.values[1].odd}</span>
						</Teams1x2Content>
					</CardContent>
				</Card1x2>
				<Card1x2 id="awayCard">
					<CardContent>
						<Teams1x2Header>
							<img src={awayTeam.logo} height={35} />
						</Teams1x2Header>
						<Divider style={{ background: "#fff" }} />
						<Teams1x2Content>
							<span>{awayTeam.name}</span>
							<span>{odds.values[2].odd}</span>
						</Teams1x2Content>
					</CardContent>
				</Card1x2>
			</Teams1x2>
		</Section>
	);
};

export default BoxMatchWinner;
