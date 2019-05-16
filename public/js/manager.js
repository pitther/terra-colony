class Manager{
    constructor(){
        this.scaleFactor = .2;
        this.map = {};
    }
    setMap(img){
        this.map.image = img;
        this.map.width = img.width * this.scaleFactor;
        this.map.height = img.height * this.scaleFactor;
        this.createBitmap();
    }
    createBitmap(){
        for (let i = 0; i < this.map.height; i++) {
            for (let j = 0; j < this.map.width; j++) {
                console.log(get(i,j));
            }
        }
    }
}

let MANAGER = new Manager();