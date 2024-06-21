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

const hechizos = [
  {
    name: "Expelliarmus",
    description: "Este hechizo desarma al oponente, haciendo que su varita sea arrojada lejos de él."
  },
  {
    name: "Wingardium Leviosa",
    description: "Con este hechizo, se puede hacer flotar objetos en el aire.."
  },
  {
    name: "Expecto Patronum",
    description: "Este hechizo crea una manifestación física del pensamiento más positivo y feliz del conjurador, conocido como un Patronus, que puede repeler a los Dementores y otros seres malignos."
  },
  {
    name: "Lumos",
    description: "Enciende la punta de la varita para iluminar el área circundante."
  },
  {
    name: "Avada Kedavra",
    description: "También conocido como la Maldición Asesina, este es uno de los Tres Hechizos Imperdonables y causa la muerte instantánea al objetivo."
  },
  {
    name: "Accio",
    description: "Utilizado para convocar objetos específicos hacia el conjurador."
  },
  {
    name: "Crucio",
    description: "Crucio es una de las maldiciones imperdonables más temidas y oscuras en el mundo de Harry Potter. Su objetivo principal es infligir un intenso dolor a la víctima, tanto físico como emocional."
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
  });

  $index.innerHTML += `<hr><h2 class="h2Hechizo" >Hechizos</h2>`

  hechizos.forEach((hechizo) => {
    $index.innerHTML += `<section class="hechizo">
      <h4>${hechizo.name}</h4>
      <p>${hechizo.description}</p>
    </section>` 
  });
