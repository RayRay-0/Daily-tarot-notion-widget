const cards = [
    { name: "��������", image: "deck/major_arcana_fool.png" },
    { name: "�����������", image: "deck/major_arcana_magician.png" },
    { name: "������� �����", image: "deck/major_arcana_priestess.png" },
    { name: "�������������", image: "deck/major_arcana_empress.png" },
    { name: "�����������", image: "deck/major_arcana_emperor.png" },
    { name: "������", image: "deck/major_arcana_hierophant.png" },
    { name: "�����������", image: "deck/major_arcana_lovers.png" },
    { name: "�����������", image: "deck/major_arcana_chariot.png" },
    { name: "����", image: "deck/major_arcana_strength.png" },
    { name: "����������", image: "deck/major_arcana_hermit.png" },
    { name: "�������� �� �������", image: "deck/major_arcana_fortune.png" },
    { name: "�������������", image: "deck/major_arcana_justice.png" },
    { name: "���������", image: "deck/major_arcana_hanged.png" },
    { name: "�����", image: "deck/major_arcana_death.png" },
    { name: "���������", image: "deck/major_arcana_temperance.png" },
    { name: "�������", image: "deck/major_arcana_devil.png" },
    { name: "������", image: "deck/major_arcana_tower.png" },
    { name: "��������", image: "deck/major_arcana_star.png" },
    { name: "������", image: "deck/major_arcana_moon.png" },
    { name: "��������", image: "deck/major_arcana_sun.png" },
    { name: "��������� ���", image: "deck/major_arcana_judgement.png" },
    { name: "������", image: "deck/major_arcana_world.png" },

    { name: "��� �����", image: "deck/minor_arcana_wands_ace.png" },
    { name: "������ �����", image: "deck/minor_arcana_wands_2.png" },
    { name: "������ �����", image: "deck/minor_arcana_wands_3.png" },
    { name: "�������� �����", image: "deck/minor_arcana_wands_4.png" },
    { name: "������ �����", image: "deck/minor_arcana_wands_5.png" },
    { name: "�������� �����", image: "deck/minor_arcana_wands_6.png" },
    { name: "������� �����", image: "deck/minor_arcana_wands_7.png" },
    { name: "������ �����", image: "deck/minor_arcana_wands_8.png" },
    { name: "������� �����", image: "deck/minor_arcana_wands_9.png" },
    { name: "������� �����", image: "deck/minor_arcana_wands_10.png" },
    { name: "��� �� �������", image: "deck/minor_arcana_wands_page.png" },
    { name: "����� �� �������", image: "deck/minor_arcana_wands_knight.png" },
    { name: "������� �� �������", image: "deck/minor_arcana_wands_queen.png" },
    { name: "���� �� �������", image: "deck/minor_arcana_wands_king.png" },

    { name: "��� ����", image: "deck/minor_arcana_cups_ace.png" },
    { name: "������ ����", image: "deck/minor_arcana_cups_2.png" },
    { name: "������ ����", image: "deck/minor_arcana_cups_3.png" },
    { name: "�������� ����", image: "deck/minor_arcana_cups_4.png" },
    { name: "������ ����", image: "deck/minor_arcana_cups_5.png" },
    { name: "�������� ����", image: "deck/minor_arcana_cups_6.png" },
    { name: "������� ����", image: "deck/minor_arcana_cups_7.png" },
    { name: "������ ����", image: "deck/minor_arcana_cups_8.png" },
    { name: "������� ����", image: "deck/minor_arcana_cups_9.png" },
    { name: "������� ����", image: "deck/minor_arcana_cups_10.png" },
    { name: "��� �� ������", image: "deck/minor_arcana_cups_page.png" },
    { name: "����� �� ������", image: "deck/minor_arcana_cups_knight.png" },
    { name: "������� �� ������", image: "deck/minor_arcana_cups_queen.png" },
    { name: "���� �� ������", image: "deck/minor_arcana_cups_king.png" },

    { name: "��� ������", image: "deck/minor_arcana_swords_ace.png" },
    { name: "������ ������", image: "deck/minor_arcana_swords_2.png" },
    { name: "������ ������", image: "deck/minor_arcana_swords_3.png" },
    { name: "�������� ������", image: "deck/minor_arcana_swords_4.png" },
    { name: "������ ������", image: "deck/minor_arcana_swords_5.png" },
    { name: "�������� ������", image: "deck/minor_arcana_swords_6.png" },
    { name: "������� ������", image: "deck/minor_arcana_swords_7.png" },
    { name: "������ ������", image: "deck/minor_arcana_swords_8.png" },
    { name: "������� ������", image: "deck/minor_arcana_swords_9.png" },
    { name: "������� ������", image: "deck/minor_arcana_swords_10.png" },
    { name: "��� �� ��������", image: "deck/minor_arcana_swords_page.png" },
    { name: "����� �� ��������", image: "deck/minor_arcana_swords_knight.png" },
    { name: "������� �� ��������", image: "deck/minor_arcana_swords_queen.png" },
    { name: "���� �� ��������", image: "deck/minor_arcana_swords_king.png" },

    { name: "��� ��������", image: "deck/minor_arcana_pentacles_ace.png" },
    { name: "������ ��������", image: "deck/minor_arcana_pentacles_2.png" },
    { name: "������ ��������", image: "deck/minor_arcana_pentacles_3.png" },
    { name: "�������� ��������", image: "deck/minor_arcana_pentacles_4.png" },
    { name: "������ ��������", image: "deck/minor_arcana_pentacles_5.png" },
    { name: "�������� ��������", image: "deck/minor_arcana_pentacles_6.png" },
    { name: "������� ��������", image: "deck/minor_arcana_pentacles_7.png" },
    { name: "������ ��������", image: "deck/minor_arcana_pentacles_8.png" },
    { name: "������� ��������", image: "deck/minor_arcana_pentacles_9.png" },
    { name: "������� ��������", image: "deck/minor_arcana_pentacles_10.png" },
    { name: "��� �� ����������", image: "deck/minor_arcana_pentacles_page.png" },
    { name: "����� �� ����������", image: "deck/minor_arcana_pentacles_knight.png" },
    { name: "������� �� ����������", image: "deck/minor_arcana_pentacles_queen.png" },
    { name: "���� �� ����������", image: "deck/minor_arcana_pentacles_king.png" }
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
