const salesmanArr = [{
    title: 'Продавець',
    name: 'Богдан',
}, {
    title: 'Продавець',
    name: 'Кірюшка'
}]

const salesmanId = document.getElementById('salesman')

salesmanArr.forEach((item) => {
    salesmanId.innerHTML += `
        <p class="card-title">${item.title}</p>
        <h4 class="card-subtitle mb-2">${item.name}</h4>`
})