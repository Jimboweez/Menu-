<form>
  <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
  <input type="number" id="number" value="0" />
  <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div><h3>Cost: $3.50</h3>
</form> 
Thầy Khương - Sumato says:function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();
  
  counterButtons.forEach((button, index) => {
      button.addEventListener("click", (e) => {
          const currentCount = parseInt(counters[index].textContent);
  
          if (e.target.classList.contains("increment")) {
              counters[index].textContent = currentCount + 1;
          } else if (e.target.classList.contains("decrement") && currentCount > 0) {
              counters[index].textContent = currentCount - 1;
          }
      });
  }); 
  
  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }
  