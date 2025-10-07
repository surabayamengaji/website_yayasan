import { Component, signal } from '@angular/core';

interface AchievementType {
  id: number;
  title: string;
}
@Component({
  selector: 'app-achievement',
  imports: [],
  templateUrl: './achievement.html',
  styleUrl: './achievement.css',
})
export class Achievement {
  achievementImage = signal('assets/images/achievement-person.jpg');

  arrows = signal(Array(4).fill(null));

  achievements = signal<AchievementType[]>([
    { id: 1, title: 'Avoid These Mistakes' },
    { id: 2, title: 'Beyond the Norm' },
    { id: 3, title: 'Your New Venture' },
    { id: 4, title: 'Forge Destiny' },
    { id: 5, title: 'New Fonts' },
    { id: 6, title: 'Dare to be Different' },
  ]);

  projectCount = signal('19k');
  jamaahCount = signal('2M');
  mediaCount = signal('290');
  experienceYears = signal('500');

  downloadCV(): void {
    // Implement CV download logic
    console.log('Downloading CV...');
  }
}
