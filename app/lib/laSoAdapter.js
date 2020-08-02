export { layCung, layCungVi, layChinhTinhs, layPhuTinhs };
function layPhuTinhs({ allPhuTinhs, cung }) {
  let PT = [];
  allPhuTinhs.forEach((phuTinh) => {
    cung.cungSao.forEach((sao) => {
      if (
        sao.saoTen.toLowerCase() === phuTinh.name.toLowerCase() &&
        sao.saoLoai != 1
      ) {
        PT.push(phuTinh);
      }
    });
  });
  return { PT };
}
function layCung({ cung, thapNhiCung }) {
  // Lay ten cung dang xet
  let tenCungDangXet;
  tenCungDangXet = cung.name;
  if (cung.name.slice(0, 11) === "Đại Vận tại") {
    tenCungDangXet = cung.name.slice(12);
  }

  if (cung.name.slice(0, 12) === "Tiểu Hạn tại") {
    tenCungDangXet = cung.name.slice(13);
  }
  // tìm cung chính
  let viTriCungDangXet = 1;
  while (
    thapNhiCung[viTriCungDangXet].cungChu.toLowerCase() !==
      tenCungDangXet.toLowerCase() &&
    viTriCungDangXet < 12
  ) {
    viTriCungDangXet++;
  }
  // lay cung Dang Xet
  let DX = thapNhiCung[viTriCungDangXet];

  // tìm đồng cung xung chiếu nằm ở cung số nào ?
  let viTriT1 =
    viTriCungDangXet + 4 > 12
      ? viTriCungDangXet + 4 - 12
      : viTriCungDangXet + 4;
  let viTriT2 =
    viTriCungDangXet + 8 > 12
      ? viTriCungDangXet + 8 - 12
      : viTriCungDangXet + 8;

  let viTriXC =
    viTriCungDangXet + 6 > 12
      ? viTriCungDangXet + 6 - 12
      : viTriCungDangXet + 6;

  // lấy sao cuả các cung xung chiếu tam hợp
  let T1 = thapNhiCung[viTriT1];
  let T2 = thapNhiCung[viTriT2];
  let XC = thapNhiCung[viTriXC];
  return { DX, T1, T2, XC };
}
function layCungVi({ allCungVis, cung }) {
  let CV;
  allCungVis.forEach((cungVi) => {
    if (cung.cungTen.toLowerCase() === cungVi.name.toLowerCase()) {
      CV = cungVi;
    }
  });
  return { CV };
}
function layChinhTinhs({ allChinhTinhs, cung }) {
  //Lay danh sach chinh tinh
  let CT = [];
  allChinhTinhs.forEach((chinhTinh) => {
    cung.cungSao.forEach((sao) => {
      if (sao.saoLoai == 1) {
        if (sao.saoTen.toLowerCase() === chinhTinh.name.toLowerCase()) {
          CT.push(chinhTinh);
        }
      }
    });
  });
  return { CT };
}

