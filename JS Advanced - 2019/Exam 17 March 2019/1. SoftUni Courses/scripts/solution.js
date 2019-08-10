function solve() {
   const availableCourses = ['js fundamentals', 'js advanced', 'js applications', 'js web'];
   let courseBody = document.querySelector('#myCourses > div[class="courseBody"] > ul');
   let courseFoot = document.querySelector('#myCourses > div[class="courseFoot"] > p');

   let signMeUp = document.querySelector('.courseFoot > button');
   signMeUp.addEventListener('click', addCourses);

   let jsFundamentals = document.querySelector('input[name="js-fundamentals"]');
   let jsAdvanced = document.querySelector('input[name="js-advanced"]');
   let jsApplications = document.querySelector('input[name="js-applications"]');
   let jsWeb = document.querySelector('input[name="js-web"]');
   let online = document.querySelectorAll('input[name="educationForm"]')[1];
   
   function addCourses(ev) {
      courseBody.innerHTML = '';
      let totalPrice = 0;
      
      if(jsFundamentals.checked) {
         let jsFund = document.createElement('li');
         jsFund.textContent = 'JS-Fundamentals';
         courseBody.appendChild(jsFund);
         totalPrice += 170;
      }

      if(jsAdvanced.checked) {
         let jsAdv = document.createElement('li');
         jsAdv.textContent = 'JS-Advanced';
         courseBody.appendChild(jsAdv);
         totalPrice += 180;
      }

      if(jsFundamentals.checked && jsAdvanced.checked) totalPrice = 170 + (180 * 0.90);

      if(jsApplications.checked) {
         let jsApplic = document.createElement('li');
         jsApplic.textContent = 'JS-Applications';
         courseBody.appendChild(jsApplic);
         totalPrice += 190;
      }

      if(jsFundamentals.checked && jsAdvanced.checked && jsApplications.checked)
         totalPrice = (170 * 0.94) + ((180 * 0.90) * 0.94) + (190 * 0.94);
      
      if(jsWeb.checked) {
         let jsWe = document.createElement('li');
         jsWe.textContent = 'JS-Web';
         courseBody.appendChild(jsWe);
         totalPrice += 490;     
      } 

      if(jsFundamentals.checked && jsAdvanced.checked && jsApplications.checked && jsWeb.checked) {
         let htmlCss = document.createElement('li');
         htmlCss.textContent = 'HTML and CSS';
         courseBody.appendChild(htmlCss);
      }

      if(online.checked) 
         totalPrice = totalPrice * 0.94;

      courseFoot.textContent = `Cost: ${Math.floor(totalPrice).toFixed(2)} BGN`;
   }
}

solve();