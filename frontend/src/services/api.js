const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const API = {
  // Authentication
  async login(email, password) {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Login failed');
    }
    
    return data;
  },
  
  async signup(userData) {
    const res = await fetch(`${API_URL}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Signup failed');
    }
    
    return data;
  },
  
  // User Profile
  async getProfile(token) {
    const res = await fetch(`${API_URL}/user/profile`, {
      headers: { 
        'Authorization': `Bearer ${token}` 
      }
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Failed to fetch profile');
    }
    
    return data;
  },
  
  // Tasks
  async getTasks(token) {
    const res = await fetch(`${API_URL}/tasks`, {
      headers: { 
        'Authorization': `Bearer ${token}` 
      }
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Failed to fetch tasks');
    }
    
    return data;
  },
  
  async createTask(token, task) {
    const res = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(task)
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Failed to create task');
    }
    
    return data;
  },
  
  async updateTask(token, id, task) {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(task)
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Failed to update task');
    }
    
    return data;
  },
  
  async deleteTask(token, id) {
    const res = await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE',
      headers: { 
        'Authorization': `Bearer ${token}` 
      }
    });
    
    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data.error || 'Failed to delete task');
    }
    
    return data;
  }
};