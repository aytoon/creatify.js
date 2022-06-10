function creatify(options) {
    let imageInput = document.querySelectorAll(".creatify")

 if(options.shadowType === "cornerShadow")
        options.shadowType = `0px`
    else
        options.shadowType = `15px`

    imageInput.forEach(image => {
            image.style.boxShadow = `10px 10px ${options.shadowType} 1px rgba(0,0,0,0.12)`;
    })
}