import axios from 'axios';
import { QuizQuestionResponse } from 'interfaces/quiz-question-response';
import { useState } from 'react';

interface IUseQuizApi {
  loading: boolean;
  errorMsg: string | null;
  getQuizQuestions(): Promise<void>;
  questions: QuizQuestionResponse[];
  success: boolean;
}

export default function useQuizApi(): IUseQuizApi {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [questions, setQuestions] = useState<QuizQuestionResponse[]>([]);

  async function getQuizQuestions(): Promise<void> {
    setLoading(true);
    setSuccess(false);
    try {
      const questions = await axios.get(
        'https://opentdb.com/api.php?amount=10'
      );

      setQuestions(questions.data.results);
      setSuccess(true);
    } catch (e) {
      if (e instanceof Error) {
        setErrorMsg(e.message);
      } else {
        setErrorMsg('Could not get questions');
      }
    } finally {
      setLoading(false);
    }
  }

  return { loading, errorMsg, getQuizQuestions, questions, success };
}
