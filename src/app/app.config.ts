import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};