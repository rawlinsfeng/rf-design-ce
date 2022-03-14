import { defineCustomElement } from 'vue'

import Button from './components/Button.ce.vue'

const RfCeButtonElement = defineCustomElement(Button)

customElements.define('rf-ce-button', RfCeButtonElement)