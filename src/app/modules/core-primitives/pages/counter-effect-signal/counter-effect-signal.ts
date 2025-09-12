import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { Button } from '../../../../shared/components/button/button';
import { Card } from '../../../../shared/components/card/card';
import { HeaderTitle } from '../../../../shared/components/header-title/header-title';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-counter-effect-signal',
  imports: [Button, Card, HeaderTitle, NgClass],
  templateUrl: './counter-effect-signal.html',
  styleUrl: './counter-effect-signal.css'
})
export class CounterEffectSignal {
  // 1️⃣ Plain component property
  count0: number = 0;

  // 2️⃣ WritableSignal: can use .set() and .update()
  readonly count1: WritableSignal<number> = signal(0);

  // 3️⃣ Readonly Signal: cannot be modified directly
  readonly count2: Signal<number> = this.count1.asReadonly();

  // 4️⃣ Computed signal that derives double the count1 value
  readonly doubleCount: Signal<number> = computed(() => this.count1() * 2);

  // 5️⃣ Computed signal with conditional text based on count1
  readonly label: Signal<string> = computed(() => {
    return this.count1() === 0
      ? "You haven't clicked yet"
      : `You have clicked ${this.count1()} ${this.count1() === 1 ? 'time' : 'times'}!`;
  });


  // Intensidad del blur : Empieza con máximo blur y disminuye
  readonly blurIntensity: Signal<number> = computed(() => {
    const clicks = this.count1();
    if (clicks >= 40) return 0; // Sin blur cuando llegue a 40+
    if (clicks < 10) return 8; // Máximo blur inicial
    // Decremento gradual entre 10 y 40 clicks
    const progress = (clicks - 10) / 30; // 30 = 40-10
    return Math.max(8 - (progress * 8), 0);
  });
  // Nivel de opacidad: Empieza baja y aumenta
  readonly opacityLevel: Signal<number> = computed(() => {
    const clicks = this.count1();
    if (clicks >= 40) return 1; // Opacidad completa a los 40+
    if (clicks < 10) return 0.2; // Opacidad mínima inicial
    // Incremento gradual entre 10 y 40 clicks
    const progress = (clicks - 10) / 30; // 30 = 40-10
    return Math.min(0.2 + (progress * 0.8), 1);
  });

  // Sombra de texto para efecto adicional
  readonly textShadow: Signal<string> = computed(() => {
    const clicks = this.count1();
    if (clicks < 20) return 'none';
    const intensity = Math.min((clicks - 20) / 10, 1);
    return `0 0 ${intensity * 10}px rgba(0,0,0,0.5)`;
  });

  // Determina si el contenido está bloqueado
  readonly isPremiumBlocked: Signal<boolean> = computed(() => this.count1() < 10);

  // Texto del botón dinámico
  readonly buttonText: Signal<string> = computed(() => {
    const clicks = this.count1();
    if (clicks < 10) return `🔒 Unlock Content (${clicks}/10)`;
    if (clicks < 40) return `🔓 Keep Unlocking (${clicks}/40)`;
    return `✅ Fully Unlocked (${clicks})`;
  });

  // Clases del botón dinámicas
  readonly buttonClass: Signal<'primary' | 'danger' | 'success' | 'warning' | 'info' | 'light'> = computed(() => {
    const clicks = this.count1();

    if (clicks < 10) {
      // Botón rojo cuando está bloqueado
      return `danger`;
    } else if (clicks < 40) {
      // Botón amarillo/naranja cuando está desbloqueando
      return `warning`;
    } else {
      // Botón verde cuando está completamente desbloqueado
      return `primary`;
    }
  });

  // Status message
  readonly statusMessage: Signal<string> = computed(() => {
    const clicks = this.count1();
    if (clicks < 10) return '🔒 Contenido premium bloqueado - Haz 10 clics para empezar a desbloquear';
    if (clicks < 40) return `🔓 Desbloqueando contenido... ${clicks}/40 clics para acceso completo`;
    return '✅ Contenido completamente desbloqueado - ¡Acceso total!';
  });

  // Status class
  readonly statusClass: Signal<string> = computed(() => {
    const clicks = this.count1();
    if (clicks < 10) return 'bg-red-100 border-red-400 text-red-700';
    if (clicks < 40) return 'bg-yellow-100 border-yellow-400 text-yellow-700';
    return 'bg-primary border-primary-400 text-white';
  });

  // Progress percentage
  readonly progressPercentage: Signal<number> = computed(() => {
    return Math.min((this.count1() / 40) * 100, 100);
  });

  // Progress bar class
  readonly progressBarClass: Signal<string> = computed(() => {
    const clicks = this.count1();
    if (clicks < 10) return 'bg-red-500'; // Rojo cuando está bloqueado
    if (clicks < 40) return 'bg-orange-500'; // Naranja cuando está desbloqueando
    return 'bg-primary'; // Verde cuando está desbloqueado
  });

  // Blur progress info
  readonly blurProgress: Signal<string> = computed(() => {
    const blur = this.blurIntensity();
    const opacity = this.opacityLevel();
    return `Blur: ${blur.toFixed(1)}px, Opacity: ${(opacity * 100).toFixed(0)}%`;
  });

  increment() {

    console.log("Updating counters....");

    // Increment plain property 
    this.count0 += 1;

    // Update writable signal using .update() for atomic increment
    this.count1.update(v => v + 1);
  }

  reset() {
    this.count0 = 0;
    this.count1.set(0);
  }

  preventSelection(event: Event): boolean {
  if (this.count1() < 40) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
  return true;
}

preventRightClick(event: Event): boolean {
  if (this.count1() < 40) {
    event.preventDefault();
    return false;
  }
  return true;
}

// 🎯 COMPUTED SIGNAL PARA CLASES CSS
readonly protectionClasses: Signal<string> = computed(() => {
  const clicks = this.count1();
  const baseClasses = 'transition-all duration-500';
  
  if (clicks < 40) {
    return `${baseClasses} select-none pointer-events-none cursor-not-allowed`;
  }
  return `${baseClasses} select-auto`;
});
}
