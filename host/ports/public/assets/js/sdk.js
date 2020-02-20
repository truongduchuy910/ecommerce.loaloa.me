// XIN CHAO
const port = 7000;
const url = "https://ad.loaloa.me";
let graph = {
  allProducts: {
    newArrival: () => `query {
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
  }`,
    bestSeller: () => `query {
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
  }`,
    brand: ({ brand }) => `query {
    allProducts(where: {brand: {url}: "${brand}"}
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
  }`,
    category: ({ category }) => `query {
    allProducts(where: {category: {url: "${category}"}
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
  }`,
    search: ({ keyword }) => `query {
    allProducts(where: {name_contains_i: "${keyword}",
    ,AND: {seller:{port:"${port}"}}}) {
    name,
    price,
    images {file{publicUrl}},
    url  }
  }`
  },
  allBrands: () => `query {
    allBrands(where:{seller:{port:"${port}"}}) {
      name,
      url
    }
  }`,
  allCategories: () => `query {
    allCategories(where:{seller:{port:"${port}"}}) {
      name,
      url
    }
  }`
};

class Components {
  static async query({ query }) {
    const response = await fetch(url + "/admin/api", {
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
  constructor() {
    this.isExist = false;
  }
  assign({ id }) {
    this.box = $(`#${id}`);
    this.item = this.box.html();
    if (this.box.length) this.isExist = true;
  }
  add(data) {
    if (this.isExist) {
      let html = this.item;
      data.forEach(({ template, value }) => {
        const regExp = new RegExp(template, "g");
        html = html.replace(regExp, value);
      });
      this.box.append(html);
    }
  }
}
class Products extends Components {
  constructor({ id }) {
    super();
    this.assign({ id });
    this.box.empty();
  }
  async load({ query }) {
    const {
      data: { allProducts }
    } = await Components.query({ query });
    this.show(allProducts);
  }
  show(data) {
    this.box.empty();
    data.forEach(p => {
      this.add([
        {
          template: "duong-dan-hinh-anh",
          value: url + p.images[0].file.publicUrl
        },
        { template: "san-pham", value: p.name },
        { template: "gia", value: Products.formatMoney(p.price, 0) },
        { template: "duong-dan", value: p.url }
      ]);
    });
  }
  static formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
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
}
class Brands extends Components {
  constructor({ id }) {
    super();
    this.assign({ id });
    this.box.empty();
  }
  async load({ query }) {
    const {
      data: { allBrands }
    } = await Components.query({ query });
    this.show(allBrands);
  }
  show(data) {
    this.box.empty();
    data.forEach(p => {
      this.add([
        { template: "thuong-hieu", value: p.name },
        { template: "duong-dan", value: p.url }
      ]);
    });
  }
}
class Categories extends Components {
  constructor({ id }) {
    super();
    this.assign({ id });
    this.box.empty();
  }
  async load({ query }) {
    const {
      data: { allCategories }
    } = await Components.query({ query });
    this.show(allCategories);
  }
  show(data) {
    this.box.empty();

    data.forEach(p => {
      this.add([
        { template: "danh-muc", value: p.name },
        { template: "duong-dan", value: p.url }
      ]);
    });
  }
}

const newArrival = new Products({ id: "new-products" });
newArrival.load({ query: graph.allProducts.newArrival() });

const bestSeller = new Products({ id: "bestSeller-products" });
bestSeller.load({ query: graph.allProducts.bestSeller() });

let filter = new Products({ id: "products-main" });

let search = new Products({ id: "products-search" });

let categories = new Categories({ id: "categories" });
categories.load({ query: graph.allCategories() });

let categoriesNav = new Categories({ id: "categories-navbar" });
categoriesNav.load({ query: graph.allCategories() });

let brands = new Brands({ id: "brands" });
brands.load({ query: graph.allBrands() });

const gobackBtn = document.getElementById("go-back");
if (gobackBtn)
  gobackBtn.onclick = () => {
    window.history.back();
  };

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

let condition = searchToObject();
if (condition.category) {
  $("#present-filter").text("KẾT QUẢ TÌM KIẾM");
  filter.load({
    query: graph.allProducts.category({ category: condition.category })
  });
}

/* SMOOTH */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
$("#input-search").keyup(input => {
  const keyword = input.target.value;
  search.load({ query: graph.allProducts.search({ keyword }) });
});
