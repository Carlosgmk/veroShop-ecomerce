import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppFeaturedItemComponent } from './components/app-featured-item/app-featured-item.component';
import { AppYouMayLikeComponent } from './components/app-you-may-like/app-you-may-like.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { PromoHighlightComponent } from './components/promo-highlight/promo-highlight.component';
import { DealSpotComponent } from './components/deal-spot/deal-spot.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { DialogUserComponent } from './components/dialog-user/dialog-user.component';
import { NavegationItensComponent } from './components/navegation-itens/navegation-itens.component';
import { AuthModule } from '../auth/auth.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MainVisualComponent } from './components/main-visual/main-visual.component';
import { PopularItensComponent } from './components/popular-itens/popular-itens.component';
import { ProductVideoComponent } from './components/product-video/product-video.component';

@NgModule({
  declarations: [
    AppComponent,
    AppFeaturedItemComponent,
    AppYouMayLikeComponent,
    CarouselComponent,
    HeaderComponent,
    VideoPlayerComponent,
    PromoHighlightComponent,
    DealSpotComponent,
    FooterComponent,
    DialogUserComponent,
    NavegationItensComponent,
    HomeLayoutComponent,
    AuthLayoutComponent,
    HomePageComponent,
    MainVisualComponent,
    PopularItensComponent,
    ProductVideoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AuthModule,
    CarouselModule,
    MatIconModule
    
    
  ],
  providers: [
     provideHttpClient(withInterceptorsFromDi()) 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
