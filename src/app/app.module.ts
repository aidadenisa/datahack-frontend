import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const matImports = [
    MatIconModule,
    MatButtonModule,
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
        CoreModule,
        SharedModule.forRoot(),
        LoadingBarHttpClientModule,
        ...matImports,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
