/*addEventListener é um ouvinte (ou manipulador de eventos), que executa um determinado comando quando é acionado
    SIXTAXE element.addEventListener(event, function);
      event - é o tipo de evento ("o gatilho")
      function -  é a função que será acionada (é o que vai acontecer)
*/
document.addEventListener("DOMContentLoaded", function(event){
//Está adiando o carregamento desse js para o final. Ou carregamndo o HTML primeiro

    let accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    //Está solicitando que a classe especificada seja encontrada dentro do elemento (document) (let cria uma variavel)
          accordionItemHeaders.forEach(accordionItemHeader => {
            accordionItemHeader.addEventListener("click", event => {
       
      let currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
      //Comando para que quando um accordion abra o outro feche
          if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
            currentlyActiveAccordionItemHeader.classList.toggle("active");
              currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle("active");
      //Comando para abrir o item do accordion
      let accordionItemBody = accordionItemHeader.nextElementSibling;
          if(accordionItemHeader.classList.contains("active")) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      }
        else {
          accordionItemBody.style.maxHeight = 0;
          //Caso não esteja ativo o 0 é o valor que determina o quanto do conteudo escondido será mostrado após o fechamento
        }
      
      });
  });
})
