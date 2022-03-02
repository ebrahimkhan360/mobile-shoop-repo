// error handaling

const error = document.getElementById("error")

// Phone search

const searchPhone = () => {
    error.innerText = ""
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data.slice(0, 20)))
}

// search result

const displayPhone = data => {
    if (data.length == 0) {
        error.innerText = "no result"
    } else {
        const searchResult = document.getElementById('search-result')
        searchResult.textContent = '';
        data.forEach(data => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div (${data.id})" class="card h-100">
                        <img src="${data.image}" class="card-img-top" alt="...">
    // csrd body
                    <div class="card-body">
                         <h5 class="card-title">${data.brand}</h5>
                        <p>${data.phone_name}</p>
                        <p>${data.slug}</p>
    // button
                        <div class="all-button">
                        <button onclick="loadPhone('${data.slug}')" class="btn btn-outline-success" type="button" id="card-button">Feaser</button>
                        </div>
            `;
            searchResult.appendChild(div);
        });
    }
}

// detaile button

const loadPhone = details => {
    console.log(details)
    const url = `https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data[0]));
}

// phone detail display

const displayPhoneDetail = data => {
    console.log(data);
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${data.image}" class="card-img-top" alt="...">

    <div class="card-body">
        <h5 class="card-title">Brand: ${data.brand}</h5>
        <p>Name: ${data.phone_name}</p>
        <p>Model: ${data.slug}</p>
    </div>
`
    phoneDetails.appendChild(div)
}
