
const greetingElement = document.getElementById("greeting");
const currentHour = new Date().getHours();

//Define a saudação com base na hora atual
if (currentHour >= 5 && currentHour < 12) {
   greetingElement.textContent = "Bom dia";
} else if (currentHour >= 12 && currentHour < 18) {
   greetingElement.textContent = "Boa tarde";
 } else {
  greetingElement.textContent = "Boa noite";
 }



greetingElement.textContent = greetingMessage;

// GRID INTELIGENTE
const container = document.querySelector(".offer__list-item");

const observer = new ResizeObserver(() => {  
  const containerWidth = container.offsetWidth; 
  const numColumns = Math.floor(containerWidth / 200); 

  
  container.style.gridTemplateColumns = `repeat(${numColumns}, minmax(200px, 1fr))`;

  console.log({ container });
  console.log({ numColumns });
});
//observando a mudança do elemento
observer.observe(container);