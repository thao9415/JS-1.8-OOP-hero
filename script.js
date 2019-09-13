
function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    // khai báo thuộc tính của ảnh
    this.getHeroElement = function () {
        return '<img width="' + this.size + '" ' +
            ' height="' + this.size + '" ' +
            'src="' + this.image + '"' +
            'style="top: ' + this.top + 'px;left: ' + this.left + 'px ;position: absolute" />';
    };


    //hàm di chuyển trái, phải, lên, xuống
    this.moveRight = function () {
        this.left += this.speed;
        console.log('Right: ' + this.left);
    };
    this.moveDown = function () {
        this.top += this.speed;
        console.log('Down: ' + this.top);
    };
    this.moveUp = function () {
        this.top -= this.speed;
        console.log("Up: " + this.top)
    };
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log("Left: " + this.left);
    }
}


//gọi 1 đối tượng hero thuộc lớp Hero đã tạo ở trên
var hero = new Hero('gau.png', 0, 0, 400, 100); //tốc độ di chuyển 100, chú ý chỗ này


//Hàm xác định vị trí mà "hero" tại vị trí này sẽ đổi hướng di chuyển
//Xác định vị trí bằng cách xác định toạ độ left và top
function isAtTopLeft(object) {
    if (object.left == 0 && object.top == 0) {
        return true;
    }
}
//1 bước di chuyển của "hero" là 100, em đã ghi chú ý ở trên
//object.left==1200, object.top==0 có nghĩa là lúc này "hero" di chuyển sang
//bên tay phải đc 12 bước 12x100=1200 từ vị trí ban đầu toạ độ (0,0)
//tại vị trí này nó sẽ đổi hướng di chuyển.
function isAtTopRight(object) {
    if (object.left == 1200 && object.top == 0) {
        return true;
    }
}
//mấy phần này tương tự nha. 400=4 bước, vì sao di chuyển trái phải 12 bước, mà di chuyển lên xuống 4 bước
//đó là vì màn hình máy tính rộng dài khác nhau, em để vậy cho nó đỡ chạy ra ngoài màn hình, cái này ước lượng thôi.
function isAtBotRight(object) {
    if (object.left == 1200 && object.top == 400) {
        return true;
    }
}

function isAtBotLeft(object) {
    if (object.left == 0 && object.top == 400) {
        return true;
    }
}

let status = "topleft";

//tạo hàm "hero" đổi hướng di chuyển
function start() {
    //Nếu hero ở vị trí Top, Right thì biến status sẽ đc gán bằng "topright"
    //Những phần sau tương tự.
    if(isAtTopRight(hero)){
        status="topright";
    }
    if(isAtTopLeft(hero)){
        status="topleft";
    }
    if(isAtBotRight(hero)){
        status="botright";
    }
    if(isAtBotLeft(hero)){
        status="botleft";
    }

    //Bh sẽ kiểm tra cái biến status này, nếu nó ở vị trí Top,Left thì sẽ dùng hàm "hero" di chuyển sang trái
    //Anh vẽ ra tưởng tượng đc ngay.
    if (status == "topleft"){
        hero.moveRight()
    }
    if (status == "topright"){
        hero.moveDown();
    }
    if(status=="botright"){
        hero.moveLeft();
    }
    if(status=="botleft"){
        hero.moveUp();
    }

    document.getElementById("game").innerHTML = hero.getHeroElement();
    setTimeout(start, 500) //chỗ này có nghĩa là hàm này sẽ chạy sau bn giây ý. em chả nhớ 500 là bao nhiêu giây.
}

start();