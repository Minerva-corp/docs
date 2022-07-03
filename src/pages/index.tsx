import useBaseUrl from '@docusaurus/useBaseUrl';
import { Redirect } from "@docusaurus/router";
import React from 'react';

export default function MainPage() {
  return <Redirect to={useBaseUrl('/docs/intro')} />;
}