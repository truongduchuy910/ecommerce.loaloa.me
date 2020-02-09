// XIN CHAO
//const uri = "http://192.168.97.253:6002";
$(document).ready(function() {
  console.log("RUN SDK");
  const uri = "";
  const productImage = "assets/img//minibus.jpeg";
  const bannerImage = "assets/img/scenery/image3.jpg";
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
  let req = searchToObject();
  function formatMoney(
    amount,
    decimalCount = 2,
    decimal = ".",
    thousands = ","
  ) {
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
  async function request(query) {
    const response = await fetch(uri + "admin/api", {
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
  let productsItem;
  if (products.length) {
    console.log(products);
    productsItem = products.html();
    products.empty();
    products.append("<p>Đang tải...</p>");
    request(`query {
		allProducts (first: 9) {
    name \n 
    price \n 
    image {publicUrl} \n 
    url  
		}
  }`).then(res => {
      products.empty();
      if (res.data.allProducts) {
        console.log(res.data.allProducts);
        res.data.allProducts.map(p => {
          if (p.image)
            products.append(
              productsItem
                .replace(productImage, uri + p.image.publicUrl)
                .replace(/san-pham/g, p.name)
                .replace(/duong-dan/g, p.url)
                .replace(/gia/g, formatMoney(Number(p.price), 0))
            );
        });
      } else {
        products.append("<p>Không có kết quả</p>");
      }
    });
  }
  function productsWithBrand(brand) {
    products.empty();
    products.append("<p>Đang tải...</p>");
    request(`query {
		allProducts(where: {brand: {name: "${brand}"}}) {
		name,
		price,
		image {publicUrl},
		url  
		}
	}`).then(res => {
      products.empty();
      if (res.data.allProducts.length) {
        res.data.allProducts.map(p => {
          products.append(
            productsItem
              .replace(productImage, uri + p.image.publicUrl)
              .replace(/san-pham/g, p.name)
              .replace(/duong-dan/g, p.url)
              .replace(/gia/g, formatMoney(Number(p.price), 0))
          );
        });
      } else {
        products.append("<p>Không có kết quả</p>");
      }
    });
  }

  function productsWithCategory(category) {
    products.empty();
    products.append("<p>Đang tải...</p>");
    request(`query {
		allProducts(where: {category: {name: "${category}"}}) {
    name,
    price,
    image {publicUrl},
    url  }
	}`).then(res => {
      products.empty();
      if (res.data.allProducts.length) {
        res.data.allProducts.map(p => {
          products.append(
            productsItem
              .replace(productImage, uri + p.image.publicUrl)
              .replace(/san-pham/g, p.name)
              .replace(/duong-dan/g, p.url)
              .replace(/gia/g, formatMoney(Number(p.price), 0))
          );
        });
      } else {
        products.append("<p>Không có kết quả</p>");
      }
    });
  }
  /* 
BRAND
*/
  let brands = $("#brands");
  let brandsItem;
  if (brands.length) {
    brandsItem = brands.html();
    brands.empty();
    brands.append("<p>Đang tải...</p>");
    request(
      `query {
		allBrands {
    name, 
    url,
  }}`
    ).then(res => {
      brands.empty();
      if (res.data.allBrands.length) {
        res.data.allBrands.map(p => {
          brands.append(
            brandsItem
              .replace(/thuong-hieu/g, p.name)
              .replace(/duong-dan/g, "" + p.url)
          );
        });
        $(".brandClick").click(function() {
          productsWithBrand(this.innerText);
        });
      } else {
        brands.append("<p>Không có kết quả</p>");
      }
    });
  }
  /*
CATEGORY 
*/

  let categories = $("#categories");
  let categoriesItem;
  if (categories.length) {
    categoriesItem = categories.html();
    categories.empty();
    categories.append("<p>Đang tải...</p>");
    request(
      `query {
		allCategories {
    name, 
    url,
  }}`
    ).then(res => {
      categories.empty();
      if (res.data.allCategories.length) {
        res.data.allCategories.map(p => {
          categories.append(
            categoriesItem
              .replace(/danh-muc/g, p.name)
              .replace(/duong-dan/g, "" + p.url)
          );
        });
        $(".categoryClick").click(function() {
          productsWithCategory(this.innerText);
        });
      } else {
        categories.append("<p>Không có kết quả</p>");
      }
    });
  }

  /* 
	RELATED PRODUCT 
	For main products filter by brands or categories
*/

  let relatedProducts = $("#related-products");

  let relatedProductsItem;

  if (relatedProducts.length) {
    relatedProducts.empty();
    relatedProductsItem = relatedProducts.html();
    relatedProducts.append("<p>Đang tải...</p>");
    request(`query {
		allProducts (first: 9, where:{
			suggestions:new
		}) {
			name,
			price,
			image {
				publicUrl
			},
			url  
		}    
	}`).then(res => {
      relatedProducts.empty();
      if (res.data.allProducts.length) {
        res.data.allProducts.map(p => {
          relatedProducts.append(
            relatedProductsItem
              .replace(productImage, uri + p.image.publicUrl)
              .replace(/san-pham/g, p.name)
              .replace(/duong-dan/g, p.url)
              .replace(/gia/g, formatMoney(Number(p.price), 0))
          );
        });
      } else {
        relatedProducts.append("<p>Không có kết quả</p>");
      }
    });
  }
  /*
	SEARCH PRODUCT
*/
  let searchProducts = $("#search-products");
  let searchProductsItem = searchProducts.html();
  searchProducts.empty();

  /*
	SEARCH INPUT
*/
  let searchInput = $("#search-input");
  searchInput.keyup(input => {
    let keyword = input.target.value;
    searchProducts.empty();
    if (searchProducts.length && keyword.length > 1)
      request(`query {
			allProducts(where: {name_contains_i: "${keyword}"}) {
      name,
      price,
      image {publicUrl},
      url  }
    }`).then(res => {
        searchProducts.empty();
        res.data.allProducts.map(p => {
          searchProducts.append(
            searchProductsItem
              .replace(productImage, uri + p.image.publicUrl)
              .replace(/san-pham/g, p.name)
              .replace(/gia/g, formatMoney(Number(p.price), 0))
          );
        });
      });
  });
  /*
	BANNERS
*/
  let banners = $("#banners");
  let bannersItem = banners.html();
  banners.empty();
  if (banners.length)
    request(
      `query {
		allBanners {
    image {publicUrl}
  }}`
    ).then(res => {
      banners.empty();
      res.data.allBanners.map(p => {
        banners.append(
          bannersItem.replace(bannerImage, uri + p.image.publicUrl)
        );
      });
    });
});
