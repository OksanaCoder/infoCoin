import AppRouter from '@components/AppRouter/index.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

export const createNotification = (type) => {
  switch (type) {
    case 'info':
      NotificationManager.info('Проверьте почту чтобы активировать аккаунт!', 5000);
      break;
    case 'success':
      NotificationManager.success('Вы успешно зарегистрировались !', 5000);
      break;
      case 'success-login':
        NotificationManager.success('Вы успешно вошли !', 5000);
        break;
    case 'warning':
      NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
      break;
    case 'error':
      NotificationManager.error('Помилка', 'Что-то пошло не так', 5000);
      break;
    default:
      console.log('no match found');
  };
}

const App = () => {
  return (
    <>
      <NotificationContainer/>
      <AppRouter />
    </>
  );
};

export default App;
