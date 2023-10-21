import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1>Header 1</h1>
			<h2>Header 2</h2>
			<h3>Header 3</h3>
			<h4>Header 4</h4>
			<h5>Header 5</h5>
			<p>Body text</p>
			<h6>Header 6</h6>
			<Link className="button orange" href={"#"}>
				Test Button
			</Link>
			<Link className="button yellow small" href={"#"}>
				Test Button
			</Link>
			<Link className="button orange outline" href={"#"}>
				Test Button
			</Link>
			<Link className="button small red" href={"#"}>
				Test Button
			</Link>
		</>
	);
}
