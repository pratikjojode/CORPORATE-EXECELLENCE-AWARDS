import axios from "axios";

export const attendanceformresponse = async (req, res) => {
  try {
    const { GOOGLE_SHEET_TWO_ID, GOOGLE_API_KEY } = process.env;

    const sheetName = "Form Responses 1";

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_TWO_ID}/values/${encodeURIComponent(
      sheetName
    )}?key=${GOOGLE_API_KEY}`;

    const response = await axios.get(url);
    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return res.status(404).json({ message: "No data found" });
    }

    const headers = rows[0];
    const data = rows
      .slice(1)
      .map((row) =>
        Object.fromEntries(headers.map((header, i) => [header, row[i] || ""]))
      );

    res.status(200).json(data);
  } catch (error) {
    console.error(
      "Error fetching form response:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to fetch form response" });
  }
};
