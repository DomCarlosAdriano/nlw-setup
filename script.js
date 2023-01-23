const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('PT-BR').slice(0, -5)
  const dayExixt = nlwSetup.dayExists(today)

  if (dayExixt == true) {
    alert('Dia já incluído')
    return
  }
  nlwSetup.addDay(today)
}


function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))

}


const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()


