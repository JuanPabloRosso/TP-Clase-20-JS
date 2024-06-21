const $grid = document.getElementById("grid");
const $index = document.getElementById("IndexMain");
const houses = [
  {
    image: "./assets/Hogwarts-removebg-preview.png",
    name: "Hogwarts",
    description: "Hogwarts, la famosa escuela de magia y hechicería en la serie de libros y películas de Harry Potter, está dividida en cuatro casas distintas. Cada una de estas casas tiene sus características únicas que representan los diferentes aspectos de la personalidad y habilidades mágicas de los estudiantes."
  },
  {
    image: "./assets/Griffindor-removebg-preview.png",
    name: "Griffindor",
    description: "Gryffindor: Esta es la casa conocida por su valentía, coraje y determinación. Los estudiantes seleccionados en Gryffindor son intrépidos y audaces. La casa está representada por un león como animal emblemático. Sus colores son el rojo y el dorado. Entre sus miembros más destacados se encuentra Harry Potter."
  },
  {
    image: "./assets/Slytherin-removebg-preview.png",
    name: "Slytherin",
    description: "Slytherin: Esta antigua casa pone énfasis en las habilidades astutas, ambición e intuición estratégica para alcanzar sus objetivos mágicos o personales sin importar las consecuencias morales involucradas en ello. Un serpiente es su emblema mientras que los tonos verde oscuro y plateado están asociados a ellos."
  },
  {
    image: "./assets/Hufflepuff-removebg-preview.png",
    name: "Hufflepuff",
    description: "Hufflepuff: Conocida por su lealtad, paciencia e imparcialidad, Hufflepuff alberga a aquellos que valoran las relaciones interpersonales y trabajan arduamente para lograr sus metas. El tejón es el símbolo de esta casa mientras que los colores distintivos son el amarillo y el negro."
  },
  {
    image: "./assets/Revenclaw-removebg-preview.png",
    name: "Revenclaw",
    description: "Ravenclaw: Apreciando la sabiduría, la inteligencia y el ingenio creativo, Ravenclaw acoge a aquellos con una mente aguda e inquisitiva que buscan conocimiento constantemente. Representada por un águila como animal característico, los colores asociados con esta casa son el azul marino y plata."
  }
];

fetch("https://hp-api.onrender.com/api/characters")
  .then((respuesta) => {
    return respuesta.json();
  })
  .then((data) => {
    const personajes = data;
    console.log(personajes);

    personajes.forEach((personaje) => {
      let imageValidator = personaje.image;
      if (imageValidator === ""){
        imageValidator = "../assets/perfil_defecto.png";
      }

      $grid.innerHTML += `<div>
      <img src="${imageValidator}" alt="imagen de ${personaje.name}">
      <h4>${personaje.name}</h4>
      <p>Artista: ${personaje.actor}</p>
      <p>Sexo: ${personaje.gender}</p>
      <p>Especie: ${personaje.species}</p>
      <p>Patronus: ${personaje.patronus}</p>
      </div>
      `;
    });
  });
  


  houses.forEach((house) => {
    $index.innerHTML += `<section class= "house">
      <div> <img src="${house.image}" alt="imagen de ${house.name}"> </div>
      <div class= content> <h2>${house.name}</h2>
        <p>${house.description}</p> </div>
    </section>`
  })
