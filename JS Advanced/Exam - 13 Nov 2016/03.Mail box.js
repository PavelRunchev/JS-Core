class MailBox{
    constructor(){
       this.messages = [];
    }

    addMessage(subject, text){
        let message = {
            subject: subject,
            text: text
        };

        this.messages.push(message);
        return this;
    }

    get messageCount(){
        return this.messages.length;
    }

    deleteAllMessages(){
        this.messages = [];
    }

    findBySubject(substr){
        let result = [];
        for(let message of this.messages){
            let sub = message.subject;
            if(sub.indexOf(substr) !== -1){
                result.push({
                    subject: message['subject'],
                    text: message['text']
                });
            }
        }

        return result;
    }

    toString(){
        if(this.messages.length === 0){
            return " * (empty mailbox)";
        }else{
            let printMailBox = "";
            for(let message of this.messages){
                printMailBox += ` * [${message.subject}] ${message['text']}\n`;
            }

            //trim last space and new line in the string!!! non before!!!
            return printMailBox.trimRight();
        }
    }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());


