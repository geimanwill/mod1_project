

let menuData = []

fetch('data/menu.json')
.then(response => response.json())
.then(data => {
   menuData = data
   const menu_element = document.getElementById('menu')
    menu_element.innerHTML = data.map(item => `<div>${item.name} - ${item.price} </div>`).join('')

}
)

function filterMenu(category){
    const filtered = menuData.filter(item => item.category === category)
    const menu_element = document.getElementById('menu')
    menu_element.innerHTML = filtered.map(item => `<div>${item.name} - ${item.price} </div>`).join('')
}
