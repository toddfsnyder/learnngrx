import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/components/basic/basic.component';
import { EffectComponent } from './effects/components/effect/effect.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { basicReducer } from './basic/state/basic.reducer';
import { ActionsComponent } from './compoentsactions/components/actions/actions.component';
import { reducersMap } from './shared/state/reducer-map';
import { baseDemoService, demoService, stubDemoService } from './effects/services/demo-service';
import { EffectsModule } from '@ngrx/effects';
import { effectsMap } from './shared/state/effects-map';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    EffectComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //StoreModule.forRoot({ basicContext: basicReducer }),
    StoreModule.forRoot(reducersMap),
     // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(effectsMap)
    // EffectsModule.forFeature(frameworkEffectsMap ),
  ],
  providers: [
    { provide: baseDemoService, useClass: demoService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
