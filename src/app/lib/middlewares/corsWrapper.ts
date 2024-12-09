// src/lib/middleware/corsWrapper.ts
import { NextRequest, NextResponse } from 'next/server';
import { cors } from './cors';

export function withCors(handler: Function) {
  return async (request: NextRequest, ...args: any[]) => {
    const corsResponse = cors(request);
    if (corsResponse) return corsResponse;
    return handler(request, ...args);
  };
}
