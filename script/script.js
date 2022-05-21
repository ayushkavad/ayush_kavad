const container = document.querySelector("body");
const changeMode = document.querySelector(".btn");
const info = document.querySelector(".nav__info");
const links = document.querySelectorAll(".nav__link");
const icon = document.querySelectorAll(".icon__color");
const newImg = document.getElementById("newImg");
const image = document.getElementById("myImage");
const section__information = document.querySelector(".section__information");
const section__title = document.querySelectorAll(".section__title");
const footer = document.querySelector(".footer");

const $change_Mode = () => {
  container.classList.toggle("dark__mode");
  info.classList.toggle("light__info");
  section__information.classList.toggle("light__info");
};

changeMode.addEventListener("click", () => {
  if (image.src.match("sun") && newImg.src.match("img")) {
    $change_Mode();
    image.src = "./img/moon.png";
    newImg.src = "./img/img.svg";
  } else {
    $change_Mode();
    image.src = "./img/sun.png";
    newImg.src = "./img/hello.png";
  }
});

for (let i = 0; i < links.length; i++) {
  changeMode.addEventListener("click", (e) => {
    e.preventDefault();
    links[i].classList.toggle("light__links");
  });
}

for (let i = 0; i < icon.length; i++) {
  changeMode.addEventListener("click", (e) => {
    e.preventDefault();
    icon[i].classList.toggle("light__icons");
  });
}

for (let i = 0; i < section__title.length; i++) {
  changeMode.addEventListener("click", (e) => {
    e.preventDefault();
    section__title[i].classList.toggle("light__info");
  });
}

const date = new Date();
const year = date.getFullYear();

const footer__html = `<p class="footer__text">© ${year} by Ayush kavad. All rights reserved.</p>`;

const footer__icon = `<div class="footer__icon">
                        <a href="https://instagram.com/ayushkavad" class="icon__color">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-instagram h-5 w-5" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
                                </path>
                            </svg>
                        </a>


                        <a href="https://github.com/ayushkavad" class="icon__color">
                            <svg id="SvgjsSvg1001" width="30" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1"
                                xmlns:xlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs">
                                <defs id="SvgjsDefs1002"></defs>
                                <g id="SvgjsG1008" transform="matrix(1,0,0,1,0,0)">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" width="30"
                                        height="30">
                                        <path
                                            d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"
                                            fill="currentColor" class="color000 svgShape">
                                        </path>
                                    </svg>
                                </g>
                            </svg>
                        </a>


                        <a href="https://linkedin.com/in/ayushkavad" class="icon__color">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                class="bi bi-linkedin h-5 w-5" viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z">
                                </path>
                            </svg>
                        </a>
                        </div>`;

footer.insertAdjacentHTML("afterbegin", footer__html);
footer.insertAdjacentHTML("afterbegin", footer__icon);
