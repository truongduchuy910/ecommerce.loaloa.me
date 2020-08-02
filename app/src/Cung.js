// export default function Cung({ cung }) {
//     var leftSao = 
//     cung.cungSao.slice(0 ,cung.cungSao.length / 2); 
//     var rightSao =
//     cung.cungSao.slice(cung.cungSao.length / 2);
//    return cung? (
//     <div
//     class="d-flex flex-column p-2 {cung.bgColor}"
//     style="border: 1px solid #c0c0c0; height: 300px;"
//   >
//     <section>
//       <div class="text-center">
//         <div class="d-flex justify-content-between">
//           <label class="m-0 p-0">{cung.cungTen}</label
//           ><label class="text-uppercase"
//             >{cung.cungChu} {cung.cungThan?<span
//                 class="badge badge-danger ml-2"
//                 >Thân</span
//               >:null}</label>
//               <label>{cung.cungDaiHan}</label>
//         </div>
//         {
//         cung.cungSao.map(sao => { if (sao.saoLoai == 1) {
//         <h6 class="{sao.cssSao}">
//           {sao.saoTen} ({sao.saoDacTinh})
//         </h6>
//         {cung.cungTen}
//         }})
//         }
//       </div>
//     </section>
//     <section>
//       <div class="d-flex justify-content-between">
//         <div class="text-left">
//           {leftSao.map(sao =>
//           {  sao.saoLoai != 1&&sao.vongTrangSinh == 0?
//           <label class="d-block {sao.cssSao} p-0 m-0"
//             >{sao.saoTen} {sao.saoDacTinh?sao.saoDacTinh:null}
//           </label>
//           :trangSinh = sao})}
//         </div>
//         <div class="text-left">
//           {rightSao.map(sao => { if ( sao.saoLoai != 1 &&sao.vongTrangSinh ==
//           0) { }
//           <label class="d-block {sao.cssSao} m-0 p-0"
//             >{sao.saoTen} {if (sao.saoDacTinh) {} ({sao.saoDacTinh}) {}}
//           </label>
//           {}else {trangSinh = sao}})}
//         </div>
//       </div>
//     </section>
  
//     <section>
//       { if (cung.trietLo == true) { }<span class="badge badge-dark">Triệt</span>
//       {}} { if (cung.tuanTrung== true) { }<span class="badge badge-dark"
//         >Tuần</span
//       >
//       {}}
//     </section>
//     <section class="mt-auto">
//       <div class="text-center d-flex justify-content-between ">
//         <label>{ cung.cungTieuHan }</label
//         ><label class="{trangSinh.cssSao}">{trangSinh.saoTen}</label
//         ><label>{cung.cungAmDuong == 1? "+":"-"}{cung.hanhCung}</label>
//       </div>
//     </section>
//   </div>
//   ):<></>;
// }
