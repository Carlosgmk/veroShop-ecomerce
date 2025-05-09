import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: false,
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent implements AfterViewInit {
  @Input() src!: string;
  @Input() disableControls: boolean = false;
  @Input() overlayImage?: string;
  @Input() title?: string;
  @Input() description?: string;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  

  ngAfterViewInit() {
    const video = this.videoPlayer.nativeElement;
    video.play().catch(error => console.log("Erro ao tentar reproduzir o vídeo:", error));
  }
}
