import React from 'react';
import { Button as PrimaryButton } from './Button';

export default {
  title: 'Example/Button',
  component: PrimaryButton,
};

export const Button = () => (
  <PrimaryButton variant="contained">Click</PrimaryButton>
);
