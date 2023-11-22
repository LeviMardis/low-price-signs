import Link from "next/link";
import styles from "./page.module.scss";

const page = () => {
	return (
		<>
			<Link href={"/"}>Home</Link>
			<p>test page</p>
		</>
	);
};

export default page;
