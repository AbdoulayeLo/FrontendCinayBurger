import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, BarController } from 'chart.js';

// Enregistre les composants nécessaires
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
