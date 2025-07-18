import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value.toString();
    }),
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock crypto.randomUUID
vi.stubGlobal('crypto', {
  randomUUID: () => '123e4567-e89b-12d3-a456-426614174000'
});

describe('App Component', () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  it('renders header and empty task list', () => {
    render(<App />);
    
    expect(screen.getByPlaceholderText('Add a New Task')).toBeInTheDocument();
    expect(screen.getByText('You don\'t have tasks registered yet')).toBeInTheDocument();
  });

  it('adds a new task when form is submitted', () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText('Add a New Task');
    const button = screen.getByText('Create');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);
    
    expect(screen.getByText('New Task')).toBeInTheDocument();
    expect(localStorageMock.setItem).toHaveBeenCalled();
  });

  it('loads tasks from localStorage on mount', () => {
    const savedTasks = [
      { id: '1', title: 'Saved Task', isCompleted: false }
    ];
    
    localStorageMock.getItem.mockReturnValueOnce(JSON.stringify(savedTasks));
    
    render(<App />);
    
    expect(screen.getByText('Saved Task')).toBeInTheDocument();
    expect(localStorageMock.getItem).toHaveBeenCalledWith('todo:savedTasks');
  });
});