/**
 * Copyright 2025 Alyssa F
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import './portfolio-sidebar.js';

/**
 * `portfolio-sidebar-theme`
 * 
 * @demo index.html
 * @element portfolio-sidebar-theme
 */
export class PortfolioSidebarTheme extends DDDSuper(LitElement) {

  static get tag() {
    return "portfolio-sidebar-theme";
  }

  constructor() {
    super();
    this.pages = [];
  }

  static get properties() {
    return {
      ...super.properties,
      pages: { type: Array }
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        height: 100vh;
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        display: block;
        overflow-x: hidden;
      }

      portfolio-sidebar {
        display: block;
        width: 310px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        color: var(--portfolio-sidebar-color, white);
        background-color: black;
      }

      .wrapper {
        margin-left: 310px;
        padding: 16px;
      }

      a {
        color: white;
        font-size: var(--ddd-font-size-m);
      }

      @media screen and (max-width: 768px) {
        portfolio-sidebar {
          position: relative;
          width: 100%;
        }

        .wrapper {
          margin-left: 0;
          padding-top: 20px;
        }
      }
    `];
  }

  render() {
    return html`
      <portfolio-sidebar>
        <ul>
          ${this.pages.map((page, index) => html`
            <li>
              <a href="#${page.number}" @click="${this.linkChange}" data-index="${index}">
                ${page.title}
              </a>
            </li>`)}
        </ul>
      </portfolio-sidebar>
      <div class="wrapper" @page-added="${this.addPage}">
        <slot></slot>
      </div>
    `;
  }

  linkChange(e) {
    let number = parseInt(e.target.getAttribute('data-index'));
    if (number >= 0) {
      this.pages[number].element.scrollIntoView();
    }
  }

  addPage(e) {
    const element = e.detail.value;
    const page = {
      number: element.pagenumber,
      title: element.title,
      element: element,
    };
    this.pages = [...this.pages, page];
  }
}

globalThis.customElements.define(PortfolioSidebarTheme.tag, PortfolioSidebarTheme);
