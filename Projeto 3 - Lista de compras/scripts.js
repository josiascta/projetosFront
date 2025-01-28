const ul = document.querySelector("ul");
const input = document.querySelector("#add")
const buttonInput = document.querySelector("h1 + div button")

let idNumber = 0;

buttonInput.addEventListener("click", () => {
  const li = document.createElement("li");
  const check  = document.createElement("input")
  check.setAttribute("type", "checkbox")

  const p = document.createElement("p")
  if(input.value.length > 0){
    p.textContent = input.value
    li.id = String(idNumber + 1)
    idNumber += 1;

    const imgDelete = document.createElement("img")
    imgDelete.src = "./assets/icons/delete.svg"
    imgDelete.alt = "Ícone de lixeira"
    imgDelete.id = "deleteButton"
    
    li.append(check)
    li.append(p)
    li.append(imgDelete)
    imgDelete.addEventListener("click", () => {
      ul.removeChild(li);

      
    })

    ul.append(li)

    input.value = ""
    console.log(idNumber)
  }else{
    alert("Escreva algo!!!")
  }
})




