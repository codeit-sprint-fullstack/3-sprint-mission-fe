import { NextRequest, NextResponse } from 'next/server';
import { withCors } from '@/app/lib/middlewares/corsWrapper';

export const GET = withCors(async (request: NextRequest) => {
  const message = {
    message: `Hello Chobo!`,
  };
  return NextResponse.json(message);
});
