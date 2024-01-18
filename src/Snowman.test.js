import {render, fireEvent} from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGES from "./_testCommon";


test("renders without crashing", function () {
  render(<Snowman />);
})

test("if game properly ends when losing", function (){


  const testWord = ["apple"];

  const{ container, debug } = render(
    <Snowman images={TEST_IMAGES} words={testWord} maxWrong={TEST_IMAGES.length} />
  );

  const zButton = container.querySelector('.Snowman button[value="z"]');
  fireEvent.click(zButton);

  const xButton = container.querySelector('.Snowman button[value="x"]');
  fireEvent.click(xButton);

  const gButton = container.querySelector('.Snowman button[value="g"]');
  fireEvent.click(gButton);

  const yButton = container.querySelector('.Snowman button[value="y"]');
  fireEvent.click(yButton);

  const kButton = container.querySelector('.Snowman button[value="k"]');
  fireEvent.click(kButton);

  const vButton = container.querySelector('.Snowman button[value="v"]');
  fireEvent.click(vButton);

  debug(container);

  // Expect the buttons to no longer appear on page
  expect(
    container.querySelector('.Snowman button')
  ).not.toBeInTheDocument();

  // Expect to see the last snowman image on page
  expect(
    container.querySelector('img[alt="6"]')
  ).toBeInTheDocument();

  // Expect to see the end game message
  expect(
    container.querySelector('.Snowman-end-message')
  ).toHaveTextContent('You lose');

  // Expect to see the target word
  expect(
    container.querySelector('.Snowman-end-message')
  ).toHaveTextContent('apple');

  expect(container).toMatchSnapshot();
});

test("restarts the game upon click", function () {
  const testWord = ["apple","orange"];

  //mock randomWord to output apple

  const{ container, debug } = render(
    <Snowman images={TEST_IMAGES} words={testWord} maxWrong={TEST_IMAGES.length} />
  );

  const aButton = container.querySelector('.Snowman button[value="a"]');
  fireEvent.click(aButton);

  // Expect the # of wrong guess to be 1 and for a to be in ...
  expect(
    container.querySelector('.Snowman button')
  ).not.toBeInTheDocument();

  // want to click button to restart
  // mock randomWord to output orange
  // check guesses wrong
  // test out o
  // or test out a


});