
/* HTML markup for beginning and end of code snippets */


/***********************************
 * Create Code Snippets
 *********************************** */


/***********************************
* Export Challenge Array
*********************************** */

export default {
	title: "HTML",
	category: "HTML and Basic Webpage Structures",
	challenges: [
	{
    	title: `С помощью какого атрибута объединяются ячейки таблицы по вертикали?`,
    	subtitle: `s pomoshchyu kakogo atributa obedinyayutsya yachejki tablicy po vertikali`,
    	choices: [
				"rowspan",
				"union",
				"colspan",
				"unity",
    	],
    	solution: `0`,
    	explanation: `
				Для объединения двух и более ячеек в одну используются атрибуты colspan и rowspan теги. 
				Атрибут colspan устанавливает число ячеек объединяемых по горизонтали. 
				Аналогично работает и атрибут rowspan, с тем лишь отличием, что объединяет ячейки по вертикали.<br>
				Подробнее: https://html5book.ru/html-table/`
    },
    {
    	title: `Какой тег расставляет акценты в тексте, выделяя полужирным?`,
    	subtitle: `kakoj teg rasstavlyaet akcenty v tekste vydelyaya poluzhirnym`,
    	choices: [
				"< strong >жирный< /strong >",
				"< br >жирный< /br >",
				"< p >жирный< /p >",
				"< a >жирный< /a >",
    	],
    	solution: `0`,
			explanation: `
				Элемент < strong > предназначен для контента, который имеет "большое значение", 
				включая вещи большой серьезности или срочности (например, предупреждения). 
				Это может быть предложение, которое имеет большое значение для всей страницы, 
				или вы можете просто попытаться указать, что некоторые слова имеют большее 
				значение по сравнению с соседним контентом. <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/strong
				`
		},
		{
    	title: `С помощью какого тега в HTML создаются ссылки?`,
    	subtitle: `s pomoshch'yu kakogo tega v HTML sozdayutsya ssylki`,
    	choices: [
				"< b >",
				"< i >",
				"< a >",
				"< p >",
    	],
    	solution: `2`,
			explanation: `
				HTML-элемент < a > определяет гиперссылку для перехода на определённое место на странице 
				или на другую страницу в Интернете. Также он может быть использован (в устаревшем варианте) 
				для создания якоря — это место назначения для гиперссылок внутри страницы: так ссылки 
				не ограничены только в перемещении между страницами. <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/a
				`
		},
		{
    	title: `Каких тегов в HTML не существует?`,
    	subtitle: `kakih tegov v HTML ne sushchestvuet`,
    	choices: [
				"Тройных",
				"Парных",
				"Одиночных",
    	],
    	solution: `0`,
			explanation: `
				Каждый HTML-элемент обозначается начальным (открывающим) и конечным (закрывающим) тегом. 
				Открывающий и закрывающий теги содержат имя тега. Парные теги обычно нужны, чтобы оформить некоторый участок текста. 
				Благодаря паре тегов вы можете указать начало и конец этого участка. 
				Но ведь есть теги, которые не предназначены для оформления фрагментов текста. 
				Например, тег для вставки изображения или тег для вставки разделительной полосы. 
				Такие теги добавляют на страницу одиночный объект, и им не нужно для этого заключать в себя какой-то текст. 
				Поэтому их называют одиночными. Примеры таких тегов: < br >, < hr >, < img > <br>
				Подробнее: https://html5book.ru/html-tags/
				`
		},
		{
    	title: `Как вставить картинку в HTML?`,
    	subtitle: `kak vstavit kartinku v HTML`,
		choices: [
			"<code>< img src=\"http://site.com/image.jpg\" ></code>",
			"<code>< image>\"http://site.com/image.jpg\"< /image ></code>",
			"<code>< image source=\"http://site.com/image.jpg\" ></code>",
			"<code>< img>\"http://site.com/image.jpg\"< /img ></code>",
		],
    	solution: `0`,
			explanation: `
				HTML-элемент <code>< img ></code> встраивает изображение в документ. 
				Атрибут <code>src</code> обязателен и содержит путь к изображению, которое вы хотите встроить в документ.<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/img
				`
    	},
		{
			title: `Как правильно оформить нумерованный список?`,
			subtitle: `kak pravilno oformit numerovannyj spisok`,
			choices: [
				"Разделить каждую строку с помощью тега < br >, на каждой новой строке перед текстом добавить число, точку и пробел",
				"Просто написать текст в формате: число, точка, пробел, текст, перенос строки. Браузер автоматически распознает данную структуру",
				"Поместить внутрь тега < ol > теги < li >, внутри которых написать текст",
			],
			solution: `2`,
			explanation: `
				HTML-элемент <code>< ol></code> используется для упорядоченного списка — в частности для пронумерованного списка.<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/ol
				`
		},
		{
			title: `С помощью какого тега нужно задавать подписи к полям формы?`,
			subtitle: `s pomoshchyu kakogo tega nuzhno zadavat podpisi k polyam formy`,
			choices: [
				"label",
				"field",
				"id",
				"type",
			],
			solution: `0`,
			explanation: `
				HTML элемент < label > представляет собой подпись к элементу пользовательского интерфейса.<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/label
				`
		},
		{
			title: `С помощью какого атрибута объединяются ячейки таблицы по горизонтали?`,
			subtitle: `s pomoshchyu kakogo atributa obedinyayutsya yachejki tablicy po gorizontali`,
			choices: [
				"rowspan",
				"unity",
				"colspan",
				"union",
			],
			solution: `2`,
			explanation: `
				Для объединения двух и более ячеек в одну используются атрибуты colspan и rowspan теги. 
				Атрибут colspan устанавливает число ячеек объединяемых по горизонтали. 
				Аналогично работает и атрибут rowspan, с тем лишь отличием, что объединяет ячейки по вертикали. <br>
				Подробнее: https://html5book.ru/html-table/
				`
		},
		{
			title: `С помощью какого атрибута можно задать текст для картинки, который будет отображен, если её не удастся загрузить?`,
			subtitle: `s pomoshchyu kakogo atributa mozhno zadat tekst dlya kartinki kotoryj budet otobrazhen esli eyo ne udastsya zagruzit`,
			choices: [
				"popup",
				"title",
				"alt",
				"caption",
			],
			solution: `2`,
			explanation: `
				Атрибут <code>alt</code> содержит текстовое описание изображения, которое не обязательно, 
				но невероятно полезно для доступности — программы чтения с экрана читают 
				это описание своим пользователям, так они знают какое изображение показано, 
				и так же оно отображается на странице, если изображение не может быть загружено 
				по какой-либо причине. <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/img
				`
		},
		{
			title: `С помощью какого свойства таблицы можно убрать отступы между границами ячеек?`,
			subtitle: `s pomoshchyu kakogo svojstva tablicy mozhno ubrat otstupy mezhdu granicami yacheek`,
			choices: [
				"border-collapse",
				"shift",
				"bold",
				"clap",
			],
			solution: `0`,
			explanation: `
				Свойство CSS <code>border-collapse</code> определяет, имеют ли ячейки внутри <code>< table ></code> общие или отдельные границы. <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/CSS/border-collapse
				`
		},
		{
			title: `Как оформляется комментарий в HTML?`,
			subtitle: `kak oformlyaetsya kommentarij v html`,
			choices: [
				"// комментарий",
				"/ * комментарий * /",
				"< !—комментарий -- >",
			],
			solution: `2`,
			explanation: `
				Тег добавляет комментарий в код документа. Текст комментария не отображается на странице. 
				Разрешается внутрь комментария добавлять другие теги, вложенные комментарии 
				(когда один комментарий расположен внутри другого) недопустимы. <br>
				Подробнее: http://htmlbook.ru/html/%21--
				`
		},
		{
			title: `Что позволяет указать тег title?`,
			subtitle: `chto pozvolyaet ukazat teg title`,
			choices: [
				"Заголовок первого уровня на странице",
				"Название таблицы",
				"Название страницы, которое также будет отображено в заголовке окна браузера",
				"Название маркированного списка",
			],
			solution: `2`,
			explanation: `
				HTML-элемент заголовка <code>< title ></code> определяет заголовок документа, который отображается 
				в заголовке окна браузера или на вкладке страницы. Он содержит только текст, 
				а теги внутри элемента игнорируются.<br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/title
				`
		},
		{
			title: `Какой тег нужно использовать для названия таблицы?`,
			subtitle: `kakoj teg nuzhno ispolzovat dlya nazvaniya tablicy`,
			choices: [
				"name",
				"head",
				"body",
				"caption",
			],
			solution: `3`,
			explanation: `
				Элемент <code>< caption ></code> создает подпись таблицы. 
				Добавляется непосредственно после тега <code>< table ></code>, вне строки или ячейки.  <br>
				Подробнее: https://html5book.ru/html-table/
				`
		},
		{
			title: `С помощью какого тега в таблицах создаются строки?`,
			subtitle: `s pomoshchyu kakogo tega v tablicah sozdayutsya stroki`,
			choices: [
				"< th >",
				"< td >",
				"< tr >",
			],
			solution: `2`,
			explanation: `
				Строки или ряды таблицы создаются с помощью тега <code>< tr ></code>. 
				Количество горизонтальных строк таблицы определяется количеством парных тегов <code>< tr >< /tr ></code> <br>
				Подробнее: https://html5book.ru/html-table/
				`
		},
		{
			title: `Для чего предназначен тег doctype?`,
			subtitle: `dlya chego prednaznachen teg doctype`,
			choices: [
				"Для прикрепления в форме документов с типом .doc",
				"Тег специально введён для медицинских сайтов для указания специальности доктора",
				"Для указания версии HTML, которая используется в документе",
			],
			solution: `2`,
			explanation: `
				В HTML объявление типа документа тегом <code>"< !DOCTYPE html >"</code> - обязательная преамбула, 
				расположенная в верхней части документа. Единственное предназначение тега - не допустить 
				переключение браузера в так называемый режим совместимости (“quirks mode”) во время 
				рендеринга документа; то есть, тег <code>"< !DOCTYPE html >"</code> гарантирует, что браузер с 
				максимальными усилиями будет следовать соответствующей спецификации, 
				а не использовать другой тип рендеринга, несовместимый с некоторыми спецификациями. <br>
				Подробнее: https://www.w3schools.com/tags/ref_html_dtd.asp
				`
		},
		{
			title: `Какое значение атрибута type указывается для поля-галочки в форме?`,
			subtitle: `kakoe znachenie atributa type ukazyvaetsya dlya polya galochki v forme`,
			choices: [
				"name",
				"radio",
				"id",
				"checkbox",
			],
			solution: `3`,
			explanation: `
				Флажки в формах задаются с помощью конструкции <code>< input type="checkbox" ></code>> <br>
				Подробнее: https://html5book.ru/html5-forms/#part8
				`
		},
		{
			title: `Как сделать всплывающую подсказку при наведении на ссылку?`,
			subtitle: `kak sdelat vsplyvayushchuyu podskazku pri navedenii na ssylku`,
			choices: [
				"< a alt=\"Подсказка\" href=\"#\">Ссылка< / a>",
				"< a caption=\"Подсказка\" href=\"#\">Ссылка< / a>",
				"< a title=\"Подсказка\" href=\"#\">Ссылка< /a >",
			],
			solution: `2`,
			explanation: `
				Определяет дополнительную информацию об элементе, задавая всплывающую подсказку для страницы. <br>
				Подробнее: https://html5book.ru/html-attributes/
				`
		},
		{
			title: `С помощью какого свойства изменяется ширина таблицы?`,
			subtitle: `s pomoshchyu kakogo svojstva izmenyaetsya shirina tablicy`,
			choices: [
				"length",
				"size",
				"count",
				"width",
			],
			solution: `3`,
			explanation: `
				Ширина таблицы по умолчанию равна ширине её внутреннего содержимого. 
				Чтобы установить ширину, нужно задать значение для свойства <code>width</code><br>
				Подробнее: https://html5book.ru/html-table/#table
				`
		},
		{
			title: `Как правильно создать вложенный список (когда один список помещается внутри другого)?`,
			subtitle: `kak pravilno sozdat vlozhennyj spisok kogda odin spisok pomeshchaetsya vnutri drugogo`,
			choices: [
				"Внутри тега < ul > поместить ещё один тег < ul >, а внутри него добавлять теги < li >",
				"Внутрь тега < ul > поместить тег < li >, внутри него снова создать тег < ul >, а внутри него < li >",
			],
			solution: `1`,
			explanation: `
				Для создания вложенного списка, надо в родительский список поместить дочерний список так, 
				чтобы все элементы дочернего списка были вложены в элемент <code>< li ></code> родительского списка <br>
				Подробнее: https://html5book.ru/html-lists/#part4
				`
		},
		{
			title: `С помощью какого тега создаются поля формы?`,
			subtitle: `s pomoshchyu kakogo tega sozdayutsya polya formy`,
			choices: [
				"input",
				"parameter",
				"form",
				"field",
			],
			solution: `0`,
			explanation: `
				Элемент <code>< input ></code> создает большинство полей формы. 
				Атрибуты элемента отличаются в зависимости от типа поля, 
				для создания которого используется этот элемент. <br>
				Подробнее: https://html5book.ru/html5-forms/#input
				`
		},
		{
			title: `Как сделать картинку ссылкой?`,
			subtitle: `kak sdelat kartinku ssylkoj`,
			choices: [
				"< img href=\"#\" src=\"promo.png\">",
				"< img link=\"#\" src=\"promo.png\">",
				"< a href=\"#\">< img src=\"promo.png\">< /a>",
			],
			solution: `2`,
			explanation: `
				Атрибут href тега < a > задает путь к документу, на который указывает ссылка, 
				а src тега < img > — путь к графическому файлу. <br>
				Подробнее: http://htmlbook.ru/content/izobrazhenie-v-kachestve-ssylki
				`
		},
		{
			title: `Какое число заголовков H1 считается допустимым?`,
			subtitle: `kakoe chislo zagolovkov pervogo urovnya schitaetsya dopustimym`,
			choices: [
				"1",
				"2",
				"3",
				"4",
			],
			solution: `0`,
			explanation: `
				Вам следует рассмотреть избегание использования < h1 > более раза на страницу.  <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/Heading_Elements
				`
		},
		{
			title: `Для чего используется тег description?`,
			subtitle: `dlya chego ispolzuetsya teg description`,
			choices: [
				"Описание картинок, если они не подгрузятся",
				"Содержание страницы с основными пунктами для удобства пользователей",
				"Описание страниц для поисковых систем",
			],
			solution: `2`,
			explanation: `
				Содержимое этого тега должно включать информацию, подходящую для использования в каталоге страниц, 
				например, в поисковой системе. <br>
				Подробнее: https://html5book.ru/metadannye-dokumenta/
				`
		},
		{
			title: `С помощью какого атрибута задаётся ширина поля textarea?`,
			subtitle: `s pomoshchyu kakogo atributa zadayotsya shirina polya textarea`,
			choices: [
				"width",
				"cols",
				"rows",
				"size",
			],
			solution: `1`,
			explanation: `
				Аттрибут <code>cols</code>: Видимая ширина текстового элемента управления, выраженная в средней ширине символов. 
				Если он указан, то он должен быть положительным целым числом. 
				Если он не указан, то значение по умолчанию равно 20. <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/textarea
				`
		},
		{
			title: `Какую кодировку следует использовать на сайте?`,
			subtitle: `kakuyu kodirovku sleduet ispolzovat na sajte`,
			choices: [
				"UTF-32",
				"UTF-16",
				"WINSOWS-1251",
				"UTF-8 ",
			],
			solution: `3`,
			explanation: `
				Стандартом HTML рекомендуется использовать следующую кодировку: UTF-8 <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/Guide/Localizations_and_character_encodings
				`
		},
		{
			title: `С помощью какого тега следует разделять абзацы?`,
			subtitle: `s pomoshchyu kakogo tega sleduet razdelyat abzacy`,
			choices: [
				"< span >",
				"< p >",
				"< b >",
				"< br >",
			],
			solution: `1`,
			explanation: `
				HTML-элемент <code>< p ></code> представляет собой абзац. Абзацы обычно представлены в 
				визуальной среде в виде блоков текста, отделенных от соседних блоков пустыми 
				строками и/или отступом в первой строке, кроме этого HTML-абзацы могут представлять 
				собой структурную группировку однотипного содержимого, например изображений или полей формы. <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/p
				`
		},
		{
			title: `Как выделить текст курсивом?`,
			subtitle: `kak vydelit tekst kursivom`,
			choices: [
				"< c>курсив< /c >",
				"< hr>курсив< /hr >",
				"< p>курсив< /p >",
				"< em>курсив< /em > ",
			],
			solution: `3`,
			explanation: `
				Элемент < em > предназначен для слов, которые имеют подчеркнутый акцент по сравнению 
				с окружающим текстом, который часто ограничивается словом или словами предложения 
				и влияет на смысл самого предложения. Обычно этот элемент отображается курсивом.  <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/em
				`
		},
		{
			title: `Элемент div является строчным или блочным элементом?`,
			subtitle: `element div yavlyaetsya strochnym ili blochnym elementom`,
			choices: [
				"Блочным",
				"Строчным",
				"Является как строчным, так и блочным элементом",
			],
			solution: `0`,
			explanation: `
				Элемент < div > является блочным элементом и предназначен для выделения 
				фрагмента документа с целью изменения вида содержимого. Как правило, вид 
				блока управляется с помощью стилей. Чтобы не описывать каждый раз стиль 
				внутри тега, можно выделить стиль во внешнюю таблицу стилей, а для тега 
				добавить атрибут class или id с именем селектора.  <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Element/div
				`
		},
		{
			title: `Сколько раз ID элемента может повторяться в коде документа?`,
			subtitle: `skolko raz id elementa mozhet povtoryatsya v kode dokumenta`,
			choices: [
				"Только один раз",
				"Сколько угодно",
				"Один раз и более",
			],
			solution: `0`,
			explanation: `
				Глобальный атрибут <code>id</code> устанавливает элементу уникальный идентификатор ID, 
				имя которого должно быть уникальным в документе (на странице).  <br>
				Подробнее: https://developer.mozilla.org/ru/docs/Web/HTML/Global_attributes/id
				`
		},
		{
			title: `Укажите тег позволяющий подключить к HTML документу скрипты выполняющиеся на стороне клиента`,
			subtitle: `ukazhite teg pozvolyayushchij podklyuchit k HTML dokumentu skripty vypolnyayushchiesya na storone klienta`,
			choices: [
				"< client > ",
				"< applet >",
				"< script >",
				"< object >",
			],
			solution: `2`,
			explanation: `
				Описание ответа <br>
				Подробнее: 
				`
		},
		{
			title: `Выберите правильный вариант для создания ссылки электронной почты`,
			subtitle: `option to create an e-mail link`,
			choices: [
				"mail href=\"xxx@yyy.com\" ",
				"< mail >xxx@yyy.com< /mail> ",
				"a href=\"xxx@yyy.com\"",
				"< a href=mailto:xxx@yyy.com>xxx@yyy.com< /a> ",
			],
			solution: `3`,
			explanation: `
				Ссылки mailto используются для перенаправления на адрес электронной почты вместо URL-адреса веб-страницы. 
				Когда пользователь нажимает на ссылку mailto, открывается почтовый клиент по умолчанию на компьютере 
				посетителя и предлагает отправить сообщение на адрес электронной почты, указанный в ссылке Mailto.
				<br>
				Подробнее: https://html5book.ru/hyperlinks-in-html/#part5
				`
		},
		{
			title: `Выберите правильный HTML-код для создания гиперссылки`,
			subtitle: `option to create an hyperlink`,
			choices: [
				"a url=\"http://example.com\">example.com ",
				"< а href=\"http://example.com\">example< /а> ",
				"a>http://example.com",
				"a name=\"http://example.com\">example.com",
			],
			solution: `1`,
			explanation: `
				Гиперссылки создаются с помощью парного тега < a >< /a >. Внутрь тега помещается текст, который будет 
				отображаться на веб-странице. Текст ссылки отображается в браузере с подчёркиванием, 
				цвет шрифта — синий, при наведении на ссылку курсор мыши меняет вид.
				Обязательным параметром тега < a > является атрибут href, который задает URl-адрес веб-страницы. 
				<br>
				Подробнее: https://html5book.ru/hyperlinks-in-html/#part1
				`
		}
	]
};
