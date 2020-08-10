function lockedProfile() {
    //append events
    for (let b of document.querySelectorAll('#main .profile button')) 
        b.addEventListener('click', showProfile);

    function showProfile(e) {
        let parent = this.parentNode;
        let [lock, unlock] = parent.querySelectorAll('input[type="radio"]');

        if(!lock.checked && unlock.checked && this.textContent === 'Show more') {
            this.textContent = 'Hide it';
            parent.querySelector('div').style.display = 'block';
        } else if(!lock.checked && unlock.checked && this.textContent === 'Hide it') {
            this.textContent = 'Show more';
            parent.querySelector('div').style.display = 'none';
        }
    }
}