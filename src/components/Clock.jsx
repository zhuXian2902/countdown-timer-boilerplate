/** @format */

import React from 'react';
// added comment
class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clock: '',
			timer: 0,
		};
	}
	formatTime(timeInSeconds) {
		var seconds = timeInSeconds % 60;
		var minutes = Math.floor(timeInSeconds / 60);

		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return minutes + ':' + seconds;
	}

	fun = () => {
		this.myInterval = setInterval(() => {
			this.setState((prev) => {
				return {
					timer: prev.timer - 1,
					clock: this.formatTime(prev.timer - 1),
				};
			});
			if (this.state.timer <= 0) {
				clearInterval(this.myInterval);
				this.props.reset();
			}
		}, 1000);
	};

	componentDidMount() {
		this.setState({ timer: this.props.timeInSeconds }, () => {
			this.fun();
		});
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}

	render() {
		var { timeInSeconds } = this.props;
		//Keep the classes name. Try to inject your code and do not remove existing code
		return (
			<div className="clock">
				<span className="clock-text">
					<h1>{this.state.clock}</h1>
				</span>
			</div>
		);
	}
}

export default Clock;
