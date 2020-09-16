import React from 'react';

import './Loading.css';

export type Props = {
  message: string;
};

export const Loading = ({ message }: Props): JSX.Element => (
  <div className="loading">
    <div className="loading__message">{message}</div>
  </div>
);
