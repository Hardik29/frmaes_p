import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Generate Cat Image" 
    },
  ],
  image: 'https://cdn2.thecatapi.com/images/MTk4OTAxMA.jpg',

  post_url: 'https://frmaes-pr.vercel.app/api',
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