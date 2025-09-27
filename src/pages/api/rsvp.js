import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const rsvp = req.body;
    const filePath = path.join(process.cwd(), "src", "data", "rsvps.json");

    let rsvps = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath);
      rsvps = JSON.parse(fileData);
    }

    rsvps.push({
      ...rsvp,
      timestamp: new Date().toISOString(),
    });

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(rsvps, null, 2));

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}