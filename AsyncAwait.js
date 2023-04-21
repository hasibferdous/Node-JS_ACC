async function getData() {
    const res = await Promise;
    console.log(res);
}

getData();

fetch("https://www.example.com/${user.id}")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => console.log(err))

async function getUser(){
    const res = await fetch("https://www.example.com/${user.id}");
    const user = await res.json();

    const res2 = await fetch(`https://www.example.com/${user.id}`);
    const products = res2.json();

    console.log(products);

}