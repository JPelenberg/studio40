import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "src", "data", "rsvps.json");
  let rsvps = [];
  if (fs.existsSync(filePath)) {
    const fileData = fs.readFileSync(filePath);
    rsvps = JSON.parse(fileData);
  }
  res.status(200).json({ rsvps });
}