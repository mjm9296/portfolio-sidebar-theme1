import { html, fixture, expect } from '@open-wc/testing';
import "../portfolio-sidebar-theme1.js";

describe("PortfolioSidebarTheme1 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <portfolio-sidebar-theme1
        title="title"
      ></portfolio-sidebar-theme1>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
