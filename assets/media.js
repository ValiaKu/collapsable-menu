/**** Initiate Media container and Click area *****/
const mediaBox = document.getElementById("media");

/**** Open video logic  *****/
openVideo = () => {
  mediaBox.classList.toggle("is-flipped");
};

/**** Event triggered by click on Image box  *****/
if (mediaBox) {
  mediaBox.addEventListener("click", openVideo);
}
