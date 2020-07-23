var jimp = require("jimp"); //to import the jimp library 

//the read function in order to open the image file in jpg.
//the read function specifies the err variable and the actual image file.

jimp.read("pic.jpg", (err, photo) => {
    //After that we are checking the result of the method if any kind of error takes place then we simply throwing that error.
    if (err) throw err;

    photo
    
        .convolute([
            [-2, -1, 0],
            [-1, 1, 1],
            [0, 1, 2]
        ]) //Sum neighbor pixels weighted by the kernel matrix. 
        .write("modified image 0.jpg")

        .resize(256, 256) //to resize the image into 256 * 256 px
        .quality(60) // set JPEG quality
        .write("modified image 1.jpg")

        .brightness(0.5) // adjust the brightness by a value -1 to +1
        .write("modified image 2.jpg")

        .normalize() // normalize the channels in an image divide each pixel by 255
        .write("modified image 3.jpg")

        .dither565() //dithering of the image and reduce color space to 16-bits (24bit of each pixel initial)
        .write("modified image 4.jpg")

        .greyscale() // remove colour from the image
        .write("modified image 5.jpg")

        // .gaussian(10)
        // .blur(10) // fast blur the image by r pixels.
        .color([{
            apply: 'xor', //Treats the two colors as bit fields and applies an XOR operation to the red, green, and blue components
            params: ['#06D']
        }])

        .posterize(50) // apply a posterization effect with n level as the n increases its effect decreases.
        .write("modified image 6.jpg")



    console.log("Image is completely processed.")

})