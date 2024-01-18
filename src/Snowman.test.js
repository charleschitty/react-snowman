import {render, fireEvent} from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGES from "./_testCommon";
import React, {useState} from "react";


test("renders without crashing", function () {
  render(<Snowman />);
})

test("if game properly ends when losing", function (){


  // const setNWrong = jest.fn();
  // jest
  //   .spyOn(React, 'useState')
  //   .mockImplementationOnce(initState => [initState, setNWrong]);
  const testWord = "apple"

  const{ container } = render(
    <Snowman images={TEST_IMAGES} words={testWord} maxWrong={TEST_IMAGES.length} />
  );


  const ltr = container.querySelector(`.Snowman.button ${ltr}`);
  for (let i=0; i< testWord.length; i++){
    fireEvent.click(ltr)
  };

  // Expect the buttons to no longer appear on page
  expect(
    container.querySelector('button')
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
