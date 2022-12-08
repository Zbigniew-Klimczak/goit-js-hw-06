const categories = document.querySelectorAll("#categories h2");
const lists = document.querySelectorAll(".item ul");
console.log(`Number of categories: ${categories.length}`);
for (let i = 0; i < categories.length; i++) {
  console.log(
    `Category: ${categories[i].textContent} 
Elements: ${lists[i].children.length}`
  );
}
