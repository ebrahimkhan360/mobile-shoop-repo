const searchPhone = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    searchField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    console.log(url)
    fetch(url)
        .then(res => res.joson())
        .then(data => displayPhone(data.data))
}
const displayPhone = phones => {
    console.log(phones)
}