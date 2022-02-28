import Carousel from "../../components/common/Carousel";
import FixturesMatches from "../../components/core/FixturesMatches";
import { Section } from "./styles";

const CentralContent = () => {
	return (
		<Section>
			<Carousel />
			<FixturesMatches />
		</Section>
	);
};

export default CentralContent;
