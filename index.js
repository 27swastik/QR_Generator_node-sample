import { input } from '@inquirer/prompts';
import qr from 'qr-image';

import fs from 'fs';

 


const answer = await input({ message: 'Enter the URL to generate QR' });
//console.log(answer);

var qr_png = qr.image(answer, { type: 'png' });
qr_png.pipe(fs.createWriteStream('qr-image.png'));