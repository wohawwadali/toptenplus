var images = [], 
index = 0;

images[0] = "<a target='_blank' href = 'https://iandr.ir/products/men-shoes'><img src='https://i.postimg.cc/gJdJV7bk/image.jpg' alt=''></a>";
images[1] = "<a target='_blank' href = 'https://iandr.ir/products/analogue-watch'><img src='https://i.postimg.cc/Z54vF0Ph/image.jpg' alt=''></a>";
images[2] = "<a target='_blank' href = 'https://iandr.ir/products/men-sweatshirts-hoodies'><img src='https://i.postimg.cc/gJSH18DR/image.jpg' alt=''></a>";
images[3] = "<a target='_blank' href = 'https://iandr.ir/products/women-shoes'><img src='https://i.postimg.cc/9FT3GYCr/image.jpg' alt=''></a>";
images[4] = "<a target='_blank' href = 'https://iandr.ir/products/digital-accessories'><img src='https://i.postimg.cc/448B7kpP/image.jpg' alt=''></a>";
images[5] = "<a target='_blank' href = 'https://iandr.ir/products/men-warm-jacket'><img src='https://i.postimg.cc/LX9GSkM8/image.jpg' alt=''></a>";
images[6] = "<a target='_blank' href = 'https://iandr.ir/products/men-boots'><img src='https://i.postimg.cc/N0dv5CDH/image.jpg' alt=''></a>";
images[7] = "<a target='_blank' href = 'https://iandr.ir/products/men-knitwear'><img src='https://i.postimg.cc/25yBt6HL/image.jpg' alt=''></a>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);