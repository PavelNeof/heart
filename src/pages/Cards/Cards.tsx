import 'react';
import axios from 'axios';
import { getAllCards, getSingleCard, searchCards } from '../../common/api';
import { useNavigate } from 'react-router-dom';

const Cards = () => {
  const navigate = useNavigate();
  const handler = async () => {
    try {
      const response = await axios.request(getAllCards({ health: '30', locale: 'frFR' }));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handler2 = async () => {
    try {
      const response = await axios.request(getSingleCard('Carnirloc', { locale: 'frFR' }));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handler3 = async () => {
    try {
      const response = await axios.request(searchCards('Eudora'));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={() => navigate('/')}>back</button>
      <button onClick={handler}>тест олл карД</button>
      <button onClick={handler2}>тест сингал карД</button>
      <button onClick={handler3}>сёрч карД</button>
    </div>
  );
};

export default Cards;
