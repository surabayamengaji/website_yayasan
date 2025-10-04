import { Injectable, signal, computed, effect, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type Theme = 'light' | 'dark' | 'auto';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly STORAGE_KEY = 'app-theme';

  private readonly theme = signal<Theme>(this.getStoredTheme());
  private readonly systemPrefersDark = signal(this.getSystemPreference());

  readonly currentTheme = this.theme.asReadonly();
  readonly effectiveTheme = computed(() => {
    const theme = this.theme();
    if (theme === 'auto') {
      return this.systemPrefersDark() ? 'dark' : 'light';
    }
    return theme;
  });

  readonly isDark = computed(() => this.effectiveTheme() === 'dark');

  constructor() {
    // Listen to system theme changes
    this.listenToSystemTheme();

    // Apply theme whenever it changes
    effect(() => {
      this.applyTheme(this.effectiveTheme());
    });
  }

  setTheme(theme: Theme): void {
    this.theme.set(theme);
    this.storeTheme(theme);
  }

  toggleTheme(): void {
    const current = this.theme();
    const next: Theme = current === 'light' ? 'dark' : 'light';
    this.setTheme(next);
  }

  private getStoredTheme(): Theme {
    if (typeof window === 'undefined') return 'auto';

    const stored = localStorage.getItem(this.STORAGE_KEY) as Theme;
    return ['light', 'dark', 'auto'].includes(stored) ? stored : 'auto';
  }

  private storeTheme(theme: Theme): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.STORAGE_KEY, theme);
    }
  }

  private getSystemPreference(): boolean {
    if (typeof window === 'undefined') return false;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private listenToSystemTheme(): void {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      this.systemPrefersDark.set(e.matches);
    });
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    const root = this.document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.setAttribute('data-theme', theme);
  }
}
