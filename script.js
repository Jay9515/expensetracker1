let expense = [
    {
      id: "i1",
      description: "Toilet paper",
      amount: "55",
      category: "other",
    },
    {
      id: "i2",
      description: "4 Mangoes",
      amount: "1.32",
      category: "groceries",
    },
    {
      id: "i3",
      description: "4 bananas",
      amount: "1.35",
      category: "groceries",
    },
  ];
  
  let expenseForm = document.querySelector("#expense_form");
  display();
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    let description = e.target[0].value;
    let amount = e.target[1].value;
    let category = e.target[2].value;
    let myObj = { id: Math.random().toString(), description, amount, category }
    expense.push(myObj);
    e.target[0].value=""
    e.target[1].value=""
    e.target[2].value=""
  
    console.log(expense)
  
    // document.querySelector("#expenseList").innerHTML=expense
    display();
  });
  
  
  function removeItem(id){
  
      let index=0;
      for(let i in expense){
          if(expense[i].id==id){
              index=i;
              break;
          }
      }
      expense.splice(index,1);
      display();
      displayTotalAmount();
  
  
  }
  function display(){
  
  
      const div = document.getElementById("expenseList")
      div.innerHTML = "";
      const ul = document.createElement("ul");
     
  
  
      // const ul = document.getElementById("expense_item_wrapper")
  
  
  
      for(let exp of expense){
  
          const listItem = document.createElement("li");
          listItem.className = "expense_item"
  
          const leftDiv = document.createElement("div");
          leftDiv.className = "left"
            const titlePrice = document.createElement("div");
            titlePrice.className = "title_price";
              const h3 = document.createElement("h3")
              const p = document.createElement("p")
              h3.innerHTML = exp.description;
                p.innerHTML = "$"+exp.amount;
            titlePrice.appendChild(h3);
            titlePrice.appendChild(p);
            const small = document.createElement("small");
            small.innerHTML = exp.category;
            leftDiv.appendChild(titlePrice);
            leftDiv.appendChild(small);
  
            listItem.appendChild(leftDiv);
  
          const rightDiv = document.createElement("div");
          rightDiv.className = "right";
          const deleteButton = document.createElement("button");
          deleteButton.innerHTML = "x";
          deleteButton.onclick = function (){
            removeItem(exp.id);
          }
          rightDiv.appendChild(deleteButton);
          listItem.appendChild(rightDiv);
          ul.appendChild(listItem);
  
      }
      ul.className = "expense_item_wrapper"
      div.appendChild(ul);
  
      displayTotalAmount();
  
  }
  function displayTotalAmount(){
    let amount = 0;
    for(let obj of expense){
      amount += (+obj.amount);
    }
    const total_amount = document.getElementById("total_amount");
    total_amount.innerHTML = "$"+amount.toFixed(2);
  
  }
  
  let sort_button = document.querySelector("#sort_button");
  sort_button.innerHTML = "sort amount(asc)"
  let value=0;
  sort_button.addEventListener("click",sortAsdFunction);
  
  function sortAsdFunction(){
    if(value==0){
  
    
    expense.sort((a,b)=>{
      if(+a.amount<+b.amount){
        return -1;
      }
      
      else{
        return 1;
      }
    })
    value=1;
  
    sort_button.innerHTML = "sort amount(des)"
  }
  else{
    expense.sort((a,b)=>{
      if(+a.amount>+b.amount){
        return -1;
      }
      else{
        return 1;
      }
    })
    value=0;
    sort_button.innerHTML = "sort amount(acs)"
  }
    // console.log(expense);
    display();
  }
  
  
  
  let sort_button_cat = document.querySelector("#sort_button_cat");
  console.log(sort_button_cat);
  let valueCat=0;
  sort_button_cat.addEventListener("click",sortCat);
  
  
  function sortCat(){
  if(valueCat==0){
    expense.sort((a,b)=>{
      console.log(a.category)
      if(a.category<=b.category){
        return -1;
      }
      else{
        return 1;
      }
    })
    sort_button_cat.innerHTML = "sort category(des)"
    valueCat=1;
    display();
  }
  else{
    expense.sort((a,b)=>{
      if(a.category>=b.category){
        return -1;
      }
      else{
        return 1;
      }
    })
    sort_button_cat.innerHTML = "sort category(acs)"
    valueCat=0;
    display();
  }
  
  }
  
  arr = ["zas","app","ysa"]
  expense.sort((a,b)=>{
    if(a.category<b.category){
      return -1;
    }
    else{
      return 1;
    }
  })
  // console.log(expense);
  
  
  
  
  
  
  
  
  
  // arr = [5,4,3,2,1,5];
  // arr.sort((a,b)=>{
  //   if(a<b){
  //     return -1;
  //   }
  //   else{
  //     return 1;
  //   }
  // })
  // console.log(arr);