import React from "react";
import {GeoJsonLayer, IconLayer, LineLayer, TextLayer} from 'deck.gl';
import DeckglMap from '../common/map/DeckglMap';

const mapUrl = 'https://theroad.web.com:5600/osmdata/osm-bright-gl-style/style.json';

class MapView extends React.Component {
    constructor(props) {
        super(props);

        this.viewport = {
            latitude: 37.35550261189826,
            longitude: 126.98419065112613,
            zoom: 12
        }
        this.geoLayer = {
            id: 'gle-map',
            data: "../data/uiwang_link_2_1.geojson", //data.ROADS,//roads,
            // Styles
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusScale: 10,
            getLineWidth: 5,
            getRadius: 2,
            getFillColor: [0, 250, 0, 255],
            getLineColor: [0, 250, 0, 255],
            // Interactive props
            pickable: true,
            autoHighlight: true,
            onClick: this.onLinkClick,
            //onHover: (info) => console.log('Hovered1:', info.object),
        }

        this.geoLayer2 = {
            id: 'gle-map2',
            data: "../data/uiwang_node3.geojson", //data.ROADS,//roads,
            // Styles
            filled: true,
            pointRadiusMinPixels: 2,
            pointRadiusScale: 10,
            getRadius: 2,
            getFillColor: [100, 100, 80, 180],
            // Interactive props
            pickable: true,
            autoHighlight: true,
            onClick: this.onNodeClick,            
        }

    }
    componentDidMount(){
        //this.geoLayer.data = geoObject;
    }

    onLinkClick = (info) => {
        console.log("link : ", info.object.properties);

    }

    onNodeClick = (info) => {
        console.log("node : ", info.object.properties);

    }

    onViewportChange = (info)=>{
        

    }

    renderTooltip = (info) => {
        if(info.color === null) return;

        console.log("renderTooltip : ",  info.object, info.x, info.y);

        let tp = info.object.geometry.type;

        if(tp==="Point") {
            return {
                html: `<big>${
                  "tooltip"
                }</big><div> ${info.object.properties.NODE_ID} : ${
                    info.object.properties.NODE_NAME
                } </div>`,
                style: {
                  left: info.x,
                  top: info.y,
                },
              };
        }
        else if(tp==="MultiLineString"){
            return {
                html: `<big>${
                  "tooltip"
                }</big><div> ${info.object.properties.LINK_ID}, F: ${
                    info.object.properties.F_NODE 
                }, T:${
                    info.object.properties.T_NODE
                } </div>`,
                style: {
                  left: info.x,
                  top: info.y,
                },
              };

        }

        

    }

    render() {
        console.log("this.geoLayer:", this.geoLayer.data);
        const layers = [];
        layers.push(new GeoJsonLayer(this.geoLayer));
        layers.push(new GeoJsonLayer(this.geoLayer2));

        console.log("mapUrl : ", mapUrl);

        return(
            <div style={{display:"flex", flexGrow: 1, height: "100%", overflowY:"auto", overflowX:"hidden", position:"relative"}}>
                <DeckglMap 
                    mapUrl={mapUrl}
                    viewport={this.viewport}
                    onViewpostChange={this.onViewportChange}
                    layers={layers} 
                    getTooltip={this.renderTooltip}
                    />

            </div>
        )
    }
}

export default MapView;