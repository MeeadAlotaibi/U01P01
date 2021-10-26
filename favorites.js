const arr = JSON.parse(localStorage.getItem("arr"));

const favArr = arr.filter((item) => {
  return item.isFav == true;
});

console.log(favArr);
