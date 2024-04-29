export class LoggingService {
  constructor() {}

  loggingStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
