import type { Metadata } from "next";
import { Marcellus, Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
	variable: "--font-title",
	weight: "400",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	variable: "--font-body",
	subsets: ["latin"],
});

const roboto = Roboto({
	variable: "--font-highlights",
	weight: ["300", "500"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "La Reconquista",
	description: "Matrimonio de Álvaro Rocafort y María Camila Vernaza",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${marcellus.variable} ${montserrat.variable} ${roboto.variable} antialiased`}>{children}</body>
		</html>
	);
}
