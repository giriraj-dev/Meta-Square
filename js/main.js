//smooth scrolling

$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});

// $("#navbar a, .btn").on("click", function (event) {
//   if (this.hash !== "") {
//     event.preventDefault();

//     const hash = this.hash;
//     console.log("Hash:", hash); // Debugging line

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top - 100,
//       },
//       800,
//       function () {
//         // Callback function after animation completes
//         window.location.hash = hash; // Optional: To update the URL hash
//         console.log("Scrolling complete"); // Debugging line
//       }
//     );
//   }
// });
