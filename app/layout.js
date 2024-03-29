import Nav from "./components/ui/Nav";
import "./globals.scss";
import { Mukta, Montserrat } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const mukta = Mukta({ subsets: ["latin"], weight: ["400", "700"] });
const montserrat = Montserrat({ weight: ["800", "700", "600", "400"], subsets: ["latin"], variable: "--font-montserrat" });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${mukta.className} ${montserrat.variable}`}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
