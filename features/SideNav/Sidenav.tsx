import LeagueList from "../../components/core/LeaguesList";
import MatchLive from "../../components/core/MatchLive";
import { Section } from "./styles";

const Sidenav = () => {
	return (
		<Section>
			<MatchLive />
			<LeagueList />
		</Section>
	);
};

export default Sidenav;
