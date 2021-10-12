import style from './Test.module.css';
import Comments from './Comments/Comments';
import React, {useState} from 'react';


const Test = (props) => {

  const questions = [
    {
      questionText: 'Какая служба позволяет пройти аутентификацию по локальным учетным данным ?',
      answerOptions: [
        {answerText: 'Fileserv', isCorrect: false},
        {answerText: 'LSA', isCorrect: true},
        {answerText: 'LDAP', isCorrect: false},
        {answerText: 'Правильный ответ отсутствует', isCorrect: false}
      ]
    },
    {
      questionText: 'Как бы вы расшифровали аббревиатуру BIOS ?',
      answerOptions: [
        {answerText: 'Basis Internet Office System', isCorrect: false},
        {answerText: 'Binary OS', isCorrect: false},
        {answerText: 'Biotech OS', isCorrect: false},
        {answerText: 'Basic Input/Output System', isCorrect: true}
      ]
    },
    {
      questionText: 'Какого принципа контроля доступа не существует ?',
      answerOptions: [
        {answerText: 'Указательный', isCorrect: true},
        {answerText: 'Ролевой', isCorrect: false},
        {answerText: 'Мандатный', isCorrect: false},
        {answerText: 'Групповой', isCorrect: false}
      ]
    },
    {
      questionText: 'Функция определения прав доступа к ресурсам и управления этим доступом - это ?',
      answerOptions: [
        {answerText: 'Аутенфикая', isCorrect: false},
        {answerText: 'Авторизация', isCorrect: true},
        {answerText: 'Идентификация', isCorrect: false},
      ]
    },
    {
      questionText: 'Единица данных на физическом уровне?',
      answerOptions: [
        {answerText: 'Байт', isCorrect: false},
        {answerText: 'Бит', isCorrect: true},
        {answerText: 'Фрейм', isCorrect: false},
        {answerText: 'Кадр', isCorrect: false}
      ]
    },
    {
      questionText: 'Выберите лишнее ?',
      answerOptions: [
        {answerText: 'Черный ход', isCorrect: true},
        {answerText: 'Кот в мешке', isCorrect: false},
        {answerText: 'Инкапсуляция', isCorrect: false},
        {answerText: 'Матрешка', isCorrect: false}
      ]
    },
  ]


  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [comments, setComments] = useState([    
    {id: 1, img: '/images/png/user.png', title: 'Легкий тест'},
    {id: 2, img: '/images/png/user.png', title: 'Видел и сложнее'},
    {id: 3, img: '/images/png/user.png', title: 'Я бы не хотел проходить его заново'},
    {id: 4, img: '/images/png/user.png', title: 'Слишком мало вопросов'},
    {id: 5, img: '/images/png/user.png', title: 'Ну.... такое'},
  ]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1
    
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  const refresh =  () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
  }

const [textComment, setTextComment] = useState('');

let addComm = () =>{
  if(textComment === ''){
    return
  }
  let newComm = {
    id: 6,
    img: '/images/png/user.png',
    title: textComment
  }
  setComments([...comments, newComm])
  setTextComment('')
};


  return(
  <main className={style.mainTest}>
    <div className={style.test}>

      
      {
        showScore
          ? <div className={style.section_score}>
              <div className={style.result}>Правильных ответов {score} из {questions.length}</div>
              <button className={style.refresh_btn} onClick={refresh}>Попробовать еще раз</button>
            </div>
          : <div className={style.quizz}>
              <div className= {style.question_selection}>
                <div className={style.question_count}>
                  <span>Вопрос {currentQuestion + 1} </span> / {questions.length}
                </div>
                <div className={style.question_text}>{questions[currentQuestion].questionText}</div>
              </div>
              <div className={style.answer_section}>
                {questions[currentQuestion].answerOptions.map(item => (
                  <button onClick={() => handleAnswerOptionClick(item.isCorrect)}>{item.answerText}</button>
                  )
                )}
              </div>
            </div>
        }
      </div>

      <div className={style.comments}>
        <h3 className={style.commentsTitle}>Оставьте коментарий</h3>
        <p><textarea name="text" className={style.feedbackInput} placeholder="Ваше сообщение"
            value={textComment} onChange={(e) => setTextComment(e.target.value)} /></p>
            <button className={style.buttonAdd} onClick={ addComm }>Добавить</button>
        <div className={style.div}>
          {comments.map((comment, idx) => (
            <Comments key={idx} img={comment.img} title={comment.title} />
          ))} 
          </div>
      </div>
    </main>
  )

}

export default Test;