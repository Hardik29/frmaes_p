import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmZUFzb9dYRFrYpXcp7MVNBThjWxyywEJAiF6jND8KkGrU/1%20(56).jpg" />   
  <meta property="og:audio" content="https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmeAU8s7mh2BaZM46hCNKHTxPhWHNpje6BiJuuSwpLQAwF" />
  </head></html> `);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';