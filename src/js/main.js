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

tariffBoxBtn.addEventListener("click", moveTable());

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
ymaps.ready(init);
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
