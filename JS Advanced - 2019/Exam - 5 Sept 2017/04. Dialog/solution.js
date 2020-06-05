class Dialog {
	constructor(message, callback) {
		this.message = message;
		this.callback = callback;
		this.inputs = [];
		this.globalElement = null;
	}

	addInput(label, name, type) {
		this.inputs.push({label, name, type});
	}

	render() {
		this.globalElement = $('<div class="overlay"></div>');
		let divDialog = $('<div class="dialog">')
			.append($(`<p>${this.message}</p>`));
		for (let inp of this.inputs) {
			let label = $(`<label>${inp.label}</label>`);
			let input = $(`<input name="${inp.name}" type="${inp.type}">`);
			divDialog.append(label).append(input);
		}

		let btnOk = $('<button>OK</button>');
		let btnCancel = $('<button>Cancel</button>');
		btnOk.on('click', this._ok.bind(this));		
		btnCancel.on('click', this._cancel.bind(this));

		divDialog.append(btnOk).append(btnCancel);
		this.globalElement.append(divDialog);
		$('body').append(this.globalElement);
	}

	_ok() {
		let obj = {};
		let allInputs = $(this.globalElement).find('input').toArray();
		for (let inp of allInputs) {
			let nameInput = $(inp).attr('name');
			obj[nameInput] = $(inp).val();
		}

		this.callback(obj);
		this._cancel();
	}

	_cancel() {
		this.globalElement.remove();
	}
}
