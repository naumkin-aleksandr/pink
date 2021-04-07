import iconMap from "../img/map-marker.png";

// btn-menu
const btnMenu = document.querySelector("#btn-menu"),
    headerBox = document.querySelector(".header__box"),
    headerNav = document.querySelector(".header__nav");

if (btnMenu) {
    btnMenu.addEventListener("click", openMenu);
}

function openMenu() {
    btnMenu.classList.toggle("header__btn-menu-close");
    headerBox.classList.toggle("header__box_active");
    headerNav.classList.toggle("header__nav_active");
}

// tariff btn

const tariffBoxBtn = document.querySelector("#tariff-box-btn"),
    tariffTable = document.querySelector("#tariff-table");

if (tariffBoxBtn) {
    tariffBoxBtn.addEventListener("click", moveTable());
}

function moveTable() {
    let navPointCurrent = document.querySelector("[data-tariff-btn='2']");

    return function (event) {
        const target = event.target;

        if (target.hasAttribute("data-tariff-btn")) {
            const numbtn = target.getAttribute("data-tariff-btn");

            if (navPointCurrent) {
                navPointCurrent.classList.remove("nav-point_current");
            }

            switch (numbtn) {
                case "1":
                    navPointCurrent = target;
                    navPointCurrent.classList.toggle("nav-point_current");
                    tariffTable.style.left = "0";
                    break;
                case "2":
                    navPointCurrent = target;
                    navPointCurrent.classList.toggle("nav-point_current");
                    tariffTable.style.left = "-280px";
                    break;
                case "3":
                    navPointCurrent = target;
                    navPointCurrent.classList.toggle("nav-point_current");
                    tariffTable.style.left = "-560px";
                    break;
            }
        }
    };
}

// map

if (document.querySelector("#map")) {
    ymaps.ready(init);
}

function init() {
    const myMap = new ymaps.Map("map", {
        center: [59.93919, 30.32311],
        controls: ["zoomControl"],
        zoom: 15,
    });

    const myPlacemark = new ymaps.Placemark(
        [59.938635, 30.323118],
        {},
        {
            iconLayout: "default#image",
            iconImageHref: iconMap,
            iconImageSize: [36, 36],
        }
    );

    myMap.geoObjects.add(myPlacemark);
}

// modal window form contest
const btnFormContest = document.querySelector("#btn-form-contest");
const emailInput = document.querySelector("#input-email");
const nameInput = document.querySelector("#input-name");
const surnameInput = document.querySelector("#input-surname");
const sentMessage = document.querySelector("#sent-message");
const errorMessage = document.querySelector("#error-message");

btnFormContest.addEventListener("click", showModalWindow);
sentMessage.addEventListener("click", closeModalWindow.bind(null, sentMessage));
errorMessage.addEventListener(
    "click",
    closeModalWindow.bind(null, errorMessage)
);

removeErrorInput(emailInput, nameInput, surnameInput);

function showModalWindow(event) {
    event.preventDefault();

    if (checkEnteredData(emailInput, nameInput, surnameInput)) {
        sentMessage.style.display = "block";
    } else {
        errorMessage.style.display = "block";
        showErrorInput(emailInput, nameInput, surnameInput);
    }
}

function closeModalWindow(elem) {
    elem.style.display = "none";
}

function checkEnteredData(...arrayElements) {
    return arrayElements.every((el) => el.value.trim().length > 0);
}

function showErrorInput(...arrayElements) {
    arrayElements
        .filter((el) => el.value.trim().length === 0)
        .map((el) => el.classList.add("form-contest__input-text_error"));
}

function removeErrorInput(...arrayElements) {
    arrayElements.map((el) =>
        el.addEventListener("focus", () => {
            el.classList.remove("form-contest__input-text_error");
        })
    );
}
