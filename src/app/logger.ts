import { environment } from '../environments/environment';

enum LogLevel {
  DEBUG,
  INFO,
  ERROR
}

export class Logger {
  static readonly debug = Logger.printFn(LogLevel.DEBUG);
  static readonly info = Logger.printFn(LogLevel.INFO);
  static readonly error = Logger.printFn(LogLevel.ERROR);

  private static printFn(logLevel: number) {
    console.log(Number(LogLevel[environment.logLevel]));
    if (typeof Number(LogLevel[environment.logLevel]) !== 'number') return console.log;
    return (logLevel < Number(LogLevel[environment.logLevel])) ? Logger.doNothingFn : console.log;
  }

  private static doNothingFn(message?: any, ...optionalParams: any[]) {}
}
