import { Menu } from "../models/Menu.js";
import { MonAn } from "../models/MonAn.js";

// Bai 1
let menu = new Menu();
document.querySelector(".btnBai1").onclick = function () {
    let monAn = new MonAn();
    let arrInput = document.querySelectorAll("#maMonAn,#tenMonAn,#giaTien,#linkAnh");
    console.log(arrInput);
    for (let input of arrInput) {
        let { id, value } = input;
        monAn[id] = value;
    }
    console.log('monAn', monAn);
    menu.themMonAn(monAn);
    menu.renderMonAn();
}

window.xoaMonAn = (maMonClick) => {
    menu.xoaMonAn(maMonClick);
    menu.renderMonAn();
}

// Bài 2

var arrMonAn = [
    { maMonAn: 1, tenMonAn: 'Nước lẩu haidilao', giaTien: 100, count: 0 },
    { maMonAn: 2, tenMonAn: 'Mì cay thành đô', giaTien: 200, count: 0 },
    { maMonAn: 3, tenMonAn: 'Mực bạch ngọc', giaTien: 300, count: 0 },
]

// Thêm món
document.querySelector(".btnadd").onclick = function add() {
    for (let item of arrMonAn) {
        if (item == arrMonAn[0]) {
            item.count++;
            renderUI();
            break
        }
    }
}
document.querySelector(".btnadd2").onclick = function add() {
    for (let item of arrMonAn) {
        if (item == arrMonAn[1]) {
            item.count++;
            renderUI();
            break
        }
    }
}
document.querySelector(".btnadd3").onclick = function add() {
    for (let item of arrMonAn) {
        if (item == arrMonAn[2]) {
            item.count++;
            renderUI();
            break
        }
    }
}
// Giảm món
document.querySelector(".btnminus").onclick = function minus() {
    for (let item of arrMonAn) {
        if (item == arrMonAn[0]) {
            item.count--;
            renderUI();
            break
        }
    }
}

document.querySelector(".btnminus2").onclick = function minus() {
    for (let item of arrMonAn) {
        if (item == arrMonAn[1]) {
            item.count--;
            renderUI();
            break
        }
    }
}

document.querySelector(".btnminus3").onclick = function minus() {
    for (let item of arrMonAn) {
        console.log(item)
        console.log(item.count);
        console.log(arrMonAn[2])
        if (item == arrMonAn[2]) {
            item.count--;
            renderUI();
            break
        }
    }
}
// Render bài 2
function renderUI() {
    let subtotal = 0;
    arrMonAn.forEach(item => {
        subtotal += item.count * item.giaTien
    })
    const total = subtotal;
    let htmlbai2 = arrMonAn.map(item => `
    <tr>
        <td>${item.maMonAn}</td>
        <td>${item.tenMonAn}</td>
        <td>${item.count}</td>
        <td>${item.giaTien}</td>
    </tr>
    `
    )

    document.querySelector("#tblHoaDon").innerHTML = htmlbai2
    document.querySelector("#ketQua2").innerHTML = total
}

renderUI();

