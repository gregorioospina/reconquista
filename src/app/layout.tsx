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
	title: "Álvaro y Maca",
	description: "Matrimonio de Álvaro Rocafort y María Camila Vernaza",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/assets/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
				<link rel="manifest" href="/assets/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/assets/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</head>
			<body className={`${marcellus.variable} ${montserrat.variable} ${roboto.variable} antialiased`}>{children}</body>
		</html>
	);
}
