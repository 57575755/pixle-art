import React, { useState, useEffect } from 'react';
import InputValue2 from './components/GridSizeValue2';

function App() {
  const [heightValue, setHeightValue] = useState(0)
  const [widthValue, setWidthValue] = useState(0)
  const [createGrid, setCreateGrid] = useState(false)
  const [containerSize, setContainerSize] = useState(250)
  const [items, setItems] = useState([]);
  const [color, setColor] = useState('black');
  const [condition, setCcondition] = useState(false)
  const [sellValue, setSellValue] = useState(16)
  const [sellSize, setSellSize] = useState(6)
  const [maxGridHight, setMaxGridHight] = useState(40)
  const [maxGridWidth, setMaxGridWidth] = useState(40)
  const [warning1, setWarning1] = useState('none')
  const [warning2, setWarning2] = useState('none')
  const [borderColor, setBorderColor] = useState('black');
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    const updatePageWidth = () => {
      setPageWidth(document.documentElement.scrollWidth)
    }

    window.addEventListener('resize', updatePageWidth)
    updatePageWidth()

    console.log(pageWidth)
  }, [])

  useEffect(() => {
    if (pageWidth >= 1870) {
      if (sellValue === 16) {
        setMaxGridHight(40)
        setMaxGridWidth(55)
      } else if (sellValue === 15) {
        setMaxGridHight(42)
        setMaxGridWidth(56)
      } else if (sellValue === 14) {
        setMaxGridHight(46)
        setMaxGridWidth(59)
      } else if (sellValue === 13) {
        setMaxGridHight(49)
        setMaxGridWidth(63)
      } else if (sellValue === 12) {
        setMaxGridHight(53)
        setMaxGridWidth(70)
      } else if (sellValue === 11) {
        setMaxGridHight(57)
        setMaxGridWidth(75)
      } else if (sellValue === 10) {
        setMaxGridHight(62)
        setMaxGridWidth(84)
      } else if (sellValue < 10) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      } else if (sellValue > 17) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      }
    } else if (pageWidth < 1870 && pageWidth >= 1500) {
      if (sellValue === 16) {
        setMaxGridHight(40)
        setMaxGridWidth(44)
        if (pageWidth < 1870 && pageWidth > 1660) {
          setWidthValue(44)
        }
      } else if (sellValue === 15) {
        setMaxGridHight(42)
        setMaxGridWidth(46)
        if (pageWidth < 1870 && pageWidth > 1660) {
          setWidthValue(46)
        }
      } else if (sellValue === 14) {
        setMaxGridHight(46)
        setMaxGridWidth(49)
        if (pageWidth < 1870 && pageWidth > 1660) {
          setWidthValue(49)
        }
      } else if (sellValue === 13) {
        setMaxGridHight(49)
        setMaxGridWidth(52)
        if (pageWidth < 1870 && pageWidth > 1660) {
          setWidthValue(52)
        }
      } else if (sellValue === 12) {
        setMaxGridHight(53)
        setMaxGridWidth(56)
        if (pageWidth < 1870 && pageWidth > 1660) {
          setWidthValue(56)
        }
      } else if (sellValue === 11) {
        setMaxGridHight(57)
        setMaxGridWidth(61)
        if (pageWidth < 1870 && pageWidth > 1660) {
          setWidthValue(61)
        }
      } else if (sellValue === 10) {
        setMaxGridHight(62)
        setMaxGridWidth(67)
        if (pageWidth < 1870 && pageWidth > 1660) {
          setWidthValue(67)
        }
      } else if (sellValue < 10) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      } else if (sellValue > 17) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      }
    } else if (pageWidth < 1500 && pageWidth >= 1290) {
      if (sellValue === 16) {
        setMaxGridHight(40)
        setMaxGridWidth(38)
        if (pageWidth < 1500 && pageWidth > 1450) {
          setWidthValue(38)
        }
      } else if (sellValue === 15) {
        setMaxGridHight(42)
        setMaxGridWidth(40)
        if (pageWidth < 1500 && pageWidth > 1450) {
          setWidthValue(40)
        }
      } else if (sellValue === 14) {
        setMaxGridHight(46)
        setMaxGridWidth(42)
        if (pageWidth < 1500 && pageWidth > 1450) {
          setWidthValue(42)
        }
      } else if (sellValue === 13) {
        setMaxGridHight(49)
        setMaxGridWidth(44)
        if (pageWidth < 1500 && pageWidth > 1450) {
          setWidthValue(44)
        }
      } else if (sellValue === 12) {
        setMaxGridHight(53)
        setMaxGridWidth(48)
        if (pageWidth < 1500 && pageWidth > 1450) {
          setWidthValue(48)
        }
      } else if (sellValue === 11) {
        setMaxGridHight(57)
        setMaxGridWidth(52)
        if (pageWidth < 1500 && pageWidth > 1450) {
          setWidthValue(52)
        }
      } else if (sellValue === 10) {
        setMaxGridHight(62)
        setMaxGridWidth(57)
        if (pageWidth < 1500 && pageWidth > 1450) {
          setWidthValue(57)
        }
      } else if (sellValue < 10) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      } else if (sellValue > 17) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      }
    } else if (pageWidth < 1290 && pageWidth >= 1079) {
      if (sellValue === 16) {
        setMaxGridHight(40)
        setMaxGridWidth(30)
        if (pageWidth < 1290 && pageWidth >= 1240) {
          setWidthValue(30)
        }
      } else if (sellValue === 15) {
        setMaxGridHight(42)
        setMaxGridWidth(32)
        if (pageWidth < 1290 && pageWidth >= 1240) {
          setWidthValue(32)
        }
      } else if (sellValue === 14) {
        setMaxGridHight(46)
        setMaxGridWidth(35)
        if (pageWidth < 1290 && pageWidth >= 1240) {
          setWidthValue(35)
        }
      } else if (sellValue === 13) {
        setMaxGridHight(49)
        setMaxGridWidth(37)
        if (pageWidth < 1290 && pageWidth >= 1240) {
          setWidthValue(37)
        }
      } else if (sellValue === 12) {
        setMaxGridHight(53)
        setMaxGridWidth(40)
        if (pageWidth < 1290 && pageWidth >= 1240) {
          setWidthValue(40)
        }
      } else if (sellValue === 11) {
        setMaxGridHight(57)
        setMaxGridWidth(44)
        if (pageWidth < 1290 && pageWidth >= 1240) {
          setWidthValue(44)
        }
      } else if (sellValue === 10) {
        setMaxGridHight(62)
        setMaxGridWidth(46)
        if (pageWidth < 1290 && pageWidth >= 1240) {
          setWidthValue(46)
        }
      } else if (sellValue < 10) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      } else if (sellValue > 17) {
        setMaxGridHight(0)
        setMaxGridWidth(0)
      }
    }
  }, [sellValue, pageWidth])
  


  const ChangeGridSize = (event) => {
    let result = parseInt(event.target.value);
    setSellValue(result);
    console.log(sellValue);
    setSellValue((currentSize) => {
      setSellSize(currentSize);
      return currentSize;
    });
    setHeightValue(0)
    setWidthValue(0)
    setContainerSize(250)
    setItems(null)
    setCreateGrid(false)
    setCcondition(false)
  }

  const handleColor = (event) => {
    setColor(event.target.value);
    setBorderColor(event.target.value)
  }

  const [isMouseDown, setIsMouseDown] = useState(false)

  const handleMouseDown = () => {
    setIsMouseDown(true)
  }

  const handleMouseUp = () => {
    setIsMouseDown(false)
  }

  function Erase() {
    setColor(null)
  }
  
  const MakeGrid = () => {
    setSellValue((currentSize) => {
      setSellSize(currentSize);
      return currentSize;
    });
    setCreateGrid(true);
    setCcondition(true);
    if (sellValue === 16) {
      setContainerSize(250 + heightValue * 16.5);
    } else if (sellValue === 15) {
      setContainerSize(250 + heightValue * 15.56);
    } else if (sellValue === 14) {
      setContainerSize(250 + heightValue * 14.5);
    } else if (sellValue === 13) {
      setContainerSize(250 + heightValue * 13.5);
    } else if (sellValue === 12) {
      setContainerSize(250 + heightValue * 12.5);
    } else if (sellValue === 11) {
      setContainerSize(250 + heightValue * 11.54);
    } else if (sellValue === 10) {
      setContainerSize(250 + heightValue * 10.61);
    } else if (sellSize > 16) {
      setItems(null)
      setContainerSize(450);
      setWarning2('block')
      setWarning1('none')
    } else if (sellSize < 10) {
      setItems(null)
      setContainerSize(450);
      setWarning1('block')
      setWarning2('none')
    }
  }

  useEffect(() => {
    if (condition === true) {
      if (sellValue === 16) {
        setContainerSize(250 + heightValue * 16.5);
      } else if (sellValue === 15) {
        setContainerSize(250 + heightValue * 15.56);
      } else if (sellValue === 14) {
        setContainerSize(250 + heightValue * 14.5);
      } else if (sellValue === 13) {
        setContainerSize(250 + heightValue * 13.5);
      } else if (sellValue === 12) {
        setContainerSize(250 + heightValue * 12.5);
      } else if (sellValue === 11) {
        setContainerSize(250 + heightValue * 11.54);
      } else if (sellValue === 10) {
        setContainerSize(250 + heightValue * 10.61);
      } 
    }
  }, [heightValue]);

  function DeleteGrid() {
    setCreateGrid(false)
    setContainerSize(250)
    setCcondition(false)
    setHeightValue(0)
    setWidthValue(0)
    setItems([null])
  }

  useEffect(() => {
    // Обновляемся при изменении color
    if (sellValue > 9 && sellValue < 17) {
      setWarning1('none')
      setWarning2('none')
      if (createGrid === true) {
        const arr = [];
        for (let i = 0; i < heightValue; i++) {
          const subArr = [];
          for (let j = 0; j < widthValue; j++) {
            const uniqueId = `${i}-${j}`;
            subArr.push(<InputValue2 sellSize={sellSize} sellValue={sellValue} isMouseDown={isMouseDown} color={color} key={uniqueId} />);
          }
          arr.push(<div className="row" key={i}>{subArr}</div>);
        }
        setItems(arr);
      }
    }
  }, [heightValue, widthValue, createGrid, color, isMouseDown, sellValue, sellSize]);

  const InputHeightValue = (event) => {
    setHeightValue(event.target.value)
  }

  const InputWidthValue = (event) => {
    setWidthValue(event.target.value)
  }

  return (
    <div>
      <div style={{height: containerSize}} className="container">
        <h1 className='warning3'>make the screen bigger</h1>
        <div className="gridSize">
          <div className="height">
            <p>Grid Height</p>
            <div className="value">
              <input onChange={InputHeightValue} type="range" min={0} max={maxGridHight} value={heightValue}></input>
              <h2>{heightValue}</h2>
            </div>
          </div>
          <div className="width">
            <p>Grid Width</p>
            <div className="value">
              <input onChange={InputWidthValue} type="range" min={0} max={maxGridWidth} value={widthValue}></input>
              <h2>{widthValue}</h2>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div onClick={MakeGrid} className="createDelite">
            <p className='firstP'>Create Grid</p>
          </div>
          <div onClick={DeleteGrid} className="createDelite">
            <p className='secondP'>Delete Grid</p>
          </div>
            <input className='changeColor' type="color"
             onChange={handleColor} style={{background: borderColor}}></input>
          <div onClick={Erase} className="erasePaint">
            <p>Erase</p>
          </div>
          <div className="gridSizeSettinds">
            <p>Grid Size</p>
            <input onChange={ChangeGridSize} className='gridSizeValue'></input>
          </div>
        </div>
        <div className='gridContainer'
         onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
          <div className='grid2-wrapper'>
          {items}
          </div>
        </div>
        <h1 className='warning1' style={{display: warning1}}>value must be more than 9</h1>
        <h1 className='warning2' style={{display: warning2}}>value must be smaller than 17</h1>
      </div>
    </div>
  );
}

export default App
