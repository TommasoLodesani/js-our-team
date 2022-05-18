// creo arrey con oggetto lavoratori

const myContainer = document.querySelector("div .team-container");

const arrayLavoratori = [

    {
        "nome": "Wayne Barnett",
        "ruolo": "Founder & CEO",
        "foto": "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome": "Angela Caroli",
        "ruolo": "Chief Editor",
        "foto": "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome": "Walter Gordon",
        "ruolo": "Office Manager",
        "foto": "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome": "Angela Lopez",
        "ruolo": "Social Media Manager",
        "foto": "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome": "Scott Estrada",
        "ruolo": "Developer",
        "foto": "img/scott-estrada-developer.jpg"
    },
    {
        "nome": "Barbara Ramos",
        "ruolo": "Graphic Designer",
        "foto": "img/barbara-ramos-graphic-designer.jpg"
    }
];

// console.log(arrayLavoratori);

for (let i = 0; i < arrayLavoratori.length; i++) {
    // console.log(arrayLavoratori[i]);

    let arrayElementoIesi = arrayLavoratori[i];

    // creo gli elementi



    const elementTeamCard = document.createElement("div");
    elementTeamCard.className = "team-card";
    console.log(elementTeamCard);

    const elementCardImage = document.createElement("div");
    elementCardImage.className = "card-image";
    console.log(elementCardImage);

    const elementImg = document.createElement("img");
    elementImg.src = arrayElementoIesi.foto;
    elementImg.alt = arrayElementoIesi.nome;
    console.log(elementImg);

    const elementCardText = document.createElement("div");
    elementCardText.className = "card-text";

    const elementName = document.createElement("h3");
    elementName.append(arrayElementoIesi.nome);
    console.log(elementName);


    const elementRuolo = document.createElement("p");
    elementRuolo.append(arrayElementoIesi.ruolo);
    console.log(elementRuolo);



    // appendo

    myContainer.append(elementTeamCard);
    elementTeamCard.append(elementCardImage);
    elementCardImage.append(elementImg);



    elementTeamCard.append(elementCardText);
    elementCardText.append(elementName);
    elementCardText.append(elementRuolo);


}

