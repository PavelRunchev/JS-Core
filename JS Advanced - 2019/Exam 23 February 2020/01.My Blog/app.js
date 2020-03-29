function solve() {
   let articlesSection = document.querySelector('.site-content main section');
   let createBtn = document.querySelector('.create');
   createBtn.addEventListener('click', function(e) {
       e.preventDefault();
       let creator = document.querySelector('#creator');
       let title = document.querySelector('#title');
       let category = document.querySelector('#category');
       let content = document.querySelector('#content');

       if(creator.value.trim() === '' || title.value.trim() === '' 
     || category.value.trim() === '' || content.value.trim() === '') {
        return;
     }

       let newArticle = document.createElement('article');
       //title
       let h1 = document.createElement('h1');
       h1.textContent = title.value;
       newArticle.appendChild(h1);
       //category
       let categoryP = document.createElement('p');
       categoryP.textContent = 'Category: ';
       let strongCategory = document.createElement('strong');
       strongCategory.textContent = category.value;
       categoryP.appendChild(strongCategory);
       newArticle.appendChild(categoryP);
       //creator
       let creatorP = document.createElement('p');
       creatorP.textContent = 'Creator: ';
       let strongCreator = document.createElement('strong');
       strongCreator.textContent = creator.value;
       creatorP.appendChild(strongCreator);
       newArticle.appendChild(creatorP);
       //content
       let contentP = document.createElement('p');
       contentP.textContent = content.value;
       newArticle.appendChild(contentP);
       //buttons
       let buttonsDiv = document.createElement('div');
       buttonsDiv.className = 'buttons';
       let deleteBtn = document.createElement('button');
       deleteBtn.className = 'btn delete';
       deleteBtn.textContent = 'Delete';
       deleteBtn.addEventListener('click', eraseArticle);
       let archiveBtn = document.createElement('button');
       archiveBtn.className = 'btn archive';
       archiveBtn.textContent = 'Archive';
       archiveBtn.addEventListener('click', toArchive);

       buttonsDiv.appendChild(deleteBtn);
       buttonsDiv.appendChild(archiveBtn);
       newArticle.appendChild(buttonsDiv);

       articlesSection.appendChild(newArticle);
   });

   function eraseArticle() {
       this.parentNode.parentNode.remove();
   }

   function toArchive() {
       let archives = document.querySelector('.archive-section ul');
       let articleTitle = this.parentNode.parentNode.querySelector('h1').textContent;
       let archiveLi = document.createElement('li');
       archiveLi.textContent = articleTitle;
       archives.appendChild(archiveLi);
       this.parentNode.parentNode.remove();

       let getAllArchives = [...archives.querySelectorAll('li')];
       //sort all li elements
       getAllArchives.sort((a,b) => a.textContent > b.textContent ? 1 : -1);

       //remove all li elements
       archives.innerHTML = '';
       //add sorted li elements to archive
       for (let a of getAllArchives) {
           archives.appendChild(a);
       }
   }
}