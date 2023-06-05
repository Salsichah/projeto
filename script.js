function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
//  O código acima pode ser escrito da forma abaixo, o resultado será o mesmo.
//    if(html.classList.contains('light')) {
//        html.classList.remove('light')
//    } else {
//        html.classList.add('light')
//    }

// Para alterar o avatar cada vez que alterna entre light e dark mode
// Pegar a tag img
const img = document.querySelector("#profile img")

// Substituir a imagem
if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar o avatar light
    img.setAttribute("src", "./assets/avatar-light.png")
} else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
}

// Substituir a descrição da imagem
if (html.classList.contains("light")) {
    //Se tiver light mode, mudar a descrição
    img.setAttribute("alt", "Foto de Maik Brito sorrindo, usando óculos e jaqueta preta, sem barba e fundo azul.")
} else {
    // Se tiver em light mode, manter a descrição normal
    img.setAttribute("alt", "Foto de Maik Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.")
}




}