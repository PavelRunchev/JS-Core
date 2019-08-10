function solve() {
    let courseBody = document.querySelector('#myCourses > div[class="courseBody"] > ul');
    let courseFoot = document.querySelector('#myCourses > div[class="courseFoot"] > p');

    let signMeUp = document.querySelector('.courseFoot > button');
    signMeUp.addEventListener('click', addCourses);

    let jsFundamentals = document.querySelector('input[name="js-fundamentals"]');
    let jsAdvanced = document.querySelector('input[name="js-advanced"]');
    let jsApplications = document.querySelector('input[name="js-applications"]');
    let jsWeb = document.querySelector('input[name="js-web"]');
    let online = document.querySelectorAll('input[name="educationForm"]')[1];

    function addCourses() {
        courseBody.innerHTML = '';
        let totalMoney = 0;

        if(jsFundamentals.checked && jsAdvanced.checked && jsApplications.checked && jsWeb.checked) {
            if(online.checked) totalMoney = (((170 * 0.94) + ((180 * 0.90) * 0.94) + (190 * 0.94)) * 0.94) + (490 * 0.94);
            else totalMoney = (170 * 0.94) + ((180 * 0.90) * 0.94) + (190 * 0.94) + 490;
            courseFoot.textContent = `Cost: ${Math.floor(totalMoney).toFixed(2)} BGN`;

            let liFund = document.createElement('li');
            liFund.textContent = 'JS-Fundamentals';
            let liAdv = document.createElement('li');
            liAdv.textContent = 'JS-Advanced';
            let liApp = document.createElement('li');
            liApp.textContent = 'JS-Applications';
            let liWeb = document.createElement('li');
            liWeb.textContent = 'JS-Web';
            let liHTMLCSS = document.createElement('li');
            liHTMLCSS.textContent = 'HTML and CSS';
            courseBody.appendChild(liFund);
            courseBody.appendChild(liAdv);
            courseBody.appendChild(liApp);
            courseBody.appendChild(liWeb);
            courseBody.appendChild(liHTMLCSS);
            return;
        }
        else if(jsFundamentals.checked && jsAdvanced.checked && jsApplications.checked) {
            if(online.checked) totalMoney = ((170 * 0.94) + ((180 * 0.90) * 0.94) + (190 * 0.94)) * 0.94;
            else totalMoney = (170 + (180 * 0.90) + 190) * 0.94;
            courseFoot.textContent = `Cost: ${Math.floor(totalMoney).toFixed(2)} BGN`;

            let liFund = document.createElement('li');
            liFund.textContent = 'JS-Fundamentals';
            let liAdv = document.createElement('li');
            liAdv.textContent = 'JS-Advanced';
            let liApp = document.createElement('li');
            liApp.textContent = 'JS-Applications';
            courseBody.appendChild(liFund);
            courseBody.appendChild(liAdv);
            courseBody.appendChild(liApp);
            return;
        }
        else if(jsFundamentals.checked && jsAdvanced.checked) {
            if(online.checked) totalMoney = (170 * 0.94) + ((180 * 0.90) * 0.94);
            else totalMoney = 170 + (180 * 0.90);
            courseFoot.textContent = `Cost: ${Math.floor(totalMoney).toFixed(2)} BGN`;

            let liFund = document.createElement('li');
            liFund.textContent = 'JS-Fundamentals';
            let liAdv = document.createElement('li');
            liAdv.textContent = 'JS-Advanced';
            courseBody.appendChild(liFund);
            courseBody.appendChild(liAdv);
            return;
        }

        if(jsFundamentals.checked) {
            if(online.checked) totalMoney += 170 * 0.94;
            else totalMoney += 170;
            courseFoot.textContent = `Cost: ${Math.floor(totalMoney).toFixed(2)} BGN`;
            let liFund = document.createElement('li');
            liFund.textContent = 'JS-Fundamentals';
            courseBody.appendChild(liFund);
        }

        if(jsAdvanced.checked) {
            if(online.checked) totalMoney += 180 * 0.94;
            else totalMoney += 180;
            courseFoot.textContent = `Cost: ${Math.floor(totalMoney).toFixed(2)} BGN`;
            let liAdv = document.createElement('li');
            liAdv.textContent = 'JS-Advanced';
            courseBody.appendChild(liAdv);
        }

        if(jsApplications.checked) {
            if(online.checked) totalMoney += 190 * 0.94;
            else totalMoney += 190;
            courseFoot.textContent = `Cost: ${Math.floor(totalMoney).toFixed(2)} BGN`;
            let liApp = document.createElement('li');
            liApp.textContent = 'JS-Applications';
            courseBody.appendChild(liApp);
        }

        if(jsWeb.checked) {
            if(online.checked) totalMoney += 490 * 0.94;
            else totalMoney += 490;
            courseFoot.textContent = `Cost: ${Math.floor(totalMoney).toFixed(2)} BGN`;
            let liWeb = document.createElement('li');
            liWeb.textContent = 'JS-Web';
            courseBody.appendChild(liWeb);
        }
    }
}

solve();