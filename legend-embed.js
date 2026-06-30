class LegendEmbed extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <div style="height:600px;">
        <iframe
          src="https://noafe4.wixsite.com/default-dolly-122"
          allow="camera; microphone; autoplay"
          style="width:100%; height:100%; border:none;"
        ></iframe>
      </div>
    `;
  }
}

customElements.define('legend-embed', LegendEmbed);
