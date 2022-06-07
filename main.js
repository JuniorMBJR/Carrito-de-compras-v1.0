const car = document.querySelector('#car');
const template = document.querySelector('#template');
const fragment = document.createDocumentFragment();
const buttons = document.querySelectorAll('.card .btn');

const carObject = {};

const addToCar = (e) => {

    const product = {
        title: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        count: 1,
    };

    if (carObject.hasOwnProperty(product.title)) {
        product.count = carObject[product.title].count + 1;
    }

    carObject[product.title] = product;

    console.log(product.title);
    pushToCar();
};

const pushToCar = (product) => {

    car.textContent = '';

    Object.values(carObject).forEach(item => {

        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.title;
        clone.querySelector('.badge').textContent = item.count;

        fragment.appendChild(clone);
    });

    car.appendChild(fragment);
};

buttons.forEach(btn => btn.addEventListener("click", addToCar));

