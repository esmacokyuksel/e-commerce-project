
  function searchModalFunc() {
    // search modal start
    const btnOpenSearch = document.querySelectorAll(".toggle-button");
    const btnCloseSearch = document.getElementById("close-search");
    const modalSearch = document.getElementsByClassName("modal-search");
    const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");
  
  
    btnOpenSearch.addEventListener("click", function () {
      modalSearch[0].style.visibility = "visible";
      modalSearch[0].style.opacity = "1";
    });
  
    btnCloseSearch.addEventListener("click", function () {
      modalSearch[0].style.visibility = "hidden";
      modalSearch[0].style.opacity = "0";
    });
  
    /* click outside start */
    document.addEventListener("click", function (e) {
      if (
        !e.composedPath().includes(modalSearchWrapper[0]) &&
        !e.composedPath().includes(btnOpenSearch)
      ) {
        modalSearch[0].style.visibility = "hidden";
        modalSearch[0].style.opacity = "0";
      }
    });
  
    /* click outside end */
  
    // search modal end
  }
  
  function headerFunc() {
    searchModalFunc();
  }
  
  export default headerFunc;