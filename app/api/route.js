import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://api.thecatapi.com/v1/images/search" /> 
  <meta property="fc:frame:button:1" content="Get More Cat Image" /> 
  <meta property="fc:frame:button:1:action" content="post_redirect" />   
  </head></html> `);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';