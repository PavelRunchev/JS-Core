function solve(){
      let articles = document.querySelector('.site-content > main > section');
      let archives = document.querySelector('.archive-section > ul');

      document.querySelector('.create').addEventListener('click', addArticle);

      function addArticle(e) {
         e.preventDefault();
         const [author, title, category] = document.querySelectorAll('.site-content > aside form input');
         const content = document.querySelector('#content').value;
         if(author.value === '' || title.value === '' || category.value === '' || content === '') return;

         const newArticle = createArticle(author.value, title.value, category.value, content);  
         articles.appendChild(newArticle);       
      }

      function createArticle(author, title, category, content) {
         const article = createElement('article', '', '');
         // Create h1 tag and append to Article!
         article.appendChild(createElement('h1', title, ''));
         // Create paragraph tag 'Category' with inner strong tag and append to Article!
         const categoryP = createElement('p', 'Category: ', '');
         categoryP.appendChild(createElement('strong', category, ''));
         article.appendChild(categoryP);
         // Create paragraph tag 'Creator' with inner strong tag and append to Article!
         const authorP = createElement('p', 'Creator: ', '');
         authorP.appendChild(createElement('strong', author, ''));
         article.appendChild(authorP);
         // Create paragrph tag 'Content and append to Article!
         article.appendChild(createElement('p', content, ''));

         const divBtn = createElement('div', '', 'buttons');
         const deleteBtn = createElement('button', 'Delete', 'btn delete');
         deleteBtn.addEventListener('click', function() {
            this.parentNode.parentNode.remove();
         });
         const archiveBtn = createElement('button', 'Archive', 'btn archive');
         archiveBtn.addEventListener('click', toArchive);

         divBtn.appendChild(deleteBtn);
         divBtn.appendChild(archiveBtn);
         article.appendChild(divBtn);

         return article;
      }

      function createElement(type, text, className) {
         let el = document.createElement(`${type}`);
         if(text !== '') el.textContent = text;
         if(className !== '') el.className = className;
         return el;
      }

      function toArchive(e) {
         e.preventDefault();
         const thisArticle = this.parentNode.parentNode;
         const title = thisArticle.querySelector('h1').textContent;

         archives.appendChild(createElement('li', title, ''));
         // Remove article from Articles section
         thisArticle.remove();
         const sortedArchives = Array.from(archives.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent));
         archives.innerHTML = '';
         sortedArchives.forEach(li => archives.appendChild(li));
      }
}
