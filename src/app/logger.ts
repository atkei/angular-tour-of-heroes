import { environment } from '../environments/environment';

enum LogLevel {
  DEBUG,
  INFO,
  ERROR
}

export class Logger {
  static readonly debug = Logger.printFn(LogLevel.DEBUG);
  static readonly info = Logger.printFn(LogLevel.INFO);
  static readonly error = console.error;

  private static printFn(logLevel: number) {
    if (LogLevel[environment.logLevel] == null) return console.log;
    return (logLevel < Number(LogLevel[environment.logLevel])) ? Logger.doNothingFn : console.log;
  }

  private static doNothingFn(message?: any, ...optionalParams: any[]) {}
}
