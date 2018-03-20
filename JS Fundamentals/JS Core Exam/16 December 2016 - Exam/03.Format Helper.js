function formatHelper(array){
    text = array[0];
    text = text.replace(/[.,!?:;]\s*/g, (match) => match.trim() + " ");
    text = text.replace(/\s+[.,!?:;]/g, (match) => match.trim());
    text = text.replace(/\.\s*\.\s*\.\s*\!/g, "...!");
    text = text.replace(/(\.\s*)(\d+)/g, (match, gr1, gr2) => gr1.trim() + gr2.trim());
    text = text.replace(/\"(\s*[^\"]+\s*)\"/g, (match, gr1) => `"${gr1.trim()}"`);
    console.log(text);
}




formatHelper(['Terribly formatted text . With chaotic spacings."' +
' Terrible quoting "! Also this date is pretty confusing : 20. 12. 16.']);


formatHelper(['We should test how digits and dates would be printed: first some digit - 9,' +
'than some number  : 3      . 14    ! Do not forget about the dates though: 09  .   11; ' +
'Now, spam more: 311 .1, 31 . not number 31   .   31 .  2031!']);