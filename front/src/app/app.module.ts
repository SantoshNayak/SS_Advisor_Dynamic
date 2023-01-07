import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BenefitsOfTaxComponent } from './components/benefits-of-tax/benefits-of-tax.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { FaqComponent } from './components/faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DashboardComponent,
    OurServicesComponent,
    BenefitsOfTaxComponent,
    WhoWeAreComponent,
    PricingComponent,
    FaqComponent,
    TestimonialComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
