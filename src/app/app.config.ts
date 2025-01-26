import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AlbumGateway } from './domain/models/album/gateway/AlbumGateway';
import { AlbumApiServiceWithDealy } from './infrastructure/driven-adapters/AbumApiServiceWithDelay';

export const appConfig: ApplicationConfig = {


  providers: [provideRouter(routes), provideHttpClient(withFetch()),
    { provide: AlbumGateway, useClass: AlbumApiServiceWithDealy },]

  // providers: [
    
  //   provideRouter(
  //    routes,
  //   ),
  //   //para recargar data con hhtpClient
  //   importProvidersFrom(
  //    HttpClientModule,
  //   )
  //  ]
  //providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
