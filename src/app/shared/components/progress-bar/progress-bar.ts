import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  template: `
   <div 
      class="progress-container"
      [class.visible]="isVisible()">
      <div class="progress-bar">
        <div 
          class="progress-bar-value"
          [class.paused]="isPaused()">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .progress-container {
      width: 100%;
      margin: auto;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 1031;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s ease-in-out;
    }
    
    .progress-container.visible {
      opacity: 1;
      visibility: visible;
    }
    
    .progress-bar {
      height: 4px;
      background-color: var(--primary, #3b82f6);
      width: 100%;
      overflow: hidden;
      position: relative;
    }
    
    .progress-bar-value {
      width: 100%;
      height: 100%;
      background-color: var(--primary, #3b82f6);
      animation: indeterminateAnimation 1s infinite linear;
      transform-origin: 0% 50%;
    }
    
    .progress-bar-value.paused {
      animation-play-state: paused;
    }
    
    @keyframes indeterminateAnimation {
      0% {
        transform: translateX(0) scaleX(0);
      }
      40% {
        transform: translateX(0) scaleX(0.4);
      }
      100% {
        transform: translateX(100%) scaleX(0.5);
      }
    }
    
    /* Variante con progreso determinado (opcional) */
    .progress-bar-value.determinate {
      animation: none;
      transform: translateX(-100%);
      transition: transform 0.3s ease-out;
    }
    
    .progress-bar-value.determinate[data-progress] {
      transform: translateX(calc(-100% + var(--progress, 0) * 1%));
    }
  `],
})
export class ProgressBar {
  readonly isLoading = input<boolean>(false);
  readonly progress = input<number | null>(null); // null = indeterminado
  readonly pauseAnimation = input<boolean>(false);

  isVisible = computed(() => this.isLoading());
  isPaused = computed(() => this.pauseAnimation());
  isDeterminate = computed(() => this.progress() !== null);
}
