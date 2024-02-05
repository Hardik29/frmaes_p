import { getFrameMetadata } from '@coinbase/onchainkit';
const no = Math.floor((Math.random()*98)+1)
const frameMetadata = getFrameMetadata({

  buttons: [
    {
      label: "Random Memes" 
    },
  ],
  image: `https://cyan-deep-moth-632.mypinata.cloud/ipfs/QmZUFzb9dYRFrYpXcp7MVNBThjWxyywEJAiF6jND8KkGrU/1%20(${no}).jpg`,

  post_url: 'https://guileless-vacherin-9372b8.netlify.app/api',
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