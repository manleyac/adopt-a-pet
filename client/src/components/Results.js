import React from "react";
import AnimalListItem from "./items/AnimalListItem.js";
import AnimalCard from "./items/AnimalCard.js";

const Results = (props) => {
  const listPlaceholder = "https://via.placeholder.com/100";
  if (props.animals) {
    if (!props.view) {
      return (
        <div className="container grid md:grid-cols-3 gap-4">
          {props.animals.map((animal) => (
            <AnimalCard
              name={animal.name}
              pic={animal.primary_photo_cropped.small}
              gender={animal.gender}
              age={animal.age}
              description={animal.description}
              contact={animal.contact}
              breeds={animal.breeds}
              link={animal.url}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="container flex flex-col justify-center items-center">
          {props.animals.map((animal) => (
            <AnimalListItem
              name={animal.name}
              link={animal.url}
              description={animal.description}
              pic={
                animal.photos[0].small
                  ? animal.photos[0].small
                  : listPlaceholder
              }
            />
          ))}
        </div>
      );
    }
  } else {
    return null;
  }
};

export default Results;
