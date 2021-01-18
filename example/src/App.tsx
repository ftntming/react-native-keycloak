import * as React from 'react';

import {
  RNKeycloak,
  ReactNativeKeycloakProvider,
} from '@react-keycloak/native';
import Login from './Login';

const keycloak = new RNKeycloak({
  url: 'https://sso.fortivoice-cloud.net/auth',
  realm: 'chat.vanaaa.ca',
  clientId: 'barkoder-frontend',
});

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{ redirectUri: 'maslick://oauthresponse' }}
    >
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
