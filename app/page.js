import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Mint Nft" 
    },
  ],
  image: 'https://drive.google.com/file/d/1R68Ujx3YK_LuP_1NLnfady0Q4_F64cC2/view?usp=sharing',

  post_url: 'https://enchanting-choux-aa3877.netlify.app/api',
});

export const metadata = {
  title: 'Image',//these are html page attributes, chose as you want
  description: 'Image',
  openGraph: { //open graph is a protocaol created by facebook, frames are built on top of these protocol
    title: 'Image',
    description: 'Cat Image',
    images: ['Image'],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>test</h1>
    </>
  );
}