import React from 'react';

const TopNews = (props) => {

return (
    <>
      <div className="content-div">
        <div className="title">News</div>
          <div className="fields">
            <div className='grid-container'>
              <div className="main">
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={props.data[0].acf.link} >
                        <div className="container">
                          <img src={props.data[0].acf.image}
                            alt="News feed image" 
                          />
                          <p className="headline">{props.data[0].acf.headline}</p>
                      </div>
                    </a>
                  </div>
                  <div className="feed-neumorphic">
                    <div className="link-grid-container">
                      <div className="feed">Feed</div>
                        {props.data.slice(7).map((post) => (
                          <div className="grid-item" key={post.id}>
                            <a 
                              target="_blank"
                              rel="noopener noreferrer" 
                              alt={`Link to homepage`} 
                              href={post.acf.link} >
                                <div className="link-neumorphic">
                                  <button className="variation2" tabIndex="-1">
                                    {post.acf.headline}
                                  </button>
                                </div>
                            </a>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className="second neumorphic">
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={props.data[1].acf.link} >
                        <div className="container">
                          <img src={props.data[1].acf.image}
                            alt="News feed image" 
                            />
                          <p className="headline">{props.data[1].acf.headline}</p>
                        </div>
                    </a>
                  </div>
                  <div className="third neumorphic">
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={props.data[2].acf.link} >
                        <div className="container">
                          <img src={props.data[2].acf.image}
                            alt="News feed image" 
                          />
                          <p className="headline">{props.data[2].acf.headline}</p>
                        </div>
                    </a>
                  </div>
                  <div className="fourth neumorphic">
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={props.data[3].acf.link} >
                        <div className="container">
                          <img src={props.data[3].acf.image}
                            alt="News feed image" 
                          />
                          <p className="headline">{props.data[3].acf.headline}</p>
                        </div>
                    </a>
                  </div>
                  <div className="fifth neumorphic">
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={props.data[4].acf.link} >
                        <div className="container">
                          <img src={props.data[4].acf.image}
                            alt="News feed image" 
                          />
                          <p className="headline">{props.data[4].acf.headline}</p>
                        </div>
                    </a>
                  </div>
                  <div className="sixth neumorphic">
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={props.data[5].acf.link} >
                        <div className="container">
                          <img src={props.data[5].acf.image}
                            alt="News feed image" 
                          />
                          <p className="headline">{props.data[5].acf.headline}</p>
                        </div>
                    </a>
                  </div>
                  <div className="seventh neumorphic">
                    <a 
                      target="_blank"
                      rel="noopener noreferrer" 
                      alt={`Link to homepage`} 
                      href={props.data[6].acf.link} >
                        <div className="container">
                          <img src={props.data[6].acf.image}
                            alt="News feed image" 
                          />
                          <p className="headline">{props.data[6].acf.headline}</p>
                        </div>
                    </a>
                  </div>
            </div>
        </div>
      </div>
              
      <style jsx>{`

              html, body, .grid-container { height: 100%; margin: 0; }

              button {
                outline: none;
              }

              img {
                width: 100%;
    height: 100%;
    object-fit: cover;
                box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
              }

              .content-div {
                align-self: start;
                padding: 30px 30px 30px 30px;
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: 13px 13px 20px #cbced1,
                            -13px -13px 20px #ffffff;
              }
            
              .title {
                position: relative;
                text-align: center;
                font-size: 20px;
                letter-spacing: 0.5px;
                color: gray;
              }

              .feed {
                position: relative;
                text-align: center;
                font-size: 20px;
                letter-spacing: 0.5px;
                padding: 15px;
                color: gray;
              }
            
              .fields {
                width: 100%;
                padding: 30px 5px 5px 5px;
              }

              .grid-container {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 2fr 1fr 1fr;
                gap: 2rem 2rem;
                grid-template-areas: "main main feed-neumorphic" "second third fourth" "fifth sixth seventh";
              }

              .grid-container *:after { 
                position: absolute;
                top: 0;
                left: 0;
              }

              .headline {
                position: absolute;
                top: 70%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(0, 0, 0, 0.5);
                padding: 5px;
                width: 100%;
                font-size: 1.2vw;
                text-overflow: hidden;
              }

              .container {
                position: relative;
                text-align: left;
                color: white;
              }

              .container img {
                vertical-align: middle;
                transition: all 0.3s ease-in-out 0s;
                -moz-transition: all 0.3s ease-in-out 0s;
                -webkit-transition: all 0.3s ease-in-out 0s;
                -o-transition: all 0.3s ease-in-out 0s;
              }

              .container:hover img {
                transform: scale(1.04);
                -moz-transform: scale(1.04);
                -webkit-transform: scale(1.04);
                -o-transform: scale(1.04);
              }
              
              .content {
                position: absolute;
                bottom: 0;
                color: gray;
                text-align: left;
                padding: 10px;
              }
            
              .main {  
                grid-area: main;                
                align-items: center;
                text-align: center;
              }

              .feed-neumorphic {  
                grid-area: feed-neumorphic;                
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: inset 5px 5px 5px #cbced1,
                          inset -5px -5px 5px #ffffff;
                transition: all 2s ease-in-out;
                overflow: scroll;
                padding: 15px;
              }

              .link-grid-container {
                display: grid;
                grid-template-columns: auto;
                grid-gap: 15px;
                justify-items: center;
                align-items: center;
              }
            
              .second { 
                grid-area: second;
              }
            
              .third {  
                grid-area: third;
              }
            
              .fourth {  
                grid-area: fourth;
              }
            
              .fifth {  
                grid-area: fifth;
              }
              
              .sixth {  
                grid-area: sixth;
              }
            
              .seventh {  
                grid-area: seventh;
              }

              .grid-item {
                text-align: center;
              }  

              .link-neumorphic {
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: 6px 6px 16px #cbced1,
                          -6px -6px 26px #ffffff;
                width: 250px;
                height: 50px;
                overflow: hidden;
                position: relative;
                cursor: pointer;

                transition: all 0.3s ease-in-out 0s;
                -moz-transition: all 0.3s ease-in-out 0s;
                -webkit-transition: all 0.3s ease-in-out 0s;
                -o-transition: all 0.3s ease-in-out 0s;
              }

              .link-neumorphic:hover {
                transform: scale(1.07);
                -moz-transform: scale(1.07);
                -webkit-transform: scale(1.07);
                -o-transform: scale(1.07);
              }

              .variation2 {
                font-family: 'Do Hyeon', sans-serif;
                color: gray;
                cursor: pointer;
                border: none;
                border-radius: 5px;
                background-color: transparent;
                font-size: 0.8rem;
                position: relative;
                top: 50%;
                transform: translateY(-50%);
              }

              .neumorphic {
                border-radius: 5px;
                background: #ecf0f3;
                box-shadow: 13px 13px 20px #cbced1,
                              -13px -13px 20px #ffffff;
                transition: all 0.5s ease-in-out;
              }

              @media only screen and (max-width: 1024px) {
               

                .headline {
                  font-size: 1.6vw;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  padding-bottom: 0px;
                }

                .feed {
                  font-size: 15px;
                }

                .link-neumorphic {
                  width: 100px;
                  height: 30px;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                }

                .variation2 {
                  font-size: 0.5rem;
                  display: inline-block;
                  vertical-align: middle;
                  top: 0;
                  transform: none;
                }
              }
            
              @media only screen and (min-width: 1500px) {
                
              }
      `}</style> 
    </>
  );
}

export default TopNews;