import { RSVPBody } from "@/app/rsvp/page";
import fs from "fs";
import { GoogleAuth } from "google-auth-library";
import { google } from "googleapis";
import { NextResponse } from "next/server"; // Import NextResponse

export async function POST(req: Request) {
	// Change handler to GET
	try {
		const auth = new GoogleAuth({
			scopes: ["https://www.googleapis.com/auth/spreadsheets"],
			keyFile: process.cwd() + "/public/google-api-credentials.json",
		});
		const sheets = google.sheets({ version: "v4", auth });
		const body: RSVPBody = await req.json();

		const f = fs.existsSync(process.cwd() + "/public/google-api-credentials.json");
		console.log({ f });

		const spreadsheetId = "1KHjUanF8YaNgRGa5oryoeW2C_8_mbINbnOSCBmEVG-g";
		const range = "RSVP!A2:H1000";

		const response = await sheets.spreadsheets.values.get({
			spreadsheetId,
			range,
		});

		if (response.data.values) {
			const inputRow = response.data.values.length + 2;

			const rangeToInput = `RSVP!A${inputRow}:H${inputRow}`;
			const resource = {
				values: [[body.name, body.email, body.drinksrsvp, body.weddingrsvp, body.transport, body.foodrestrictions, body.songrequest, body.single]],
			};

			const result = await sheets.spreadsheets.values.update({
				spreadsheetId,
				range: rangeToInput,
				valueInputOption: "RAW",
				requestBody: resource,
			});

			if (result.status === 200) {
				return NextResponse.json({ success: true }, { status: 200 }); // Use NextResponse
			}
		}

		return NextResponse.json({ error: true }, { status: 400 }); // Use NextResponse
	} catch (error) {
		console.error("Error accessing Google Sheets:", error);
		return NextResponse.json({ error: "Internal Server Error" }, { status: 500 }); // Use NextResponse
	}
}
