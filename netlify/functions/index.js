import app from './server.js';
import imageServer from '../../server/image-server.js';

// app.listen(3000, () => {
//   console.log('Up and running on http://localhost:3000/');
// });

export const handler = serverless(api);
