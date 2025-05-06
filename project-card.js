/**
 * Copyright 2025 Matteo Mastrocola
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `project-card`
 * @element project-card
 */
export class ProjectCard extends DDDSuper(LitElement) {
  static get tag() {
    return "project-card";
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      link: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "Project Title";
    this.description = "Short project description goes here.";
    this.link = "";
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          max-width: 500px;
          margin: 24px auto;
          background-color: white;
          border: 2px solid var(--ddd-theme-primary);
          border-radius: 12px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          padding: 20px;
          font-family: var(--ddd-font-navigation);
        }

        h3 {
          margin-top: 0;
          font-size: 1.5em;
          color: var(--ddd-theme-primary);
        }

        p {
          margin-bottom: 12px;
          color: black;
        }

        a {
          color: var(--ddd-theme-primary);
          font-weight: bold;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `,
    ];
  }

  render() {
    return html`
      <h3>${this.title}</h3>
      <p>${this.description}</p>
      ${this.link && this.link !== "#" ? html`
        <a href="${this.link}" target="_blank" rel="noopener noreferrer">View Project</a>
      ` : ""}
    `;
  }
}

globalThis.customElements.define(ProjectCard.tag, ProjectCard);
