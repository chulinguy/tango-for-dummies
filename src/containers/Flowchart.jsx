import React from 'react';
import ImageMapHover from './ImageMapHover';

class Flowchart extends React.Component {
  componentDidMount() {
    $('img[usemap]').rwdImageMaps();
  }

  render() {
    return (
      <div className="BS col-xs-12 col-sm-8" id="left">
        <div id="myDiagramDiv">
          <img id="flowchart" alt="" src="/images/Tango_for_dummies.jpg" useMap="#image-map" />
          <map name="image-map">
            <ImageMapHover title="Weight Change" coords="409,1,643,48" number="1" />
            <ImageMapHover title="The Cross" coords="443,229,546,182" number="4" />
            <ImageMapHover title="Parada Pasada" coords="515,279,672,324" number="6" />
            <ImageMapHover title="Giro" coords="459,436,619,482" number="8" />
            <ImageMapHover title="Gancho" coords="313,279,415,325" number="5" />
            <ImageMapHover title="Ocho" coords="832,360,911,404" number="7" />
            <ImageMapHover title="Rock Turn" coords="439,514,601,560" number="9" />
            <ImageMapHover title="Parallel Walking" coords="12,91,236,137" number="2" />
            <ImageMapHover title="Cross Walking" coords="739,86,949,131" number="3" />
          </map>
        </div>
      </div>
    );
  }
}

export default Flowchart;
