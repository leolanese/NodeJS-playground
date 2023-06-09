const populateProducts = async () => {
    const products = document.querySelector('#products')
    products.innerHTML = ''
    const data = [
      {id: 'A1', name: 'Leo', rrp: '99.99', info: 'Coding'},
      {id: 'A2', name: 'Tom', rrp: '303.33', info: 'Fighting'},
      {id: 'B1', name: 'Sam', rrp: '22.40', info: 'Moaning'}
    ]
    for (const product of data) {
      const item = document.createElement('product-item')
      for (const key of ['name', 'rrp', 'info']) {
        const span = document.createElement('span')
        span.slot = key
        span.textContent = product[key]
        item.appendChild(span)
      }
      products.appendChild(item)
    }
  }
  
  document.querySelector('#fetch').addEventListener('click', async () => {
    await populateProducts()
  })
  
  customElements.define('product-item', class Item extends HTMLElement {
    constructor() {
      super()
      const itemTmpl = document.querySelector('#item').content
      this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
    }
  })
  
  