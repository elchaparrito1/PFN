import React, { useContext } from 'react';
import Container from './Container';
import viewportContext from './viewportContext';

const Section = (props) => {
  const { width } = useContext(viewportContext);
  // const newsSections = props.data.filter(obj => obj[0].categories == '1287');
  // console.log(newsSections);
return (
  <>
    <Container title={props.title} name={`${props.title.props.children}`} id={`${props.title.props.children}`}>
      {props.data.map((post) => (
        <div className="grid-item" key={post.id} style={width < 1200 ? {zIndex: "0"} : {zIndex: "50"}}>
                <a 
                  target="_blank"
                  rel="noopener noreferrer" 
                  alt={`Link to ${post.acf.title} homepage`} 
                  href={post.acf.url} >
                      <p className="link-title">{post.acf.title}</p>
                </a>
        </div>
      ))}
    </Container>

    <style jsx>{`        
            .grid-item {
              text-align: center;
              position: relative;
            }

            .link-title {
              font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;    
                text-decoration-line: underline;
                color: #000000;
                flex: none;
                order: 0;
                align-self: left;
                margin: 10px 0px;
            }

            .link-title:hover {
              color: #E32222;
            }

            @media only screen and (max-width: 320px) {
              .link-title {
                font-size: 12px;
              }
            }

            //iphone 5S landscape
            @media only screen and (min-width: 321px) and (max-width: 767px) and (orientation: landscape) {
              .link-title {
                font-size: 12px;
              }
            }

            @media only screen and (min-width: 321px) and (max-width: 767px) {
              .link-title {
                font-size: 14px;
              }
            }

            @media only screen and (min-width: 768px) and (max-width: 1024px) {

            }
    `}</style> 
  </>
)
}

export default Section;

