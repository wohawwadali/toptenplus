var images = [], 
index = 0;

images[0] = "<a target='_blank' href = 'https://iandr.ir/products/men-sports-shoes'><img src='https://i.postimg.cc/D016bZ4g/image.jpg' alt=''></a>";
images[1] = "<a target='_blank' href = 'https://iandr.ir/products/digital-accessories'><img src='https://i.postimg.cc/Gh2JCqqK/image.jpg' alt=''></a>";
images[2] = "<a target='_blank' href = 'https://iandr.ir/products/matching-clothing-sets'><img src='https://i.postimg.cc/HsLSWQpY/image.jpg' alt=''></a>";
images[3] = "<a target='_blank' href = 'https://iandr.ir/cat/accessories'><img src='https://i.postimg.cc/P59VRPnt/image.jpg' alt=''></a>";
images[4] = "<a target='_blank' href = 'https://iandr.ir/products/analogue-watch'><img src='https://i.postimg.cc/fTPHgJY8/image.jpg' alt=''></a>";
images[5] = "<a target='_blank' href = 'https://iandr.ir/products/men-shirts'><img src='https://i.postimg.cc/nL9ynM8L/image.jpg' alt=''></a>";
images[6] = "<a target='_blank' href = 'https://iandr.ir/products/men-bags'><img src='https://i.postimg.cc/yNNQxchX/image.jpg' alt=''></a>";
images[7] = "<a target='_blank' href = 'https://iandr.ir/products/men-sets'><img src='https://i.postimg.cc/qM5dpBHF/image.jpg' alt=''></a>";
images[8] = "<a target='_blank' href = 'https://iandr.ir/products/women-bags'><img src='https://i.postimg.cc/x1yTGspQ/image.jpg' alt=''></a>";
images[9] = "<a target='_blank' href = 'https://iandr.ir/cat/women'><img src='https://i.postimg.cc/V64zM3d0/image.jpg' alt=''></a>";

index = Math.floor(Math.random() * images.length);
document.write(images[index]);