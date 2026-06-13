class LegendEmbed extends HTMLElement {
  connectedCallback() {
    const iframe = document.createElement('iframe');

    iframe.src = 'https://legends.wix.com/qm0xBm';
    iframe.allow = 'camera; microphone; autoplay';
    iframe.style.width = '100%';
    iframe.style.height = '800px';
    iframe.style.border = 'none';

    this.appendChild(iframe);
  }
}

customElements.define('legend-embed', LegendEmbed);
