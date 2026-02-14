import {pokemons} from "./data2.js"
const parent = document.getElementById('parent')
const input = document.getElementById("input")





function RenderList(product){
product.map(item => {
const div = document.createElement('div')
div.innerHTML =`
<div class="card bg-base-100 w-96 shadow-sm bg-gray-100">
<figure>
<img
src="${item.img}"
alt="Shoes" />
</figure>
<div class="card-body">
<h2 class="card-title">${item.name}</h2>
<p><span>${item.num}</span> <span>${item.type}</span></p>
<div class="card-actions justify-end">
<button class="btn btn-primary">Buy Now</button>
</div>
</div>
</div>
`
parent.append(div)
})
}
RenderList(pokemons)

input.addEventListener("input" , (e)=> {
    parent.innerHTML = ''
input.classList.add('flex')
const qwerty = e.target.value.toLowerCase()
const filterProduct = pokemons.filter(item => item.name.toLowerCase().includes(qwerty))
RenderList(filterProduct)
})