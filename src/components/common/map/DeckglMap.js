import React from 'react';
import MapGL from 'react-map-gl';
import DeckGL from 'deck.gl';
import PropTypes from 'prop-types'; 

class DeckglMap extends React.PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            layers: [],
            viewport: {
                width: '100%',
                height: '100%',
                latitude: 37.303063289556476,
                longitude: 126.962489877627974,
                zoom: 7,
            },
            geoData: {},
            pointSize: 2,
        }
    }
    

    onViewpostChange = (info) => {

        this.props.onViewpostChange(info)

        let viewport = {...this.state.viewport}
        viewport =info
        this.setState({ viewport })
    }

    render() {

        // console.log('this.props.layers:', this.props.layers);
        // console.log("this.props.mapUrl:", this.props.mapUrl);
        return (
            <DeckGL 
                initialViewState={this.props.viewport} 
                controller={true} 
                layers={this.props.layers} 
                //getCursor={() => 'url(/static/cursor20_26.png), auto'}            // custom cursor
                //getCursor={({isDragging}) => isDragging ? 'grabbing' : 'grab'}      // default cursor
                //getCursor={({isDragging}) => this.props.isHover ? 'url(/static/cursor20_26.png), auto' : isDragging ? 'grabbing' : 'grab'}
                onViewStateChange={this.onViewpostChange}
                // getTooltip={() => ({
                //     text: 'Testing tooltip text'
                //   })}
                getTooltip={this.props.getTooltip}
                >
                
                <MapGL
                {...this.state.viewport}
                width="100%"
                height="100%"
                mapStyle={this.props.mapUrl}
                mapboxAccessToken="pk.eyJ1IjoieXVuZ2lsZG9uZyIsImEiOiJja2RvbmJwcTEwbXJ3MnF0djZ3MzhrNDk2In0.lly8uow9TWthO3ZRHWwi9Q"
                />

            </DeckGL>
        )
    }
}

//---------------------------------------------------------------------------
// PropTypes
//---------------------------------------------------------------------------
DeckglMap.propTypes = {
    mapUrl: PropTypes.string.isRequired,
    layers: PropTypes.array.isRequired,
    viewport: PropTypes.object.isRequired,  
    onViewpostChange: PropTypes.func.isRequired,
    isHover: PropTypes.bool,
    getTooltip: null, 
}

export default DeckglMap;