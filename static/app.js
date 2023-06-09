const populateProducts = async () => {
  const products = document.querySelector('#products');
  products.innerHTML = '';
  
  const data = [
    {id: '1', name: 'Leo Lanese', rrp: '1', info: 'Coding all day'},
    {id: '2', name: 'Tom', rrp: '2', info: 'Fighting with Sam'},
    {id: '3', name: 'Sam', rrp: '3', info: 'Fighting with Tom'}
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