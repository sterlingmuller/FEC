import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../App/AppContext.jsx';
import axios from 'axios';
import moment from 'moment';

import IndividualQuestion from './individualQuestion.jsx';
import Answers from './answers.jsx';


//need to refactor answers to use API request for each answer
const AnswersList = (props) => {
  const [answers, setAnswers] = useState([])
  const [count, setCounter] = useState(1)
  const [page, setPage] = useState(1)

  const { question_id } = props.question

  function fetchAnswers() {
    axios
      .get(`/api/qa/questions/${question_id}/answers?page=${page}&count=${count}`)
      .then(res => setAnswers(res.data.results))

  }

  useEffect(() => {
    fetchAnswers()
  }, [])

  return (
    <div>
      <div style={{ marginTop: "10px" }}>
        {answers.map((answer => {
          return (<Answers key={answer.answer_id} answer={answer} />)
        }))}
      </div>
    </div>
  )
}

export default AnswersList
