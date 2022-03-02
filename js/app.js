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
        error.innerText = "No result..!!!"
    } else {
        const searchResult = document.getElementById('search-result')
        searchResult.textContent = '';
        data.forEach(data => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div (${data.id})" class="card h-100">
                        <img src="${data.image}" class="card-img-top" alt="...">

                    <div class="card-body">
                         <h5 class="card-title">${data.brand}</h5>
                        <p>${data.phone_name}</p>
                        <p>${data.slug}</p>

                        <div class="all-button">
                        <button onclick="loadPhone('${data.slug}')" class="btn btn-outline-success" type="button" id="card-button">Details</button>
                        </div>
            `;
            searchResult.appendChild(div);
        });
    }
}

// detaile button

const loadPhone = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetail(data.data));
}
// phone detail display

const displayPhoneDetail = data => {
    if (data.releaseDate != 0 && data.others != 0 && data.slug != 'apple_iphone_13_mini-11104') {
        const details = document.getElementById('phone-details');
        details.textContent = '';
        details.style.backgroundColor = '#8a9ceb';
        const phoneImg = document.createElement('div');
        phoneImg.classList.add('child');
        phoneImg.innerHTML = `
    <image src="${data.image}">
    `;
        const phoneDetails = document.createElement('div');
        phoneDetails.classList.add('child');
        phoneDetails.innerHTML = `
    <h5>Name: ${data.name}</h5>
    <h5>Realease Date: ${data.releaseDate}</h5>
    <h5 class="fw-bold">Main Features:-</h5>
    <h5>ChipSet: ${data.mainFeatures.chipSet}</h5>
    <h5>Display: ${data.mainFeatures.displaySize}</h5>
    <h5>Memory: ${data.mainFeatures.memory}</h5>
    <h5>Bluetooth: ${data.others.Bluetooth}</h5>
    <h5>GPS: ${data.others.GPS}</h5>
    <h5>NFC: ${data.others.NFC}</h5>
    <h5>Radio: ${data.others.Radio}</h5>
    <h5>USB: ${data.others.USB}</h5>
    <h5>WLAN: ${data.others.WLAN}</h5>
    <h5 class="fw-bold">Sensors</h5>
    <h5>1.${data.mainFeatures.sensors[0]}</h5>
    <h5>2.${data.mainFeatures.sensors[1]}</h5>
    <h5>3.${data.mainFeatures.sensors[2]}</h5>
    <h5>4.${data.mainFeatures.sensors[3]}</h5>
    <h5>5.${data.mainFeatures.sensors[4]}</h5>
    <h5>6.${data.mainFeatures.sensors[5]}</h5>
    `;
        details.appendChild(phoneImg);
        details.appendChild(phoneDetails);
    }
}