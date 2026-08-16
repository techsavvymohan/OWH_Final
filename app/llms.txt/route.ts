import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'llms.txt');
    const content = fs.readFileSync(filePath, 'utf8');
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=3600',
      },
    });
  } catch {
    return new NextResponse('# OnlyWayOnline LLM Knowledge Base\n\nhttps://onlywayonline.com', {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}
