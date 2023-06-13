// static3
const API = 'http://localhost:3000'

const populateProducts = async (category) => {
  const products = document.querySelector('#products');
  products.innerHTML = '';
  console.log(`${API}/${category}`)
  const res = await fetch(`${API}/${category}`);
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
const category = document.querySelector('#category')

category.addEventListener('input', async ({ target }) => {
  await populateProducts(target.value)
})

customElements.define('product-item', class Item extends HTMLElement {
  constructor() {
    super()
    const itemTmpl = document.querySelector('#item').content
    this.attachShadow({mode: 'open'}).appendChild(itemTmpl.cloneNode(true))
  }
})