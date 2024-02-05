import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Mint Nft" 
    },
  ],
  image: 'https://imgs.xkcd.com/comics/combination_vision_test.png',

  post_url: 'https://enchanting-choux-aa3877.netlify.app/api',
});

export const metadata = {
  title: 'Image',//these are html page attributes, chose as you want
  description: 'Image',
  openGraph: { //open graph is a protocaol created by facebook, frames are built on top of these protocol
    title: 'Image',
    description: 'Cat Image',
    images: ['https://imgs.xkcd.com/comics/combination_vision_test.png'],
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