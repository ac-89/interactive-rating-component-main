let ratings = document.querySelectorAll(".btn");

for (let i = 0; i < ratings.length; i++) {
  ratings[i].addEventListener("click", function (e) {
    e.preventDefault();

    let value = ratings[i].dataset.value;
    console.log(value);
  });
}
