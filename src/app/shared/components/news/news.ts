import { Component, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticle } from '../../interfaces/news-article.interface';

@Component({
  selector: 'app-news',
  imports: [CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class News {
  private readonly newsData = signal<NewsArticle[]>([
    {
      id: 1,
      title: 'Program Pendidikan Al-Quran untuk Anak-Anak Yatim',
      excerpt:
        'Yayasan Surabaya Mengaji menyelenggarakan program pendidikan Al-Quran gratis untuk anak-anak yatim dan dhuafa. Program ini telah membantu lebih dari 200 anak untuk belajar membaca Al-Quran dengan baik dan benar.',
      image: '/dummy-artikel.webp',
      category: { name: 'PROGRAM UTAMA', color: 'bg-primary' },
      date: '15 Oktober 2025',
      slug: 'program-pendidikan-quran-anak-yatim',
      featured: true,
    },
    {
      id: 2,
      title: 'Bantuan Sembako untuk Keluarga Dhuafa',
      excerpt:
        'Distribusi sembako bulanan kepada 150 keluarga kurang mampu di wilayah Surabaya Timur sebagai bentuk kepedulian yayasan.',
      image: '/keg1.jpg',
      category: { name: 'KEGIATAN SOSIAL', color: 'bg-green-600' },
      date: '12 Oktober 2025',
      slug: 'bantuan-sembako-keluarga-dhuafa',
    },
    {
      id: 3,
      title: 'Pelatihan Tahfidz untuk Santri Baru',
      excerpt:
        'Program intensif menghafal Al-Quran dengan metode pembelajaran modern dan bimbingan ustadz berpengalaman.',
      image: '/keg2.jpg',
      category: { name: 'PENDIDIKAN', color: 'bg-blue-600' },
      date: '10 Oktober 2025',
      slug: 'pelatihan-tahfidz-santri-baru',
    },
    {
      id: 4,
      title: 'Santunan Anak Yatim Bulanan',
      excerpt:
        'Pemberian santunan rutin untuk 85 anak yatim piatu sebagai bentuk kepedulian yayasan terhadap kesejahteraan mereka.',
      image: '/keg3.png',
      category: { name: 'SANTUNAN', color: 'bg-purple-600' },
      date: '08 Oktober 2025',
      slug: 'santunan-anak-yatim-bulanan',
    },
  ]);

  readonly featuredArticle = computed(() => this.newsData().find((article) => article.featured));

  readonly regularArticles = computed(() => this.newsData().filter((article) => !article.featured));

  readonly allArticles = computed(() => this.newsData());

  onReadMore(slug: string): void {
    // Navigate to article detail page
    console.log('Navigate to article:', slug);
  }

  onViewAllNews(): void {
    // Navigate to news page
    console.log('Navigate to news page');
  }
}
