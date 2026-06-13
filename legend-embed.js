class LegendEmbed extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div style="height:800px;">
        <iframe
          src="https://legends.wix.com/qm0xBm"
          allow="camera; microphone; autoplay"
          style="width:100%; height:100%; border:none;"
        ></iframe>
      </div>
    `;
  }
}

customElements.define('legend-embed', LegendEmbed);
