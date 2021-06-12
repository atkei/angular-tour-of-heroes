declare const window: any;

export const environment = {
  production: true,
  apiUrl: window['env']['apiUrl'],
  logLevel: window['env']['logLevel'],
};
