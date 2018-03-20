class Dialog{
    constructor(message, callback){
        this.message = message;
        this.callback = callback;
        this.inputs = [];
        this.element = null;
    }

    addInput(label, name, type){
        this.inputs.push({label, name, type});
    }

    render(){
        this.element = $('<div class="overlay">');
        let dialog = $('<div class="dialog">');
        let paragraph = $(`<p>${this.message}</p>`);
        dialog.append(paragraph);

        for(let el of this.inputs){
            dialog.append(`<label>${el.label}</label>`);
            dialog.append(`<input name="${el.name}" type="${el.type}">`);
        }

        dialog.append($('<button>OK</button>').on('click', this._ok.bind(this)));
        dialog.append($('<button>Cancel</button>').click(this._cancel.bind(this)));
        this.element.append(dialog);
        $('body').append(this.element);
    }

    _cancel(){
        $(this.element).remove();
    }

    _ok(){
        let obj = {};
        let inputs = $(this.element).find('input').toArray();
        inputs.forEach(i => obj[$(i).attr('name')] = $(i).val());
        this.callback(obj);
        this._cancel();
    }
}