export class HelloElement extends HTMLElement {
  connectedCallback() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello Custom Element!';
    const shadow = this.attachShadow({ mode: 'closed' })
    shadow.innerHTML = `
      <h1>Hello Custom Element!</h1>
      <div>Interval (none)</div>
      <br>
      <button>Click!</button>
      <span></span>
    `;

    let count = 0;
    shadow.querySelector('button').addEventListener('click', e => {
      (e.target as HTMLButtonElement).innerHTML = `Click (${++count})`;
      shadow.querySelector('span').textContent = `zone ${Zone.current.name}`;
    });

    let interval = 0;
    setInterval(() => {
      shadow.querySelector('div').textContent = `Interval (${++interval}) zone ${Zone.current.name}`;
    }, 1000)
  }
}

customElements.define('hello-element', HelloElement);