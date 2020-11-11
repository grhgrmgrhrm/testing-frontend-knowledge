
/* HTML markup for beginning and end of code snippets */
const start = `<pre><code class='language-javascript'>`;
const end = `</code></pre>`;

/***********************************
 * Create Code Snippets
 *********************************** */

const FUNCTION_WARNING = {
snippet:`
${start}
<р class=”warning” >Don’t do it.< /р>
<р>Do it.< /р>
<р class=” warning ” >Nooo, don’t do it.< /р>
${end}`
};

const SELECTOR_ID = {
snippet:`
${start}
<code>< img id=”mainpic” src=”cat.png” ></code>
${end}`
};


/***********************************
* Export Challenge Array
*********************************** */

export default {
	title: "CSS",
	category: "CSS and ",
	challenges: [
		{
    	title: `Выберите соответствующий HTML-тег, используемый для самого большого заголовка`,
    	subtitle: `heading-elements`,
    	choices: [
				"H1",
				"Heading",
				"Head",
				"H6",
    			"None",
    	],
    	solution: `0`,
    	explanation: `
				HTML элементы <code><Н1> – <Н6></code> представляют собой 6 уровней заголовков секций. <code><Н1></code> это наибольший заголовок и
				<code><Н6></code> - наименьший <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements
				`
    },
    {
    	title: `Rаков правильный вариант выбора только абзацев с именем класса “warning”? ${FUNCTION_WARNING.snippet}`,
    	subtitle: `select-paragraphs`,
    	choices: [
				"p { }",
				"Нет правильного ответа",
				"#warning { } ",
				".warning { } ",
				"warning { } ",
    	],
    	solution: `3`,
			explanation: `
				Селекторы класса позволяют задавать стили для одного и более элементов с одинаковым именем класса, 
				размещенных в разных местах страницы или на разных страницах сайта. <br>
				Подробнее: https://html5book.ru/osnovy-css/#part2
				`
		},
		{
    	title: `Выберите правильный вариант, чтобы выбрать это изображение по его идентификатору? ${SELECTOR_ID.snippet}`,
    	subtitle: `selector-id`,
    	choices: [
				"mainpic { } ",
				".mainpic { } ",
				"Нет правильного ответа",
				"img { } ",
				"#mainpic { } ",
    	],
    	solution: `4`,
			explanation: `
				Селектор идентификатора позволяет форматировать один конкретный элемент. 
				Значение id должно быть уникальным, на одной странице может встречаться только один раз 
				и должно содержать хотя бы один символ. Значение не должно содержать пробелов.<br>
				Подробнее: https://html5book.ru/osnovy-css/#part2
				`
		},
		{
    	title: `Каков правильный вариант выбора всех тегов <code>< p ></code> на странице?`,
    	subtitle: `selector-all-tags`,
    	choices: [
				".p { } ",
				"< p > { } ",
				"p { } ",
				"#p { } ",
				"Нет правильного ответа"
    	],
    	solution: `2`,
			explanation: `
				Селекторы элементов позволяют форматировать все элементы данного типа на всех страницах сайта. 
				Например, Н1 {font-family: Lobster, cursive;} задаст общий стиль форматирования всех заголовков Н1.
				<br>
				Подробнее: https://html5book.ru/osnovy-css/#part2
				`
		},
		{
    	title: `Для пользователей, использующих клавишу Tab для навигации по веб-сайтам, какое свойство представляет 
    			собой этот способ перемещения от одного элемента к другому?`,
    	subtitle: `navigation-tab`,
		choices: [
			"a:link",
			"a:active",
			"a:focus",
			"a:visited",
			"Нет правильного ответа"
		],
    	solution: `2`,
			explanation: `
				 <code>:focus</code> — ссылки, а также элементы форм, которые активированы посредством курсора мыши или на которые 
				 перешли с помощью клавиатуры (кнопка TAB);<br>
				 Подробнее: https://html5book.ru/psevdoklassy/#part1
				 `
    	},
		{
			title: `Выберите соответствующий HTML-тег для вставки разрыва строки`,
			subtitle: `tag for break`,
			choices: [
				"brbr",
				"break",
				"lb",
				"br",
				"p",
			],
			solution: `3`,
			explanation: `
				HTML-элемент < br > устанавливает перевод строки в тексте (возврат каретки). 
				Он полезен при написании поэмы или адреса, где важно деление на строки.
				<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/br
				`
		},
		{
			title: `Выберите свойство, которое используется для изменения стиля списка, чтобы показать римские цифры вместо обычных чисел`,
			subtitle: `list style roman numerals`,
			choices: [
				"list-bullet-type:roman-numerals; ",
				"list-style-type:upper-roman; ",
				"list-style:roman; ",
				"list-type:roman; ",
			],
			solution: `1`,
			explanation: `
				HTML-тег < ol > определяет упорядоченный список. Упорядоченный список может быть числовым или алфавитным
				<br>
				Подробнее: https://www.w3schools.com/html/html_lists_ordered.asp
				`
		},
		{
			title: `Укажите свойство, используемое для создания пространства между границей элемента и внутренним содержимым`,
			subtitle: `inside space around an element content`,
			choices: [
				"spacing",
				"margin",
				"border",
				"padding",
			],
			solution: `3`,
			explanation: `
				Свойство padding устанавливает внутренние отступы/поля со всех сторон элемента. 
				Область отступов это пространство между содержанием элемента и его границей. 
				Отрицательные значения не допускаются.
				<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/CSS/padding
				`
		},
		{
			title: `Выберите свойство, которое используется для создания интервала вокруг HTML-элементов`,
			subtitle: `properties to create space around elements`,
			choices: [
				"margin",
				"spacing",
				"padding",
				"border",
			],
			solution: `0`,
			explanation: `
				Свойства CSS margin используются для создания пространства вокруг элементов за пределами любых определенных границ. 
				С помощью CSS у вас есть полный контроль над полями. 
				Существуют свойства для установки поля для каждой стороны элемента (сверху, справа, снизу и слева).
				<br>
				Подробнее: https://developer.mozilla.org/en-US/docs/Web/CSS/margin
				`
		},
		{
			title: `Выберите правильный вариант, чтобы открыть ссылку в новом окне браузера`,
			subtitle: `option to open a link in a new browser window`,
			choices: [
				"a href=\"url\" new ",
				"a href=\"url\" target=\"_blank\" ",
				"a href=\"url\" target=_window\" ",
				"a href=\"url\" target=\"new\" ",
			],
			solution: `1`,
			explanation: `
				Атрибут target указывает, где следует открыть связанный документ.
				<br>
				<code>< a href="https://www.example.com" target="_blank">Visit example.com< /a></code>
				<br>
				Подробнее: https://www.w3schools.com/tags/att_a_target.asp
				`
		},
		{
			title: `Выберите свойство, используемое для установки интервала между строками текста`,
			subtitle: `property used to set the spacing in between lines of text`,
			choices: [
				"line-height",
				"spacing",
				"line-spacing",
				"letter-spacing",
			],
			solution: `0`,
			explanation: `
				Свойство CSS line-height устанавливает величину пространства между строками, например в тексте. 
				В блочных элементах оно указывает минимальную высоту блоков строк внутри элемента.
				<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/CSS/line-height
				`
		},
		{
			title: `В CSS выберите свойство, используемое для установки цвета фона изображения`,
			subtitle: `property used to set the background color of an image`,
			choices: [
				"background:color",
				"color",
				"background-color",
				"color:background",
			],
			solution: `2`,
			explanation: `
				Свойство <code>background-color</code> устанавливает цвет фона элемента. Цвет рисуется за фоновыми изображениями. 
				Для блочных элементов цвет фона распространяется на всю ширину и высоту блока элемента, 
				для строчных — только на область их содержимого. 
				<br>
				Подробнее: https://html5book.ru/css-background/#background-color
				`
		},
		{
			title: `Выберите соответствующую опцию для стилизации элемента таким образом, чтобы 
			следующий элемент появлялся прямо рядом с ним, а не под ним, если ширина обоих элементов 
			в совокупности меньше, чем у элемента контейнера`,
			subtitle: `option to style an element so that the next element`,
			choices: [
				"display:horizontal",
				"display:left",
				"display:inline",
			],
			solution: `2`,
			explanation: `
				Свойство display (CSS) определяет тип отображения (display type) элемента, имеющий два основных свойства, 
				определяющих генерацию боксов — внешний тип отображения определяет расположение бокса 
				в схеме потока (flow layout) и внутренний тип отображения определяет расположение дочерних элементов бокса 
				(бокс - это прямоугольная область, являющаяся изображением элемента).
				<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/CSS/display
				`
		},
		{
			title: `Выберите свойство, чтобы установить изображение в списке вместо стандартного маркера`,
			subtitle: `property to set an image in a list instead of a standard bullet`,
			choices: [
				"list-image:",
				"list-style-image:",
				"list-image-src:",
				"image-list:",
			],
			solution: `1`,
			explanation: `
				CSS-свойство <code>list-style-image</code> устанавливает изображение, используемое в качестве маркера списка.
				<br>
				Подробнее: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-image
				`
		},
		{
			title: `Какой из следующих псевдоклассов означает элемент, на который пользователь в данный момент наводит курсор мыши?`,
			subtitle: `properties of the anchor element`,
			choices: [
				":link",
				":visited",
				":hover",
				":active",
			],
			solution: `2`,
			explanation: `
				CSS псевдокласс <code>:hover</code> срабатывает, когда пользователь наводит на элемент мышью, но не обязательно активирует его
				<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/CSS/:hover
				`
		},
		{
			title: `Каков правильный HTML-код для ссылки на внешнюю таблицу стилей?`,
			subtitle: `What is the correct HTML for referring to an external style sheet`,
			choices: [
				" < link rel=\"stylesheet\" type=\"text/css\" href=\"mystyle.css\" >",
				" < stylesheet>mystyle.css</stylesheet >",
				" < style src=\"mystyle.css\" >"
			],
			solution: `0`,
			explanation: `
				Внешняя таблица стилей подключается к веб-странице с помощью тега < link >, расположенного внутри раздела < head >< /head >. 
				Такие стили работают для всех страниц сайта. 
				<br>
				Подробнее: https://html5book.ru/osnovy-css/#part1
				`
		},
		{
			title: `Какой HTML-тег используется для определения внутренней таблицы стилей?`,
			subtitle: `Which HTML tag is used to define an internal style sheet`,
			choices: [
				"< css >",
				"< script >",
				"< style >"
			],
			solution: `2`,
			explanation: `
				Внутренние стили встраиваются в раздел < head >< /head > HTML-документа и определяются внутри тега < style >< /style >. 
				Внутренние стили имеют приоритет над внешними, но уступают встроенным стилям (заданным через атрибут style).  
				<br>
				Подробнее: https://html5book.ru/osnovy-css/#part1
				`
		}
	]
};
