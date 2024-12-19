import { NextRequest, NextResponse } from 'next/server';

export async function cors(request: NextRequest) {
  const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',');
  const origin = request.headers.get('origin');

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204, // No Content
      headers: {
        'Access-Control-Allow-Origin': origin || '',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  }

  // CORS 헤더 설정
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse('CORS not allowed', { status: 403 });
  }

  // Instead of NextResponse.next(), return null to indicate CORS check passed
  return null;
}
