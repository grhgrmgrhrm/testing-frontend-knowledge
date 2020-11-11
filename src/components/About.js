import React from 'react';
import { Link } from 'react-router-dom';
import { connectScreenSize } from 'react-screen-size';
import { mapScreenSizeToProps } from '../utils/helpers';

/* About Component */
export default connectScreenSize(mapScreenSizeToProps)(
class About extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }
  handleKeyDown = ({ code }) => {
		if (code === 'Escape') this.props.history.push('/');
	}
  render() {
    const { screen } = this.props;
    return (
      <div className='studyWrapper reviewContainer'>
		<div className='studyContainer'>
          <div className='quizHeader'>
            <div className='quizTitle'>
            <span>О приложении</span>
            </div>
            {!screen.isMobile && <span id="return">
              <Link to='/'>
                <i className="fa fa-times-circle" aria-hidden="true"></i>
              </Link>
            </span>}
          </div>
          <div className='about'>
            <h1>Готовимся к собеседованию по фронтенду</h1>
            <p>Здесь побраны вопросы и ответы, которые задавали на собеседованиях мне.</p>
            <p>А также вопросы, которые задают соискателям на должности фронтенд-разработчиков.</p>
            <p>По этим вопросам можно пробежаться перед собеседованием, чтобы освежить память.
                Ну или сразу можно давать этот тест соискателям на собеседовании =)</p>
            <button className='aboutContribute'>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://bit.ly/36uXP1d">
                Связаться</a>
            </button><br />
            <Link className='finishBtn' to='/'>
                <button>На главную</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
});
