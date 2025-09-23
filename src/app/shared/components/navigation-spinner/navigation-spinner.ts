import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-navigation-spinner',
  imports: [],
  template: `
    <div 
      class="spinner-routes"
      [class.visible]="isVisible()">
      <div 
        class="spinner-icon"
        [class]="spinnerClass()">
      </div>
    </div>
  `,
  styles: [`
    .spinner-routes {
      display: inline-block;
      vertical-align: top;
      position: fixed;
      right: 15px;
      top: 12px;
      transition: all 0.2s ease-in-out;
      z-index: 1031;
      opacity: 0;
      visibility: hidden;
      transform: scale(0.8);
    }
    
    .spinner-routes.visible {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
    }
    
    .spinner-routes .spinner-icon {
      animation: loading-spinner 0.175s linear infinite;
      border-color: var(--primary, #3b82f6) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) var(--secondary, #a721ff);
      border-radius: 50%;
      border-style: solid;
      border-width: 2px;
      box-sizing: border-box;
      height: 18px;
      width: 18px;
    }
    
    /* Variantes de tamaño */
    .spinner-icon.small {
      height: 14px;
      width: 14px;
      border-width: 1.5px;
    }
    
    .spinner-icon.large {
      height: 24px;
      width: 24px;
      border-width: 3px;
    }
    
    /* Variantes de velocidad */
    .spinner-icon.fast {
      animation-duration: 0.1s;
    }
    
    .spinner-icon.slow {
      animation-duration: 0.3s;
    }
    
    @keyframes loading-spinner {
      0% {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(1turn);
      }
    }
    
    /* Posiciones alternativas */
    .spinner-routes.top-left {
      right: auto;
      left: 15px;
    }
    
    .spinner-routes.center {
      right: auto;
      left: 50%;
      transform: translateX(-50%) scale(0.8);
    }
    
    .spinner-routes.center.visible {
      transform: translateX(-50%) scale(1);
    }
  `],
})
export class NavigationSpinner {
  isLoading = input<boolean>(false);
  size = input<'small' | 'normal' | 'large'>('normal');
  speed = input<'slow' | 'normal' | 'fast'>('normal');
  position = input<'top-right' | 'top-left' | 'center'>('top-right');

  isVisible = computed(() => this.isLoading());

  spinnerClass = computed(() => {
    const classes = [];

    if (this.size() !== 'normal') {
      classes.push(this.size());
    }

    if (this.speed() !== 'normal') {
      classes.push(this.speed());
    }

    return classes.join(' ');
  });
}
