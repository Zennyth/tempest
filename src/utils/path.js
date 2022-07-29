import path from 'path';
import { fileURLToPath } from 'url';

export const __filename = path.basename(fileURLToPath(import.meta.url));
export const __dirname = path.dirname(__filename);
export const __templatedir = path.resolve(path.basename(__dirname), "./templates")