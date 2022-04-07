import { authorize, refresh } from 'react-native-app-auth';

const spotifyAuthConfig = {
  clientId: '8fc9f18cc53f4792bcca21fdc9e0caa5',
  clientSecret: '527cf73c4a7b4fe695bdd3f1945b57fe',
  redirectUrl: 'exp://127.0.0.1:19000/',
  scopes: [
    'playlist-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
    'user-library-read',
    'user-library-modify',
    'user-top-read',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

const onLogin = async () => {
  try {
    const result = await authorize(spotifyAuthConfig);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { onLogin };
