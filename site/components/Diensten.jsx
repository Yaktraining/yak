import React from 'react';
import styled from '@emotion/styled';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Card from './Card';

const MaxWidth = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    padding: 32px 16px;

    @media(min-width: 1024px) {
      padding: 72px 24px;
    }
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

const RelativeContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 121vw;
  height: 200%;
  background-color: ${(props) => props.theme.palette.primary.background};
  z-index: -1;
  transform: translate(-20%, 0%) rotate(346deg) skew(180deg);

  @media(min-width: 1024px) {
    transform: translate(-49%, 0%) rotate(346deg) skew(180deg);
  }
`;

const Diensten = () => (
  <RelativeContainer>
    <Background />
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
  </RelativeContainer>
);

export default Diensten;
