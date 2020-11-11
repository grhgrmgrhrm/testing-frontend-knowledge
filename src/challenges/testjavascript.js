
/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const FUNCTION_PARAMETERS = {
snippet:`
${start}
function sum(a, b) {
	return a + b;
}
let result = sum(1, 2);
console.log ('result:', result);
${end}`
};

const GREETING = {
snippet:`
${start}
	function sayHello(name) {
	return "Привет, " + name + "!";
	}
	console.log(sayHello("Пётр"));
${end}`
};

const FUNC = {
snippet:`
${start}function math(firstValue, secondValue) {
		let multiplier = 10;
		return (firstValue + secondValue) * multiplier;
};

console.log('Результат выполнения math:', math(3, 4))
${end}`,
choices: [
"<code>7</code>",
"<code>12</code>",
"<code>17</code>",
"<code>70</code>",
"<code>170</code>",
]};

/***********************************
* Export Challenge Array
*********************************** */

export default {
	title: "JavaScript",
	category: "JavaScript and Basic Data Structures",
	challenges: [
		{
    	title: `Какой тип JavaScript представляет собой "пустое" или "отсутствующее" значение?`,
    	subtitle: `data-types`,
    	choices: [
				"none",
				"empty",
				"nonce",
				"nothing",
    			"null/undefined",
    	],
    	solution: `4`,
    	explanation: `
				В JavaScript <code>null</code> просто специальное значение, которое представляет собой «ничего», 
				«пусто» или «значение неизвестно». Специальное значение <code>undefined</code> также стоит особняком. 
				Оно формирует тип из самого себя так же, как и null. Оно означает, что «значение не было присвоено». <br>
				Подробнее: https://learn.javascript.ru/types#znachenie-null
				`
    },
    {
    	title: `В следующей функции символы <code>a</code> и <code>b</code> называются: ${FUNCTION_PARAMETERS.snippet}`,
    	subtitle: `function-basics`,
    	choices: [
				"Слагаемыми",
				"Аргументами/параметрами",
				"Ключевыми словами",
				"Типами",
    	],
    	solution: `1`,
			explanation: `
				В приведенной выше функции <code>a</code> and <code>b</code> являются аргументами функции. 
				Они передаются в функцию при ее вызове и обычно называются "аргументами" или "параметрами". <br>
				Подробнее: https://learn.javascript.ru/function-basics
				`
		},
		{
    	title: `В следующей функции, каков будет вывод в <code>console.log</code>? ${GREETING.snippet}`,
    	subtitle: `Function return`,
    	choices: [
				"Пётр",
				"Привет, Пётр",
				"Привет, Пётр!",
				"undefined",
    	],
    	solution: `2`,
			explanation: `
				Функция принимает имя аргумента и объединяет его с "привет" и восклицательным знаком "!". 
				Console.log вызывает функцию sayHello и передает строку "Пётр" в качестве аргумента - 
				это строковое значение входит в аргумент name функции, которая затем выводит в консоли строку "Привет, Пётр"!<br>
				Подробнее: https://learn.javascript.ru/function-basics
				`
		},
		{
    	title: `JavaScript, как и другие языки, имеет специальные зарезервированные слова, такие как <code>let</code>, <code>class</code>, <code>return</code> и <code>function</code>. 
				Как называются эти специальные слова?`,
    	subtitle: `language-keywords`,
    	choices: [
				"Ключевые слова",
				"Спецслова",
				"Зарезервированные слова",
				"У них нет специального названия.",
    	],
    	solution: `2`,
			explanation: `
				Существует список зарезервированных слов, которые нельзя использовать 
				в качестве имён переменных, потому что они используются самим языком. 
				Например: <code>let</code>, <code>class</code>, <code>return</code> и <code>function</code> зарезервированы.
				<br>
				Подробнее: https://learn.javascript.ru/variables
				`
		},
		{
    	title: `В следующей функции, каков будет вывод результата в console.log? ${FUNC.snippet}`,
    	subtitle: `math`,
    	choices: FUNC.choices,
    	solution: `3`,
			explanation: `
				 В этом случае переменной <code>let</code> присваивается значение 10. Затем мы выполняем некоторую 
				 математику в теле функции. Языки программирования обычно поддерживают обычные математические операции, 
				 так же, как вы привыкли к калькулятору. Итак, здесь мы складываем аргументы firstValue и secondValue 
				 вместе, а затем умножаем результат на переменную 10, чтобы получить 70! Далее, полученный результат выводим в консоль<br>
				 Подробнее: https://learn.javascript.ru/operators
				 `
    	},
		{
			title: `Типы данных в JavaScript`,
			subtitle: `Tipy-dannyh-v-JavaScript`,
			choices: [
				"number, bigint, string, boolean, null, undefined, object, symbol",
				"number, bigint, string, boolean, undefined, object, symbol",
				"number, string, boolean, null, undefined, object, symbol",
				"number, bigint, string, boolean, null, undefined, object",
			],
			solution: `0`,
			explanation: `
				В JavaScript есть 8 основных типов:
				<ul>
					<li><code>number</code> для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).</li>
					<li><code>bigint</code> для целых чисел произвольной длины.</li>
					<li><code>string</code> для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.</li>
					<li><code>boolean</code> для true/false.</li>
					<li><code>null</code> для неизвестных значений – отдельный тип, имеющий одно значение null.</li>
					<li><code>undefined</code> для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.</li>
					<li><code>object</code> для более сложных структур данных.</li>
					<li><code>symbol</code> для уникальных идентификаторов.</li>
				</ul>
				<br>
				Подробнее: https://learn.javascript.ru/types#znachenie-undefined
				`
		}
	]
};
