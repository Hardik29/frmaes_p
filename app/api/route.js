import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://imgs.xkcd.com/comics/biff_tannen.png" /> 
  </head></html>`);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';