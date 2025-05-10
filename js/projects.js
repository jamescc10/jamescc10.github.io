customElements.define("project-element", class extends HTMLElement {
    constructor() {
        super();

        let template = document.querySelector("#projectElementTemplate");
        let templateContent = template.content;
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {
        const data = JSON.parse(this.getAttribute("data"));
        console.log(`Data: ${JSON.stringify(data)}`);
        
        //this.innerHTML = templateContent;
    }
});