import { render, screen, fireEvent } from '@testing-library/react';
import { Task } from './index';
import { describe, it, expect, vi } from 'vitest';

describe('Task Component', () => {
  const mockTask = {
    id: '1',
    title: 'Test Task',
    isCompleted: false
  };

  it('renders task correctly', () => {
    render(<Task 
      task={mockTask}
      onComplete={() => {}}
      onDelete={() => {}}
    />);
    
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('calls onComplete when check button is clicked', () => {
    const mockOnComplete = vi.fn();
    render(<Task 
      task={mockTask}
      onComplete={mockOnComplete}
      onDelete={() => {}}
    />);
    
    const checkButton = screen.getByRole('button', { name: '' });
    fireEvent.click(checkButton);
    
    expect(mockOnComplete).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when delete button is clicked', () => {
    const mockOnDelete = vi.fn();
    render(<Task 
      task={mockTask}
      onComplete={() => {}}
      onDelete={mockOnDelete}
    />);
    
    const deleteButton = screen.getAllByRole('button')[1];
    fireEvent.click(deleteButton);
    
    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });

  it('renders completed task with appropriate styling', () => {
    const completedTask = {
      ...mockTask,
      isCompleted: true
    };
    
    render(<Task 
      task={completedTask}
      onComplete={() => {}}
      onDelete={() => {}}
    />);
    
    expect(screen.getByText('Test Task').className).toContain('taskCompleted');
  });
});