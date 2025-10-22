import React from 'react';
import { render, screen } from '@testing-library/react';
import { AssessmentProvider } from '@/context/AssessmentContext';
import Header from '../Header';

const renderWithProvider = (component: React.ReactElement) => {
  return render(
    <AssessmentProvider>
      {component}
    </AssessmentProvider>
  );
};

describe('Header', () => {
  it('renders the header with title', () => {
    renderWithProvider(<Header />);
    expect(screen.getByText('Cybersecurity Assessment Tool')).toBeInTheDocument();
  });

  it('renders input fields for client information', () => {
    renderWithProvider(<Header />);
    expect(screen.getByPlaceholderText('Enter client name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter assessor name')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument(); // Date input
  });

  it('displays security score', () => {
    renderWithProvider(<Header />);
    expect(screen.getByText(/Security Score/)).toBeInTheDocument();
  });
});
