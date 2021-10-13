import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import adventure from '../public/adventure.jpeg';

export default function MediaCard() {
  return (
    <Card>
      <Image
        alt="Mountains"
        src={adventure}
        layout="responsive"
        width={3}
        height={2}
        placeholder="blur"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
}
