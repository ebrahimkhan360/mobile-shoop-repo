const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}
// search result
const displayPhone = data => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent = '';

    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="loadPhoneDetail(${data.id})" class="card h-100">
                    <img src="${data.image}" class="card-img-top" alt="...">

                <div class="card-body">
                     <h5 class="card-title">${data.brand}</h5>
                    <p>${data.phone_name}</p>
                    <p>${data.slug}</p>

                </div>
            </div>
        `;
        searchResult.appendChild(div);
    });
}