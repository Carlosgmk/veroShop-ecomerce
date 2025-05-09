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
    NavegationItensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
