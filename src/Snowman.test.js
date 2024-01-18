import {render, fireEvent} from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGES from "./_testCommon";
import React, {useState} from "react";


test("renders without crashing", function () {
  render(<Snowman />);
})

test("if game properly ends when losing", function (){


  const testWord = "apple"

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

  // Expect the buttons to no longer appear on page
  expect(
    container.querySelector('.Snowman button')
  ).not.toBeInTheDocument();

  // Expect to see the last snowman image on page
  expect(
    container.querySelector('img[alt="testing image 6"]')
  ).toBeInTheDocument();

  // Expect to see the end game message
  expect(
    container.querySelector('.end-game-message')
  ).toHaveTextContent('You lose');

  // Expect to see the target word
  expect(
    container.querySelector('.end-game-message')
  ).toHaveTextContent('apple');

});
