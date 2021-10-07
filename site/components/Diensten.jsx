import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from './Card';

const MaxWidth = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 72px 0;
`;

const Title = styled(Typography)`
    text-align: center;
    margin-bottom: 32px;
`;

const Subtitle = styled(Typography)`
    text-align: center;
    margin: 0 auto 72px;
    max-width: 50%;
`;

const Diensten = () => (
  <MaxWidth>
    <Title variant="h4" color="primary">Wat bieden wij aan?</Title>
    <Subtitle variant="body1">
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consequat.
    </Subtitle>
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={5}
    >
      <Grid item xs={12} sm={12} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Card />
      </Grid>
    </Grid>
  </MaxWidth>
);

export default Diensten;
