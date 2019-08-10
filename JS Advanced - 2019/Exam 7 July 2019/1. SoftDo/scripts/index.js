// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


// This function will be invoked when the html is loaded. Check the console in the browser or index.html file.
function mySolution(){
    const pendingQuestions = document.getElementById('pendingQuestions');
    const openQuestions = document.getElementById('openQuestions');

    let sendBtn = document.querySelector('#inputSection > div > button');
    sendBtn.addEventListener('click', sendMessage);

    function sendMessage() {
        let textarea = document.querySelector('#inputSection > textarea');
        let user = document.querySelector('#inputSection > div > input[type="username"]');
        let userName = user.value === '' ? 'Anonymous' : user.value;
       
        let div = document.createElement('div');
        div.className = 'pendingQuestion';

        //image
        let img = document.createElement('img');
        img.src = './images/user.png';
        img.width = '32';
        img.height = '32';
       
        //span
        let span =  document.createElement('span');
        span.textContent = userName;
        //paragraph
        let p = document.createElement('p');
        p.textContent = textarea.value;
        //div actions
        let divActions = document.createElement('div');
        divActions.className = 'actions';
        //button arvhive
        let btnArchive = document.createElement('button');
        btnArchive.className = 'archive';
        btnArchive.textContent = 'Archive';
        btnArchive.addEventListener('click', () => {
            div.remove();
        })

        //button Open
        let btnOpen = document.createElement('button');
        btnOpen.className = 'open';
        btnOpen.textContent = 'Open';
        btnOpen.addEventListener('click', openQuestionFunc);

        //append buttons
        divActions.appendChild(btnArchive);
        divActions.appendChild(btnOpen);

        //append elements
        div.appendChild(img);
        div.appendChild(span);
        div.appendChild(p);
        div.appendChild(divActions);
        pendingQuestions.appendChild(div);

        textarea.value = '';
        user.value = '';
    }

    function openQuestionFunc(ev) {
        let divParent = ev.target.parentNode.parentNode;
        let img = divParent.firstChild;
        let span = divParent.childNodes[1];
        let text = divParent.childNodes[2];

        //create open qusetion sectionand set atributte.
        let divOpenQuestion = document.createElement('div');
        divOpenQuestion.className = 'openQuestion';
        let divActions = document.createElement('div');
        divActions.className = 'actions';
        //button reply
        let btnReply = document.createElement('button');
        btnReply.className = 'reply';
        btnReply.textContent = 'Reply';
        btnReply.addEventListener('click', changeReplySection);
        divActions.appendChild(btnReply);

        let divReplySection = document.createElement('div');
        divReplySection.className = 'replySection';
        divReplySection.style.display = 'none';

        let replyInput = document.createElement('input');
        replyInput.className = 'replyInput';
        replyInput.type = 'text';
        replyInput.placeholder = 'Reply to this question here...';

        let btnSend = document.createElement('button');
        btnSend.className = 'replyButton';
        btnSend.textContent = 'Send';

        // click send button to attack ol element!
        btnSend.addEventListener('click', function() {
            let li = document.createElement('li');
            li.textContent = replyInput.value;
            ol.appendChild(li);
            replyInput.value = '';
        });

        let ol = document.createElement('ol');
        ol.className = 'reply';
        ol.type = '1';

        //append reply section
        divReplySection.appendChild(replyInput);
        divReplySection.appendChild(btnSend);
        divReplySection.appendChild(ol);

        //append all elements
        divOpenQuestion.appendChild(img);
        divOpenQuestion.appendChild(span);
        divOpenQuestion.appendChild(text);
        divOpenQuestion.appendChild(divActions);
        divOpenQuestion.appendChild(divReplySection);
        openQuestions.appendChild(divOpenQuestion);

        divParent.remove();
    }

    function changeReplySection(ev) {
        let parent = ev.target.parentNode.parentNode;
        let hideSection = parent.childNodes[4];
        hideSection.style.display = hideSection.style.display === 'none' 
        ? hideSection.style.display = 'block' 
        : hideSection.style.display = 'none';

        ev.target.textContent = ev.target.textContent === 'Reply' 
        ? ev.target.textContent = 'Back' : ev.target.textContent = 'Reply'; 
    }
}
// To check out your solution, just submit mySolution() function in judge system.