declare const window: any;

export const environment = {
  production: true,
  apiUrl: window['env']['apiUrl'] || 'https://localhost:3000',
  logLevel: window['env']['logLevel'] || 'INFO',
};
