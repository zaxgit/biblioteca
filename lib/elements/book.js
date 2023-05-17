import React from 'react';
import { createComponent } from '@lit-labs/react';

import { LitElement, html, css } from 'lit';

class BookElement extends LitElement {
  static properties = {
    id: {},
    title: String,
    subtitle: String,
    author: String,
    thumbnail: String,
    genre: String,
    published_on: String,
  };

  static styles = css`
    ul {
      text-decoration: none;
      list-style: none;
      margin: 0;

      li {
        text-decoration: none;
      }
    }
    .h-book {
      position: relative;
      height: 180px;
      width: 450px;

      margin-bottom: 20px;
      text-align: left;
      font-family: Inter;
      color: #5e718d;
      border-bottom: 1px solid #f0f3f9;

      .book-title {
        color: #455468;
        font-size: 16px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: -0.30000001192092896px;
        margin: 0px;
      }

      .book-author {
        margin: 0;
        line-height: 24px;
      }

      .book-data-point {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: -0.20000000298023224px;
      }

      .image-container {
        overflow: hidden;
        height: 152px;
        width: 102px;
        float: left;
        margin-right: 20px;
        border-radius: 2px;
        box-shadow: 0px 1px 2px 0px rgba(45, 54, 67, 0.04),
          0px 2px 4px 0px rgba(45, 54, 67, 0.08);
        .thumb {
          object-fit: cover;
        }
      }
      .book-actions {
        position: absolute;
        top: 3px;
        right: 15px;
      }
    }
  `;

  constructor() {
    super();
    this.id,
      this.title,
      this.subtitle,
      this.author,
      this.thumbnail,
      this.genre,
      this.published_on;
  }

  render() {
    return html`
      <li class="h-book">
        <div class="image-container">
          <image
            class="thumb"
            src="${this.thumbnail}"
            width="102"
            height="152"
            alt="book cover"
          />
        </div>

        <span class="book-title">${this.title}</span>
        ${this.subtitle
          ? html`<span class="book-title">:${this.subtitle}</span>`
          : ''}

        <p class="book-author">${this.author}</p>

        <ul>
          <li class="book-data_point">${this.genre}</li>
          <li class="book-data_point">${this.published_on}</li>
        </ul>
        <ul class="book-actions">
          <slot></slot>
        </ul>
      </li>
    `;
  }
}

customElements.define('book-element', BookElement);

export const Book = createComponent({
  react: React,
  tagName: 'book-element',
  elementClass: BookElement,
});
