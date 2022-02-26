import { NextPage } from "next";
import Layout from "../../components/common/Layout";
import Sidenav from "../../features/SideNav";

const Fixtures: NextPage = () => {
	return (
		<Layout pageTitle={"Fixtures"}>
			<Sidenav />
		</Layout>
	);
};

export default Fixtures;
