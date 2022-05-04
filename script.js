blah.src="profile.jpg"
imgInp.onchange = evt => {
  const [file] = imgInp.files
  if (file) {
    blah.src = URL.createObjectURL(file)
  }
}
document.getElementById("name").innerHTML = "Name:";