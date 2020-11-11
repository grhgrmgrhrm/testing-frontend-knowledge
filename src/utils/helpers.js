import { fromJS } from 'immutable';

export const shuffle = (array) => {
	const cached = {};
	const max = array.length - 1;
	const randomize = () => Math.floor(Math.random() * (max + 1));
	const generateIndex = () => {
			let index = randomize();
			while (index in cached) {
					index = randomize();
			};
			cached[index] = true;
			return index;
	};
	return array.reduce((shuffled, element) => {
		const index = generateIndex();
		shuffled[index] = element;
		return shuffled;
	}, []);
};

export const shuffleAnswers = (challenge) => {
	const solution = challenge.choices[+challenge.solution];
	challenge.choices = shuffle(challenge.choices);
	const newSolutionIndex = challenge.choices.indexOf(solution);
	challenge.solution = newSolutionIndex;
	return challenge;
};

export const shuffleQuiz = (quiz) => {
	const JSquiz = quiz.toJS();
	JSquiz.challenges = shuffle(JSquiz.challenges);
	JSquiz.challenges = JSquiz.challenges.map(shuffleAnswers);
	return fromJS(JSquiz);
};


export const findQuiz = (selected, quizzes) => {
	return quizzes.filter(quiz => quiz.get('title') === selected).first();
};


export const validateQuestionName = (title, question, quizzes) => {
	const quiz = findQuiz(title, quizzes);
	if (!quiz) return false;
	const challenges = quiz.get('challenges');
	return challenges.reduce((answer, challenge) => {
		if (answer) return answer;
		const challengeTitle = challenge.get('subtitle');
		if (challengeTitle === question) return question;
		const end = challengeTitle.length - 1;
		if (challengeTitle.charAt(end) === '?') {
			if (question === challengeTitle.slice(0, end)) {
				return challengeTitle;
			}
		}
		return false;
	}, false);
};

export const createScoreMeter = (correct, current, total) => {
	let count = 0;
	let tower = [];
	while (correct > 0) {
		tower.push('success');
		correct--;
		count++;
	}
	while (count < current) {
		tower.push('failure');
		count++;
	}
	while (count < total) {
		tower.push('blank');
		count++;
	}
	return tower;
};


export const setHtmlMetadata = (subtitle) => {
	var elements = document.getElementsByTagName('meta');
	for (var i = 0; i < elements.length; i++) {
	  if (elements[i].getAttribute("property") === "og:title") {
	     elements[i].setAttribute('content', subtitle);
	  }
	}
};

/* Screen size helper */
export const mapScreenSizeToProps = (screenSize) => {
  return { screen: {
    isTablet: screenSize['small'],
    isMobile: screenSize['mobile'],
    isDesktop: screenSize['> small']
  }}
};
