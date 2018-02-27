import { AboutMeComponent } from './about-me/about-me.component';
import { InitialNavComponent } from './initial-nav/initial-nav.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgsRevealModule } from 'ng-scrollreveal'; 
import { AppComponent } from './app.component';
// import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';
import { BsModalModule } from 'ng2-bs3-modal';
import { NgxPageScrollModule } from 'ngx-page-scroll';




@NgModule({
  declarations: [
    AppComponent,
    InitialNavComponent,
    AboutMeComponent,
    IntroductionComponent,
    PortfolioComponent,
    SkillsComponent,
    ContactComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgsRevealModule.forRoot(),
    ReactiveFormsModule,
    CollapseModule.forRoot(),
    // SimpleSmoothScrollModule,
    BsModalModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
