import { searchOnCity } from '../api/openWeatherMapHelper';
import {
	WEATHER_WIDGET_CITY,
	WEATHER_WIDGET_HEADER,
	WEATHER_WIDGET_HUMIDITY,
	WEATHER_WIDGET_TEMPERATURE,
	WEATHER_WIDGET_TEMPERATURE2,
	WEATHER_WIDGET_WIND,
} from '../constants/strings';
import { alertCurrentUrl } from '../utils/utils';
import './WeatherWidget.css';

const WeatherWidget: React.FC<WeatherWidgetProps> = (props) => {
	return (
		<>
			<div id="snowContainer"></div>
			<div className="widget">
				<div className="panel panel-info">
					<div className="panel-heading">
						{WEATHER_WIDGET_HEADER} <b>{props.city}</b>
					</div>
					<ul className="list-group">
						<li className="list-group-item">
							{WEATHER_WIDGET_TEMPERATURE}{' '}
							<b>
								{props.temperature}
								{WEATHER_WIDGET_TEMPERATURE2}
							</b>
						</li>
						<li className="list-group-item">
							{WEATHER_WIDGET_HUMIDITY} <b>{props.humidity}</b>
						</li>
						<li className="list-group-item">
							{WEATHER_WIDGET_WIND} <b>{props.wind}</b>
						</li>
						<li className="list-group-item">
							<form className="form-inline">
								<div className="form-group">
									<input
										type="text"
										className="form-control"
										id="city"
										placeholder={WEATHER_WIDGET_CITY}
									/>
								</div>
								<button
									type="submit"
									className="btn btn-default"
									onClick={(e) => {
										searchOnCity(e);
									}}
								>
									Search
								</button>
							</form>
						</li>
						<li className="list-group-item list-group-item-share">
							<button
								id="share-button"
								type="button"
								className="btn btn-default"
								onClick={() => {
									alertCurrentUrl();
								}}
							>
								Share displayed weather
							</button>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default WeatherWidget;
