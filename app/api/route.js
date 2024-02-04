import {  NextResponse } from 'next/server';

async function getResponse(req) {//we are creating a post req
  console.log('API frame route called');
  return new NextResponse(`  <!DOCTYPE html><html><head> 
  <meta property="fc:frame" content="vNext" /> 
  <meta property="fc:frame:image" content="https://drive.google.com/file/d/1R68Ujx3YK_LuP_1NLnfady0Q4_F64cC2/view?usp=sharing" /> 
  <meta property="fc:frame:button:3" content="Try Again 😐😐" />
  <meta property="fc:frame:button:3:action" content="" />
  </head></html> `);

}

export async function POST(req) {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';