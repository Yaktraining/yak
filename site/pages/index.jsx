import React from 'react';
import Image from 'next/image';
import Layout, { HeroTypography } from '../components/Layout';
import hero from '../public/hero.jpg';
import Button from '../components/Button';

export default function Home() {
  return (
    <Layout
      heroText={(
        <HeroTypography variant="h3" color="white">
          Creating Sustainable Engagement
        </HeroTypography>
        )}
      button={<Button color="secondary" variant="contained">Contact</Button>}
      heroImage={(
        <Image
          alt="Mountains"
          src={hero}
          layout="responsive"
          width={829}
          height={358}
          placeholder="blur"
        />
      )}
    >
      <h1>Home</h1>
    </Layout>
  );
}
