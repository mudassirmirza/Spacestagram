import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Card from "./Card";

test("loads a Card component", () => {
  const cardItem = {
    date: "2022-01-09",
    explanation:
      "What will become of Jupiter's Great Red Spot?  Gas giant Jupiter is the solar system's largest world with about 320 times the mass of planet Earth. Jupiter is home to one of the largest and longest lasting storm systems known, the Great Red Spot (GRS), visible to the left. The GRS is so large it could swallow Earth, although it has been shrinking.  Comparison with historical notes indicate that the storm spans only about one third of the exposed surface area it had 150 years ago. NASA's Outer Planets Atmospheres Legacy (OPAL) program has been monitoring the storm more recently using the Hubble Space Telescope. The featured Hubble OPAL image shows Jupiter as it appeared in 2016, processed in a way that makes red hues appear quite vibrant. Modern GRS data indicate that the storm continues to constrict its surface area, but is also becoming slightly taller, vertically.  No one knows the future of the GRS, including the possibility that if the shrinking trend continues, the GRS might one day even do what smaller spots on Jupiter have done -- disappear completely.    Tuesday over Zoom: APOD editor to present the Best APOD Space Images of 2021",
    hdurl:
      "https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_1880.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Hubble's Jupiter and the Shrinking Great Red Spot",
    url: "https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_960.jpg",
  };

  render(<Card givenObject={cardItem} />);
  expect(
    screen.getByText("Jupiter and the", { exact: false })
  ).toBeInTheDocument();
});

test("sets images to full screen", () => {
  const cardItem = {
    date: "2022-01-09",
    explanation:
      "What will become of Jupiter's Great Red Spot?  Gas giant Jupiter is the solar system's largest world with about 320 times the mass of planet Earth. Jupiter is home to one of the largest and longest lasting storm systems known, the Great Red Spot (GRS), visible to the left. The GRS is so large it could swallow Earth, although it has been shrinking.  Comparison with historical notes indicate that the storm spans only about one third of the exposed surface area it had 150 years ago. NASA's Outer Planets Atmospheres Legacy (OPAL) program has been monitoring the storm more recently using the Hubble Space Telescope. The featured Hubble OPAL image shows Jupiter as it appeared in 2016, processed in a way that makes red hues appear quite vibrant. Modern GRS data indicate that the storm continues to constrict its surface area, but is also becoming slightly taller, vertically.  No one knows the future of the GRS, including the possibility that if the shrinking trend continues, the GRS might one day even do what smaller spots on Jupiter have done -- disappear completely.    Tuesday over Zoom: APOD editor to present the Best APOD Space Images of 2021",
    hdurl:
      "https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_1880.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Hubble's Jupiter and the Shrinking Great Red Spot",
    url: "https://apod.nasa.gov/apod/image/2201/JupiterOpal_HubbleMasztalerz_960.jpg",
  };
  render(<Card givenObject={cardItem} />);

  userEvent.click(screen.getByRole("img"));

  expect(screen.getByRole("img")).toHaveClass("card__image--clicked");
});
