class dom_query{

  getByIdAndSetHTML(element_id,html ){
    // Get the element with the "my-element" ID
    const element = document.getElementById(element_id);

    // Set the element's HTML content
    element.innerHTML = html;
  }
  //=====================================
   getByQuerySelectorAndSetHTML(selector, html) {
    // Get the element using the query selector
    const element = document.querySelector(selector);
  
    // Set the element's HTML content
    element.innerHTML = html;
  }
   //=====================================
}

let domq  = new dom_query();
export {domq}; 