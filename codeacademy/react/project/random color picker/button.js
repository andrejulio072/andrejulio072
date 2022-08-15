import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button
				className={ this.props.light ? 'light-button' : 'dark-button' }>
				Refresh
        OnClick = {this.props.onClick}
			</button>
		);
	}
}
export class Button extends React.Component{}
