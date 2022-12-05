// import necessary react testing library helpers here
// import the Counter component here
import "@testing-library/react";
import * as React from "react";
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(parseInt(count.textContent, 10)).toBe(0);
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  var previous = parseInt(screen.getByTestId('count').textContent, 10);
  //TODE:: use the function incrreament in Counter
  fireEvent.click(screen.getByText('+'));
  expect(parseInt(screen.getByTestId('count').textContent, 10)).toBe(previous + 1);

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  var previous = parseInt(screen.getByTestId('count').textContent, 10);
  //TODE:: use the function decreament in Counter
  fireEvent.click(screen.getByText('-'));
  expect(parseInt(screen.getByTestId('count').textContent, 10)).toBe(previous - 1);
});
