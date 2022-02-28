import LeagueList from "../../components/core/LeaguesList";
import MatchLive from "../../components/core/MatchLive";
import TeamList from "../../components/core/TeamList";
import { Section } from "./styles";

const Sidenav = () => {
	return (
		<Section>
			<MatchLive />
			<LeagueList />
			<TeamList />
		</Section>
	);
};

export default Sidenav;
