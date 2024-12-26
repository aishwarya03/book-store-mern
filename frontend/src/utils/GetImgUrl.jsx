function GetImgUrl(name){
    return new URL(`../assets/books/${name}`, import.meta.url)
}

export default GetImgUrl