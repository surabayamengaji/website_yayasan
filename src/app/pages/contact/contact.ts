import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Button } from '../../shared/components/button/button';
import { ThemeService } from '../../shared/services/theme.service';

@Component({
  selector: 'app-contact',
  imports: [Button],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly themeService = inject(ThemeService);

  readonly currentTheme = this.themeService.currentTheme;
  readonly isDark = this.themeService.isDark;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  setTheme(theme: 'light' | 'dark' | 'auto'): void {
    this.themeService.setTheme(theme);
  }
}
