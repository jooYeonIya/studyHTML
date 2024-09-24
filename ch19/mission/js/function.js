function showImage(flag, imageName) {
    let image = document.getElementById(imageName);
    
    if (flag) {
        image.src=`images/${imageName}`;
    } else {
        image.src = "";
    }
}