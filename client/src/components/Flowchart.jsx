import React from 'react';

class Flowchart extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount(){
    $('img[usemap]').rwdImageMaps();
  }

  render() {
    return (
      <div id ='myDiagramDiv'>
        <img id='flowchart' src='https://drive.google.com/uc?export=download&id=0BzybsaJP9M7MZGFQeUlMVHpsNVk' useMap="#image-map"/>
        <map name="image-map">
          <area onClick={this.props.imgChange.bind(null,1)} alt="weightchange" title="weightchange" coords="409,1,643,48" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,4)} alt="cruzada" title="cruzada" coords="443,229,546,182" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,6)} alt="parada" title="parada" coords="515,279,672,324" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,8)} alt="giro" title="giro" coords="459,436,619,482" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,5)} alt="gancho" title="gancho" coords="313,279,415,325" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,7)} alt="ocho" title="ocho" coords="832,360,911,404" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,9)} alt="rockturn" title="rockturn"  coords="439,514,601,560" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,2)} alt="parallelwalking" title="parallelwalking"  coords="12,91,236,137" shape="rect"/>
          <area onClick={this.props.imgChange.bind(null,3)} alt="crosswalking" title="crosswalking" coords="739,86,949,131" shape="rect"/>
        </map>
      </div>
    )
  }
}



export default Flowchart;