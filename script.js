const cards = [
    { name: "Глупакът", image: "deck/major_arcana_fool.png" },
    { name: "Магьосникът", image: "deck/major_arcana_magician.png" },
    { name: "Висшата жрица", image: "deck/major_arcana_priestess.png" },
    { name: "Императрицата", image: "deck/major_arcana_empress.png" },
    { name: "Императорът", image: "deck/major_arcana_emperor.png" },
    { name: "Жрецът", image: "deck/major_arcana_hierophant.png" },
    { name: "Любовниците", image: "deck/major_arcana_lovers.png" },
    { name: "Колесницата", image: "deck/major_arcana_chariot.png" },
    { name: "Сила", image: "deck/major_arcana_strength.png" },
    { name: "Отшелникът", image: "deck/major_arcana_hermit.png" },
    { name: "Колелото на съдбата", image: "deck/major_arcana_fortune.png" },
    { name: "Справедливост", image: "deck/major_arcana_justice.png" },
    { name: "Обесеният", image: "deck/major_arcana_hanged.png" },
    { name: "Смърт", image: "deck/major_arcana_death.png" },
    { name: "Умереност", image: "deck/major_arcana_temperance.png" },
    { name: "Дяволът", image: "deck/major_arcana_devil.png" },
    { name: "Кулата", image: "deck/major_arcana_tower.png" },
    { name: "Звездата", image: "deck/major_arcana_star.png" },
    { name: "Луната", image: "deck/major_arcana_moon.png" },
    { name: "Слънцето", image: "deck/major_arcana_sun.png" },
    { name: "Страшният съд", image: "deck/major_arcana_judgement.png" },
    { name: "Светът", image: "deck/major_arcana_world.png" },

    { name: "Асо жезли", image: "deck/minor_arcana_wands_ace.png" },
    { name: "Двойка жезли", image: "deck/minor_arcana_wands_2.png" },
    { name: "Тройка жезли", image: "deck/minor_arcana_wands_3.png" },
    { name: "Четворка жезли", image: "deck/minor_arcana_wands_4.png" },
    { name: "Петица жезли", image: "deck/minor_arcana_wands_5.png" },
    { name: "Шестиица жезли", image: "deck/minor_arcana_wands_6.png" },
    { name: "Седмица жезли", image: "deck/minor_arcana_wands_7.png" },
    { name: "Осмица жезли", image: "deck/minor_arcana_wands_8.png" },
    { name: "Деветка жезли", image: "deck/minor_arcana_wands_9.png" },
    { name: "Десетка жезли", image: "deck/minor_arcana_wands_10.png" },
    { name: "Паж на жезлите", image: "deck/minor_arcana_wands_page.png" },
    { name: "Рицар на жезлите", image: "deck/minor_arcana_wands_knight.png" },
    { name: "Кралица на жезлите", image: "deck/minor_arcana_wands_queen.png" },
    { name: "Крал на жезлите", image: "deck/minor_arcana_wands_king.png" },

    { name: "Асо чаши", image: "deck/minor_arcana_cups_ace.png" },
    { name: "Двойка чаши", image: "deck/minor_arcana_cups_2.png" },
    { name: "Тройка чаши", image: "deck/minor_arcana_cups_3.png" },
    { name: "Четворка чаши", image: "deck/minor_arcana_cups_4.png" },
    { name: "Петица чаши", image: "deck/minor_arcana_cups_5.png" },
    { name: "Шестиица чаши", image: "deck/minor_arcana_cups_6.png" },
    { name: "Седмица чаши", image: "deck/minor_arcana_cups_7.png" },
    { name: "Осмица чаши", image: "deck/minor_arcana_cups_8.png" },
    { name: "Деветка чаши", image: "deck/minor_arcana_cups_9.png" },
    { name: "Десетка чаши", image: "deck/minor_arcana_cups_10.png" },
    { name: "Паж на чашите", image: "deck/minor_arcana_cups_page.png" },
    { name: "Рицар на чашите", image: "deck/minor_arcana_cups_knight.png" },
    { name: "Кралица на чашите", image: "deck/minor_arcana_cups_queen.png" },
    { name: "Крал на чашите", image: "deck/minor_arcana_cups_king.png" },

    { name: "Асо мечове", image: "deck/minor_arcana_swords_ace.png" },
    { name: "Двойка мечове", image: "deck/minor_arcana_swords_2.png" },
    { name: "Тройка мечове", image: "deck/minor_arcana_swords_3.png" },
    { name: "Четворка мечове", image: "deck/minor_arcana_swords_4.png" },
    { name: "Петица мечове", image: "deck/minor_arcana_swords_5.png" },
    { name: "Шестиица мечове", image: "deck/minor_arcana_swords_6.png" },
    { name: "Седмица мечове", image: "deck/minor_arcana_swords_7.png" },
    { name: "Осмица мечове", image: "deck/minor_arcana_swords_8.png" },
    { name: "Деветка мечове", image: "deck/minor_arcana_swords_9.png" },
    { name: "Десетка мечове", image: "deck/minor_arcana_swords_10.png" },
    { name: "Паж на мечовете", image: "deck/minor_arcana_swords_page.png" },
    { name: "Рицар на мечовете", image: "deck/minor_arcana_swords_knight.png" },
    { name: "Кралица на мечовете", image: "deck/minor_arcana_swords_queen.png" },
    { name: "Крал на мечовете", image: "deck/minor_arcana_swords_king.png" },

    { name: "Асо пентакли", image: "deck/minor_arcana_pentacles_ace.png" },
    { name: "Двойка пентакли", image: "deck/minor_arcana_pentacles_2.png" },
    { name: "Тройка пентакли", image: "deck/minor_arcana_pentacles_3.png" },
    { name: "Четворка пентакли", image: "deck/minor_arcana_pentacles_4.png" },
    { name: "Петица пентакли", image: "deck/minor_arcana_pentacles_5.png" },
    { name: "Шестиица пентакли", image: "deck/minor_arcana_pentacles_6.png" },
    { name: "Седмица пентакли", image: "deck/minor_arcana_pentacles_7.png" },
    { name: "Осмица пентакли", image: "deck/minor_arcana_pentacles_8.png" },
    { name: "Деветка пентакли", image: "deck/minor_arcana_pentacles_9.png" },
    { name: "Десетка пентакли", image: "deck/minor_arcana_pentacles_10.png" },
    { name: "Паж на пентаклите", image: "deck/minor_arcana_pentacles_page.png" },
    { name: "Рицар на пентаклите", image: "deck/minor_arcana_pentacles_knight.png" },
    { name: "Кралица на пентаклите", image: "deck/minor_arcana_pentacles_queen.png" },
    { name: "Крал на пентаклите", image: "deck/minor_arcana_pentacles_king.png" }
];
const cardImage = document.getElementById("image");
const drawBtn = document.getElementById("drawBtn");

drawBtn.addEventListener("click", () => {
    cardImage.style.transform = "rotateY(90deg)";

    setTimeout(() => {
        let randomCard = cards[Math.floor(Math.random() * cards.length)];
        cardImage.src = randomCard.image;

        cardImage.style.transform = "rotateY(0deg)";
    }, 300);
});
