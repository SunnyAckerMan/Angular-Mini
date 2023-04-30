import { environment } from './../rooms/environments/environment';
import { InjectionToken } from '@angular/core';
import { AppConfig } from './appConfig.interface';

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');
export const APP_CONFIG: AppConfig = {
  apiEndpoint: environment.apiEndpoint,
};
