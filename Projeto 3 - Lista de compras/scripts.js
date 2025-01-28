const ul = document.querySelector("ul");
const input = document.querySelector("#add")
const buttonInput = document.querySelector("h1 + div button")

const divAlert = document.querySelector("#alertDiv")
const imgAlert = document.createElement("img")
imgAlert.src = "./assets/icons/alert-circle.png";
imgAlert.alt = "Simbolo de alerta com exclamação";
const pAlert = document.createElement("p")
const xAlert = document.createElement("img")
xAlert.src = "./assets/icons/cancel.png";
xAlert.alt = "Um ícone de X para tirar o alerta"
xAlert.classList.add("xAlert")
xAlert.addEventListener("click", () => {
  console.log("Oiiii")
  divAlert.style.opacity = '0';
})

divAlert.append(imgAlert)
divAlert.append(pAlert)
divAlert.append(xAlert)

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
      pAlert.textContent = "O item " + li.textContent +  " foi removido da lista"
      divAlert.style.opacity = '1';
    })

    ul.append(li)

    input.value = ""
    console.log(idNumber)
  }else{
    alert("Escreva algo!!!")
  }
})






