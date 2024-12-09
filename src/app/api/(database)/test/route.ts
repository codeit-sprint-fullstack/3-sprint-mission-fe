// // import prisma from '@prisma/db';

import { withCors } from '@/app/lib/middlewares/corsWrapper';

// export async function GET(request: Request) {
//   // const res = await fetch('https://data.mongodb-api.com/...', {
//   //   next: { revalidate: 60 }, // 60초마다 재검증
//   // });
//   const res = `Hello World!`;

//   // const data = await res.json();
//   // const data = `Hello World!`;

//   // return Response.json(data);
//   return new Response(res, {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }

export const GET = withCors(async (request: Request) => {
  const message = {
    message: `Hello World!`,
  };
  // const status = 200;
  // const headers = {
  //   'Content-Type': 'application/json',
  // };

  return new Response(JSON.stringify(message), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      charset: 'utf-8',
    },
  });
});
