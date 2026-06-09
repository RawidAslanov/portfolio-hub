import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "public", "projects");

const files = ["premium-barber.png", "iron-blade.png", "iron-body-gym.png"];

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(".png", ".webp"));
  const meta = await sharp(input)
    .resize(2560, null, { withoutEnlargement: true })
    .webp({ quality: 92, effort: 6 })
    .toFile(output);
  console.log(`${file} → ${path.basename(output)} ${meta.width}x${meta.height} ${Math.round(meta.size / 1024)}KB`);
}
