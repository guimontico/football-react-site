import { NextPage } from "next";
import Layout from "../../components/common/Layout";
import CentralContent from "../../features/CentralContent";
import Sidenav from "../../features/SideNav";

const Fixtures: NextPage = () => {
	return (
		<Layout pageTitle={"Fixtures"}>
			<Sidenav />
			<CentralContent />
		</Layout>
	);
};

export default Fixtures;
