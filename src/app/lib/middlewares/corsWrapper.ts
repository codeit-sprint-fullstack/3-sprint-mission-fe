;
// src/lib/middleware/corsWrapper.ts
import { NextRequest, NextResponse } from 'next/server';
import { cors } from './cors';


const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '', // Will be set dynamically
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

type RouteHandler = (request: NextRequest, ...args: any[]) => Promise<Response>;

export function withCors(handler: RouteHandler) {
  return async (request: NextRequest, ...args: any[]): Promise<Response> => {
    const corsResponse = await cors(request);
    if (corsResponse) return corsResponse;

    const response = await handler(request, ...args);
    const origin = request.headers.get('origin');

    if (response instanceof Response) {
      Object.entries({
        ...CORS_HEADERS,
        'Access-Control-Allow-Origin': origin || '',
      }).forEach(([key, value]) => {
        response.headers.set(key, value);
      });
    }

    return response;
  };
}
