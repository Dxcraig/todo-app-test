import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './index';
import { describe, it, expect, vi } from 'vitest';

describe('Header Component', () => {
  it('renders correctly', () => {
    const mockAddTask = vi.fn();
    render(<Header onAddTask={mockAddTask} />);
    
    expect(screen.getByPlaceholderText('Add a New Task')).toBeInTheDocument();
    expect(screen.getByText('Create')).toBeInTheDocument();
  });

  it('calls onAddTask when form is submitted with input', () => {
    const mockAddTask = vi.fn();
    render(<Header onAddTask={mockAddTask} />);
    
    const input = screen.getByPlaceholderText('Add a New Task');
    const button = screen.getByText('Create');
    
    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(button);
    
    expect(mockAddTask).toHaveBeenCalledWith('New Task');
    expect(input.value).toBe('');
  });

  it('does not call onAddTask when form is submitted with empty input', () => {
    const mockAddTask = vi.fn();
    render(<Header onAddTask={mockAddTask} />);
    
    const button = screen.getByText('Create');
    
    fireEvent.click(button);
    
    expect(mockAddTask).not.toHaveBeenCalled();
  });
});