let arr = JSON.parse(localStorage.getItem("arr"));

let favArr = [];
///////////////////////////////////////////////////////////////// Render

const favRender = () => {
  $(".Content").html("");

  favArr = arr.filter((item) => item.isFav);

  favArr.forEach((item, i) => {
    $(".Content").append(`<div class="movie">
     <img src='${item.imageFile}'/>
     <p id='dec-${i}'>${item.name}</p>
     <button class="favBtnbtn-${i} btn btn-secondary btn-sm " ><span>&starf;</span > Add to Favorite</btutton>
     <button class="read-${i} btn btn-danger" > Read more</btutton>
   </div>`);

    $(".favBtnbtn-" + i).click(() => {
      isFavorite(item.id);
    });

    $(".read-" + i).click(() => showDescription(item));

    if (item.isFav) {
      $(".favBtnbtn-" + i).text("Remove from Favorite");
    }
    //localStorage.setItem("favBtnbtn-", JSON.stringify(arr[i])); /// LocalStorage
  });
};

favRender();

const isFavorite = (id) => {
  console.log(id);

  arr = arr.map((item) => {
    if (item.id === id) {
      return { ...item, isFav: !item.isFav };
    } else {
      return item;
    }
  });

  localStorage.setItem("arr", JSON.stringify(arr));
  favRender();
};

const modalContent = document.querySelector(".modalContent");
const closeBtn = document.querySelector(".close");

function showDescription(item) {
  modalContent.style.display = "block";
  modalContent.innerHTML = `<div class="modal-content">
          <span class="close">&times;</span>
          <h3 class="title">${item.name}</h3>
          <iframe src="${item.media}" title="description" class="video"></iframe>
          <p class="desc">${item.story}</p>
        </div>`;

  $(".close").click(() => (modalContent.style.display = "none"));
}
