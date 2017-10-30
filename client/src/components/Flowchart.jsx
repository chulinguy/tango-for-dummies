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
        <img id='flowchart' src='https://drive.google.com/uc?export=download&id=0BzybsaJP9M7MZGFQeUlMVHpsNVk' usemap="#image-map"/>
        <map name="image-map">
          <area target="_blank" alt="cruzada" title="cruzada" href="/crusada" coords="443,229,546,182" shape="rect"/>
          <area target="_blank" alt="parada" title="parada" href="/parada" coords="515,279,672,324" shape="rect"/>
          <area target="_blank" alt="giro" title="giro" href="/giro" coords="459,436,619,482" shape="rect"/>
          <area target="_blank" alt="gancho" title="gancho" href="/gancho" coords="313,279,415,325" shape="rect"/>
          <area target="_blank" alt="ocho" title="ocho" href="/ocho" coords="832,360,911,404" shape="rect"/>
          <area target="_blank" alt="rockturn" title="rockturn" href="/rockturn" coords="439,514,601,560" shape="rect"/>
          <area target="_blank" alt="weightchange" title="weightchange" href="/weightchange" coords="409,1,643,48" shape="rect"/>
          <area target="_blank" alt="parallelwalking" title="parallelwalking" href="/parallelwalking" coords="12,91,236,137" shape="rect"/>
          <area target="_blank" alt="crosswalking" title="crosswalking" href="/crosswalking" coords="739,86,949,131" shape="rect"/>
        </map>
      </div>
    )
  }
}



export default Flowchart;