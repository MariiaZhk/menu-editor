import { Pizza, PizzaProps } from "./models/Pizza";

const rootElement = document.querySelector(".root")!;
function createPizzaTemplate(pizza: PizzaProps): string {
  return `
    <div class='pizza'>
    <h2>${pizza.title}</h2>
    <p class='toppings'>${pizza.toppings.join(", ")}<p>
    <p>${pizza.description}</p>
    <span>$${pizza.price}</span>

    </div>
    `;
}

function renderTemplate(template: string[], parent: Element): void {
  const templateElement = document.createElement("template");
  for (const t of template) {
    templateElement.innerHTML += t;
  }
  parent.append(templateElement.content);
}
document.addEventListener("DOMContentLoaded", async () => {
  const pizzas = await Pizza.loadAll();
  const pizzaTemplates = pizzas.map(createPizzaTemplate);
  renderTemplate(pizzaTemplates, rootElement);
});
