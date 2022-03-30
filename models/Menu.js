import { MonAn } from "./MonAn.js";
export class Menu {
  danhSachMonAn = [];
  constructor() {

  }
  themMonAn = (monAn) => {
    this.danhSachMonAn.push(monAn);
    return this.danhSachMonAn;
  }
  xoaMonAn = (maMonAn) => {
    this.danhSachMonAn = this.danhSachMonAn.filter(monAn => monAn.maMonAn !== maMonAn);
    return this.danhSachMonAn;
  }

  renderMonAn = () => {
    let htmls = '';
    console.log(this.danhSachMonAn);
    for (let monAnStore of this.danhSachMonAn) {
      let monAn = new MonAn(); //{maMon:'',tenMon:'',tinhGiaKhuyenMai: f() {}}
      monAn = { ...monAn, ...monAnStore }
      htmls += `
          <tr>
              <td>${monAn.maMonAn}</td>
              <td>${monAn.tenMonAn}</td>
              <td>${monAn.giaTien}</td>
              <td>
                <img src="${monAn.linkAnh}" alt="..." width="w-25" height="50"  />
                <button onclick= "xoaMonAn('${monAn.maMonAn}')"  class="btn btn-danger">Xoá</button>        
              </td>
          </tr>
      `
    }
    document.querySelector(".tblDanhMucMonAn").innerHTML = htmls;
  }
}

