import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Heading = styled.h1`
  color: ${(props) => props.theme.colors.blue};
`;

export default function Home() {
  return (
    <Layout>
      <Heading>Home</Heading>
      <p>Hello</p>
      <button>click</button>
    </Layout>
  );
}
