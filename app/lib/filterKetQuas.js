function intersect(A = [], B = []) {
  let inter = false;
  A.forEach((a) => {
    B.forEach((b) => {
      if (a.id == b.id) inter = true;
    });
  });
  return inter;
}
function filter(a, b) {
  return a.chinhTinh.length < b.chinhTinh.length
    ? 1
    : a.chinhTinh.length + a.phuTinh.length <
      b.chinhTinh.length + b.phuTinh.length
    ? 1
    : a.chinhTinh.length + a.phuTinh.length ==
      b.chinhTinh.length + b.phuTinh.length
    ? a.chinhTinh.length < b.chinhTinh.length
      ? 1
      : -1
    : -1;
}
const filterLoiGiais = (data) => {
  let loiGiaisSource = data.slice();
  loiGiaisSource.sort(filter);
  let existChinhTinhs = [];
  let existPhuTinhs = [];
  let loiGiais = [];
  loiGiaisSource.map((loiGiai) => {
    let available = false;

    // Neu loi giai cho chinh tinh, dua chinh tinh vao danh sach ton tai
    if (
      loiGiai.chinhTinh.length &&
      !intersect(loiGiai.chinhTinh, existChinhTinhs)
    ) {
      available = true;
      existChinhTinhs = existChinhTinhs.concat(loiGiai.chinhTinh);
    }

    // Neu loi giai co phu tinh, kiem tra lap sau do dua phu tinh vao danh sach ton tai
    if (loiGiai.phuTinh.length && !intersect(loiGiai.phuTinh, existPhuTinhs)) {
      available = true;
      existPhuTinhs = existPhuTinhs.concat(loiGiai.phuTinh);
    }

    // Neu loi giai hop le, co chinh tinh hoac phu tinh chua duoc giai
    if (available) {
      loiGiais.push(loiGiai);
    }
  });
  return loiGiais;
};
const filterKetQuas = (allKetQuas) => {
  if (!allKetQuas) return false;
  let ketQuas = [];
  //
  allKetQuas.map((ketQua) => {
    ketQuas.push({
      id: ketQua.id,
      cung: ketQua.cung,
      loiGiais: filterLoiGiais(ketQua.loiGiais),
    });
  });
  //
  return ketQuas;
};
export { filterLoiGiais };
export default filterKetQuas;
