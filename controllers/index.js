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
    { maMonAn: 1, tenMonAn: 'Nước lẩu haidilao', giaTien: 100, count: 1 },
    { maMonAn: 2, tenMonAn: 'Mì cay thành đô', giaTien: 200, count: 1 },
    { maMonAn: 3, tenMonAn: 'Mực bạch ngọc', giaTien: 300, count: 1 },
]
// Cập nhật số lượng sản phẩm
function updateTotalItem() {
    let total = 0;
    for (let i = 0; i < arrMonAn.length; i++) {
        const p = arrMonAn[i];
        total += p.count;
    }
    return total;
}
// Thay đổi số lượng sản phẩm
function changeTotalProduct(maMonAn, e) {
    for (let i = 0; i < arrMonAn.length; i++) {
        if (arrMonAn[i].maMonAn == arrMonAn.maMonAn) {
            arrMonAn[i].count = Number(e.target.value);
        }
    }
    renderUI();
}


let productsEle = document.querySelector('#tblHoaDon');
function renderUI() {
    productsEle.innerHTML = '';
    for (let i = 0; i < arrMonAn.length; i++) {
        const p = arrMonAn[i];
        productsEle.innerHTML += `
            <tr>
                <td>${p.maMonAn}</td>
                <td>${p.tenMonAn}</td>
                <td><input  type="number"
                class="quantity w-25"
                step="1"
                value="${p.count}"
                onchange="changeTotalProduct(${p.maMonAn}, event)"></td>
                <td>${p.giaTien}</td>
            </tr>
         `
    }
    let countEle = document.querySelector('#quantity');
    countEle.innerText = `${updateTotalItem(arrMonAn)}`;
}
renderUI()

