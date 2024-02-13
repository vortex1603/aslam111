let arr = [ 
    { id: Math.random(), name: 'Timur', info: { school: '235', faculity: 'SMM' }, },
    { id: Math.random(), name: 'Imran', info: { school: 'ne izvestno', faculity: 'programming' }, },
    { id: Math.random(), name: 'Aminjon', info: { school: '444', faculity: 'Dizayn' }, }, 
    { id: Math.random(), name: 'Maxmud', info: { school: '777', faculity: '3dsmax' }, }, 
    { id: Math.random(), name: 'Muxammad', info: { school: '5555', faculity: 'Backend' }, },
    { id: Math.random(), name: 'Timur', info: { school: '235', faculity: 'SMM' }, },
    { id: Math.random(), name: 'Imran', info: { school: 'ne izvestno', faculity: 'programming' }, },
    { id: Math.random(), name: 'Aminjon', info: { school: '444', faculity: 'Dizayn' }, },
    { id: Math.random(), name: 'Maxmud', info: { school: '777', faculity: '3dsmax' }, }, ]
    const categories = {};
    
    for (let person of arr) {
        
        const faculty = person.info.faculity;
    
    
      if (!categories[faculty]) {
        categories[faculty] = 1;
      }
    
      else {
        categories[faculty]++;
      } 
    }
    
    
    for (let category in categories) {
      console.log(`${category},${categories[category]}`);
    }
    