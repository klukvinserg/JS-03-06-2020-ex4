let arr = [
  {
    author: 'Brown Ethan',
    title: 'Learning JavaScript: Add Sparkle and Life to Your Web Pages',
  },
  { author: 'Kyle Simpson', title: `You Don't Know JS: Scope & Closures` },
  {
    author: 'Jon Duckett',
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
  },
];

let tmp;
let str = ``;
let strTwo = ``;
let strComment = ``;

function myClick() {
  tmp = event.path[2].children[0].id;

  nameBook.value = `${arr[tmp - 1].title} by ${arr[tmp - 1].author} `;
}

function myBuy() {
  if (nameBook.value.length === 0) {
    alert('Select book');
    return false;
  }

  if (nameBook.value.length !== 0) {
    nameBook.style.border = 'solid black';
  }

  if (quantity.value.length === 0) {
    quantity.style.border = 'solid red';
    return false;
  } else {
    quantity.style.border = 'solid black';
  }

  if (nameY.value.length === 0) {
    nameY.style.border = 'solid red';
    return false;
  } else {
    nameY.style.border = 'solid black';
  }

  if (delivery.value.length === 0) {
    delivery.style.border = 'solid red';
    return false;
  } else {
    delivery.style.border = 'solid black';
  }

  if (dateD.value.length === 0) {
    dateD.style.border = 'solid red';
    return false;
  } else {
    dateD.style.border = 'solid black';
  }

  str += `${nameY.value}, thanks for the order.`;

  strTwo += ` "${arr[tmp - 1].title} by ${
    arr[tmp - 1].author
  }" in the amount of ${quantity.value} ps. will be delivered on ${
    dateD.value
  } to the adress ${delivery.value}`



  if (comment.value.length !== 0) {
    strComment += `Your comment: ${comment.value}`;
  }

  mainBlock.style.display = 'none';
  resultstr.style.display = 'block'

  resultOne.innerHTML = str;
  resultTwo.innerHTML = strTwo;
  resultThree.innerHTML = strComment;
}
