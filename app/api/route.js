import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  console.log('API frame route called');
  const no = Math.floor((Math.random()*98)+1)
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmZUFzb9dYRFrYpXcp7MVNBThjWxyywEJAiF6jND8KkGrU/1%20(${no}).jpg" />   
  <meta property="fc:frame:button:1" content="Next Random Meme" />
  </head></html> `);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';