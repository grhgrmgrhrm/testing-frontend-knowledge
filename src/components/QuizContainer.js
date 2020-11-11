import React from 'react'
import { connect } from 'react-redux';
import { connectScreenSize } from 'react-screen-size';
import Quiz from './PracticeQuiz';
import { validateQuestionName, mapScreenSizeToProps } from '../utils/helpers';
import {
	nextQuestion,
	startQuiz,
	startQuizByQuestion,
	startAllQuestionQuiz,
	correct,
	viewResults,
	finishQuiz
} from '../redux/actions';

class QuizContainer extends React.Component {
	componentWillMount() {

		const { title, question, meta } = this.props;
		const originalTitle = title.replace(/-/g, ' ');
		const active = meta.get('active');
		const quizzes = meta.get('quizzes');
		if (!active) {
			if (originalTitle === 'shuffle') {
				this.props.startAllQuestionQuiz();
			} else if (originalTitle && !question) {
				this.props.startQuiz(originalTitle);
			} else if (originalTitle && question) {
				const questionTitle = validateQuestionName(originalTitle, question.replace(/-/g, ' '), quizzes);
				if (questionTitle) {
					this.props.startQuizByQuestion(originalTitle, questionTitle);
				} else {
					this.props.history.push('/');
				}
			}
		}
	}
	componentWillReceiveProps(nextProps) {
		const { title } = this.props;
		const { question } = nextProps;
		const activeQuestion = nextProps.meta
			.getIn(['currentQuestion', 'subtitle'])
		if (!question && activeQuestion) {
			const next = `${title.replace(/\s/g, '-')}/${activeQuestion.replace(/\s/g, '-')}`;
			this.props.history.replace(next);
		}
	}
  render() {
		const { title, question, meta } = this.props;
		const active = meta.get('active');
		/* Only render the quiz if we establish a valid title, question, and active session */
    if (title && question && active) {
			return <Quiz {...this.props} />
		} else {
			return null;
		}
  }
}

const mapStateToProps = (state, props) => {
	const { title, question } = props.match.params;
	return {
		meta: state,
		title: title,
		question
	};
};

const dispatchProps = {
	startQuiz,
	startQuizByQuestion,
	startAllQuestionQuiz,
	nextQuestion,
	correct,
	viewResults,
	finishQuiz,
};

const connectedPractice = connect(mapStateToProps, dispatchProps)(QuizContainer);
export default connectScreenSize(mapScreenSizeToProps)(connectedPractice);
