import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Get Cat Photos" 
    },
  ],
  image: 'https://api.thecatapi.com/v1/images/search',

  post_url: 'your_url_here',
});

export const metadata = {
  title: 'Cat Image',//these are html page attributes, chose as you want
  description: 'Cat Image',
  openGraph: { //open graph is a protocaol created by facebook, frames are built on top of these protocol
    title: 'Cat Image',
    description: 'Cat Image',
    images: ['Cat Image'],
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