class LegendEmbed extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <iframe
        src="https://noafe4.wixsite.com/default-dolly-122"
        allow="camera; microphone; autoplay"
        style="width:100%; height:100%; border:none;"
      ></iframe>
    `;
  }
}

customElements.define('legend-embed', LegendEmbed);
