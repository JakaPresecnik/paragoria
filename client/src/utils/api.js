export const retrieveTabs = async () => {
  const res = await fetch('/api/v1/tabs');
  try {
      const data = await res.json();
      return data;
  }catch(err) {
      console.log('Error: ', err);
  }
}

export const updateTabs = async (data) => {
  const res = await fetch ('/api/v1/tabs', {
    method: 'PUT',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  }catch(err) {
    console.log('Error: ', err);
  }
}

export const retrieveMerch = async () => {
    const res = await fetch('/api/v1/merch');
    try {
        const data = await res.json();
        return data.merchData;
    }catch(err) {
        console.log('Error: ', err);
    }
}

export const deleteMerch = async (data = {}) => {
    const res = await fetch ('/api/v1/merch', {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    try {
      const newData = await res.json();
      return newData;
    }catch(err) {
      console.log('Error: ', err);
    }
}

export const addMerch = async (data = {}) => {
  const res = await fetch ('/api/v1/merch', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  }catch(err) {
    console.log('Error: ', err);
  }
}

export const updateMerch = async (data = {}) => {
  const res = await fetch ('/api/v1/merch', {
    method: 'PUT',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  }catch(err) {
    console.log('Error: ', err);
  }
}

export const sendOrder = async (data = {}) => {
  const res = await fetch ('/api/v1/postorder', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}