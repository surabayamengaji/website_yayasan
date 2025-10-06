import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsArticle } from '../../../interfaces/news-article.interface';

@Component({
  selector: 'app-article-card',
  imports: [CommonModule],
  templateUrl: './article-card.html',
  styleUrl: './article-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCard {
  article = input.required<NewsArticle>();
  featured = input<boolean>(false);

  readMore = output<string>();

  onReadMore(): void {
    this.readMore.emit(this.article().slug);
  }
}
