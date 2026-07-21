const img = document.querySelector(".card img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

img.onclick = () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
};

modal.onclick = () => {
    modal.style.display = "none";
};