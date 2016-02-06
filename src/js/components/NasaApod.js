import React from 'react';
import nasa from '../services/nasa';
import emitter from '../utils/event-emitter';
import { Header } from './Header';
import { Picture } from './Picture';
import { Video } from './Video';

export const NasaApod = React.createClass({
	getInitialState() {
        return { title: '', url: '', explanation: '', media_type: ''};	
	},
	componentDidMount() {
        emitter.addListener('date:change', this.getData);
		return this.getData();
	},
    getData(date) {    	
        return nasa.get(date, (err, data) => {
			if (this.isMounted()) {
				this.setState(data);
			}
		});
    },
	getComponentTypes() {
		return {
			image: Picture,
			video: Video,
            default: Picture
		};
	},
	render() {
        const types = this.getComponentTypes();
		const Component = this.state.media_type in types
				? types[this.state.media_type]
				: types['default'];
			
		return (
            <section id="nasa-apod">
                <Header />
                <Component data={ this.state } />
            </section>
        );
	}
});