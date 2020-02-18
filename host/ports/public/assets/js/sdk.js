// XIN CHAO
const gobackBtn = document.getElementById("go-back");
if (gobackBtn)
  gobackBtn.onclick = () => {
    window.history.back();
  };
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
function searchToObject() {
  let pairs = window.location.search.substring(1).split("&"),
    obj = {},
    pair,
    i;
  for (i in pairs) {
    if (pairs[i] === "") continue;
    pair = pairs[i].split("=");
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return obj;
}
function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
          Math.abs(amount - i)
            .toFixed(decimalCount)
            .slice(2)
        : "")
    );
  } catch (e) {
    console.log(e);
  }
}

$(document).ready(function() {
  console.log("RUN SDK");
  const uri = "http://localhost:6006";
  const port = "7000";
  const productImage = "duong-dan-hinh-anh";
  const bannerImage = "assets/img/scenery/image3.jpg";
  async function request(query) {
    const response = await fetch(uri + "/admin/api", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({ query: query })
    });
    return await response.json();
  }

  /* 
	PRODUCT 
	For main products filter by brands or categories
*/

  let products = $("#products-main");
  let presentFilter = $("#present-filter");
  if (presentFilter) presentFilter.text("");
  let productsItem;
  if (products.length) {
    productsItem = products.html();
    products.empty();
  }
  function replateProducts({ allProducts }) {
    if (allProducts) {
      console.log(allProducts);
      allProducts.map(p => {
        if (p.images.length)
          products.append(
            productsItem
              .replace(productImage, uri + p.images[0].file.publicUrl)
              .replace(/san-pham/g, p.name)
              .replace(/duong-dan/g, "/detail/" + p.url)
              .replace(/gia/g, formatMoney(Number(p.price), 0))
          );
      });
    } else {
      products.append("<p>Không có kết quả</p>");
    }
  }
  function productsWithBrand(brand) {
    products.empty();
    products.append("<p>Đang tải...</p>");
    request(`query {
		allProducts(where: {brand: {name: "${brand}"}
		, AND: {seller:{port:"${port}"}}}) {
      images {
        file {
          publicUrl
        }
      }
      name
      price
      url	
		}
	}`).then(res => {
      products.empty();
      const { allProducts } = res.data;
      replateProducts({ allProducts });
      if (presentFilter) presentFilter[0].innerText = brand;
    });
  }

  function productsWithCategory(category) {
    products.empty();
    products.append("<p>Đang tải...</p>");
    request(`query {
		allProducts(where: {category: {name: "${category}"}
		, AND: {seller:{port:"${port}"}}}) {
      images {
        file {
          publicUrl
        }
      }
      name
      price
      url
    }
	}`).then(res => {
      products.empty();
      const { allProducts } = res.data;
      replateProducts({ allProducts });
      if (presentFilter) presentFilter.text(category);
    });
  }
  let req = searchToObject();
  if (req.category) productsWithCategory(req.category);
  if (req.brand) productsWithBrand(req.brand);
  /* 
	RELATED PRODUCT 
	For main products filter by brands or categories
*/

  function showProducts({ allProducts, box, item }) {
    if (box.length) {
      if (allProducts) {
        allProducts.map(p => {
          box.append(
            item
              .replace(/duong-dan-hinh-anh/g, uri + p.images[0].file.publicUrl)
              .replace(/san-pham/g, p.name)
              .replace(/duong-dan/g, "/detail/" + p.url)
              .replace(/gia/g, formatMoney(Number(p.price), 0))
          );
        });
      } else {
        box.append("<p>Không có kết quả</p>");
      }
    }
  }
  let newProducts = $("#new-products");
  if (newProducts.length) {
    let item = newProducts.html();
    newProducts.empty();
    newProducts.append("<p>Đang tải...</p>");
    request(`query {
      allProducts(first: 6, where: { suggestions: new,
      , AND: {seller:{port:"${port}"}}}) {
        name
        price
        images {
          file {
            publicUrl
          }
        }
        url
      }
    }`).then(res => {
      newProducts.empty();
      const { allProducts } = res.data;
      showProducts({ allProducts: allProducts, box: newProducts, item: item });
    });
  }
  let bestSeller = $("#bestSeller-products");
  if (bestSeller.length) {
    let item = bestSeller.html();
    bestSeller.empty();
    bestSeller.append("<p>Đang tải...</p>");
    request(`query {
      allProducts(first: 6, where: { suggestions: bestSeller,
      , AND: {seller:{port:"${port}"}}}) {
        name
        price
        images {
          file {
            publicUrl
          }
        }
        url
      }
    }`).then(res => {
      bestSeller.empty();
      const { allProducts } = res.data;
      showProducts({ allProducts: allProducts, box: bestSeller, item: item });
    });
  }

  /*
	SEARCH PRODUCT
	*/
  let searchProducts = $("#products-search");
  let searchProductsItem = searchProducts.html();
  searchProducts.empty();

  /*
	SEARCH INPUT
*/
  let searchInput = $("#input-search");
  searchInput.keyup(input => {
    let keyword = input.target.value;
    searchProducts.empty();
    if (searchProducts.length && keyword.length > 1)
      request(`query {
			allProducts(where: {name_contains_i: "${keyword}",
			, AND: {seller:{port:"${port}"}}}) {
      name,
      price,
      images {file{publicUrl}},
      url  }
    }`).then(res => {
        searchProducts.empty();
        res.data.allProducts.map(p => {
          searchProducts.append(
            searchProductsItem
              .replace(/duong-dan-hinh-anh/g, uri + p.images[0].file.publicUrl)
              .replace(/san-pham/g, p.name)
              .replace(/duong-dan/g, "/detail/" + p.url)
              .replace(/gia/g, formatMoney(Number(p.price), 0))
          );
        });
      });
  });
});
