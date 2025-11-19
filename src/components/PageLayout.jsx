import React, { useState, useEffect } from "react";
function PageLayout(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      <div 
        style={{
            maxWidth: "100vw",
            minHeight: "100vh",
            position: "relative",
            overflow: "hidden"
        }}
        >
            <div 
            style={{ 
                maxWidth: '1280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 auto',
                paddingLeft: Math.max(40, (100 - (1280 / window.innerWidth) * 100) / 2) + 'px', 
                paddingRight: Math.max(40, (100 - (1280 / window.innerWidth) * 100) / 2) + 'px',
            }}
            >
                {props.children}
            </div>
        </div>
    </div>
    );
}

export default PageLayout;