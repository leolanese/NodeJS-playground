// static3
const API = 'http://localhost:3000'

const populateProducts = async (category, method = 'GET', payload) => {
  const products = document.querySelector('#products');
  products.innerHTML = '';
  const send = method === 'GET' ? {} : {
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(payload)
  }
  console.log(`${API}/${category}`)

  const res = await fetch(`${API}/${category}`, { method, ...send })
  const data = await res.json();

  function createProductItem(product) {
    const item = document.createElement('product-item');
  
    ['name', 'rrp', 'info'].forEach(key => {
      const span = document.createElement('span');
      span.slot = key;
      span.textContent = product[key];
      item.appendChild(span);
    });
  
    return item;
  }
  
  data.forEach(product => {
    const item = createProductItem(product);
    products.appendChild(item);
  });
}
const category = document.querySelector('#category');
const add = document.querySelector('#add');

// input
category.addEventListener('input', async ({ target }) => {
  add.style.display = 'block'
  await populateProducts(target.value)
})

// submit
add.addEventListener('submit', async (e) => {
  e.preventDefault()
  const { target } = e
  const payload = {
    name: target.name.value,
    info: target.info.value
  }
  await populateProducts(category.value, 'POST', payload)
  target.reset()
})

customElements.define('product-item', class Item extends HTMLElement {
  constructor() {
    super()
    const itemTmpl = document.querySelector('#item').content
    this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
  }
})