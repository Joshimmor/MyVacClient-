const fs = require('fs');
 // import { writeFile } from 'fs'; if you are using a typescript file

const environmentFile = `export const environment = {
  production: true,
  facebookClientid: ${process.env.appid}, // add here your variables
};
`;

// Generate environment.ts file
fs.writeFile('./src/environments/environment.ts', environmentFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated`);
  }
});
