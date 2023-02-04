import ReactDOM from 'react-dom/client';
import { getDefaultOpenWeatherMapResponse, getEmptyWeatherWidgetProps } from './api/openWeatherMapHelper';
import WeatherWidget from './Presentation/WeatherWidget';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

getDefaultOpenWeatherMapResponse();

root.render(<WeatherWidget {...getEmptyWeatherWidgetProps()} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
