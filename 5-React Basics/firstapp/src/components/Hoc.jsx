import { useEffect, useState } from "react";


export const withMousePosition = ( WrappedComponent ) => {
   return(props)=>{ 

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  return <WrappedComponent  mousePosition={mousePosition} />;
};
}
export const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>

    </div>
  );
 
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
   
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>

)
  
};

export const withLoading = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading for 2 seconds
      return () => clearTimeout(timer); // Clean up the timer on unmount
    }, []);

    return <WrappedComponent {...props} loading={loading} />;
  };
};

export  const DataDisplay = ({ loading, data }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hoc:</h1>
      <p>{data}</p>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
};

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);
const Data = withLoading(DataDisplay)

function App  ()  {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
     <Data  data={"Higher-Order Component"} />
    </div>
  );
};

export default App;