function Sao(
  saoID,
  saoTen,
  saoNguHanh,
  saoLoai = 2,
  saoPhuongVi = "",
  saoAmDuong = "",
  vongTrangSinh = 0,
  tenKhac
) {
  return {
    saoID,
    saoTen,
    saoNguHanh,
    saoLoai,
    saoPhuongVi,
    saoAmDuong,
    vongTrangSinh,
    tenKhac,
  };
}
const saos = [
  Sao(0, "-", "-", 0, "-", 1, 0, ""),
  Sao(1, "Tử vi", "O", 1, "Đế tinh", 1, 0, ""),
  Sao(2, "Liêm trinh", "H", 1, "Bắc đẩu tinh", 1, 0, ""),
  Sao(3, "Thiên đồng", "T", 1, "Bắc đẩu tinh", 1, 0, ""),
  Sao(4, "Vũ khúc", "K", 1, "Bắc đẩu tinh", -1, 0, ""),
  Sao(5, "Thái Dương", "H", 1, "Nam đẩu tinh", 1, 0, ""),
  Sao(6, "Thiên cơ", "M", 1, "Nam đẩu tinh", -1, 0, ""),
  Sao(7, "Thiên phủ", "O", 1, "Nam đẩu tinh", 1, 0, ""),
  Sao(8, "Thái âm", "T", 1, "Bắc đẩu tinh", -1, 0, ""),
  Sao(9, "Tham lang", "T", 1, "Bắc đẩu tinh", -1, 0, ""),
  Sao(10, "Cự môn", "T", 1, "Bắc đẩu tinh", -1, 0, ""),
  Sao(11, "Thiên tướng", "T", 1, "Nam đẩu tinh", 1, 0, ""),
  Sao(12, "Thiên lương", "M", 1, "Nam đẩu tinh", -1, 0, ""),
  Sao(13, "Thất sát", "K", 1, "Nam đẩu tinh", 1, 0, ""),
  Sao(14, "Phá quân", "T", 1, "Bắc đẩu tinh", -1, 0, ""),
  Sao(15, "Thái tuế", "H", 15, "", 0, ""),
  Sao(16, "Thiếu dương", "H", 5, ""),
  Sao(17, "Tang môn", "M", 12, ""),
  Sao(18, "Thiếu âm", "T", 5, ""),
  Sao(19, "Quan phù", "H", 12, ""),
  Sao(20, "Tử phù", "K", 12, ""),
  Sao(21, "Tuế phá", "H", 12, ""),
  Sao(22, "Long đức", "T", 5, ""),
  Sao(23, "Bạch hổ", "K", 12, ""),
  Sao(24, "Phúc đức", "O", 5, ""),
  Sao(25, "Điếu khách", "H", 12, ""),
  Sao(26, "Trực phù", "K", 16, ""),
  Sao(27, "Lộc tồn", "O", 3, "Bắc đẩu tinh", ""),
  Sao(28, "Lực sĩ", "H", 2, ""),
  Sao(29, "Thanh long", "T", 5, ""),
  Sao(30, "Tiểu hao", "H", 12, ""),
  Sao(31, "Tướng quân", "M", 4, ""),
  Sao(32, "Tấu thư", "K", 3, ""),
  Sao(33, "Phi liêm", "H", 2, ""),
  Sao(34, "Hỷ thần", "H", 5, ""),
  Sao(35, "Bệnh phù", "O", 12, ""),
  Sao(36, "Đại hao", "H", 12, ""),
  Sao(37, "Phục binh", "H", 13, ""),
  Sao(38, "Quan phù", "H", 12, ""),
  Sao(39, "Tràng sinh", "T", 5, 1, ""),
  Sao(40, "Mộc dục", "T", 14, 1, ""),
  Sao(41, "Quan đới", "K", 4, 1, ""),
  Sao(42, "Lâm quan", "K", 7, 1, ""),
  Sao(43, "Đế vượng", "K", 5, 1, ""),
  Sao(44, "Suy", "T", 12, 1, ""),
  Sao(45, "Bệnh", "H", 12, 1, ""),
  Sao(46, "Tử", "H", 12, 1, ""),
  Sao(47, "Mộ", "O", 1, ""),
  Sao(48, "Tuyệt", "O", 12, 1, ""),
  Sao(49, "Thai", "O", 14, 1, ""),
  Sao(50, "Dưỡng", "M", 2, 1, ""),
  Sao(51, "Đà la", "K", 11, ""),
  Sao(52, "Kình dương", "K", 11, ""),
  Sao(53, "Địa không", "H", 11, ""),
  Sao(54, "Địa kiếp", "H", 11, ""),
  Sao(55, "Linh tinh", "H", 11, ""),
  Sao(56, "Hỏa tinh", "H", 11, ""),
  Sao(57, "Văn xương", "K", 6, ""),
  Sao(58, "Văn Khúc", "T", 6, ""),
  Sao(59, "Thiên khôi", "H", 6, ""),
  Sao(60, "Thiên việt", "H", 6, ""),
  Sao(61, "Tả phù", "O", 2, ""),
  Sao(62, "Hữu bật", "O", 2, ""),
  Sao(63, "Long trì", "T", 3, ""),
  Sao(64, "Phượng các", "O", 3, ""),
  Sao(65, "Tam thai", "M", 7, ""),
  Sao(66, "Bát tọa", "T", 7, ""),
  Sao(67, "Ân quang", "M", 3, ""),
  Sao(68, "Thiên quý", "O", 3, ""),
  Sao(69, "Thiên khốc", "T", 12, ""),
  Sao(70, "Thiên hư", "T", 12, ""),
  Sao(71, "Thiên đức", "H", 5, ""),
  Sao(72, "Nguyệt đức", "H", 5, ""),
  Sao(73, "Thiên hình", "H", 15, ""),
  Sao(74, "Thiên riê", "T", 13, ""),
  Sao(75, "Thiên y", "T", 5, ""),
  Sao(76, "Quốc ấn", "O", 6, ""),
  Sao(77, "Đường phù", "M", 4, ""),
  Sao(78, "Đào hoa", "M", 8, ""),
  Sao(79, "Hồng loan", "T", 8, ""),
  Sao(80, "Thiên hỷ", "T", 5, ""),
  Sao(81, "Thiên giải", "H", 5, ""),
  Sao(82, "Địa giải", "O", 5, ""),
  Sao(83, "Giải thần", "M", 5, ""),
  Sao(84, "Thai phụ", "K", 6, ""),
  Sao(85, "Phong cáo", "O", 4, ""),
  Sao(86, "Thiên tài", "O", 2, ""),
  Sao(87, "Thiên thọ", "O", 5, ""),
  Sao(88, "Thiên thương", "O", 12, ""),
  Sao(89, "Thiên sứ", "T", 12, ""),
  Sao(90, "Thiên la", "O", 12, ""),
  Sao(91, "Địa võng", "O", 12, ""),
  Sao(92, "Hóa khoa", "T", 5, ""),
  Sao(93, "Hóa quyền", "T", 4, ""),
  Sao(94, "Hóa lộc", "M", 3, ""),
  Sao(95, "Hóa kỵ", "T", 13, ""),
  Sao(96, "Cô thần", "O", 13, ""),
  Sao(97, "Quả tú", "O", 13, ""),
  Sao(98, "Thiên mã", "H", 3, ""),
  Sao(99, "Phá toái", "H", 12, ""),
  Sao(100, "Thiên quan", "H", 5, ""),
  Sao(101, "Thiên phúc", "H", 5, ""),
  Sao(102, "Lưu hà", "T", 12, ""),
  Sao(103, "Thiên trù", "O", 5, ""),
  Sao(104, "Kiếp sát", "H", 11, ""),
  Sao(105, "Hoa cái", "K", 14, ""),
  Sao(106, "Văn tinh", "H", 6, ""),
  Sao(107, "Đẩu quân", "H", 5, ""),
  Sao(108, "Thiên không", "T", 11, ""),
  Sao(109, "Bác sỹ", "T", 5, ""),
];
