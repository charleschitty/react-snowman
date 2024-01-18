import {render, fireEvent} from "@testing-library/react";
import Snowman from "./Snowman";
import TEST_IMAGES from "./_testCommon";



test("renders without crashing", function () {
  render(<Snowman />);
})

test("if game properly ends when losing", function (){

  nWrong = 5;




  const{ container } = render(
    <Snowman images={TEST_IMAGES} words={"apple"} maxWrong={TEST_IMAGES.length} />
  );

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
