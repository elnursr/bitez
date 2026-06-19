import { bitezFilterTabItem, bitezBurgerList } from './dom/dom-selectors.js';

fetch('../assets/json/bitez.json')
    .then(response => response.json())
    .then(({ burgers }) => {
        for (let i = 0; i < burgers.length; i++) {
            const { items } = burgers[i];
            for (let j = 0; j < items.length; j++) {

                const { size_upgrades } = items[j]

                console.log(size_upgrades);

                bitezBurgerList.innerHTML +=
                    `
                    <li class="bitez-burger__item">
                    <h1 class="bitez-burger__name">${items[j].name.replace(/_/g, ' ')}</h1>
                    <a href="" class="bitez-burger__link">
                        <img src="assets/media/png/burgers/${items[j].name}.png" alt="">
                    </a>
                    <ul class="bitez-burger-size-upgrades"></ul>
                    <p class="bitez-burger__content">${items[j].content}</p>
                </li>
                `;
            }
        }
    });