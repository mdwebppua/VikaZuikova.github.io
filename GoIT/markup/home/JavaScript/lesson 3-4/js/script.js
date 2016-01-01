var app = {
	createElement: function(params) {

		var element = document.createElement(params.tagName);

		if (params.inputType) {
			element.setAttribute('type', params.inputType)
		}

		if (params.className) {
			element.className = params.className;
		}

		if (params.content) {
			element.innerHTML = params.content;
		}

		if (params.parentElement) {
			params.parentElement.appendChild(element);
		}

		return element;
	},

	generateQuestions: function(questionsAmount, answersAmount) {

		for (var i = 0; i < questionsAmount; i++) {

			this.createElement({
				tagName: 'h4',
				className: 'indent',
				content: [i + 1] + '. ' +'Вопрос №' + [i + 1],
				parentElement: body
			});

			for (var j = 0; j < answersAmount; j++) {

				var label = this.createElement({
				tagName: 'p',
				className: 'indent2',
				content: 'Вариант ответа №' + [j + 1],
				parentElement: body
				});

				var checkbox = this.createElement({
				tagName: 'input',
				inputType: 'checkbox'
				});

				label.insertAdjacentElement('afterBegin', checkbox);
			}
		};
	}
}

var body = document.querySelector('body');

app.createElement({
	tagName: 'h3',
	className: 'text-center',
	content: 'Тест по программированию',
	parentElement: body
});

app.generateQuestions(3, 3);

app.createElement({
	tagName: 'input',
	inputType: 'submit',
	className: 'btn btn-primary btn-lg center',
	content: 'Проверить мои результаты',
	parentElement: body
});




