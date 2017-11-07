import React from 'react';
import moves from './moves.json';
import ReactHover from 'react-hover';
import ImageMapHover from './ImageMapHover.jsx';

class Flowchart extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    $('img[usemap]').rwdImageMaps();
  }

  // render() {
  //   return (
  //     <div id ='myDiagramDiv'>
  //       <img id='flowchart' src='https://drive.google.com/uc?export=download&id=0BzybsaJP9M7MZGFQeUlMVHpsNVk' useMap="#image-map"/>
  //       <map name="image-map">
  //         <area onClick={this.props.imgChange.bind(null,1)} alt="weightchange" coords="409,1,643,48" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,4)} alt="cruzada" coords="443,229,546,182" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,6)} alt="parada" coords="515,279,672,324" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,8)} alt="giro" coords="459,436,619,482" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,5)} alt="gancho" coords="313,279,415,325" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,7)} alt="ocho" coords="832,360,911,404" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,9)} alt="rockturn" coords="439,514,601,560" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,2)} alt="parallelwalking"  coords="12,91,236,137" shape="rect"/>
  //         <area onClick={this.props.imgChange.bind(null,3)} alt="crosswalking" coords="739,86,949,131" shape="rect"/>
  //       </map>
  //     </div>
  //   )
  // }

  render() {
    return (
      <div id ='myDiagramDiv'>
        <img id='flowchart' src='https://drive.google.com/uc?export=download&id=0BzybsaJP9M7MZGFQeUlMVHpsNVk' useMap="#image-map"/>
        <map name="image-map">
          <ImageMapHover title="Weight Change" coords="409,1,643,48" number="1" imgChange={this.props.imgChange}/>
          <ImageMapHover title="The Cross" coords="443,229,546,182" number="4" imgChange={this.props.imgChange}/>
          <ImageMapHover title="Parada Pasada" coords="515,279,672,32" number="6" imgChange={this.props.imgChange}/>
          <ImageMapHover title="Giro" coords="459,436,619,482" number="8" imgChange={this.props.imgChange}/>
          <ImageMapHover title="Gancho" coords="313,279,415,325" number="5" imgChange={this.props.imgChange}/>
          <ImageMapHover title="Ocho" coords="832,360,911,404" number="7" imgChange={this.props.imgChange}/>
          <ImageMapHover title="Rock Turn" coords="439,514,601,560" number="9" imgChange={this.props.imgChange}/>
          <ImageMapHover title="Parallel Walking" coords="12,91,236,137" number="2" imgChange={this.props.imgChange}/>
          <ImageMapHover title="Cross Walking" coords="739,86,949,131" number="3" imgChange={this.props.imgChange}/>
        </map>
      </div>
    )
  }
}



export default Flowchart;