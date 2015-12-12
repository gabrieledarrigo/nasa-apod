import React from 'react';
import pictures from '../services/pictures';
import emitter from '../utils/event-emitter';
import { NavMenu } from './NavMenu';
import { NasaPicture } from './NasaPicture';
import { NasaVideo } from './NasaVideo';

export const Nasa = React.createClass({
	getInitialState() {
        return { title: '', url: '', explanation: '', media_type: ''};	
	},
	componentDidMount() {
		emitter.addListener('date:change', this.getData);
		return this.getData();
	},
    getData(date) {
    	console.log(date);
    	
        return pictures.get(date, (err, data) => {
			if (this.isMounted()) {
				this.setState(data);
			}
		});
    },
	getComponentTypes() {
		return {
			image: NasaPicture,
			video: NasaVideo,
            default: NasaPicture
		};
	},
	render() {
        const types = this.getComponentTypes();
		const Component = this.state.media_type in types ? types[this.state.media_type] : types['default'];
			
		return (
            <section id="nasa-apod">
                <NavMenu />
                <Component data={this.state}/>
            </section>
        );
	}
});