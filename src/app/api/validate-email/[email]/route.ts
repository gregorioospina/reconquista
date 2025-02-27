import fs from "fs";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server"; // Import NextResponse

// @ts-expect-error el any me la chupa
export async function GET(req: NextRequest, { params }: unknown) {
	try {
		const auth = new GoogleAuth({
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
			keyFile: process.cwd() + "public/google-api-credentials.json",
		});
		const sheets = google.sheets({ version: "v4", auth });
		const p = await params;

		const f = fs.existsSync(process.cwd() + "public/google-api-credentials.json");
		console.log({ f });

		const spreadsheetId = "1KHjUanF8YaNgRGa5oryoeW2C_8_mbINbnOSCBmEVG-g";
		const range = "RSVP!B2:B1000";

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range,
		});

		if (response.data.values) {
			const flat = response.data.values.flat();
			const found = flat.find((e) => e === p.email);

			return NextResponse.json({ duplicateEmail: !!found }, { status: 200 }); // Use NextResponse
		} else return NextResponse.json({ error: true }, { status: 400 }); // Use NextResponse
	} catch (error) {
		console.error("Error accessing Google Sheets:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }); // Use NextResponse
	}
}
