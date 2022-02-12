import React from 'react';
import MapGL from 'react-map-gl';
import DeckGL from 'deck.gl';
import PropTypes from 'prop-types'; 

class DeckLayer extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        layers: [],
        viewport: {
            width: '100%',
            height: '100%',
            latitude: 37.303063289556476,
            longitude: 126.962489877627974,
            zoom: 7,
        },       
    }

    render() {

        //console.log('deck gl',this.props)
        return (
            <DeckGL 
                initialViewState={this.props.viewport} 
                controller={true} 
                layers={this.props.layers} 
                //getCursor={() => 'url(/static/cursor20_26.png), auto'}            // custom cursor
                //getCursor={({isDragging}) => isDragging ? 'grabbing' : 'grab'}      // default cursor
                getCursor={({isDragging}) => this.props.isHover ? 'url(/static/cursor20_26.png), auto' : isDragging ? 'grabbing' : 'grab'}
                onViewStateChange={this.props.onViewpostChange}
                >

            </DeckGL>
        )
    }
}

//---------------------------------------------------------------------------
// PropTypes
//---------------------------------------------------------------------------
DeckLayer.propTypes = {
    mapUrl: PropTypes.string.isRequired,
    layers: PropTypes.array.isRequired,
    viewport: PropTypes.object.isRequired,  
    onViewpostChange: PropTypes.func.isRequired,
    isHover: PropTypes.bool,
}

export default DeckLayer;