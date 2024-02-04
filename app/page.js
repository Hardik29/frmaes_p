import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Jetha Memes" 
    },
  ],
  image: 'https://tenor.com/bABZh.gif',

  post_url: 'your_url_here',
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