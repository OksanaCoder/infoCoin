import axios from 'axios';
import shortid from 'shortid';
import cover from '@assets/icons/catecory_cover.svg';

export const categories = [
  {
    title: 'Новости и политика',
    id: shortid.generate(),
    title_image: cover,
  },
  { title: 'Транспорт', id: shortid.generate(), title_image: cover },
  { title: 'Мода и красота', id: shortid.generate(), title_image: '' },
  { title: 'Юмор', id: shortid.generate(), title_image: cover },
  { title: 'Образование', id: shortid.generate(), title_image: '' },
  { title: 'Развлечения', id: shortid.generate(), title_image: '' },
  {
    title: 'Для всей семьи',
    id: shortid.generate(),
    title_image: cover,
  },
  { title: 'Кино и анимация', id: shortid.generate(), title_image: '' },
  { title: 'Кулинария', id: shortid.generate(), title_image: '' },
  { title: 'Игры', id: shortid.generate(), title_image: '' },
  {
    title: 'Хобби и стиль',
    id: shortid.generate(),
    title_image: cover,
  },
  { title: 'Музыка', id: shortid.generate(), title_image: '' },
  {
    title: 'Общественная деятельность',
    id: shortid.generate(),
    title_image: '',
  },
  { title: 'Люди и блоги', id: shortid.generate(), title_image: '' },
  { title: 'Животные', id: shortid.generate(), title_image: cover },
  { title: 'Наука и техника', id: shortid.generate(), title_image: '' },
  { title: 'Спорт', id: shortid.generate(), title_image: '' },
  { title: 'Путешествия', id: shortid.generate(), title_image: '' },
];

const baseURL = '';
// expect const getCategories
export const getCategories = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/categories`,

        { headers: new Headers({ 'Content-Type': 'application/json' }) },
      );

      resolve(response);
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('user', response.config.data);
    } catch (err) {
      reject(err);
    }
  });
};
