const storeURL = "https://levidevstore.foxycart.com/cart?";
const price = document.getElementById("price").innerHTML;
let double = false;
const insert = document.getElementById("root");
const root = document.createElement("form");
insert.appendChild(root);
let orderLink;

if (
  !document
    .getElementById("dsprice")
    .classList.contains("w-condition-invisible")
) {
  double = document.getElementById("dsprice").innerHTML;
}
const query = () => {
  const inputs = document.querySelectorAll(".option-radio input");
  const w = document.getElementById("Width").value;
  const h = document.getElementById("Height").value;
  let search = new URLSearchParams();
  const dimensions = w * h;
  let additions = 0;
  inputs.forEach((input) => {
    if (input.checked) {
      search.append(input.name, input.value);
      document.getElementById("selected-" + input.name).innerText = input.value;
      if (input.attributes.fee.value === "flat") {
        additions += parseInt(input.attributes.price.value);
      } else if (input.attributes.fee.value === "square") {
        additions += input.attributes.price.value * dimensions * price;
      }
    }
  });
  const totalPrice = dimensions * price + additions;
  search.append("price", totalPrice);
  search.append("name", "banner");
  const link = document.getElementById("order-button");
  orderLink = storeURL + search;
  link.setAttribute("href", storeURL + search);
  const total = document.getElementById("total-price");
  total.innerText = totalPrice;
};

const updates = ({ target }) => {
  query();
  if (target.type === "text") {
    return;
  }
  let current = document.querySelector(".option-current");
  if (!current) {
    return;
  }
  current.classList.remove("option-current");
  current.classList.remove("option-error");
  let next = current.nextElementSibling;
  let nextGroup = next.children[1];
  if (next.classList.contains("option-radio")) {
    next.classList.add("option-current");
    root.style.setProperty("--custom-height", nextGroup.scrollHeight + "px");
  }
};

const handleClickDropdown = ({ target }) => {
  let current = document.querySelector(".option-current");
  let parent;
  if (target.parentElement.classList.contains("option-header")) {
    parent = target.parentElement.parentElement;
  } else {
    parent = target.parentElement;
  }
  if (!parent.classList.contains("option-current")) {
    if (current) {
      current.classList.remove("option-current");
    }
    parent.classList.add("option-current");
    root.style.setProperty(
      "--custom-height",
      parent.children[1].scrollHeight + "px"
    );
  } else {
    parent.classList.remove("option-current");
  }
};

const buildOptions = () => {
  let link = document.createElement("a");
  link.setAttribute("id", "order-button");
  link.classList.add("hidden");
  insert.appendChild(link);
  root.addEventListener("change", updates);
  // ----- Create Width/Height Inputs -----
  const inputs = ["Width", "Height"];
  inputs.forEach((name) => {
    const dimWrap = document.createElement("div");
    dimWrap.classList.add("dimension-wrap");
    const label = document.createElement("label");
    label.innerText = name;
    label.classList.add("dimension-label");
    const input = document.createElement("input");
    input.classList.add("dimension-input");
    input.required = true;
    input.setAttribute("name", name);
    input.setAttribute("placeholder", "0");
    input.setAttribute("type", "text");
    input.setAttribute("id", name);
    dimWrap.appendChild(label);
    dimWrap.appendChild(input);
    root.appendChild(dimWrap);
    if (name === "Width") {
      let spacer = document.createElement("div");
      spacer.classList.add("dimension-spacer");
      spacer.innerText = "X";
      root.appendChild(spacer);
    }
  });

  // ----- Get Radio Button Info -----
  let data = {};
  const options = document.querySelectorAll(".options");
  options.forEach((item) => {
    const groupName = item.firstElementChild.innerText;
    data[groupName] = [];
    let subOptions = item.lastElementChild.children;
    for (let i = 0; i < subOptions.length; i++) {
      const p = subOptions[i];
      let pData = p.innerText.split(", ");
      data[groupName].push({
        name: pData[0],
        price: pData[1],
        fee: pData[2],
      });
    }
  });
  if (double) {
    data["Print Options"] = [
      { name: "Single Side", price: "0", fee: "none" },
      { name: "Double Side", price: double, fee: "square" },
    ];
  }
  // ----- Create Radio Buttons -----
  let i = 0;
  for (const option in data) {
    const element = data[option];
    let optRoot = document.createElement("div");
    optRoot.classList.add("option-radio");
    optRoot.setAttribute("id", option);
    optRoot.setAttribute("data-position", i);
    i++;
    let header = document.createElement("div");
    header.classList.add("option-header");
    header.addEventListener("click", handleClickDropdown);
    let title = document.createElement("p");
    title.classList.add("option-title");
    title.innerText = option;
    header.appendChild(title);
    let selection = document.createElement("p");
    selection.classList.add("option-selected");
    selection.setAttribute("id", "selected-" + option);
    header.appendChild(selection);
    optRoot.appendChild(header);
    let group = document.createElement("div");
    group.classList.add("option-group");
    element.forEach((item) => {
      let label = document.createElement("label");
      label.setAttribute("for", option + item.name);
      label.classList.add("option-label");
      label.innerText = item.name;
      let input = document.createElement("input");
      input.classList.add("option-input");
      input.setAttribute("id", option + item.name);
      input.setAttribute("type", "radio");
      input.setAttribute("name", option);
      input.setAttribute("value", item.name);
      input.setAttribute("price", item.price);
      input.setAttribute("fee", item.fee);
      group.appendChild(input);
      group.appendChild(label);
    });
    optRoot.appendChild(group);
    root.appendChild(optRoot);
  }
  const order = document.createElement("input");
  order.setAttribute("type", "submit");
  root.setAttribute("onsubmit", "return handleOrder();");
  root.appendChild(order);
  // ----- Create Total Price -----
  const total = document.createElement("p");
  total.setAttribute("id", "total-price");
  root.appendChild(total);
  query();
  let start = document.querySelector(".option-radio");
  start.classList.add("option-current");
  let startGroup = document.querySelector(".option-group");
  root.style.setProperty("--custom-height", startGroup.scrollHeight + "px");
};
const handleOrder = () => {
  let current = document.querySelector(".option-current");
  if (current) {
    current.classList.remove("option-current");
  }
  let options = document.querySelectorAll(".option-group");
  let validate = true;
  options.forEach((group) => {
    let inputs = group.querySelectorAll("input");
    let checked = false;
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      if (element.checked) {
        checked = true;
      }
    }
    if (!checked) {
      group.parentElement.classList.add("option-error");
      group.parentElement.children[0].children[1].innerText = "*Required";
      validate = false;
    }
  });
  if (validate) {
    document.getElementById("order-button").click();
  }
  return false;
};
buildOptions();
